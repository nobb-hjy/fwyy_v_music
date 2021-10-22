<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
    #tab-bar{
      position: fixed;
      right: 0;
      left: 0;
      bottom: 0;
      height: 49px;
      background-color: #212023;
    }
</style>
