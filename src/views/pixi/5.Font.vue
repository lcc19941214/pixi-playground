<template>
  <div id="font">
    <div class="stage"></div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'Font',
  data: () => {
    const loader = new PIXI.Loader();
    const app = new PIXI.Application({
      width: 400,
      height: 400,
      backgroundColor: 0xfafafa,
      antialias: true,
    });
    return {
      loader,
      app
    };
  },
  mounted() {
    this.loader.add('flower', '/img/flower_fmn.png').load(() => {
      const { resources } = this.loader;
      const { stage, renderer } = this.app;

      const flower = new PIXI.Sprite(resources.flower.texture);
      const ratio = flower.width / flower.height;
      flower.width = 300;
      flower.height = flower.width / ratio;
      flower.position.set(renderer.width - flower.width, renderer.height - flower.height);

      const rect = new PIXI.Graphics();
      rect.lineStyle(4, 0xffffff);
      rect.drawRect(40, 40, 320, 320);

      const text = new PIXI.Text('丹唇外朗  明眸善睐');
      const textStlyle = new PIXI.TextStyle({
        fontFamily: 'PingFang SC',
        fontSize: 20,
        fill: '#696969'
      });
      text.style = textStlyle;
      text.position.set((renderer.width - text.width) / 2, 80);

      stage.addChild(flower, rect, text);
      const root = document.getElementById('font');
      root.querySelector('.stage').appendChild(this.app.view);
    });
  }
};
</script>

<style lang="less" scoped>
</style>
