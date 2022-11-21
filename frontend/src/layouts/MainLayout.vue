<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
        v-if="userStore.token"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Sogeco S.A.
        </q-toolbar-title>
        <!--<q-btn v-if="!userStore.token" color="green" @click="accessUser">Ingresar</q-btn>-->
        
        
        <q-btn v-if="userStore.token" color="red" @click="logout">Cerrar sesión</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-if="userStore.token"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {  ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useUserStore } from '../stores/user-store'
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();

const leftDrawerOpen = ref(false)
const essentialLinks = [
  {
    title: 'Cotizaciones',
    link: '/'
  },
  {
    title: 'Clientes',
    link: '/clientes'
  },
  {
    title: 'Vendedores',
    link: '/vendedores'
  },
  {
    title: 'Ventas',
    link: '/ventas'
  },
]

const redirectt = (link) => {
  router.push(link)
}



const logout = () => {
  userStore.logout()
  router.push('/login')
}

const accessUser = async() => {
  await userStore.access();
  router.push('/')
}



function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }


 


</script>
