import { makeAutoObservable, configure } from "mobx";
import api from "./api";
configure({
  enforceActions: "never",
});
class AccountStore {
  accounts = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchAccounts = async () => {
    try {
      const response = await api.get("/accounts");
      this.accounts = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  addAccount = async (newAccount) => {
    try {
      const response = await api.post("/accounts", newAccount);
      this.accounts.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
