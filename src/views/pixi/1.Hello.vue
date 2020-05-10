<template>
  <div id="hello">
    <div id="app">
      <h2>Background Color</h2>
      <div class="stage"></div>
      <div>
        <div>
          <label for>Background Color:&nbsp;</label>
          <input type="text" placeholder="#000000" value="bgColor" v-model="bgColor" />
          &nbsp;&nbsp;
          <button @click="updateRendererBgColor">update</button>
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

export default {
  name: 'Hello',
  data: () => {
    const app = new PIXI.Application({ width: 300, height: 300 });
    const appResizable = new PIXI.Application({ backgroundColor: 0xffdd22 });
    return {
      app,
      appResizable,
      bgColor: app.renderer._backgroundColorString
    };
  },
  methods: {
    updateRendererBgColor() {
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
