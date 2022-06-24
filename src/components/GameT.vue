<template>
  <v-table class="tableTest">
    <thead>
      {{ "Nächster Spielzug von: " + nextPlayer }}
    </thead>
    <tbody>
      <tr v-for="n in width" v-bind:key="n">
        <td class="pa-0 p" v-for="m in height" v-bind:key="m+'/'+n">
          <GameField class="test" :y-pos="n" :x-pos="m"></GameField>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import GameField from "@/components/GameField";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "GameT",
  components: {
    GameField
  },
  computed: {
    nextPlayer() {
      return this.$store.state.game.nextPlayer;
    }
  },
  props: {
    width: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default:3
    }
  }
}
</script>

<style scoped>
  .test {
    width: 200px;
    height: 200px;
    border: solid 1px black !important;
  }
  .tableTest {
    width: 600px;
    height: 610px;
  }
</style>