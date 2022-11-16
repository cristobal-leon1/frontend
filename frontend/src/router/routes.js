
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') , meta: {auth: true}},
      { path: 'login', component: () => import('pages/LoginPage.vue')},
      { path: "register", component: () => import("pages/RegisterPage.vue"), meta: {auth: true} },
      { path: "vendedores", component: () => import("pages/VendedoresPage.vue") , meta: {auth: true}},
      { path: "productos", component: () => import("pages/ProductosPage.vue"), meta: {auth: true} },
      { path: "ventas", component: () => import("pages/VentasPage.vue") , meta: {auth: true}},
      { path: "agregarcotizacion", component: () => import("pages/AgregarCotizacionPage.vue") , meta: {auth: true}},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
