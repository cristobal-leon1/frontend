<template>
  <!--<LoadingSpinner ></LoadingSpinner>-->
  <q-page padding>
    <h3>Cotizaciones</h3>
    <q-btn to="/agregarcotizacion">Crear Cotizacion</q-btn>
    
    <!--<pre>
      {{ cotizacionStore.cotizaciones }}
    </pre>-->
    
    <template v-for=" cotizacion of cotizacionStore.cotizaciones "
    :key="cotizacion._id"
    >
      <CotizacionCard v-if="cotizacion.estado==='procesando'" :cotizacion="cotizacion"/>
    </template>

    
  </q-page>
</template>

<script setup>


import CotizacionCard from 'src/components/CotizacionCard.vue';
import { useCotizacionStore } from '../stores/cotizacion-store'


const cotizacionStore = useCotizacionStore();

//userStore.refreshToken();
/*
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
*/
</script>
