<template>
    
    <q-page padding>
        <h3>Clientes</h3>
        <template v-for=" cotizacion of cotizacionStore.cotizaciones "
            :key="cotizacion.cliente"
            >
            <ClientesCard :cotizacion="cotizacion"/>
        </template>
    
     </q-page>
</template>

<script setup>
import ClientesCard from 'src/components/ClientesCard.vue';
import { useCotizacionStore } from '../stores/cotizacion-store'

const cotizacionStore = useCotizacionStore();

</script>