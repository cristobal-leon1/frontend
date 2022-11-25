<script setup>

import { useQuasar } from 'quasar'
import { useCotizacionStore } from "src/stores/cotizacion-store";
import { useNotify } from "../componsables/notifyHook";
import {ref } from 'vue'
const useCotizacion = useCotizacionStore();
const { errorNotify, successNotify } = useNotify();
const $q = useQuasar();
const loading = ref(false);

const borrarCotizacion = async (meb) => {
  $q.dialog({
        title: 'Confirmar',
        message: '¿Quieres eliminar la venta?',
        cancel: true,
        persistent: true
      }).onOk(async() => {
        try {
          await useCotizacion.removeCotizacion(meb)
          successNotify("Se eliminó la cotización");
        } catch (error) {
          if (error.errors) {
            return error.errors.forEach((item) => {
              errorNotify(item.msg);
            });
          }
          errorNotify(error);
        }
      });
  
};

const editarCotizacion = async(meb, varCambio, cambio) => {
  loading.value = true;
  console.log(varCambio)
  $q.dialog({
        title: 'Modificar',
        message: `Editar aqui ${varCambio}`,
        prompt: {
          model: cambio,
          type: 'text' // optional
        },
        
        cancel: true,
        persistent: true
      },
      ).onOk(async(data) => {
        try {

          await useCotizacion.editarCotizacion(meb, varCambio, data) 
          successNotify("Se actualizó con exito");
        } catch (error) {
          if (error.errors) {
            return error.errors.forEach((item) => {
              errorNotify(item.msg);
            });
          }
          errorNotify(error);
        }
      });
};



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
           <div class="text-h5">{{ cotizacion.cliente}} 
            <q-btn color="grey-7" round flat icon="more_vert">
             <q-menu cover auto-close>
               <q-list>
                 <q-item clickable>
                   <q-item-section @click="borrarCotizacion(cotizacion.meb)">Eliminar Venta</q-item-section>
                 </q-item>
               </q-list>
             </q-menu>
             
           </q-btn></div>
           <div class="text-h6">
            Marca: {{cotizacion.marca}}
            </div>
            <div class="text-h6">
            Modelo: {{cotizacion.modelo}}
            </div>
            <div class="text-h6">
              Origen: {{cotizacion.origen}}
            </div>
            
           <q-card-section>
       
      </q-card-section>
           
      <q-expansion-item
        v-model="expanded"
        label="VER MAS"
      >
        <q-card>
          <q-card-section>
            <q-list bordered separator>
              <q-item  v-ripple>
                <q-item-section >MEB: {{cotizacion.meb}}</q-item-section>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Cliente: {{cotizacion.cliente}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'cliente', cotizacion.cliente)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Solicitante: {{cotizacion.solicitante}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'solicitante', cotizacion.solicitante)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Email: {{cotizacion.email}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'email',cotizacion.email)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Fono: {{cotizacion.fono}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'fono', cotizacion.fono)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Fecha: {{cotizacion.fecha}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'fecha', cotizacion.fecha)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Solicitud: {{cotizacion.solicitud}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'solicitud',cotizacion.solicitud)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Marca: {{cotizacion.marca}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'marca', cotizacion.marca)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Modelo: {{cotizacion.modelo}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'modelo', cotizacion.modelo)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >P/N: {{cotizacion.pn}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'pn', cotizacion.pn)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Qty.: {{cotizacion.qty}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'qty', cotizacion.qty)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Origen: {{cotizacion.origen}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'origen', cotizacion.origen)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >ISO: {{cotizacion.iso}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'iso', cotizacion.iso)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >O/C: {{cotizacion.oc}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'oc', cotizacion.oc)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Orden Confirmada: {{cotizacion.order_confir}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'order_confir', cotizacion.order_confir)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Precio Unitario Venta (US $): {{cotizacion.p_unitario_venta}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'p_unitario_venta', cotizacion.p_unitario_venta)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Precio Total Venta (US $): {{cotizacion.p_total_venta}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'p_total_venta', cotizacion.p_total_venta)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Entregada: {{cotizacion.entregada}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'entregada', cotizacion.entregada)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Entregada-1: {{cotizacion.entregada1}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'entregada1', cotizacion.entregada1)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Entregada-2: {{cotizacion.entregada2}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'entregada2',cotizacion.entregada2)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Guia D: {{cotizacion.guiad}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'guiad', cotizacion.guiad)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Factura: {{cotizacion.factura}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'factura', cotizacion.factura)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Numero Credito: {{cotizacion.num_credito}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'num_credito', cotizacion.num_credito)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

              <q-item  v-ripple>
                <q-item-section >Nueva Factura: {{cotizacion.nva_factura}}</q-item-section>
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section @click="editarCotizacion(cotizacion.meb, 'nva_factura', cotizacion.nva_factura)">Editar</q-item-section>
                      </q-item>
                      
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>

            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>



         </div>

         
       </div>
     </q-card-section>

     <q-card-section>
       
     </q-card-section>

     <q-separator />


   </q-card>
</div>
</template>