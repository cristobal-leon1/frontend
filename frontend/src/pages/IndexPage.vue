<template>
  <q-page padding>
    <h3>Cotizaciones</h3>
    <q-btn to="/agregarcotizacion">Crear Cotizacion</q-btn>
    
    <pre>
      {{ cotizacionStore.cotizaciones }}
    </pre>
    <div class="q-pa-md row items-start q-gutter-md">
   



    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">CLIENTE COTIZACION</div>
            <div class="text-subtitle2">  dato  </div>
            <div class="text-subtitle2">  dato  </div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Eliminar cotización</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Editar Cotización</q-item-section>
                  </q-item>
                  
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat>Marcar como vendida</q-btn>
      </q-card-actions>
    </q-card>
  </div>
    
  </q-page>
</template>

<script setup>


import { useCotizacionStore } from '../stores/cotizacion-store'

const cotizacionStore = useCotizacionStore();

//userStore.refreshToken();
/*
const createCotizacion = async() => {
  try {
    const res = await api({
      method: 'POST',
      url: '/cotizaciones',
      headers: {
        'Authorization': 'Bearer ' + token.value
      },
      data: {
        meb: "2800",
        cliente: "Los Pelambres",
        solicitante: "Leonid Carrizo",
        solicitud: "6010112201",
        marca: "IMO",
        modelo:"D4 070N2 LVBE",
        pn: "188334",
        qty: "1",
        origen: "Alemania",
        iso: "2022002",
        o: "4503315259",
        order_confir: "IM  1936761",
        p_unitario_venta: "15863",
        p_total_venta: "15863",
        entregada: "19/5/2022",
        guiad: "2663",
        factura: "2964"
      }
    });
    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}
*/
</script>
