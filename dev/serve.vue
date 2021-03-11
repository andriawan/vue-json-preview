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
    <button @click="setPosition('BOTTOM_LEFT')">
      <span>BOTTOM LEFT</span>
    </button>
    <button @click="setPosition('BOTTOM_RIGHT')">
      <span>BOTTOM RIGHT</span>
    </button>
    <button @click="setPosition('TOP_LEFT')"><span>TOP LEFT</span></button>
    <button @click="setPosition('TOP_RIGHT')"><span>TOP RIGHT</span></button>
    <button @click="loadDataFromInternet">
      <span>LOAD DATA FROM INTERNET</span>
    </button>
  </div>
</template>
<style scoped>
#app {
  width: 100%;
}

#app span {
  padding-right: 15px;
  padding-left: 15px;
}

#app button {
  cursor: pointer;
  margin-right: 10px;
  padding: 8px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 5px;
}

#app button:hover {
  background-color: rgb(4, 4, 150);
}
</style>
