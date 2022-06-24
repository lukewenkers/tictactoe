<template>
  Welcome
  <div>
    <RouterLink :to="{name: 'welcome.explanation'}">Explanation</RouterLink> |
    <RouterLink :to="{name: 'welcome.zwei'}">Zwei</RouterLink> |
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Welcome"
}
</script>

<style scoped>

</style>