<template>
    <h3>Vendedores</h3>
    <q-btn v-if="userStore.token" to="/register">Registrar Vendedor</q-btn>
</template>

<script setup>
import {  ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useUserStore } from '../stores/user-store'
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();


</script>