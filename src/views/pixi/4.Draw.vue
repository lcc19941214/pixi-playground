<template>
  <div id="draw">
    <div class="stage"></div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'Draw',
  data: () => {
    const app = new PIXI.Application({
      width: 400,
      height: 400,
      backgroundColor: 0xf1f1f1,
      antialias: true
    });
    return {
      app
    };
  },
  methods: {
    startDraw() {
      // rect
      const rect = new PIXI.Graphics();
      rect.beginFill(0x81a2be);
      rect.drawRect(0, 0, 60, 80);
      rect.endFill();
      rect.position.set(50, 75);

      // rect outline
      const rectOutline = new PIXI.Graphics();
      rectOutline.beginFill(0x000000, 0);
      rectOutline.lineStyle(2, 0xd8d9d0, 1);
      rectOutline.drawRect(0, 0, 90, 70);
      rectOutline.endFill();
      rectOutline.position.set(120, 200);
      rectOutline.zIndex = 1;

      // circle
      const circle = new PIXI.Graphics();
      circle.beginFill(0x194fd1);
      circle.drawCircle(0, 0, 70);
      circle.endFill();
      circle.position.set(300, 80);

      // ellipse
      const ellipse = new PIXI.Graphics();
      ellipse.beginFill(0xf40825);
      ellipse.drawEllipse(0, 0, 90, 45);
      ellipse.endFill();
      ellipse.position.set(250, 300);
      ellipse.zIndex = 0;

      // rounded rect
      const rounded = new PIXI.Graphics();
      rounded.beginFill(0x06f8e3);
      rounded.drawRoundedRect(0, 0, 65, 65, 8);
      rounded.endFill();
      rounded.position.set(30, 320);

      // polygon
      const polygon = new PIXI.Graphics();
      polygon.lineStyle(4, 0x9e57e9, 1);
      polygon.drawPolygon([250, 110, 240, 310, 160, 220]);

      this.app.stage.sortableChildren = true;
      this.app.stage.addChild(rect, rectOutline, circle, ellipse, rounded, polygon);
    }
  },
  mounted() {
    const root = document.getElementById('draw');
    root.querySelector('.stage').appendChild(this.app.view);

    this.startDraw();
  }
};
</script>

<style lang="less" scoped>
</style>
