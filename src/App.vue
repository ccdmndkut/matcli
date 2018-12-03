<template>
  <mdc-layout-app>

    <mdc-top-app-bar
      slot="toolbar"
      title="Veteran 2 Veteran"
      event="toggle-drawer"
    >
      <mdc-top-app-bar-action
        @click="show-help"
        icon="help"
      ></mdc-top-app-bar-action>
      <mdc-top-app-bar-action
        @click="download"
        icon="file_download"
      ></mdc-top-app-bar-action>

    </mdc-top-app-bar>

    <mdc-drawer
      persistent
      slot="drawer"
      toggle-on="toggle-drawer"
    >
    </mdc-drawer>

    <main>
      <!--  content markup here -->
    </main>

  </mdc-layout-app>

  <!-- <div class='app'>
    <mdc-layout-grid>
   <mdc-layout-cell
        desktop='2'
        phone='0'
        tablet='0'
      ></mdc-layout-cell>
         <mdc-layout-cell
        desktop='8'
        phone='8'
        tablet='4'
      >
      <hello-world></hello-world>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>-->
  <!-- <mdc-layout-app>

    <mdc-toolbar slot="toolbar">
      <mdc-toolbar-row>
        <mdc-toolbar-section align-start>
          <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
          <mdc-toolbar-title>Title</mdc-toolbar-title>
        </mdc-toolbar-section>
        <mdc-toolbar-section align-end>
          <mdc-toolbar-icon event="show-help" icon="help"></mdc-toolbar-icon>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
    </mdc-toolbar>

    <mdc-drawer persistent slot="drawer" toggle-on="toggle-drawer">
      <mdc-drawer-list>
        <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
        <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
        <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
      </mdc-drawer-list>
    </mdc-drawer>

    <main class="mw">
      <mdc-layout-grid>
        <mdc-layout-cell align-center desktop="2" phone="2" tablet="2"></mdc-layout-cell>

        <hello-world class="card-demo"></hello-world>
      </mdc-layout-grid>
    </main>
  </mdc-layout-app> -->
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { v } from "../public/ver.js";

// const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
export default {
  components: { HelloWorld },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
$mdc-typography-font-family: "Roboto Mono", monospace;
@import "@material/typography/mixins";
@import "@material/textfield/mdc-text-field";
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/button/mdc-button";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";
@import "@material/line-ripple/mdc-line-ripple";
@import "@material/top-app-bar/mdc-top-app-bar";

.mw {
  min-width: 80px;
}
html {
  width: 100%;
  height: 100%;
}

body {
  @include mdc-typography(body2);
  background-color: #f8f8f8;
  color: green;
  width: 100%;
  min-height: 100%;
  margin: 0;
}
.card-demo {
  max-width: 80%;
  margin: 48px;
}
</style>
