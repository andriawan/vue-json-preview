<script lang="ts">
import Vue from "vue";

enum DISPLAY_TYPE {
  MAXIMIZE = "MAXIMIZE",
  MINIMIZE = "MINIMIZE",
}

enum DISPLAY_THEME_TYPE {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

enum POSITION {
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
}

interface Data {
  display: String;
  displayTheme: String;
}

export default /*#__PURE__*/ Vue.extend({
  name: "VueJsonPreview", // vue component name
  props: {
    data: {
      type: [Object, Array, String, Boolean],
      default: [],
    },
    position: {
      type: String,
      default: POSITION.BOTTOM_RIGHT,
    },
  },
  data(): Data {
    return {
      display: DISPLAY_TYPE.MAXIMIZE,
      displayTheme: DISPLAY_THEME_TYPE.DARK,
    };
  },
  computed: {
    class_theme(): Object {
      return {
        "display-theme-dark": this.displayTheme === DISPLAY_THEME_TYPE.DARK,
        "display-theme-light": this.displayTheme === DISPLAY_THEME_TYPE.LIGHT,
      };
    },
    object_theme(): Object {
      return {
        light: this.displayTheme === DISPLAY_THEME_TYPE.LIGHT,
        dark: this.displayTheme === DISPLAY_THEME_TYPE.DARK,
      };
    },
    viewer_theme(): Object {
      return {
        "viewer-light": this.displayTheme === DISPLAY_THEME_TYPE.LIGHT,
        "viewer-dark": this.displayTheme === DISPLAY_THEME_TYPE.DARK,
      };
    },
    label_display(): String {
      return this.display === DISPLAY_TYPE.MAXIMIZE ? "minimize" : "maximize";
    },
    label_display_theme(): String {
      return this.displayTheme === DISPLAY_THEME_TYPE.DARK ? "light" : "dark";
    },
    is_display_maximize(): Boolean {
      return this.display === DISPLAY_TYPE.MAXIMIZE;
    },
    position_style(): Object {
      return {
        "viewer-bottom-right": this.position === POSITION.BOTTOM_RIGHT,
        "viewer-bottom-left": this.position === POSITION.BOTTOM_LEFT,
        "viewer-top-right": this.position === POSITION.TOP_RIGHT,
        "viewer-top-left": this.position === POSITION.TOP_LEFT,
      };
    },
  },
  methods: {
    toggleDisplay() {
      if (this.display === DISPLAY_TYPE.MAXIMIZE) {
        this.display = DISPLAY_TYPE.MINIMIZE;
        return;
      }

      if (this.display === DISPLAY_TYPE.MINIMIZE) {
        this.display = DISPLAY_TYPE.MAXIMIZE;
        return;
      }
    },
    toggleTheme() {
      if (this.displayTheme === DISPLAY_THEME_TYPE.DARK) {
        this.displayTheme = DISPLAY_THEME_TYPE.LIGHT;
        return;
      }

      if (this.displayTheme === DISPLAY_THEME_TYPE.LIGHT) {
        this.displayTheme = DISPLAY_THEME_TYPE.DARK;
        return;
      }
    },
  },
});
</script>

<template>
  <div
    id="json-viewer-container"
    ref="viewer"
    :class="[viewer_theme, position_style]"
  >
    <div class="display-status" @click="toggleDisplay">
      <button>
        {{ label_display }}
      </button>
    </div>
    <div :class="class_theme" @click="toggleTheme">
      <button>
        {{ label_display_theme }}
      </button>
    </div>
    <div v-if="is_display_maximize">
      <template v-if="Array.isArray(data)">
        <template v-for="(item, index) in data">
          <div :class="object_theme" :key="index">
            <div>{{ item.constructor.name }}</div>
            <div>{{ JSON.stringify(item, null, 4) }}</div>
            <br />
          </div>
        </template>
      </template>
      <template v-else>
        <div :class="object_theme">
          <div>{{ JSON.stringify(data, null, 4) }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.display-status {
  display: inline-block;
  position: sticky;
  top: 0;
  right: 0;
}

.display-status button {
  font-family: monospace;
  background: transparent;
  background-color: #dd6b20;
  outline: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.3rem;
  color: #e2e8f0;
  border: none;
  padding: 0.5rem;
}

.display-theme-dark {
  display: inline-block;
  position: sticky;
  margin-left: 0.3rem;
  top: 0;
  right: 0;
}

.display-theme-dark button {
  cursor: pointer;
  font-family: monospace;
  outline: none;
  background: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.3rem;
  color: #e2e8f0;
  background-color: #1d1d1d;
  border: none;
  padding: 0.5rem;
}

.display-theme-light {
  display: inline-block;
  position: sticky;
  margin-left: 0.3rem;
  top: 0;
  right: 0;
}

.display-theme-light button {
  cursor: pointer;
  font-family: monospace;
  outline: none;
  background: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.3rem;
  color: #2d3748;
  background-color: #ffffff;
  border: none;
  padding: 0.5rem;
}

.display-theme-dark:hover,
.display-theme-light:hover {
  cursor: pointer;
}

.display-status button:hover {
  background-color: #fda467;
  cursor: pointer;
}

.dark,
.light {
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.dark {
  background-color: #1d1d1d;
  box-shadow: #1d1d1d 0rem 0.1rem 1rem;
}

.light {
  background-color: #f6f6f6;
  box-shadow: #cacaca 0rem 0.1rem 1rem;
}

.viewer-dark,
.viewer-light {
  padding: 0.9rem;
  white-space: pre;
  font-family: monospace;
  border-radius: 0.5rem;
  position: fixed;
  margin: 1rem;
  max-height: 20rem;
  max-width: 40rem;
  overflow: auto;
}

.viewer-bottom-right {
  bottom: 0;
  right: 0;
}

.viewer-bottom-left {
  bottom: 0;
  left: 0;
}

.viewer-top-right {
  top: 0;
  right: 0;
}

.viewer-top-left {
  top: 0;
  left: 0;
}

.viewer-dark {
  color: #00ff62;
  background-color: #2d3748;
}
.viewer-light {
  color: #9e9e9e;
  background-color: #eaeaea;
}
</style>
