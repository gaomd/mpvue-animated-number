# mpvue-animated-number

微信小程序 mpvue 数字更新动画组件。

A animated number component for mpvue (WeChat Mini Program).

## Demo

微信扫一扫查看真实效果。

Scan with WeChat to see the real-world effects.

![WeChat Mini Program Scan Code](docs/wxmp-scan-code-430.jpg)

## Installation

    npm i --save gaomd/mpvue-animated-number

## Usage

Use inside mpvue SFC, update `this.temperatureReading` and the number will change with animation.

```vue
<template>
  <p class="temperature">
    <AnimatedNumber :value="temperatureReading" :precision="2"></AnimatedNumber>
  </p>
</template>

<script>
  import AnimatedNumber from '@gaomd/mpvue-animated-number';

  export default {
    components: {
      AnimatedNumber,
    },
    data() {
      return {
        temperatureReading: 3.14,
      };
    },
  }
</script>

<style>
  /* optional */
  .temperature {
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    font-weight: bolder;
    font-family: "Avenir Next Condensed", sans-serif;
    color: #333;
  }
</style>
```

## License

Copyright (c) 2018 Mengdi Gao

Based on MIT Licensed [Vue.js documentation](https://github.com/vuejs/vuejs.org/blob/master/src/v2/guide/transitioning-state.md).

This software is licensed under the [MIT License](LICENSE).
