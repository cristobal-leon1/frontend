
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') , meta: {auth: true}},
      { path: 'protected', component: () => import('src/pages/Vendedores.vue'), meta: {auth: true} },
      { path: 'login', component: () => import('pages/LoginPage.vue')},
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      { path: "vendedores", component: () => import("pages/VendedoresPage.vue") },
      { path: "productos", component: () => import("pages/ProductosPage.vue") },
      { path: "Ventas", component: () => import("pages/VentasPage.vue") },
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
