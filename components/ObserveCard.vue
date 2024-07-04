<template>
    <div class="observe-card">
        <div class="observe-card__wrapper">
            <div class="observe-card__header">
                <svg-icon
                    :icon="icon"
                    width="40"
                    height="40"
                />
                <div class="name">
                    {{ name }}
                </div>
            </div>
            <div class="observe-card__price">
                {{ price }}
            </div>
            <div class="observe-card__benefits">
                <div class="item">
                    <svg-icon
                        class="item__logo"
                        :icon="icon"
                        width="18"
                        height="18"
                    />
                    <div class="item__description">
                        Доступ к более чем 50 курсам
                    </div>
                </div>
                <div class="item">
                    <svg-icon
                        class="item__logo"
                        :icon="icon"
                        width="18"
                        height="18"
                    />
                    <div class="item__description">
                        Доступ к более чем 50 курсам
                    </div>
                </div>
            </div>
            <div class="observe-card__footer">
                <div class="more">
                    Подробнее
                </div>
                <div class="contact-us">
                    Связаться с нами
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, default: 'Plus' },
  name: { type: String, default: 'Базовый пакет' },
  price: { type: String, default: '1000₽ / мес' }

})
</script>

<style scoped lang="scss">
    .observe-card {
        background: var(--box-color);
        width: 270px;
        height: 300px;
        border-radius: 6px;
        box-shadow: 0 4px 12px 0 rgba(28, 28, 32, 0.04);
        &__wrapper {
            padding: 16px;
        }
        &__header {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            .name {
                font-size: 18px;
                font-weight: 600;
                margin-left: 15px;
            }
        }
        &__price {
            margin-bottom: 20px;
            font-weight: 600;
            font-size: 18px;
            color: var(--link);
        }
        &__benefits {
            .item {
                border-top: 1px solid rgba(245, 245, 245, 0.5);
                padding-top: 13px;
                padding-bottom: 12px;
                display: flex;
                flex-wrap: nowrap;
                gap: 11px;
                color: var(----text-color-alternative);
                &:last-child {
                    border-bottom: 1px solid rgba(245, 245, 245, 0.5);
                }
                &__description {
                    font-family: var(--font-family);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 157%;
                    color: #7d7d82;
                }
            }
        }
        &__footer {
            padding-top: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .more {
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                line-height: 157%;
                color: var(--link);
            }
            .contact-us {
                cursor: pointer;
                color: #1c1c20;
                font-weight: 600;
                font-size: 14px;
                line-height: 157%;
                text-decoration: underline;
            }
        }
    }
</style>
