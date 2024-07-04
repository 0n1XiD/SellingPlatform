<template>
    <div class="landing-page">
        <section class="landing-page__main-frame">
            <div class="observe-cards">
                <observe-card />
                <observe-card />
                <observe-card />
                <observe-card />
            </div>
            <div class="on-touch">
                <div class="on-touch__info">
                    <div class="title">
                        Мы всегда на связи
                    </div>
                    <div class="description">
                        Если у вас есть какие-либо предложения или вопросы, вы всегда можете обратиться к нам.
                    </div>
                    <button-custom
                        green
                        width="360"
                        height="56"
                    >
                        Контакты
                    </button-custom>
                </div>
                <svg-icon
                    class="on-touch__icon"
                    icon="Woman"
                    width="322"
                    height="308"
                />
            </div>
        </section>
        <section class="landing-page__choice-learn">
            <h1 class="title">
                Широкий выбор курсов и персонализированное обучение
            </h1>
            <div class="headlines">
                <div class="headlines__item">
                    <div class="icon">
                        <svg-icon
                            icon="Pricing"
                            width="64"
                            height="64"
                        />
                    </div>
                    <div class="name">
                        Простые тарифные планы
                    </div>
                    <div class="description">
                        Выберите среди фиксированных ежемесячных тарифов или платите за курсы по мере их прохождения.
                    </div>
                </div>
                <svg-icon
                    class="headlines__line"
                    icon="Line"
                    width="250"
                    height="45"
                />
                <div class="headlines__item">
                    <div class="icon">
                        <svg-icon
                            icon="Layout"
                            width="64"
                            height="64"
                        />
                    </div>
                    <div class="name">
                        Широкий выбор курсов
                    </div>
                    <div class="description">
                        Наслаждайтесь доступом к разнообразным курсам: от программирования до маркетинга и языков.
                    </div>
                </div>
                <svg-icon
                    class="headlines__line"
                    icon="Line"
                    width="250"
                    height="45"
                />
                <div class="headlines__item">
                    <div class="icon">
                        <svg-icon
                            icon="Location"
                            width="64"
                            height="64"
                        />
                    </div>
                    <div class="name">
                        Персонализированное Обучение
                    </div>
                    <div class="description">
                        Получите персонализированные рекомендации и советы от опытных наставников.
                    </div>
                </div>
            </div>
        </section>
        <section class="landing-page__premium-packages">
            <div class="title">
                Премиальные пакеты обучения
            </div>
            <div class="goods">
                <div class="goods__item">
                    <div class="header">
                        <svg-icon
                            icon="Grow"
                            width="64"
                            height="64"
                        />
                        <div class="header__name">
                            Развивайтесь
                        </div>
                    </div>
                    <div class="description">
                        Инвестируйте в своё развитие с нашими разнообразными курсами,
                        подходящими для всех потребностей и бюджетов.
                    </div>
                </div>
                <div class="goods__item">
                    <div class="header">
                        <svg-icon
                            icon="Shield"
                            width="64"
                            height="64"
                        />
                        <div class="header__name">
                            Защищённое обучение
                        </div>
                    </div>
                    <div class="description">
                        Все наши курсы защищены от устаревания и
                        регулярно обновляются в соответствии с
                        современными требованиями рынка.
                    </div>
                </div>
                <div class="goods__item">
                    <div class="header">
                        <svg-icon
                            icon="Lock"
                            width="64"
                            height="64"
                        />
                        <div class="header__name">
                            Безопасность
                        </div>
                    </div>
                    <div class="description">
                        Ваша конфиденциальность и личные
                        данные под надёжной защитой. Все данные
                        шифруются от начала до конца.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .landing-page {
        &__main-frame {
            margin-top: 118px;
            padding: 28px 119px 80px 134px;
            .observe-cards {
                margin-bottom: 60px;
                display: flex;
                gap: 60px;
            }
            .on-touch {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &__info {
                    color: var(--text-color-link);
                    .title {
                        margin-bottom: 16px;
                        font-weight: 700;
                        font-size: 40px;
                        line-height: 120%;
                    }
                    .description {
                        margin-bottom: 30px;
                        max-width: 392px;
                        font-size: 18px;
                        line-height: 133%;
                        opacity: 0.6;
                    }
                }
            }
        }
        &__choice-learn {
            background: var(--bg-color-gradient);
            color: var(--text-color-link);
            text-align: center;
            .title {
                margin-bottom: 60px;
                font-weight: 700;
                font-size: 40px;
                line-height: 120%;
                letter-spacing: -0.02em;
                text-align: center;
            }
            .headlines {
                display: flex;
                align-items: baseline;
                text-align: center;
                &__item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .icon {
                        margin-bottom: 24px;
                        width: 160px;
                        height: 160px;
                        border-radius: 100%;
                        background-color: rgba(52, 204, 169, 0.1);
                        i {
                            padding: 48px;
                        }
                    }
                    .name {
                        margin-bottom: 12px;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 156%;
                    }
                    .description {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 150%;
                    }
                }
                &__line {
                    padding-bottom: 80px;
                }
            }
        }
        &__premium-packages {
            background: var(--box-color);
            .title {
                margin-bottom: 60px;
                font-weight: 700;
                font-size: 40px;
                line-height: 120%;
                letter-spacing: -0.02em;
            }
            .goods {
                display: flex;
                align-items: center;
                gap: 60px;
                &__item {
                    .header {
                        margin-bottom: 19px;
                        display: flex;
                        align-items: center;
                        gap: 18px;
                        &__name {
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 156%;
                        }
                    }
                    .description {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 150%;
                        color: var(--text-color-alternative);
                    }
                }
            }
        }
    }
</style>
