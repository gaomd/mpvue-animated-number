# mpvue-animated-number

微信小程序 [mpvue](https://github.com/Meituan-Dianping/mpvue) 数字更新滚动动画组件。

An animated number component for [mpvue](https://github.com/Meituan-Dianping/mpvue) (a framework to develop WeChat Mini Program).

## Demo

微信扫一扫以下小程序码查看真实效果。

Scan the following code with WeChat to see the real-world effects.

![WeChat Mini Program Scan Code](docs/wxmp-scan-code-430.jpg)

## Installation

    $ npm i --save @gaomd/mpvue-animated-number

## Usage

Using inside the [mpvue SFC](http://mpvue.com/mpvue/#vue_1), update `this.temperatureReading` then the number will change accordingly with elegant animation.

```vue
// src/pages/home/home.vue

<template>
  <p class="temperature">
    <AnimatedNumber
      :value="temperatureReading"
      :precision="2"
    >
    </AnimatedNumber>
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
