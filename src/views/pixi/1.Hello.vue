<template>
  <div id="hello">
    <div class="main"></div>

    <div>
      <div>
        <label for>backgroundColor:&nbsp;</label>
        <input type="text" placeholder="#000000" value="bgColor" v-model="bgColor" />
        &nbsp;&nbsp;
        <button @click="updateRendererBgColor">update</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ width: 300, height: 300 });

export default {
  name: 'Hello',
  data: () => {
    return {
      app,
      bgColor: app.renderer._backgroundColorString
    };
  },
  methods: {
    updateRendererBgColor() {
      app.renderer.backgroundColor = this.bgColor.replace(/^#/, '0x');
    }
  },
  mounted() {
    const root = document.getElementById('hello');
    root.querySelector('.main').appendChild(app.view);
  }
};
</script>
