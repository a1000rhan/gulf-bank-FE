import { makeAutoObservable, configure } from "mobx";
import authStore from "./authStore";
import api from "./api";
import beneficiaryStore from "./beneficiaryStore";

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

      this.accounts = response.data.filter((acc) => {
        return authStore.user._id === acc.owner._id;
      });

      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  addAccount = async (newAccount, setIsOpen) => {
    try {
      const response = await api.post("/accounts", newAccount);
      this.accounts.push(response.data);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
}
let accountStore = new AccountStore();
accountStore.fetchAccounts();
export default accountStore;
