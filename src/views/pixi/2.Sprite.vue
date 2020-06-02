<template>
  <div id="sprite">
    <div id="cartoon">
      <h2>Load Image</h2>
      <div class="stage"></div>
      <div>
        <div>
          <button @click="addSprite">Add Sprite</button>
          &nbsp;&nbsp;
          <button @click="clearStage">Clear Stage</button>
          &nbsp;&nbsp;
          <button @click="toggleVisible">Toggle Visible</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  name: 'Sprite',
  data: () => {
    const loader = new PIXI.Loader();
    const appCartoon = new PIXI.Application({
      width: 400,
      height: 400,
      backgroundColor: 0xf1f1f1,
      antialias: true
    });
    return {
      loader,
      appCartoon
    };
  },
  methods: {
    addSprite() {
      const { width, height } = this.appCartoon.renderer;
      const carton = PIXI.Sprite.from(this.loader.resources.carton.texture);
      const { width: w, height: h } = carton;
      const range = [width - w / 2, height - h / 2];
      const [x, y] = [random(w / 2, range[0]), random(h / 2, range[1])];
      carton.scale.set(3);
      carton.anchor.set(0.5);
      carton.x = x;
      carton.y = y;
      carton.angle = random(0, 360);
      carton.alpha = random(2, 10) / 10;

      this.appCartoon.stage.addChild(carton);
    },
    clearStage() {
      this.appCartoon.stage.removeChildren();
    },
    toggleVisible() {
      this.appCartoon.stage.children.forEach(v => {
        v.visible = !v.visible;
      });
    }
  },
  mounted() {
    this.loader.add('carton', '/img/mario/mario.png').load((loader, resources) => {
      console.log('[loaded]:' + resources.carton.url);
      this.addSprite();
    });

    const root = document.getElementById('sprite');
    root.querySelector('#cartoon .stage').appendChild(this.appCartoon.view);
  }
};
</script>

<style lang="less" scoped>
#sprite {
  width: 100%;
}

#cartoon .stage {
  display: inline-block;
  font-size: 0;
  border: 1px solid #ddd;
}
</style>
