<template>
    
    <q-page padding>
        <h3>Clientes</h3>

        <h4>Ver Historial de Clientes</h4>


        <div class="q-pa-md">
            <q-btn-dropdown color="primary" label="Ver Clientes">
            <q-list v-for=" cliente of cotizacionStore.clientes "
            :key="cliente">
                <q-item clickable v-close-popup @click="MostrarHistorial(cliente)">
                <q-item-section >
                    <q-item-label>{{cliente}}</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
            </q-btn-dropdown>
        </div>
        <!--
        <template v-for=" cliente of cotizacionStore.clientes "
            :key="cliente"
            >
            <HistorialCard :cliente=cliente></HistorialCard>
        </template>
    -->
        <HistorialCard :cliente=clienteActual></HistorialCard>

     </q-page>
</template>

<script setup>
import HistorialCard from 'src/components/HistorialCard.vue';
import { useCotizacionStore } from '../stores/cotizacion-store'
import { ref } from "vue";

const cotizacionStore = useCotizacionStore();
const clienteActual = ref('');

const MostrarHistorial = (cliente) => {
    clienteActual.value = cliente; 
}
</script>