<template>
  <div class="app">
    <mdc-top-app-bar title="Title2" event="nav">
      <mdc-top-app-bar-action icon="help"></mdc-top-app-bar-action>
    </mdc-top-app-bar>
    <mdc-drawer toggle-on="nav" temporary/>
    <!-- <hello-world class="app__hello" title="Veteran 2 Veteran"></hello-world> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {};
  },
  components: { HelloWorld }
};
</script>

<style lang="scss">
// First, set the value for variable
$mdc-typography-font-family: "Roboto Mono", monospace;

// Then, import required files
@import "@material/typography/mixins";
@import "vue-mdc-adapter/dist/styles";
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";
html {
  width: 100%;
  height: 100%;
}

body {
  @include mdc-typography(body2);
  background-color: #141313;
  width: 100%;
  min-height: 100%;
  margin: 0;
}
</style>
