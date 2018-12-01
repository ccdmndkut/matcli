<template>
  <div>
    <mdc-layout-inner-grid>
      <mdc-layout-cell
        desktop='3'
        phone='3'
        tablet='3'
      ></mdc-layout-cell>
      <mdc-layout-cell
        desktop='6'
        phone='6'
        tablet='6'
      >
        <mdc-textfield
          label='Message'
          outline
          v-model='msg'
        />
        <mdc-textfield
          @focus='lineripple'
          fullwidth
          helptext='passord must be 8 to 10 characters'
          helptext-persistent
          helptext-validation
          label='Password'
          maxlength='10'
          minlength='8'
          required
          type='password'
          v-model='msg'
        >
          <mdc-line-ripple></mdc-line-ripple>
        </mdc-textfield>
        <mdc-textfield
          @focus='lineripple'
          v-model='msg'
        >
          <mdc-line-ripple></mdc-line-ripple>
        </mdc-textfield>
        <mdc-button
          @click='mdcbutton'
          class='mar'
        >Send</mdc-button>
      </mdc-layout-cell>
    </mdc-layout-inner-grid>
  </div>
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
      msg: ""
    };
  },
  methods: {
    bedtime() {
      window.postMessage("test");
    },
    lineripple() {},
    mdcbutton() {
      new MDCRipple(document.querySelector(".mdc-button"));
      console.log("button leave");
      event.currentTarget.blur();
    }
  },
  mounted() {
    new MDCTextField(document.querySelector(".mdc-text-field"));
    new MDCLineRipple(document.querySelector(".mdc-line-ripple"));
  }
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
@import "@material/theme/mixins";
@import "@material/button/mdc-button";

.mar {
  margin-top: 10px;
}
.mybutton {
  @include mdc-button-container-fill-color(brown);
  @include mdc-button-horizontal-padding(80px);
  @include mdc-button-ink-color(yellow);
  height: 90px;
}
</style>
