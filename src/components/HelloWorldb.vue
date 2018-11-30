<template>
  <div class="hello">
    <div class="hello__hero">
      <mdc-layout-grid>
        <mdc-layout-cell desktop="12" tablet="8" phone="4">
          <img class="hello__logo" src="../assets/logo.png" alt="Vet 2 Vet logo">
          <h1 class="hello__title">{{ title }}</h1>
        </mdc-layout-cell>
      </mdc-layout-grid>
    </div>

    <div class="hello__content">
      <mdc-layout-grid class="hello__type">
        <mdc-layout-cell desktop="12" tablet="8" phone="4">card here
          <mdc-button>Button</mdc-button>
        </mdc-layout-cell>
      </mdc-layout-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String
  }
};
</script>

<style lang="scss">
// First, set the value for variable
$mdc-layout-grid-max-width: 800px;

// Then, import required files
@import "vue-mdc-adapter/dist/styles";
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";

.hello {
  &__hero {
    @include mdc-theme-prop(color, text-primary-on-dark);
    text-align: center;
    padding: 0.5rem 0;
    background-color: #141313;
    @media (min-width: 480px) {
      text-align: center;
    }

    a {
      @include mdc-theme-prop(color, text-primary-on-dark);
    }
  }

  &__logo {
    width: 100px;
    padding-bottom: 20px;
    @media (min-width: 840px) {
      width: 125px;
      padding-bottom: 20px;
    }
  }

  &__title {
    margin-top: 5px;
    letter-spacing: 2.5px;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 0.625rem;
    color: #d2b58a;
  }

  &__blurb {
    line-height: 1.5rem;
  }
  &__type {
    color: #e2e1e1;
    font-size: 3rem;
    line-height: 0.5rem;
    font-family: "Poppins", sans-serif;
  }
  &__content {
    padding: 0.5rem 0;
    text-align: center;
    margin: 0;
  }

  &__subtitle {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.75rem;
  }

  &__links {
    @include mdc-rtl-reflexive-box(padding, left, 0);

    list-style: inside disc;

    li {
      padding-bottom: 0.5rem;
    }

    a {
      @include mdc-theme-prop(color, text-primary-on-background);
    }
  }
}
</style>
