<script setup>



defineProps({
    vendedor: Object
})

</script>

<template>


<div class="q-pa-md row items-start q-gutter-md">
   



   <q-card flat bordered class="my-card bg-grey-1">
     <q-card-section>
       <div class="row items-center no-wrap">
         <div class="col">
           <div class="text-h6">{{vendedor.nombre}}</div>
           <div class="text-subtitle2">  {{vendedor.email}}  </div>
         </div>

         <div class="col-auto">
          <!--
           <q-btn color="grey-7" round flat icon="more_vert">
             <q-menu cover auto-close>
               <q-list>
                
                 <q-item clickable>
                   <q-item-section>Eliminar vendedor</q-item-section>
                 </q-item>
                 
                 <q-item clickable>
                   <q-item-section>Editar vendedor</q-item-section>
                 </q-item>
                 
               </q-list>
             </q-menu>
           </q-btn>
           -->
         </div>
       </div>
     </q-card-section>

     <q-card-section>
      
     </q-card-section>

     <q-separator />
     <!--
     <q-card-actions>
       <q-btn flat>Ver Comisiones</q-btn>
     </q-card-actions>
     -->
   </q-card>
</div>
</template>