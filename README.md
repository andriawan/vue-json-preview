# vue-json-preview

Debug json data in ease and fast

## Preview

![Alt Text](https://github.com/andriawan/vue-json-preview/blob/master/demo.gif)

## Demo

[demo](https://codesandbox.io/s/vue-json-preview-demo-9dvlt)

## Todo

- [ ] Auto hide when env is Production
- [ ] Flexible styling
- [ ] Default theme variant
- [ ] Copy button for each single object in Array
  
## Install

``` bash
npm install vue-json-preview --save
```

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

## License

[MIT](LICENSE)

## Contributions

If you find issue or bug please refer to [issue section](https://github.com/andriawan/vue-json-preview/issues). If you think this needs couple improvements please discuss and send PR.