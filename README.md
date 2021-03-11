# vue-json-preview

Debug json data in ease and fast

## Preview

![Alt Text](https://github.com/andriawan/vue-json-preview/blob/master/demo.gif)

## Usage

### Use in vue project

```html
<template>
  <vue-json-preview :data="data" :position="position" />
</template>
<script>

import VueJsonPreview from "vue-json-preview";

export default {
  data() {
    return {
      data: ["linux", "windows", "osx", "solaris"],
      position: "BOTTOM_RIGHT"
    }
  },
  components: {
    VueJsonPreview
  }
}
</script>
```

## Options

### Props

| Props    | Type                             | Default      | Description                                                                                              |
| -------- | :------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| data     | [Object, Array, String, Boolean] | Array        | Data you want to debug                                                                                   |
| position | String                           | BOTTOM_RIGHT | The position of element in DOM, optional value: ['BOTTOM_RIGHT', 'BOTTOM_LEFT', 'TOP_RIGHT', 'TOP_LEFT'] |
