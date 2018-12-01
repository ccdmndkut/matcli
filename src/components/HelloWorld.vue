<template>
  <mdc-layout-cell align-center desktop="10" phone="4" tablet="4">
    <template v-for="n in num">
      <mdc-card class="topspacer" :key="n">
        <mdc-card-header large-title subtitle="Subtitle goes  here " title="Title goes here"></mdc-card-header>
        <mdc-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</mdc-card-text>
        <mdc-card-actions>
          <mdc-card-action-button @click="mdcbutton">Action {{n}}</mdc-card-action-button>
          <mdc-card-action-button @click="mdcbutton">Action 2</mdc-card-action-button>
        </mdc-card-actions>
      </mdc-card>
    </template>

    <mdc-fab @click="reduce" fixed icon="edit"/>
  </mdc-layout-cell>
</template>

<script>
import { MDCRipple } from "@material/ripple";
import { MDCTextField } from "@material/textfield";
import { MDCLineRipple } from "@material/line-ripple";

export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  data() {
    return {
      num: 10
    };
  },
  methods: {
    mdcbutton() {
      console.log("button leave");
      event.currentTarget.blur();
    },
    reduce() {
      if (this.num == 1) {
        var newnum = this.num + 1;
        this.num = 100 + newnum;
      } else {
        var newnumb = this.num - 1;
        this.num = newnumb;
      }
    }
  },
  mounted() {
    new MDCRipple(document.querySelector(".mdc-button"));
    // new MDCTextField(document.querySelector(".mdc-text-field"));
    // new MDCLineRipple(document.querySelector(".mdc-line-ripple"));
  }
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
@import "@material/theme/mixins";
@import "@material/button/mdc-button";
@import "@material/layout-grid/mdc-layout-grid";

.mybutton {
  @include mdc-button-container-fill-color(brown);
  @include mdc-button-horizontal-padding(80px);
  @include mdc-button-ink-color(yellow);
  height: 90px;
}
.topspacer {
  margin: 20px 0;
}
</style>
