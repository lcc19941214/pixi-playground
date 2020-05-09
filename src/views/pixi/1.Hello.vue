<template>
  <div id="hello"></div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  data: () => ({}),
  mounted() {
    const app = new PIXI.Application({ width: 300, height: 300 });
    document.getElementById('hello').appendChild(app);
  }
};
</script>
