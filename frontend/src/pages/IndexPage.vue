<template>
  <q-page padding>
    <q-btn @click="access">Ingresar</q-btn>
    <q-btn @click="access">Crear Cotizacion</q-btn>
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
  } catch(error) { 
    console.log(error) 
  }

  
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
