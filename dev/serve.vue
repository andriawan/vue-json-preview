<script lang="ts">
import Vue from "vue";
import VueJsonPreview from "@/vue-json-preview.vue";

export default Vue.extend({
  name: "ServeDev",
  data() {
    return {
      position: "BOTTOM_LEFT",
      data: {},
    };
  },
  methods: {
    setPosition(position: string) {
      this.position = position;
      this.data = position;
    },
    loadDataFromInternet(): void {
      this.data = "Processing...";
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => (this.data = json));
    },
  },
  components: {
    VueJsonPreview,
  },
});
</script>

<template>
  <div id="app">
    <vue-json-preview :data="data" :position="position" />
    <button @click="setPosition('BOTTOM_LEFT')">BOTTOM LEFT</button>
    <button @click="setPosition('BOTTOM_RIGHT')">BOTTOM RIGHT</button>
    <button @click="setPosition('TOP_LEFT')">TOP LEFT</button>
    <button @click="setPosition('TOP_RIGHT')">TOP RIGHT</button>
    <button @click="loadDataFromInternet">LOAD DATA FROM INTERNET</button>
  </div>
</template>
