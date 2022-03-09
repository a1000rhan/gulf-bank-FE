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
  addBeneficiary = async (newBeneficiary, Swal, setIsOpen) => {
    try {
      const response = await api.post("/beneficiary", newBeneficiary);

      this.beneficiary.push(response.data);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Beneficiary has been Added Successfully ",
        showConfirmButton: false,
        timer: 3000,
      });
      setIsOpen(false);
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Adding Beneficiary has been Denied ",
        showConfirmButton: false,
        timer: 3000,
      });
      console.log(error);
    }
  };
}
let beneficiaryStore = new BeneficiaryStore();
beneficiaryStore.fetchBeneficiary();
export default beneficiaryStore;
