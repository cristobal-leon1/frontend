<template>
  <q-page padding>
    <q-btn @click="access">Ingresar</q-btn>
    <q-btn @click="createCotizacion">Crear Cotizacion</q-btn>
    {{token}} - {{expiresIn}}
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { ref } from 'vue';

const token = ref('');
const expiresIn = ref('');

const access = async () => {
  try {
    console.log('me diste click')
    const res = await api.post('/auth/login', {
      email: "    pr1sd23@admin.cl",
      password: "123asd13"
    })
    console.log(res.data);
    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
    setTime();
  } catch(error) { 
    console.log(error) 
  }

  
}

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

const setTime = () => {
  setTimeout(() => {
    refreshToken()
  }, expiresIn.value * 1000 - 6000)
}

const refreshToken = async() => {
  try {
    const res = await api.get('/auth/refresh');
    console.log(res.data);
    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
  } catch(error) {
    console.log(error)
  }

}
refreshToken();

</script>
