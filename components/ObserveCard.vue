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
                        icon="Mobile"
                        width="18"
                        height="18"
                    />
                    <div class="item__description">
                        {{ firstBenefit }}
                    </div>
                </div>
                <div class="item">
                    <svg-icon
                        class="item__logo"
                        icon="Dev"
                        width="18"
                        height="18"
                    />
                    <div class="item__description">
                        {{ secondBenefit }}
                    </div>
                </div>
            </div>
            <div class="observe-card__footer">
                <nuxt-link
                    to="#pricing"
                    class="more"
                >
                    Подробнее
                </nuxt-link>
                <nuxt-link
                    to="#contacts"
                    class="contact-us"
                >
                    Связаться с нами
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, default: 'Base' },
  name: { type: String, default: 'Базовый пакет' },
  price: { type: String, default: '1000₽ / мес' },
  firstBenefit: { type: String, default: 'Доступ к более чем 50 курсам' },
  secondBenefit: { type: String, default: 'Сертификаты о завершении курсов' }
})
</script>

<style scoped lang="scss">
    .observe-card {
        background: var(--box-color);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        box-shadow: 0 4px 12px 0 rgba(28, 28, 32, 0.04);
        transition: 0.3s;
        &__wrapper {
            padding: 16px;
        }
        &__header {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            .name {
                font-size: var(--font-size-lg);
                font-weight: 600;
                margin-left: 15px;
            }
        }
        &__price {
            margin-bottom: 20px;
            font-weight: 600;
            font-size: var(--font-size-lg);
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
                    font-size: var(--font-size);
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
                font-size: var(--font-size);
                line-height: 157%;
                color: var(--link);
            }
            .contact-us {
                cursor: pointer;
                color: #1c1c20;
                font-weight: 600;
                font-size: var(--font-size);
                line-height: 157%;
                text-decoration: underline;
            }
        }
        &:hover {
            scale: 1.05;
        }
    }

@media (max-width: 768px){
    .observe-card {
        &__footer {
            .contact-us {
                text-align: right;
            }
        }
    }
}
</style>
