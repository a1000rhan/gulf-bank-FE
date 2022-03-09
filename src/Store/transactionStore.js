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

  addTransaction = async (
    newTransaction,
    currentAccountId,
    Swal,
    setIsOpen
  ) => {
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
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "The Transaction is Done",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Try Again!",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
}
let transactionStore = new TransactionStore();

export default transactionStore;
