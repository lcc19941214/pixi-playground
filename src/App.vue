<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{route.name}}</router-link>
      </div>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import routes from './router/routes';

export default {
  data() {
    return { routes };
  }
};
</script>

<style scoped lang="less">
#app {
  display: flex;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  flex-shrink: 0;
  overflow-y: auto;
  width: 200px;
  border-right: 1px solid #ddd;
  padding: 24px;

  & > div + div {
    margin-top: 10px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:not(.router-link-exact-active) {
    text-decoration: none;
  }
}

#content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}
</style>
