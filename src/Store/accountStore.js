import { makeAutoObservable, configure } from "mobx";
import authStore from "./authStore";
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
      this.accounts = response.data.filter(
        (account) => account.owner._id === authStore.user._id
      );

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
let accountStore = new AccountStore();
accountStore.fetchAccounts();
export default accountStore;
