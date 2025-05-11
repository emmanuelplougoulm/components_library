<template>
  <div class="navbar">
    <header class="navbar__header">
      <div class="navbar__logo">
        <img :src="LogoIcon" class="navbar__logo__icon" />
        <span class="navbar__logo__text">Abstractly</span>
      </div>
      <nav class="navbar__nav">
        <Button
          v-for="link in links"
          :size="link.size"
          :variant="link.variant"
          :label="link.label"
        />
      </nav>
      <div class="navbar__cta__buttons">
        <Button
          v-for="ctaButton in ctaButtons"
          :size="ctaButton.size"
          :variant="ctaButton.variant"
          :label="ctaButton.label"
        />
      </div>
      <img class="navbar__burger__menu" :src="BurgerMenu" @click="toggleMenu" />
    </header>

    <!-- TODO RENAMING -->
    <div :class="[{ [`navbar--open`]: isMenuOpen }, `navbar__slideout_menu`]">
      <nav class="navbar__slideout_menu__nav">
        <Button
          v-for="link in links"
          :size="link.size"
          :variant="link.variant"
          :label="link.label"
        />
      </nav>
      <div class="navbar__slideout_menu__cta__buttons">
        <Button
          v-for="ctaButton in ctaButtons"
          :size="ctaButton.size"
          :variant="ctaButton.variant"
          :label="ctaButton.label"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import Button from '@components/Button/Button.vue';
import LogoIcon from '@icons/abstractly-logo.svg?url';
import BurgerMenu from '@icons/burger-menu.svg?url';
import { type TSize, type TVariant } from 'src/custom-types/types';

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

type TLink = {
  label: string;
  path: string;
  size: TSize;
  variant: TVariant;
};

type TCtaButton = {
  label: string;
  path: string;
  size: TSize;
  variant: TVariant;
};

type TNavbarProps = {
  links: TLink[];
  ctaButtons: TCtaButton[];
};

const { links, ctaButtons } = defineProps<TNavbarProps>();
</script>

<style>
* {
  box-sizing: border-box;
}

.navbar__header {
  height: 84px;
  padding: 16px 112px 0px;
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 96px;
}

.navbar__logo {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4px;
}

.navbar__logo__text {
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
}

.navbar__logo__icon {
  width: 28px;
  height: 28px;
}

.navbar__nav {
  display: inline-flex;
  flex-grow: 1;
  gap: 32px;
}

.navbar__cta__buttons {
  display: inline-flex;
  gap: 16px;
}

.navbar__burger__menu {
  display: none;
  width: 15px;
  height: 13.333333015441895px;
  /* color: #525252; */
}

/* these are not applied to current svg because of the way it is loaded. 
TODO: find a better way to do it 
*/
/* .burger_menu:hover {
}
.burger_menu:focus {
} */

.slideout_container {
  position: relative;
}
.navbar__slideout_menu {
  position: fixed;
  top: 70px;
  bottom: 0;
  height: calc(100vh - 68px);
  width: 100vw;
  padding: 16px 32px 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

.navbar__slideout_menu__nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

.navbar__slideout_menu__nav button {
  width: fit-content;
}

.navbar__slideout_menu__cta__buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* TABLET */
@media screen and (max-width: 1100px) {
  .navbar__header {
    justify-content: space-between;
    padding: 0px 32px;
    height: 68px;
    border-radius: 6px;
  }

  .navbar__cta__buttons,
  .navbar__nav {
    display: none;
  }

  .navbar__burger__menu {
    display: block;
  }

  .navbar__slideout_menu.navbar--open {
    transform: translateX(0);
  }
}

/* MOBILE */
@media screen and (max-width: 375px) {
  .navbar {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navbar__header {
    padding: 0 16px;
  }

  .slideout_menu {
    padding: 16px;
  }
}
</style>
