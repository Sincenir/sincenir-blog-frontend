<template>
  <div
    ref="node"
    class="content-one"
    :style="{
      left: `${left}px`, 
      top: `${top}px`, 
      transform: `scale(${scaleNumber})`
    }"
    @click="test"
  >{{ item[1] }}</div>
</template>

<script>
export default {
  props: ["scaleNumber", "item"],

  data() {
    return {
      width: 0,
      height: 0
    }
  },

  computed: {
    left() {
      return this.item[2] * this.scaleNumber;
      // return this.item[2];
    },

    top() {
      return this.item[3] * this.scaleNumber;
      // return this.item[3];
    }
  },

  mounted() {
    this.width = this.$refs.node.clientWidth;
    this.height = this.$refs.node.clientHeight;
  },

  methods: {
    test() {
      console.log(this.$refs.node.clientWidth);
    }
  },
};
</script>

<style lang="stylus">
.content-one {
  position: absolute;
  font-size: 8px;
  // width: 40px;
  // height: 20px;
  // background-color: blue;

  &:hover {
    background-color: red;
  }
}
</style>