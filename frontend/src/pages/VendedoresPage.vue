<script setup>
import { useUserStore } from '../stores/user-store'

const userStore = useUserStore();




</script>

<template>
    <q-page padding>
        <h3>Vendedores</h3>
        <q-btn v-if="userStore.token" to="/register" class="q-mr-sm">Registrar Vendedor</q-btn>
        <pre>
            {{ userStore.vendedores }}
        </pre>
    </q-page>
    
</template>

