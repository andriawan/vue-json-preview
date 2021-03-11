<script lang="ts">
import Vue from 'vue';
import VueJsonPreview from '@/vue-json-preview.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueJsonPreview
  }
});
</script>

<template>
  <div id="app">
    <vue-json-preview />
  </div>
</template>
