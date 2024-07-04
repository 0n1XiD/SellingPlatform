<template>
    <div class="review-card">
        <div class="review-card__wrapper">
            <div class="review-card__header">
                <svg-icon
                    class="mark"
                    icon="StarsTemplate"
                />
                <div class="date">
                    {{ date.toLocaleDateString('ru-RU') }}
                </div>
            </div>
            <div class="review-card__topic">
                {{ topic }}
            </div>
            <div class="review-card__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ex ea commodo consequat.
            </div>
            <div class="review-card__sender">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, default: 'Igor Saimonov' },
  topic: { type: String, default: 'Отзыв на платформу' },
  date: { type: Date, default: new Date() }

})
</script>

<style scoped lang="scss">
    .review-card {
        border-radius: 5px;
        background: var(--box-color);
        width: 100%;
        height: 100%;
        font-size: 14px;
        line-height: 143%;
        transition: 0.2s;
        &__wrapper{
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 12px;
        }
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .date {
                font-weight: 400;
                font-size: 12px;
                line-height: 167%;
                text-align: right;
                color: #525252;
            }
        }
        &__topic {
            font-weight: 700;
        }
        &__body {
            width: 100%;
            font-weight: 400;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &__sender {
            font-weight: 400;
            font-size: 12px;
            line-height: 167%;
            color: #525252;
        }
        &:hover {
            scale: 1.05;
        }
    }
</style>
