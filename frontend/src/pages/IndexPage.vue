<template>
  <q-page padding>
    <!--<q-btn @click="userStore.access">Ingresar</q-btn>
    <q-btn @click="userStore.logout">Cerrar sesion</q-btn>-->
    <q-btn @click="createCotizacion">Crear Cotizacion</q-btn>
    {{userStore.token}} - {{userStore.expiresIn}}
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useUserStore} from '../stores/user-store'

const userStore = useUserStore();

//userStore.refreshToken();

const createCotizacion = async() => {
  try {
    const res = await api({
      method: 'POST',
      url: '/cotizaciones',
      headers: {
        'Authorization': 'Bearer ' + token.value
      },
      data: {
        meb: "2800",
        cliente: "Los Pelambres",
        solicitante: "Leonid Carrizo",
        solicitud: "6010112201",
        marca: "IMO",
        modelo:"D4 070N2 LVBE",
        pn: "188334",
        qty: "1",
        origen: "Alemania",
        iso: "2022002",
        o: "4503315259",
        order_confir: "IM  1936761",
        p_unitario_venta: "15863",
        p_total_venta: "15863",
        entregada: "19/5/2022",
        guiad: "2663",
        factura: "2964"
      }
    });
    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}

</script>
