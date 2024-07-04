<template>
    <div class="pricing-card">
        <div class="pricing-card__name">
            {{ name }}
        </div>
        <div class="pricing-card__icon">
            <svg-icon
                :icon="icon"
                width="64"
                height="64"
            />
        </div>
        <div class="pricing-card__price">
            {{ price }}
        </div>
        <div class="pricing-card__description">
            {{ description }}
        </div>
        <div class="pricing-card__benefits">
            <div
                v-for="(benefit, benefitIndex) in benefits"
                :key="`benefit-${benefitIndex}`"
                class="benefit"
            >
                <svg-icon
                    icon="Checkmark"
                    width="20"
                    height="20"
                />
                <div class="benefit__name">
                    {{ benefit }}
                </div>
            </div>
        </div>
        <button-custom
            class="pricing-card__buy"
            purple
            height="48"
        >
            Приобрести
        </button-custom>
    </div>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, default: 'Plus' },
  name: { type: String, default: 'Базовый пакет' },
  price: { type: String, default: '1000₽ / мес' },
  description: { type: String, default: 'Начало пути' },
  benefits: { type: Array[String], default: [] }
})
</script>

<style scoped lang="scss">
    .pricing-card {
        border-top: 4px solid #434396;
        border-radius: 8px;
        padding: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        box-shadow: 0 8px 10px -6px rgba(16, 24, 40, 0.1), 0 20px 25px -5px rgba(16, 24, 40, 0.1);
        background: var(--box-color);
        transition: 0.3s;
        &__name {
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            text-align: center;
            color: #434396;
        }
        &__icon {
            margin: auto;
        }
        &__price {
            font-weight: 600;
            font-size: 32px;
            line-height: 125%;
            text-align: center;
        }
        &__description {
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            color: #7d7d82;
        }
        &__benefits {
            border-top: 1px solid rgba(229, 229, 229, 0.5);
            border-bottom: 1px solid rgba(229, 229, 229, 0.5);
            padding: 24px 0;
            .benefit {
                display: flex;
                align-items: center;
                gap: 10px;
                &__name {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 167%;
                }
                &:not(:last-child) {
                    margin-bottom: 10px;
                }
            }
        }
        &:hover {
            scale: 1.05;
        }
    }
</style>
