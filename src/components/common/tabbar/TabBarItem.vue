<template>
    <div class="tab-bar-item">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem"
  }
</script>

<style scoped>
  .tab-bar-item{
    height: 49px;
  }
</style>
