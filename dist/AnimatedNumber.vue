<template>
  <span>{{ tweeningValue }}</span>
</template>

<script>
  import TWEEN from '@tweenjs/tween.js';
  import { requestAnimationFrame } from './polyfills/animation-frame-polyfill';

  // Required in mpvue to prevent TWEEN throw errors
  TWEEN.now = Date.now;

  export default {
    props: {
      value: {
        type: Number,
        required: true,
      },
      precision: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        tweeningValue: 0
      }
    },
    mounted: function () {
      this.tween(0, this.value)
    },
    watch: {
      value: function (newValue, oldValue) {
        this.tween(oldValue, newValue)
      }
    },
    methods: {
      tween: function (startValue, endValue) {
        const vm = this;

        function animate() {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }

        new TWEEN.Tween({tweeningValue: startValue})
          .to({tweeningValue: endValue}, 500)
          .onUpdate(function (object) {
            vm.tweeningValue = object.tweeningValue.toFixed(vm.precision || 0)
          })
          .onComplete(function (object) {
            /* Eliminating .00 if any */
            vm.tweeningValue = +(+object.tweeningValue.toFixed(vm.precision || 0)).toString();
          })
          .start();

        animate()
      }
    }
  }
</script>
