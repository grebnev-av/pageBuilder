<template>
  <div class="ui">
    <h1>This is a UI-kit</h1>
    <h2>Buttons</h2>
    <div>
      <BaseButton
        @burgerClick="burgerClick"
        text="Try for free"
        :defaultValue="true"
      />
    </div>
    <br />
    <div><BaseButton isDisabled text="Try for free" /></div>
    <br />
    <div><BaseButton class="alter" text="See all specs" /></div>
    <br />
    <div><BaseButton class="alter" isDisabled text="See all specs" /></div>
    <br />
    <div><BaseButton class="black" text="Join PageBuilder" /></div>
    <br />
    <div><BaseButton class="black" isDisabled text="Join PageBuilder" /></div>
    <br />
    <div><BaseButton class="small" text="Start free" /></div>
    <br />
    <div><BaseButton class="small" isDisabled text="Start free" /></div>
    <div class="blackBg">
      <div><BaseLink href="#" text="Sign in" /></div>
      <br />
      <div><BaseLink href="#" class="disabled" text="Sign in" /></div>
      <br />
      <div><BaseLink href="#" class="capital" text="Features" /></div>
      <br />
    </div>
    <br />
    <div><BaseButton class="burger" /></div>
    <br />
    <div><BaseButton class="burger isActive" /></div>
  </div>
</template>

<script>

export default {
  name: "UI-kit",

  methods: {
    burgerClick() {}
  }
};
</script>

<style lang="scss">
.blackBg {
  padding: 20px;
  background: $black2;
}
</style>
