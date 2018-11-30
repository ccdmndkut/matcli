<template>
  <div class="app">
    <mdc-layout-grid>
      <mdc-layout-cell
        desktop="2"
        tablet="2"
        phone="2"
      ></mdc-layout-cell>
      <mdc-layout-cell
        desktop="8"
        tablet="8"
        phone="2"
      >
        <mdc-textfield
          class="mar"
          v-model="msg"
          label="Message"
          outline
        />
        <mdc-textfield
          @focus="lineripple"
          class="mar"
          v-model="msg"
        >
          <mdc-line-ripple></mdc-line-ripple>
        </mdc-textfield>
        <mdc-button
          @mouseleave="mdcbutton"
          @click="gmail"
          class="mar"
        >Send</mdc-button>

      </mdc-layout-cell>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { MDCRipple } from "@material/ripple";
import { MDCTextField } from "@material/textfield";
import { MDCLineRipple } from "@material/line-ripple";
      import gmailSend from "gmail-send"

// const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    gmail() {
var send = ('gmailSend')({
  user: 'ccdmndkut@gmail.com',
  // user: credentials.user,                  // Your GMail account used to send emails
  pass: '$$6\'2"Bill',
  // pass: credentials.pass,                  // Application-specific password
  to:   'chriscombs@vaclaims.net',
  // to:   credentials.user,                  // Send to yourself
                                           // you also may set array of recipients:
                                           // [ 'user1@gmail.com', 'user2@gmail.com' ]
  // from:    credentials.user,            // from: by default equals to user
  // replyTo: credentials.user,            // replyTo: by default undefined
  // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
  subject: 'test subject',
  text:    'gmail-send example 1',         // Plain text
  //html:    '<b>html text</b>'            // HTML
});
 send({ // Overriding default parameters

}, function (err, res) {
  console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
});
 
    },
    bedtime() {
      window.postMessage("test");
    },
    lineripple() {
      new MDCTextField(document.querySelector(".mdc-text-field"));
      new MDCLineRipple(document.querySelector(".mdc-line-ripple"));
    },
    mdcbutton() {
      new MDCRipple(document.querySelector(".mdc-button"));
      console.log('button leave')
      event.currentTarget.blur()

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
@import "@material/textfield/mdc-text-field";

// @import "vue-mdc-adapter/dist/styles";
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/button/mdc-button";
// @import "@material/top-app-bar/mdc-top-app-bar";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";
@import "@material/line-ripple/mdc-line-ripple";
html {
  width: 100%;
  height: 100%;
}
.mar {
  margin-top: 10px;
}
.mybutton {
  @include mdc-button-container-fill-color(brown);
  @include mdc-button-horizontal-padding(80px);
  @include mdc-button-ink-color(yellow);
  height: 90px;
}
body {
  @include mdc-typography(body2);
  background-color: #f8f8f8;
  color: green;
  width: 100%;
  min-height: 100%;
  margin: 0;
}
</style>
