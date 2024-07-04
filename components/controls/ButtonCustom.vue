<template>
    <button
        class="button"
        :class="[setType, setColor]"
        :autofocus="autofocus"
        :disabled="disabled"
        :form="form"
        :name="name"
        :type="type"
        :style="{
            'width': `${width}px`,
            'height': `${height}px`
        }"

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
  width: { type: [Number, String], default: '150' },
  height: { type: [Number, String], default: '30' },

  // Custom Button Props
  bError: { type: Boolean, default: false },
  bErrorName: { type: String, default: null },
  bIcon: { type: String, default: null },
  bIconColor: { type: String, default: '#FFFFFF' },

  // Button Types
  defaultType: { type: Boolean, default: false },
  borderType: { type: Boolean, default: false },

  // Button Colors
  white: { type: Boolean, default: false },
  green: { type: Boolean, default: false }
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
  const typeButton = props.white
    ? 'white'
    : props.green
      ? 'green'
      : 'white'
  return 'button_' + typeButton
})

const handleClick = (e: any) => { return e }
provide('click', handleClick)

</script>
