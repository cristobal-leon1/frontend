<script setup>
import VendedoresCard from 'src/components/VendedoresCard.vue';
import { useUserStore } from '../stores/user-store'

const userStore = useUserStore();


</script>

<template>
    <q-page padding>
        <h3>Vendedores</h3>
        <q-btn v-if="userStore.token" to="/register" class="q-mr-sm">Registrar Vendedor</q-btn>
        <!--pre>
           {{ userStore.vendedores }}
        </pre> -->
        <template  v-for=" vendedor of userStore.vendedores "
                    :key="vendedor._id"> 
            <VendedoresCard :vendedor="vendedor"/>
        </template>
       
    </q-page>
    
</template>

