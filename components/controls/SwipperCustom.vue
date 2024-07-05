<template>
    <div
        class="swipper-custom"
        @click="swipeElement()"
    >
        <div
            class="swipper-custom__swipe"
            :class="{'active_swipe': isLeftSwipe}"
        >
            <svg-icon
                v-if="leftSwipe.icon"
                :icon="leftSwipe.icon"
                class="swipe-icon"
                :fill="getIconColor(isLeftSwipe)"
                width="18"
                height="18"
            />
            <div class="swipe-name">
                {{ leftSwipe.name }}
            </div>
        </div>
        <div
            class="swipper-custom__swipe"
            :class="{'active_swipe': !isLeftSwipe}"
        >
            <svg-icon
                v-if="rightSwipe.icon"
                :icon="rightSwipe.icon"
                class="swipe-icon"
                :fill="getIconColor(!isLeftSwipe)"
                width="18"
                height="18"
            />
            <div class="swipe-name">
                {{ rightSwipe.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import '~/assets/css/controls/swipper-custom.scss'

interface swipeItem {
    icon?: string,
    name: string
}

const props = defineProps<{
  leftSwipe: swipeItem,
  rightSwipe: swipeItem,
  isLeftSwipeActive?: boolean
}>()

const emit = defineEmits(['swipe'])

const isLeftSwipe = ref<boolean>(props.isLeftSwipeActive ? props.isLeftSwipeActive : true)

const swipeElement = () => {
  isLeftSwipe.value = !isLeftSwipe.value
  emit('swipe', props.leftSwipe ? isLeftSwipe.value : props.rightSwipe)
}

const getIconColor = (isActive: boolean) => {
  if (isActive) { return '#FFF' }
  return '#858487'
}

</script>

<style lang="scss" scoped>

</style>
