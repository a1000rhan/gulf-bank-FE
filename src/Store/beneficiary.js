import { makeAutoObservable, configure } from "mobx";
import api from "./api";
configure({
  enforceActions: "never",
});
class AccountStore {
  beneficiary = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchBeneficiary = async () => {
    try {
      const response = await api.get("/beneficiary");
      this.beneficiary = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  addBeneficiary = async (newBeneficiary) => {
    try {
      const response = await api.post("/beneficiary", newBeneficiary);
      this.beneficiary.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
