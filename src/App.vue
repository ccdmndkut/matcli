<template>
  <div class="app">
    <mdc-layout-grid>
      <mdc-layout-cell desktop="2" tablet="2" phone="2">a</mdc-layout-cell>

      <mdc-layout-cell desktop="8" tablet="8" phone="2">
        <mdc-button @click="bedtime" raised class="mybutton">hi</mdc-button>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { MDCRipple } from "@material/ripple";
// const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
export default {
  data() {
    return {};
  },
  methods: {
    bedtime() {
      window.postMessage("test");
    }
  },
  components: { HelloWorld }
};
</script>

<style lang="scss">
// First, set the value for variable
$mdc-typography-font-family: "Roboto Mono", monospace;

// Then, import required files
@import "@material/typography/mixins";
// @import "vue-mdc-adapter/dist/styles";
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/button/mdc-button";
// @import "@material/top-app-bar/mdc-top-app-bar";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";
html {
  width: 100%;
  height: 100%;
}
.mybutton {
  @include mdc-button-container-fill-color(brown);
  @include mdc-button-horizontal-padding(80px);
  @include mdc-button-ink-color(yellow);
  height: 90px;
}
body {
  @include mdc-typography(body2);
  background-color: #141313;
  color: white;
  width: 100%;
  min-height: 100%;
  margin: 0;
}
</style>
