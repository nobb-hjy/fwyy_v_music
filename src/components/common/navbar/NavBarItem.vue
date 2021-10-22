<template>
    <div class="nav-bar-item">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "NavBarItem"
  }
</script>

<style scoped>
    .nav-bar-item{
      height: 44px;
    }
</style>
