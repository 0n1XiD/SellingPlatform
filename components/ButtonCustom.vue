<template>
    <button
        class="button"
        :class="[setType, setColor]"
        :autofocus="autofocus"
        :disabled="disabled"
        :form="form"
        :name="name"
        :type="type"

        @click="handleClick($event)"
    >
        <svg-icon
            v-if="bIcon"
            :icon="bIcon"
            class="button__icon"
            :stroke="bIconColor"
            width="18"
            height="18"
        />
        <slot>
            {{ value }}
        </slot>
    </button>
</template>

<script setup lang="ts">
import '@css/controls/button-custom.scss'

const props = defineProps({
  // Default Button Props
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  form: { type: String, default: null },
  name: { type: String, default: null },
  type: { type: String as () => 'button' | 'submit' | 'reset' | undefined, default: 'button' },
  value: { type: [String, Number], default: null },

  // Custom Button Props
  bError: { type: Boolean, default: false },
  bErrorName: { type: String, default: null },
  bIcon: { type: String, default: null },
  bIconColor: { type: String, default: '#FFFFFF' },

  // Button Types
  defaultType: { type: Boolean, default: false },
  borderType: { type: Boolean, default: false },

  // Button Colors
  darkPurple: { type: Boolean, default: false },
  darkGreen: { type: Boolean, default: false },
  darkRed: { type: Boolean, default: false },
  darkBlue: { type: Boolean, default: false },
  lightGray: { type: Boolean, default: false }
})

const setType = computed(() => {
  const typeButton = props.defaultType
    ? 'default'
    : props.borderType
      ? 'border'
      : 'default'
  return typeButton
})

const setColor = computed(() => {
  const typeButton = props.darkPurple
    ? 'dark_purple'
    : props.darkGreen
      ? 'dark_green'
      : props.darkRed
        ? 'dark_red'
        : props.darkBlue
          ? 'dark_blue'
          : props.lightGray
            ? 'light_gray'
            : 'dark_purple'
  return 'button_' + typeButton
})

const handleClick = (e: any) => { return e }
provide('click', handleClick)

</script>
