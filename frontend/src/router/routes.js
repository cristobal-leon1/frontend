import { api } from "src/boot/axios";


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') , meta: {auth: true}},
      { path: 'login', component: () => import('pages/LoginPage.vue')},
      { path: "register", component: () => import("pages/RegisterPage.vue"), meta: {auth: true} },
      { path: "vendedores", component: () => import("pages/VendedoresPage.vue") , meta: {auth: true}},
      { path: "clientes", component: () => import("pages/ClientesPage.vue"), meta: {auth: true} },
      { path: "ventas", component: () => import("pages/VentasPage.vue") , meta: {auth: true}},
      { path: "agregarcotizacion", component: () => import("pages/AgregarCotizacionPage.vue") , meta: {auth: true}},
    ]
  },
  {
    path: "/404",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
