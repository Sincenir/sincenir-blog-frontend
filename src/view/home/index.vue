<template>
  <div>
    <div class="sincenir-home sincenir-center column">
      <div class="sincenir-home-text">卑鄙是卑鄙者的通行证,</div>
      <div class="sincenir-home-text">高尚是高尚者的墓志铭</div>
      <h2 class="page-description">谁家今夜扁舟子，何处相思明月楼？</h2>
    </div>
    <!-- <div  class="sincenir-blog">

    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    handleMenu() {
      this.$emit("open-menu", true);
    }
  }
};
</script>

<style lang="stylus" scoped>
  
.sincenir-home {
  position: relative;
  width: cacl(100vw - 17px);
  height: 100vh;
  background: url('../../assets/home.webp') center center / cover no-repeat rgb(55, 34, 34);

  .sincenir-home-text {
    font-size: 2rem;
    font-family: 'Playball', cursive;
    color: #fff;
  }

  .page-description {
    -webkit-tap-highlight-color: transparent;
    color: #fff;
    font-size: 1rem;
    font-family: 'Long Cang', cursive;
    // text-align: center;
    // padding: 0;
    // line-height: 1.5em;
    // margin: 0;
    // letter-spacing: .01rem;
    // color: rgba(255,255,255,.8);
    // text-shadow: 0 3px 6px rgba(0,0,0,.5);
    // font-weight: 400;
    // animation: fade-in-down .9s both;
    // animation-delay: .3s;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 10;
    // overflow: hidden;
    // display: -webkit-box;
  }
}

</style>