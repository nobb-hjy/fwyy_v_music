<template>
    <div id="nav-bar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #nav-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    color: gainsboro;
    font-size: 14px;
    background-color: #212023;
  }

</style>
