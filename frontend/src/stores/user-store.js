import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  
  const token = ref(null);
  const expiresIn = ref(null);
  const vendedores = ref([]);
  const correoVendedor = ref(null);

  const loading = ref(true);

  const access = async (email, password) => {
    
    try {
      const res = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      correoVendedor.value = email;
      sessionStorage.setItem("user", "🔥🔥");
      setTime();
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    } finally {
      loading.value = false;
    }
  };

  const register = async (email, nombre, password, repassword) => {
    try {

      const res = await api.post("/auth/register", {
        email: email,
        nombre: nombre,
        password: password,
        repassword: repassword,
      });
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      sessionStorage.setItem("user", "🔥🔥");
      setTime();
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        throw error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
 
      await api.get("/auth/logout");

    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
      resetStore();
      sessionStorage.removeItem("user");
    }
  };

  const setTime = () => {
    setTimeout(() => {

      refreshToken();
    }, expiresIn.value * 1000 - 6000);
  };

  const refreshToken = async () => {
    console.log("RefreshToken");
    try {
      const res = await api.get("/auth/refresh");
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      sessionStorage.setItem("user", "PAYASO CREES QUE ME ROBARÁS??!");
      setTime();
    } catch (error) {
      console.log(error);
      sessionStorage.removeItem("user");
    }
  };

  const resetStore = () => {
    token.value = null;
    expiresIn.value = null;
  };

  const getVendedores = async() => {
    
    try {

      const res2 = await api.get("/auth/refresh");
      token.value = res2.data.token;
      
      

      const res = await api({
        url: "/auth/protected",
        method: "GET",
        headers: {
          Authorization: "Bearer " + token.value,
        },
      });
      //links.value = res.data.links.map((nombre) => nombre);
      vendedores.value = [...res.data.vendedores];


    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
        loading.value = false;
     }
  };

  getVendedores();

  return {
    token,
    expiresIn,
    access,
    refreshToken,
    logout,
    register,
    vendedores,
    correoVendedor
  };
});