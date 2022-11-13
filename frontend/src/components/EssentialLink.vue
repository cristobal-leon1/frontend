<template>
  <q-item
    clickable
    tag="a"
    :to="link"
  >

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useUserStore } from '../stores/user-store'
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
    },
  }
})
</script>
