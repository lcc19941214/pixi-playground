<template>
  <div class="home">
    <h1>PIXI@{{version}} - Playground</h1>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'Home',
  data() {
    return {
      version: PIXI.VERSION
    };
  },
  mounted() {
    let type = 'WebGL';
    if (!PIXI.utils.isWebGLSupported()) {
      type = 'canvas';
    }

    PIXI.utils.sayHello(type);
  }
};
</script>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
