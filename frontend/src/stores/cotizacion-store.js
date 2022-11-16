import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";
import { useUserStore } from "./user-store";


export const useCotizacionStore = defineStore("cotizacion", () => {
  
  const userStore = useUserStore();

  const cotizaciones = ref([]);



  const createCotizacion = async(meb, cliente, solicitante, email, fono, solicitud, marca, modelo, pn, qty, origen, iso, oc, order_confir, p_unitario_venta, p_total_venta, entregada, entregada1,  entregada2,  guiad, factura, num_credito, nva_factura) => {
    try {
      //$q.loading.show();
      const res = await api({
        method: 'POST',
        url: '/cotizaciones',
        headers: {
          'Authorization': 'Bearer ' + userStore.token
        },
        data: {
          meb,
          cliente,
          solicitante,
          email,
          fono,
          solicitud,
          marca,
          modelo,
          pn,
          qty,
          origen,
          iso,
          oc,
          order_confir,
          p_unitario_venta,
          p_total_venta,
          entregada,
          entregada1,
          entregada2,
          guiad,
          factura,
          num_credito, 
          nva_factura
        }
      });
      cotizaciones.value.push(res.data.newCotizacion)
    } catch (error) {
      throw error.response?.data || error;
    } finally {
     // $q.loading.hide();
    }
  }

  const getCotizaciones = async () => {
    try {
      //$q.loading.show();
      console.log("llamando a todos las cotizaciones 🎉");
      const res = await api({
        url: "/cotizaciones",
        method: "GET",
        headers: {
          Authorization: "Bearer " + userStore.token,
        },
      });
      //   links.value = res.data.links.map((item) => item);
      cotizaciones.value = [...res.data.cotizaciones];
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      //$q.loading.hide();
    }
  };

  // por ahora tiene mejor rendimiento
  getCotizaciones();

  const removeCotizacion = async(meb) => {
    try {
      //$q.loading.show();
      const res = await api({
        method: 'DELETE',
        url: '/cotizaciones',
        headers: {
          'Authorization': 'Bearer ' + userStore.token
        },
        data: {
          meb,
        }
      });
    } catch (error) {
      throw error.response?.data || error;
    } finally {
     // $q.loading.hide();
    }
  }



  return {
    createCotizacion,
    cotizaciones,
    removeCotizacion
  };
});