
<script setup>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "../stores/user-store";
const $q = useQuasar();
const userStore = useUserStore();
const router = useRouter();
const email = ref('admin@admin.cl');
const password = ref('adminadmin');
const cargando = ref(true);

const handleSubmit = async () => {
  try {
    cargando.value = false;
    $q.loading.show();

    await userStore.access(email.value, password.value);

    email.value = "";
    password.value = "";
  } catch (error) {
    console.log("error", error);
    if (error.error) {
      alertDialogBackend(error.error);
    } else if (error.errors[0].msg) {
      alertDialogBackend(error.errors[0].msg);
    } else {
      alertDialogBackend();
    }
  } finally {
     $q.loading.hide();
     router.push("/");
    }
};
const alertDialogBackend = (message = "Error en el servidor") => {
  $q.dialog({
    title: "Error",
    message,
  });
};
</script>

<template>
  <q-page v-if="cargando" class="row justify-center" padding>
    <div class="col-12 col-sm-6 col-md-5">
      <h3>Login</h3>
      <q-form @submit.prevent="handleSubmit">
        <q-input
          v-model="email"
          label="Ingrese email"
          type="text"
          :rules="[
            (val) =>
              (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
              'Formato email incorrecto',
          ]"
        ></q-input>

        <q-input
          v-model="password"
          label="Ingrese contraseña"
          type="password"
          :rules="[
            (val) =>
              (val && val.length > 5) || 'Contraseña mínimo 6 carácteres',
          ]"
        ></q-input>

        <div>
          <q-btn label="Login" type="submit"></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>