<script setup>
import { ref } from "vue";
import { useCotizacionStore } from "src/stores/cotizacion-store";
import { useNotify } from "../componsables/notifyHook";
const useCotizacion = useCotizacionStore();
const { showNotify } = useNotify();
const formAdd = ref(null);

//CAMPOS
const meb = ref("");
const cliente = ref("");
const solicitante = ref("");
const email = ref("");
const fono = ref("");
const solicitud = ref("");
const marca = ref("");
const modelo = ref("");
const pn = ref("");
const qty = ref("");
const origen = ref("");
const iso = ref("");
const oc = ref("");
const order_confir = ref("");
const p_unitario_venta= ref("");
const p_total_venta = ref("");
const entregada = ref("");
const entregada1 = ref("");
const entregada2 = ref("");
const guiad = ref("");
const factura = ref("");
const num_credito = ref("");
const nva_factura = ref("");

const loading = ref(false);



const addCotizacion = async () => {
  try {
    loading.value = true;
    await useCotizacion.createCotizacion(meb.value, cliente.value, solicitante.value, email.value, fono.value, solicitud.value, marca.value, modelo.value, pn.value, qty.value, origen.value, iso.value, oc.value, order_confir.value, p_unitario_venta.value, p_total_venta.value, entregada.value, entregada1.value,  entregada2.value,  guiad.value, factura.value, num_credito.value, nva_factura.value);
    showNotify("Cotización agregado con éxito", "green");
    meb.value = "";
    cliente.value = "";
    solicitante.value = "";
    email.value= "";
    fono.value= "";
    solicitud.value= "";
    marca.value= "";
    modelo.value= "";
    pn.value= "";
    qty.value= "";
    origen.value= "";
    iso.value= "";
    oc.value= "";
    order_confir.value= "";
    p_unitario_venta.value= "";
    p_total_venta.value= "";
    entregada.value= "";
    entregada1.value= "";
    entregada2.value= "";
    guiad.value= "";
    factura.value= "";
    num_credito.value= ""; 
    nva_factura.value= "";
    formAdd.value.resetValidation();
  } catch (error) {
    console.log(error.errors);
    if (error.errors) {
      return error.errors.forEach((item) => {
        showNotify(item.msg);
      });
    }
    showNotify(error);
  } finally {
    loading.value = false;
  }
};

const ultimaCotizacion = (clientex) =>{


  let c = 0;
  for(c; c < useCotizacion.cotizaciones.length; c++){
    if(useCotizacion.cotizaciones[c].cliente == clientex) {
      console.log('hola')
      cliente.value = useCotizacion.cotizaciones[c].cliente;
      solicitante.value = useCotizacion.cotizaciones[c].solicitante;
      email.value= useCotizacion.cotizaciones[c].email;
      fono.value= useCotizacion.cotizaciones[c].fono;
      solicitud.value= useCotizacion.cotizaciones[c].solicitud;
      marca.value= useCotizacion.cotizaciones[c].marca;
      modelo.value= useCotizacion.cotizaciones[c].modelo;
      pn.value= useCotizacion.cotizaciones[c].pn;
      qty.value= useCotizacion.cotizaciones[c].qty;
      origen.value= useCotizacion.cotizaciones[c].origen;
      iso.value= useCotizacion.cotizaciones[c].iso;
      oc.value= useCotizacion.cotizaciones[c].oc;
      order_confir.value= useCotizacion.cotizaciones[c].order_confir;
      p_unitario_venta.value= useCotizacion.cotizaciones[c].p_unitario_venta;
      p_total_venta.value= useCotizacion.cotizaciones[c].p_total_venta;
      entregada.value= useCotizacion.cotizaciones[c].entregada;
      entregada1.value= useCotizacion.cotizaciones[c].entregada1;
      entregada2.value= useCotizacion.cotizaciones[c].entregada2;
      guiad.value= useCotizacion.cotizaciones[c].guiad;
      factura.value= useCotizacion.cotizaciones[c].factura;
      num_credito.value= useCotizacion.cotizaciones[c].num_credito; 
      nva_factura.value= useCotizacion.cotizaciones[c].nva_factura;
      break;
    }
    
    
  }

};

</script>

<template>
    <div class="q-pa-md">
            <q-btn-dropdown color="primary" label="Ver Clientes">
            <q-list v-for=" cliente of useCotizacion.clientes "
            :key="cliente">
                <q-item clickable v-close-popup @click="ultimaCotizacion(cliente)">
                <q-item-section >
                    <q-item-label>{{cliente}}</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
            </q-btn-dropdown>
        </div>
  <q-form @submit.prevent="addCotizacion" ref="formAdd">
    <!-- CAMPOS -->
  
    <q-input
      v-model="cliente"
      label="Ingrese Cliente aquí"

      lazy-rules
    >
    
      </q-input>

    <q-input
      v-model="meb"
      label="Ingrese MEB aquí"

      lazy-rules
    ></q-input>



    <q-input
      v-model="solicitante"
      label="Ingrese Solicitante aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="email"
      label="Ingrese Email aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="fono"
      label="Ingrese Fono aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="solicitud"
      label="Ingrese Solicitud aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="marca"
      label="Ingrese Marca aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="modelo"
      label="Ingrese Modelo aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="pn"
      label="Ingrese P/N aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="qty"
      label="Ingrese QTY aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="origen"
      label="Ingrese Origen aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="iso"
      label="Ingrese ISO aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="oc"
      label="Ingrese O/C aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="order_confir"
      label="Ingrese orden confirmada aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="p_unitario_venta"
      label="Ingrese Precio unitario venta aquí"

      lazy-rules
    ></q-input>

    <q-input
      v-model="p_total_venta"
      label="Ingrese Precio total venta aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="entregada"
      label="Ingrese Entregada aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="entregada1"
      label="Ingrese Entregada1 aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="entregada2"
      label="Ingrese Entregada2 aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="guiad"
      label="Ingrese Guia D aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="factura"
      label="Ingrese Factura aquí"
 
      lazy-rules
    ></q-input>

    <q-input
      v-model="num_credito"
      label="Ingrese Numero de credito aquí"
      
      lazy-rules
    ></q-input>

    <q-input
      v-model="nva_factura"
      label="Ingrese nva factura aquí"
      
      lazy-rules
    ></q-input>






    <!-- SUBMIT -->
    <q-btn
      class="q-mt-sm full-width"
      label="Agregar"
      color="primary"
      type="submit"
      :loading="loading"
    ></q-btn>
  </q-form>
</template>