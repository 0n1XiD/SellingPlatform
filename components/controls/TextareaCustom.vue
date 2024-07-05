<template>
    <div
        v-if="title"
        class="input-label"
    >
        {{ title }}
    </div>
    <textarea
        :id="name"
        class="textarea-custom"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="onInput"
    />
</template>

<script setup lang="ts">
import '~/assets/css/controls/textarea-custom.scss'

defineProps({
  // Default Input Props
  title: { type: String, default: null },
  disabled: { type: Boolean, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: null },
  readonly: { type: Boolean, default: null }
})

const emit = defineEmits(['input'])

const onInput = (event: InputEvent): void => {
  emit('input', event)
}

</script>
