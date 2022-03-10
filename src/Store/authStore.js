import { makeAutoObservable, configure } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import beneficiaryStore from "./beneficiaryStore";
import accountStore from "./accountStore";
configure({
  enforceActions: "never",
});
class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = async (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signUp = async (newUser, Swal, setIsOpen) => {
    try {
      const formData = new FormData();
      for (const key in newUser) formData.append(key, newUser[key]);

      const response = await api.post("/signup", formData);

      this.setUser(response.data.token);
      accountStore.fetchAccounts();
      setIsOpen(false);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You have Successfully Signed Up",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Enter the right data",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  update = async (user) => {
    try {
      const response = await api.post("/update", user);
      this.user = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  signIn = async (user, Swal, setIsOpen) => {
    try {
      const response = await api.post("/signin", user);

      this.setUser(response.data.token);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Signed In Successfully ",
        showConfirmButton: false,
        timer: 3000,
      });
      accountStore.fetchAccounts();
      setIsOpen(false);
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Enter the right data",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  confirmPassword = async (user, setIsOpen, handleSubmit, event, Swal) => {
    try {
      const response = await api.post("/signin", user);
      console.log(
        "🚀 ~ file: authStore.js ~ line 26 ~ AuthStore ~ signIn= ~ response",
        response.data
      );
      this.setUser(response.data.token);
      handleSubmit(event);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Transaction Complete ",
        showConfirmButton: false,
        timer: 3000,
      });
      setIsOpen(false);
    } catch (error) {
      return false;
    }
  };

  logout = () => {
    this.user = null;
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); //time right now
      let user = decode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        alert("Logged out, session expired");
        this.logout();
      }
    } else {
      this.logout();
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
beneficiaryStore.fetchBeneficiary();

export default authStore;
