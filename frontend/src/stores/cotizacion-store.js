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
        url: `/cotizaciones/${meb}`,
        headers: {
          'Authorization': 'Bearer ' + userStore.token
        },
      });
      cotizaciones.value = cotizaciones.value.filter((item) => item.meb !== meb)
      
    } catch (error) {
      throw error.response?.data || error;
    } finally {
     // $q.loading.hide();
    }
  }

  const venderCotizacion = async (meb) => {
    try {
      //$q.loading.show();
      console.log("vendiendo cotizacion 🎉");
      const res = await api({
        url: `/cotizaciones/${meb}`,
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + userStore.token,
        },
        data: { estado: "concretada" }
      });
      //cotizaciones.value = cotizaciones.value.filter((item) => item.meb !== meb)
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      //$q.loading.hide();
    }
  };

  const variable = '';

  const editarCotizacion = async (meb, varCambio, cambio) => {
    if(varCambio == 'cliente') { try {
      //$q.loading.show();
      console.log("editando cotizacion 🎉");
      const res = await api({
        url: `/cotizaciones/${meb}`,
        method: "PATCH",
        data: {
          cliente: cambio
        },
        headers: {
          Authorization: "Bearer " + userStore.token,
        },

      });
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      //$q.loading.hide();
    } }

    if(varCambio == 'solicitante') { try {
      //$q.loading.show();
      console.log("editando cotizacion 🎉");
      const res = await api({
        url: `/cotizaciones/${meb}`,
        method: "PATCH",
        data: {
          solicitante: cambio
        },
        headers: {
          Authorization: "Bearer " + userStore.token,
        },

      });
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      //$q.loading.hide();
    } }

    if(varCambio == 'email') { try {
      //$q.loading.show();
      console.log("editando cotizacion 🎉");
      const res = await api({
        url: `/cotizaciones/${meb}`,
        method: "PATCH",
        data: {
          email: cambio
        },
        headers: {
          Authorization: "Bearer " + userStore.token,
        },

      });
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      //$q.loading.hide();
    } }

    if(varCambio == 'fono') { try {
      //$q.loading.show();
      console.log("editando cotizacion 🎉");
      const res = await api({
        url: `/cotizaciones/${meb}`,
        method: "PATCH",
        data: {
          fono: cambio
        },
        headers: {
          Authorization: "Bearer " + userStore.token,
        },

      });
    } catch (error) {
      console.log(error.response?.data || error);
    } finally {
      //$q.loading.hide();
    } }
    
 

  if(varCambio == 'fecha') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        fecha: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'solicitud') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        solicitud: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'marca') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        marca: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'modelo') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        modelo: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'pn') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        pn: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'qty') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        qty: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'origen') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        origen: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'iso') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        iso: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'oc') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        oc: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'order_confir') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        order_confir: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'p_unitario_venta') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        p_unitario_venta: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'p_total_venta') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        p_total_venta: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'entregada') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        entregada: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'entregada1') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        entregada1: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'entregada2') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        entregada2: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'guiad') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        guiad: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'factura') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        factura: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'num_credito') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        num_credito: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

  if(varCambio == 'nva_factura') { 
    try {
    //$q.loading.show();
    console.log("editando cotizacion 🎉");
    const res = await api({
      url: `/cotizaciones/${meb}`,
      method: "PATCH",
      data: {
        nva_factura: cambio
      },
      headers: {
        Authorization: "Bearer " + userStore.token,
      },

    });
  } catch (error) {
    console.log(error.response?.data || error);
  } finally {
    //$q.loading.hide();
  } }

};

  return {
    createCotizacion,
    cotizaciones,
    removeCotizacion,
    venderCotizacion,
    editarCotizacion
  };
});