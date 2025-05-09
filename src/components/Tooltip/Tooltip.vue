<template>
  <div :class="[`tooltip__container`]">
    <span :class="[`tooltip ${position}`, { [`tooltip--visible`]: visible }]">{{
      text
    }}</span>
  </div>
</template>

<script lang="ts" setup>
type TTooltipProps = {
  visible: boolean;
  text: string;
  position?:
    | 'none'
    | 'top-start'
    | 'top-center'
    | 'top-end'
    | 'right'
    | 'left'
    | 'bottom-start'
    | 'bottom-center'
    | 'bottom-end';
};

const { text, position, visible } = defineProps<TTooltipProps>();
</script>

<style>
:root {
  --color-background: #0a0a0a;
}

/* BASE STYLES */

* {
  box-sizing: border-box;
  margin: 0;
}

.tooltip__container {
  position: relative;
}

.tooltip {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: var(--color-background);
  padding: 8px 12px;
  border-radius: 8px;
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  box-shadow:
    0px 4px 6px -4px rgb(0 0 0 / 0.1),
    0px 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* ARROW NOT YET VISIBLE */
.tooltip::before {
  content: '';
  position: absolute;
  border-style: solid;
  border-left-width: 8px;
  border-right-width: 8px;
  border-top-width: 6px;
  border-bottom-width: 6px;
}

/* VISIBLE */
.tooltip--visible {
  opacity: 1;
}

/* ARROW WITH NO POSITION */
.tooltip.none::before {
  display: none;
}

/* ARROWS ALIGNEMENTS */
.tooltip.top-start::before,
.tooltip.top-center::before,
.tooltip.top-end::before {
  top: 100%;
  border-top-color: var(--color-background);
}

.tooltip.bottom-start::before,
.tooltip.bottom-center::before,
.tooltip.bottom-end::before {
  bottom: 100%;
  border-bottom-color: var(--color-background);
}
.tooltip.left::before {
  left: 100%;
  border-left-color: var(--color-background);
}
.tooltip.right::before {
  right: 100%;
  border-right-color: var(--color-background);
}

/* ARROW ALIGNEMENTS */
.tooltip.top-start::before,
.tooltip.bottom-start::before {
  left: 10px;
}
.tooltip.top-center::before,
.tooltip.bottom-center::before {
  left: 50%;
  margin-left: -8px;
}
.tooltip.top-end::before,
.tooltip.bottom-end::before {
  right: 10px;
}
.tooltip.left::before,
.tooltip.right::before {
  top: 50%;
  margin-top: -5px;
}

/* TODO 
position the tooltip in relation to the component on which it depends  

*/
</style>
