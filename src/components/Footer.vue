<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__lower">
        <div class="footer__menu-container">
          <ul class="footer__menu">
            <li class="footer__menu-header">
              <span>PageBuilder</span>
            </li>
            <li class="footer__menu-item">
              <BaseLink href="/" text="Home" />
            </li>
            <li class="footer__menu-item">
              <BaseLink href="/projects" text="Projects" />
            </li>
          </ul>
          <ul class="footer__menu">
            <li class="footer__menu-header">
              <span>Resources</span>
            </li>
            <li class="footer__menu-item">
              <BaseLink href="#" text="Blog" />
            </li>
            <li class="footer__menu-item">
              <BaseLink href="#" text="FAQ" />
            </li>
          </ul>
          <ul class="footer__menu">
            <li class="footer__menu-header">
              <span>Company</span>
            </li>
            <li class="footer__menu-item">
              <BaseLink href="#" text="About us" />
            </li>
          </ul>
        </div>
      </div>
      <p class="footer__copyright">
        © 2020, PageBuilder All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.footer {
  padding: 45px 2vw 45px 3vw;
  background: $gray5;

  @media (max-width: $mobile) {
    padding: 65px 0 25px;
  }

  &__inner {
    max-width: 78vw;
    padding: 0 2vw 0 3vw;
    margin: 0 auto;

    @media (max-width: $desktop) {
      max-width: 1030px;
      padding: 0 15px 0 0;
    }

    @media (max-width: $mobile) {
      padding: 0;
    }
  }

  &__menu-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: $mobile) {
      width: 100%;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 7.5vw 0 0;

    @media (max-width: $mobile) {
      width: 100%;
      margin: 0 0 25px;
    }

    &:first-child {
      @media (max-width: $mobile) {
        order: 1;
      }
    }

    &:nth-child(2) {
      @media (max-width: $mobile) {
        order: 3;
      }
    }

    &:nth-child(3) {
      @media (max-width: $mobile) {
        order: 2;
      }
    }
  }

  &__menu-header {
    margin: 0 0 25px;
    color: $black2;
    text-transform: capitalize;
    font-weight: 800;
  }

  &__menu-item {
    margin: 0 0 15px;

    &--icon {
      .footer__menu-link:hover {
        background: $orange;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        opacity: 1;
      }
    }

    > a {
      text-transform: capitalize;
      font-weight: 400;
    }
  }

  &__menu-link {
    position: relative;
    display: block;
    align-items: center;
    color: $black2;
    text-decoration: none;

    > svg {
      width: 38px;
      height: 38px;
      vertical-align: middle;
      margin: -5px 0 0 15px;

      @media (max-width: $desktop) {
        width: 21px;
        height: 21px;
      }
    }
  }

  &__copyright {
    font-size: 18px;
    line-height: 20px;
    color: $gray3;

    @media (max-width: $desktop) {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
