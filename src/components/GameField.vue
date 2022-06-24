<template>
  <div>
    <v-btn @click="turn" class="test">
      {{ xPos + "/" + yPos + "/" +  val}}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "GameField",
  props: {
    xPos: {
      type: Number,
      required: true
    },
    yPos: {
      type: Number,
      required: true
    }
  },
  computed: {
    val() {
      return this.$store.getters["game/getField"](this.xPos+""+this.yPos)
    }
  },
  methods: {
    turn() {
      if(this.val == " ") {
        this.$store.dispatch("game/turn", {
          row: this.yPos,
          col: this.xPos
        })
      }
    }
  }
}
</script>

<style scoped>
  .test {
    width: 200px;
    height: 200px;
  }
</style>