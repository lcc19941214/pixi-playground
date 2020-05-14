<template>
  <div id="hello">
    <div id="app">
      <h2>Background Color</h2>
      <div class="stage"></div>
      <div>
        <div>
          <label for>Background Color:&nbsp;</label>
          <input type="text" value="bgColor" v-model="bgColor" />
          &nbsp;&nbsp;
          <button @click="updateRendererBgColor">Update</button>
          &nbsp;&nbsp;
          <button @click="randomRendererBgColor">Random</button>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div id="resizable">
      <h2>Auto Resize</h2>
      <div class="stage" style="width: 70%; height: 300px;"></div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

const getRandomHex = () => Math.floor(Math.random() * 0xffffff).toString(16);

export default {
  name: 'Hello',
  data: () => {
    const appBg = getRandomHex();
    const app = new PIXI.Application({
      width: 300,
      height: 300,
      backgroundColor: `0x${appBg}`
    });
    const appResizable = new PIXI.Application({ backgroundColor: `0x${getRandomHex()}` });
    return {
      app,
      appResizable,
      bgColor: `#${appBg}`
    };
  },
  methods: {
    updateRendererBgColor() {
      this.app.renderer.backgroundColor = this.bgColor.replace(/^#/, '0x');
    },
    randomRendererBgColor() {
      this.bgColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
      this.app.renderer.backgroundColor = this.bgColor.replace(/^#/, '0x');
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.appResizable.resize);
  },
  mounted() {
    const root = document.getElementById('hello');
    root.querySelector('#app .stage').appendChild(this.app.view);

    const resizableStageElem = root.querySelector('#resizable .stage');
    this.appResizable.resizeTo = resizableStageElem;
    this.appResizable.resize();
    resizableStageElem.appendChild(this.appResizable.view);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.appResizable.resize);
  }
};
</script>

<style lang="less" scoped>
#hello {
  width: 100%;
}
</style>
