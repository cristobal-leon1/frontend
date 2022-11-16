<template>
    
    <q-page padding>
    <h3>Ventas</h3>
    
    <!--<pre>
      {{ cotizacionStore.cotizaciones }}
    </pre>-->
    
    <template v-for=" cotizacion of cotizacionStore.cotizaciones "
    :key="cotizacion._id"
    >
      <VentaCard v-if="cotizacion.estado==='concretada'" :cotizacion="cotizacion"/>
    </template>

    
  </q-page>
</template>

<script setup>
import VentaCard from 'src/components/VentaCard.vue';
import { useCotizacionStore } from '../stores/cotizacion-store'

const cotizacionStore = useCotizacionStore();
</script>