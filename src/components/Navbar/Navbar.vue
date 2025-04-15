<template>
  <div class="main-container">
    <header class="navbar-container">
      <div class="logo-container">
        <img :src="LogoIcon" class="logo_icon" />
        <span class="logo-text">Abstractly</span>
      </div>
      <nav class="navigation">
        <Button
          v-for="link in links"
          :size="link.size"
          :variant="link.variant"
          :label="link.label"
        />
      </nav>
      <div class="cta_buttons">
        <Button
          v-for="ctaButton in ctaButtons"
          :size="ctaButton.size"
          :variant="ctaButton.variant"
          :label="ctaButton.label"
        />
      </div>
      <img class="burger_menu" :src="BurgerMenu" @click="toggleMenu" />
    </header>

    <div :class="[{ open: isMenuOpen }, `slideout_menu`]">
      <nav class="slideout_menu_nav">
        <Button
          v-for="link in links"
          :size="link.size"
          :variant="link.variant"
          :label="link.label"
        />
      </nav>
      <div class="slideout_menu_cta_buttons">
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
import { type TSize, type TVariant } from '@custom-types/types';

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

.navbar-container {
  height: 84px;
  padding: 16px 112px 0px;
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 96px;
}

.logo-container {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4px;
}

.logo-text {
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
}

.logo_icon {
  width: 28px;
  height: 28px;
}

.navigation {
  display: inline-flex;
  flex-grow: 1;
  gap: 32px;
}

.cta_buttons {
  display: inline-flex;
  gap: 16px;
}

.burger_menu {
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
.slideout_menu {
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

.slideout_menu_nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

.slideout_menu_nav button {
  width: fit-content;
}

.slideout_menu_cta_buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* TABLET */
@media screen and (max-width: 1100px) {
  .navbar-container {
    justify-content: space-between;
    padding: 0px 32px;
    height: 68px;
    border-radius: 6px;
  }

  .cta_buttons,
  .navigation {
    display: none;
  }

  .burger_menu {
    display: block;
  }

  .slideout_menu.open {
    transform: translateX(0);
  }
}

/* MOBILE */
@media screen and (max-width: 375px) {
  .main-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navbar-container {
    padding: 0 16px;
  }

  .slideout_menu {
    padding: 16px;
  }
}
</style>
