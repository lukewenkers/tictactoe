<template>
  <v-app>
    <v-main>
      <div class="text-center">
        <RouterLink to="/">Welcome</RouterLink> |
        <RouterLink to="/highscore">Highscore</RouterLink> |
        <RouterLink to="/game">Game</RouterLink> |
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
}
</script>
