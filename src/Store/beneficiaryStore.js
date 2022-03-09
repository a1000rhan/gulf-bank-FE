import { makeAutoObservable, configure } from "mobx";
import api from "./api";
import authStore from "./authStore";
configure({
  enforceActions: "never",
});
class BeneficiaryStore {
  beneficiary = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchBeneficiary = async () => {
    try {
      const response = await api.get("/beneficiary");

      this.beneficiary = response.data.filter(
        (beneficiary) => beneficiary.owner === authStore.user._id
      );

      this.beneficiary = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  addBeneficiary = async (newBeneficiary, setIsOpen) => {
    try {
      const response = await api.post("/beneficiary", newBeneficiary);

      this.beneficiary.push(response.data);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
}
let beneficiaryStore = new BeneficiaryStore();
beneficiaryStore.fetchBeneficiary();
export default beneficiaryStore;
