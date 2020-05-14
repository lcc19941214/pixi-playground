<template>
  <div id="app">
    <div id="stage"></div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'Display_Moving',
  data: () => {
    const loader = new PIXI.Loader();
    const app = new PIXI.Application({
      width: 400,
      height: 300,
      backgroundColor: 0x4f80f7,
      antialias: true
    });
    return {
      loader,
      app
    };
  },
  methods: {
    addSprite() {
      const { resources } = this.loader;
      const { renderer, stage } = this.app;

      const bricks = PIXI.Sprite.from(resources.bricks.texture);
      bricks.x = 200;
      bricks.y = 200;
      stage.addChild(bricks);

      const bricksWidth = bricks.width / 5;
      const bricksHeight = bricks.height;

      for (let index = 0; index < 3; index++) {
        const coin = PIXI.Sprite.from(resources.coin.texture);
        coin.x = (bricksWidth - coin.width) / 2 + bricks.x + index * 2 * bricksWidth;
        coin.y = bricks.y - coin.height;
        stage.addChild(coin);
      }

      const bricksTexture = resources.bricks.texture.clone();
      const brickRectanle = new PIXI.Rectangle(0, 0, 16, bricksHeight);
      bricksTexture.frame = brickRectanle;
      const brickCount = Math.ceil(renderer.width / 16);
      for (let index = 0; index < brickCount; index++) {
        const brick = PIXI.Sprite.from(bricksTexture);
        brick.x = index * 16;
        brick.y = renderer.height - brick.height;
        stage.addChild(brick);
      }

      const mario = PIXI.Sprite.from(resources.mario.texture);
      mario.x = 20;
      mario.y = renderer.height - bricksHeight - mario.height;
      stage.addChild(mario);

      const listener = () => {
        if (mario.x < bricks.x) {
          mario.x += 1;
        } else {
          this.app.ticker.remove(listener);
        }
      };
      this.app.ticker.add(listener);
    }
  },
  mounted() {
    this.loader
      .add('bricks', '/img/mario/bricks.png')
      .add('coin', '/img/mario/coin.gif')
      .add('mario', '/img/mario/mario.png')
      .load(this.addSprite);

    const root = document.getElementById('app');
    root.querySelector('#stage').appendChild(this.app.view);
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
}
</style>
