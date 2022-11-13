<template>
    <q-page padding>
        <h3>Vendedores</h3>
        <q-btn v-if="userStore.token" to="/register" class="q-mr-sm">Registrar Vendedor</q-btn>
    
    </q-page>
    
</template>

<script setup>
import {  ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useUserStore } from '../stores/user-store'
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();


</script>