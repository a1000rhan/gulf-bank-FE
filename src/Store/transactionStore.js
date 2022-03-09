import { makeAutoObservable, configure } from "mobx";
import accountStore from "./accountStore";

import api from "./api";
configure({
  enforceActions: "never",
});
class TransactionStore {
  transaction = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }

  addTransaction = async (newTransaction, currentAccountId, setIsOpen) => {
    console.log(
      "🚀 ~ file: transactionStore.js ~ line 15 ~ TransactionStore ~ addTransaction= ~ newTransaction",
      newTransaction
    );

    try {
      const response = await api.post(
        `/transaction/${currentAccountId}`,
        newTransaction
      );

      this.transaction.push(response.data);
      this.loading = false;
      accountStore.fetchAccounts();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
}
let transactionStore = new TransactionStore();

export default transactionStore;
