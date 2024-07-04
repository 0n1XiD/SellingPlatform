<template>
    <div
        v-if="title"
        class="input-label"
    >
        {{ title }}
    </div>
    <div class="input-custom">
        <input
            v-model="proxyValue"
            class="input"
            :class="[
                {'error': bError },
                {'focused': focused },
                {'active': proxyValue },
                setClass
            ]"

            :autocomplete="autocomplete"
            :disabled="disabled"
            :form="form"
            :max="max"
            :maxlength="maxlength"
            :name="name"
            :pattern="pattern"
            :placeholder="placeholder"
            :readonly="readonly"
            :required="required"
            :size="size"
            :step="step"
            :type="type"

            @input="onInput"
            @focus="focused = true"
            @blur="focused = false"
        >
    </div>
</template>

<script setup lang="ts">
import '@css/controls/input-custom.scss'

const props = defineProps({
// Default Input Props
  autocomplete: { type: String, default: null },
  title: { type: String, default: null },
  disabled: { type: Boolean, default: null },
  form: { type: String, default: null },
  max: { type: Number, default: null },
  maxlength: { type: Number, default: null },
  min: { type: Number, default: null },
  minlength: { type: Number, default: null },
  name: { type: String, default: null },
  pattern: { type: String, default: null },
  placeholder: { type: String, default: null },
  readonly: { type: Boolean, default: null },
  required: { type: Boolean, default: null },
  size: { type: Number, default: null },
  step: { type: Number, default: null },
  type: {
    type: String as (() => 'tel' |
    'range' |
    'hidden' |
    'number' |
    'password' |
    'search' |
    undefined),
    default: null
  },
  modelValue: { type: [String, Number], default: null },

  // Custom Input Props
  bName: { type: String, default: null },
  bError: { type: Boolean, default: false },
  bErrorName: { type: String, default: null },

  // Input Types
  default: { type: Boolean, default: false }
})

const setClass = computed(() => {
  return 'input_default'
})

const emit = defineEmits(['input', 'focus', 'selectNav'])

const proxyValue = ref<string | number>(props.modelValue)
const focused = ref<Boolean>(false)

const onInput = (event: InputEvent): void => {
  const newValue = (event.target as HTMLInputElement).value
  proxyValue.value = newValue
  emit('input', event)
}
watch(() => props.modelValue, (newValue) => {
  proxyValue.value = newValue
})

onMounted(() => {
  proxyValue.value = props.modelValue
})

</script>
