<script setup>

import { useCotizacionStore } from "src/stores/cotizacion-store";
import { useNotify } from "../componsables/notifyHook";
const useCotizacion = useCotizacionStore();
const { showNotify } = useNotify();

defineProps({
    cotizacion: Object
})

</script>

<template>


<div class="q-pa-md row items-start q-gutter-md">
   



   <q-card flat bordered class="my-card bg-grey-1">
     <q-card-section>
       <div class="row items-center no-wrap">
         <div class="col">
           <div class="text-h6">{{ cotizacion.cliente}} 
            <q-btn color="grey-7" round flat icon="more_vert">
             <q-menu cover auto-close>
               <q-list>
                 <q-item clickable>
                   <q-item-section >Eliminar cotización</q-item-section>
                 </q-item>
                 <q-item clickable>
                   <q-item-section>Editar Cotización</q-item-section>
                 </q-item>
                 
               </q-list>
             </q-menu>
           </q-btn></div>
          
           <q-card-section>
       
      </q-card-section>
           


          <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered separator>
              <q-item  v-ripple>
                <q-item-section >MEB: {{cotizacion.meb}}</q-item-section>
                
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Cliente: {{cotizacion.cliente}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Solicitante: {{cotizacion.solicitante}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Email: {{cotizacion.email}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Fono: {{cotizacion.fono}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Fecha: {{cotizacion.fecha}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Solicitud: {{cotizacion.solicitud}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Marca: {{cotizacion.marca}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Modelo: {{cotizacion.modelo}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >P/N: {{cotizacion.pn}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Qty.: {{cotizacion.qty}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Origen: {{cotizacion.origen}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >ISO: {{cotizacion.iso}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >O/C: {{cotizacion.oc}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Orden Confirmada: {{cotizacion.order_confir}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Precio Unitario Venta (US $): {{cotizacion.p_unitario_venta}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Precio Total Venta (US $): {{cotizacion.p_total_venta}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Entregada: {{cotizacion.entregada}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Entregada-1: {{cotizacion.entregada1}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Entregada-2: {{cotizacion.entregada2}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Guia D: {{cotizacion.guiad}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Factura: {{cotizacion.factura}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Numero Credito: {{cotizacion.num_credito}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Nueva Factura: {{cotizacion.nva_factura}}</q-item-section>
              </q-item>

            </q-list>
          </div>


         </div>

         
       </div>
     </q-card-section>

     <q-card-section>
       
     </q-card-section>

     <q-separator />

     <q-card-actions>
       <q-btn flat>Marcar como vendida</q-btn>
     </q-card-actions>
   </q-card>
</div>
</template>