<script setup>
import ClientesCard from 'src/components/ClientesCard.vue';
import { useCotizacionStore } from '../stores/cotizacion-store'

const cotizacionStore = useCotizacionStore();


defineProps({
    cliente: String
})


</script>

<template>


<template v-for=" cotizacion of cotizacionStore.cotizaciones "
    :key="cotizacion.cliente"
    >
    
    <ClientesCard v-if="cotizacion.cliente===cliente" :cotizacion="cotizacion"/>
</template>
</template>