import { makeAutoObservable, configure } from "mobx";
import accountStore from "./accountStore";

import api from "./api";
import authStore from "./authStore";
configure({
  enforceActions: "never",
});
class TransactionStore {
  transaction = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchTransactions = async () => {
    try {
      const response = await api.get("/transaction");
      this.transaction = response.data.filter(
        (transaction) => transaction.owner === authStore.user._id && transaction
      );
      console.log(this.transaction);
    } catch (error) {
      console.log(error);
    }
  };
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
      this.fetchTransactions();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Sending to Beneficiary done Successfully ",
        showConfirmButton: false,
        timer: 3000,
      });
      setIsOpen(false);
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
transactionStore.fetchTransactions();
export default transactionStore;
