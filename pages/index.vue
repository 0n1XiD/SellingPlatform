<template>
    <div class="landing-page">
        <section class="landing-page__main-frame">
            <div
                class="observe-cards"
            >
                <div
                    v-for="card in observeCards"
                    :key="`card-${card.id}`"
                    class="card"
                >
                    <observe-card
                        :icon="card.icon"
                        :name="card.name"
                        :price="card.price"
                        :benefits="card.benefits"
                    />
                </div>
            </div>
            <div class="on-touch">
                <div class="on-touch__info">
                    <div class="title">
                        Мы всегда на связи
                    </div>
                    <div class="description">
                        Если у вас есть какие-либо предложения или вопросы, вы всегда можете обратиться к нам.
                    </div>
                    <nuxt-link to="#contacts">
                        <button-custom
                            green
                            width="360"
                            height="56"
                        >
                            Контакты
                        </button-custom>
                    </nuxt-link>
                </div>
                <svg-icon
                    class="on-touch__icon"
                    icon="Woman"
                    width="322"
                    height="308"
                />
                <svg-icon
                    class="on-touch__icon on-touch__icon_man"
                    icon="Man"
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
        <section
            id="reviews"
            class="landing-page__reviews"
        >
            <h1 class="title">
                Что о нас говорят люди
            </h1>
            <div class="content">
                <div class="content__most-helpful">
                    <div class="text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ex ea commodo consequat.”
                    </div>
                    <div class="explore">
                        Посмотреть другие отзывы
                    </div>
                </div>
                <div class="content__others">
                    <div class="slider">
                        <svg-icon
                            class="slider__left-arrow"
                            icon="ArrowButton"
                            width="30"
                            heigth="30"
                            @click="changePage('left')"
                        />
                        <div
                            ref="slider"
                            class="slider__list"
                            @touchmove="handleTouchMove"
                        >
                            <review-card
                                v-for="review in paginatedReviews"
                                :key="review.id"
                                :topic="review.topic"
                                :date="review.date"
                                :name="review.name"
                            />
                        </div>
                        <svg-icon
                            class="slider__right-arrow"
                            icon="ArrowButton"
                            width="30"
                            heigth="30"
                            @click="changePage('right')"
                        />
                    </div>
                    <div class="additional">
                        <div class="additional__pages">
                            <div
                                v-for="(page, index) in pageCount"
                                :key="index"
                                :class="{ 'page': true, 'page_active': index === activePageIndex }"
                            />
                        </div>
                        <div class="additional__overall">
                            Рейтинг 5 / 5 на основании {{ reviews.length }} отзывов.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            id="pricing"
            class="landing-page__pricing"
        >
            <h1 class="title">
                Цены
            </h1>
            <h2 class="subtitle">
                Мы предлагаем набор тарифных планов с различными параметрами.
                Выберите тарифный план, который лучше всего соответствует вашим потребностям.
                Помимо основных пакетов вы можете просмотреть наши дополнительные услуги
            </h2>
            <swipper-custom
                class="switcher"
                :left-swipe="{name: 'Основные пакеты'}"
                :right-swipe="{name: 'Дополнительные пакеты'}"
                @swipe="getSwipe"
            />
            <div
                v-if="!addition"
                class="cards"
            >
                <div
                    v-for="card in pricingCards"
                    :key="`card-${card.id}`"
                    class="cards__card"
                >
                    <pricing-card
                        :icon="card.icon"
                        :name="card.name"
                        :price="card.price"
                        :description="card.description"
                        :benefits="card.benefits"
                    />
                </div>
            </div>
            <div
                v-else
                class="cards"
            >
                <div
                    v-for="card in additionalPricingCards"
                    :key="`card-${card.id}`"
                    class="cards__card"
                >
                    <pricing-card
                        :icon="card.icon"
                        :name="card.name"
                        :price="card.price"
                        :benefits="card.benefits"
                    />
                </div>
            </div>
        </section>
        <section
            id="contacts"
            class="landing-page__contacts"
        >
            <div class="info">
                <div class="info__title">
                    🤙🏼 Оставайтесь на связи
                </div>
                <div class="info__description">
                    У вас остались вопросы? Свяжитесь с нашими специалистами, чтобы узнать, чем мы можем помочь.
                </div>
            </div>
            <form
                onsubmit=""
                class="send-message"
            >
                <div class="send-message__sender">
                    <div class="name">
                        <input-custom title="Имя" />
                    </div>
                    <div class="email">
                        <input-custom title="E-mail" />
                    </div>
                </div>
                <div class="send-message__body">
                    <textarea-custom title="Ваше сообщение" />
                </div>
                <button-custom
                    type="submit"
                    purple
                    width="241"
                    height="56"
                >
                    Отправить
                </button-custom>
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">
const addition = ref<Boolean>(false)

export interface Review {
  id: number;
  topic: string;
  date: Date;
  name: string;
}

export interface SubscriptionPackage {
  id: number;
  name: string;
  icon: string;
  price: string;
  benefits: string[];
  description?: string;
}

const reviews = ref<Array<Review>>([
  { id: 1, topic: 'Первый отзыв на платформу', date: new Date('2025-11-11'), name: 'Кирилл' },
  { id: 2, topic: 'Другой отзыв', date: new Date('2022-10-05'), name: 'Артём' },
  { id: 3, topic: 'Третий отзыв на платформу', date: new Date('2024-02-01'), name: 'Алексей' },
  { id: 4, topic: 'Еще один отзыв на платформу', date: new Date('2023-01-12'), name: 'Мария' },
  { id: 5, topic: 'Пятый отзыв на платформу', date: new Date('2025-11-11'), name: 'Анастасия' },
  { id: 6, topic: 'Другой отзыв', date: new Date('2022-10-05'), name: 'Григорий' },
  { id: 7, topic: 'Седьмой отзыв на платформу', date: new Date('2025-11-11'), name: 'Ангелина' },
  { id: 8, topic: 'Следующий отзыв', date: new Date('2022-10-05'), name: 'Николай' },
  { id: 9, topic: 'Последний отзыв', date: new Date('2024-03-08'), name: 'Елизавета' }
])

const observeCards = ref<Array<SubscriptionPackage>>([
  {
    id: 1,
    name: 'Базовый',
    icon: 'Base',
    price: '1000₽ / мес',
    benefits: [
      'Доступ к более чем 50 курсам',
      'Сертификаты о завершении курсов'
    ]
  },
  {
    id: 2,
    name: 'Продвинутый',
    icon: 'Prod',
    price: '2500₽ / мес',
    benefits: [
      'Доступ к более чем 150 курсам',
      'Загружаемые материалы курсов'
    ]
  },
  {
    id: 3,
    name: 'Профессиональный',
    icon: 'Profi',
    price: '3500₽ / мес',
    benefits: [
      'Доступ ко всем курсам (более 300)',
      'Индивидуальные сессии наставничества'
    ]
  },
  {
    id: 4,
    name: 'Корпоративный',
    icon: 'Corpo',
    price: 'Индивидуальная цена',
    benefits: [
      'Доступ ко всем курсам для всей команды',
      'Индивидуальные тренинги и выделенный менеджер'
    ]
  }
])
const pricingCards = ref<Array<SubscriptionPackage>>([
  {
    id: 1,
    name: 'Базовый',
    icon: 'Rocket',
    price: '1000₽ / мес',
    description: 'Начало пути',
    benefits: [
      'Доступ к более чем 50 курсам',
      'Еженедельные живые сессии',
      'Сертификаты о завершении курсов',
      'Доступ к сообществу на форуме'
    ]
  },
  {
    id: 2,
    name: 'Продвинутый',
    icon: 'Quinn',
    price: '2500₽ / мес',
    description: 'Быстрый фидбек',
    benefits: [
      'Доступ к более чем 100 курсам',
      'Ежедневные живые сессии',
      'Сертификаты о завершении курсов',
      'Загружаемые материалы курсов'
    ]
  },
  {
    id: 3,
    name: 'Профессиональный',
    icon: 'Plus',
    price: '3500₽ / мес',
    description: 'Полный доступ',
    benefits: [
      'Доступ ко всем курсам (более 300)',
      'Индивидуальные сессии наставников',
      'Сертификаты о завершении курсов',
      'Сессии карьерного консультирования'
    ]
  },
  {
    id: 4,
    name: 'Корпоративный',
    icon: 'HighVolume',
    price: 'до 15000₽ / мес',
    description: 'Для команд',
    benefits: [
      'Доступ ко всем курсам всей команде',
      'Индивидуальные тренинги',
      'Выделенный менеджер по аккаунту',
      'Индивидуальный подбор цены'
    ]
  }
])

const additionalPricingCards = ref<Array<SubscriptionPackage>>([
  {
    id: 1,
    name: 'Изучение языков',
    icon: 'Rocket',
    price: '1501₽ / мес',
    benefits: [
      'Доступ к языковым курсам',
      'Практические занятия'
    ]
  },
  {
    id: 2,
    name: 'Подготовка к экзаменам',
    icon: 'Quinn',
    price: '1502₽ / мес',
    benefits: [
      'Доступ к материалам',
      'Пробные экзамены'
    ]
  },
  {
    id: 3,
    name: 'Оценка навыков',
    icon: 'Plus',
    price: '1503₽ / мес',
    description: 'Полный доступ',
    benefits: [
      'Ежемесячные оценки',
      'Персональные отчеты'
    ]
  },
  {
    id: 4,
    name: 'Карьерная поддержка',
    icon: 'HighVolume',
    price: '1504₽ / мес',
    benefits: [
      'Создание резюме',
      'Помощь в трудоустройстве'
    ]
  },
  {
    id: 5,
    name: 'Создание контента',
    icon: 'Plus',
    price: '1505₽ / мес',
    benefits: [
      'Доступ к инструментам',
      'Ежемесячные вебинары'
    ]
  }
])

const getSwipe = ($event: any) => {
  addition.value = !$event
}

const activePageIndex = ref<Number>(0)
const pageCount = ref<Number>(Math.ceil(reviews.value.length / 2))

const changePage = (direction: string) => {
  if (direction === 'left') {
    activePageIndex.value = activePageIndex.value === 0 ? pageCount.value - 1 : activePageIndex.value - 1
  } else if (direction === 'right') {
    activePageIndex.value = activePageIndex.value === pageCount.value - 1 ? 0 : activePageIndex.value + 1
  }
}

const paginatedReviews = computed(() => {
  const startIndex = activePageIndex.value * 2
  return reviews.value.slice(startIndex, startIndex + 2)
})

const slider = ref(null)

const handleTouchMove = ($event: any) => {
  const touch = $event.touches[0]
  const sliderRect = slider.value.getBoundingClientRect()
  const x = touch.clientX - sliderRect.left

  if (x < sliderRect.width / 2) {
    changePage('left')
  } else {
    changePage('right')
  }
}
</script>

<style scoped lang="scss">
    .landing-page {
        &__main-frame {
            margin-top: 118px;
            padding: 28px 119px 80px 134px;
            .observe-cards {
                margin-bottom: 60px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 25px;
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
                        font-size: var(--font-size-lg);
                        line-height: 133%;
                        opacity: 0.6;
                    }
                }
                &__icon {
                    &_man {
                        display: none;
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
                        font-size: var(--font-size-lg);
                        line-height: 156%;
                    }
                    .description {
                        font-weight: 500;
                        font-size: var(--font-size-md);
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
                            font-size: var(--font-size-lg);
                            line-height: 156%;
                        }
                    }
                    .description {
                        font-weight: 500;
                        font-size: var(--font-size-md);
                        line-height: 150%;
                        color: var(--text-color-alternative);
                    }
                }
            }
        }
        &__reviews {
            .title {
                color: var(--text-color-link);
                font-weight: 600;
                font-size: 36px;
                line-height: 122%;
            }
            .content {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 64px;
                &__most-helpful {
                    color: var(--text-color-link);
                    .text {
                        margin-bottom: 16px;
                        width: 489px;
                        background: #434396;
                        border-radius: 4px;
                        padding: 32px;
                        font-weight: 600;
                        font-size: var(--font-size-xl);
                        line-height: 140%;
                    }
                    .explore {
                        text-align: right;
                        font-weight: 400;
                        font-size: var(--font-size-md);
                        line-height: 150%;
                        text-decoration: underline;
                    }
                }
                &__others {
                    padding-right: 85px;
                    .slider {
                        margin-bottom: 24px;
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        &__left-arrow {
                            cursor: pointer;
                            transition: 0.3s;
                            &:hover {
                                scale: 1.1;
                            }
                        }
                        &__right-arrow {
                            cursor: pointer;
                            rotate: 180deg;
                            transition: 0.3s;
                            &:hover {
                                scale: 1.1;
                            }
                        }
                        &__list {
                            display: flex;
                            flex-direction: column;
                            gap: 20px;
                        }
                    }
                    .additional {
                        display: flex;
                        justify-content: space-between;
                        padding: 0 50px 0 50px;
                        &__pages {
                            display: flex;
                            gap: 7px;
                            .page {
                                width: 8px;
                                height: 8px;
                                background: var(--box-color);
                                border-radius: 100%;
                                &_active {
                                    background: var(--success);
                                }
                            }
                        }
                        &__overall {
                            color: var(--text-color-link);
                            font-weight: 400;
                            font-size: var(--font-size);
                            line-height: 143%;
                        }
                    }
                }
            }
        }
        &__pricing {
            padding-left: 48px;
            padding-right: 48px;
            background: var(--box-color);
            .title {
                margin-bottom: 24px;
                text-align: center;
                font-weight: 700;
                font-size: 36px;
                line-height: 122%;
            }
            .subtitle {
                padding: 0 32px;
                margin-bottom: 24px;
                font-weight: 400;
                font-size: var(--font-size-md);
                line-height: 150%;
                text-align: center;
            }
            .switcher {
                display: flex;
                align-items: center;
                margin: auto;
            }
            .cards {
                margin-top: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 16px;
                &__card {
                    padding: 24px;
                }
            }
        }
        &__contacts {
            background: var(--bg-color-dark);
            display: flex;
            align-items: center;
            justify-content: space-between;
            .info {
                color: var(--text-color-link);
                &__title {
                    margin-bottom: 16px;
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 120%;
                }
                &__description {
                    max-width: 550px;
                    font-weight: 500;
                    font-size: var(--font-size-md);
                    line-height: 150%;
                    opacity: 0.6;
                }
            }
            .send-message {
                max-width: 820px;
                width: 100%;
                border-radius: 8px;
                padding: 24px 32px;
                box-shadow: 0 2px 4px -2px rgba(16, 24, 40, 0.1), 0 4px 6px -1px rgba(16, 24, 40, 0.1);
                background: var(--box-color);
                &__sender {
                    margin-bottom: 16px;
                    display: flex;
                    gap: 55px;
                    align-items: center;
                    width: 100%;
                    .name {
                        width: 44%;
                    }
                    .email {
                        width: 47%;
                    }
                }
                &__body {
                    margin-bottom: 16px;
                }
                button {
                    margin: auto;
                }
            }
        }
    }

@media (max-width: 1440px){
    .landing-page {
        &__main-frame {
            .observe-cards {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
            }
        }
        &__choice-learn {
            .headlines {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto auto;
                gap: 16px;
                justify-items: center;
                &__line {
                    display: none;
                }
                &__item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    :nth-child(2), :nth-child(3) {
                        grid-row: 2;
                    }
                }
            }
        }
        &__premium-packages {
            .title {
                text-align: center;
            }
            .goods {
                flex-direction: column;
                &__item {
                    .header {
                        flex-direction: column;
                    }
                    .description {
                        text-align: center;
                    }
                }
            }
        }
        &__reviews {
            .title {
                text-align: center;
            }
            .content {
                flex-direction: column;
                &__most-helpful {
                    .text {
                        width: calc(100% - 64px);
                    }
                }
                &__others {
                    padding-right: 0px;
                    .slider {
                        width: 100%;
                        justify-content: center;
                    }
                }
            }
        }
        &__pricing {
            .cards {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
            }
        }
        &__contacts {
            flex-direction: column;
            gap: 60px;
        }
    }
}

@media (max-width: 956px){
    .landing-page{
        &__main-frame {
            position: relative;
            overflow: hidden;
            .observe-cards {
                position: relative;
                z-index: 5;
            }
            .on-touch {
                flex-direction: column;
                justify-content: center;
                &__info {
                    .title {
                        text-align: center;
                    }
                    .description {
                        text-align: center;
                    }
                }
                &__icon {
                    position: absolute;
                    bottom: 360px;
                    right: -125px;
                    z-index: 1;
                    &_man {
                        display: block;
                        position: absolute;
                        bottom: 0px;
                        left: -125px;
                        z-index: 1;
                    }
                }
                button {
                    margin: auto;
                }
            }
        }
        &__contacts {
            .send-message {
                margin-left: 0;
            }
        }
    }
}

@media (max-width: 768px){
    .landing-page{
        &__main-frame {
            padding: 28px 39px 80px 39px;;
            position: relative;
            overflow: hidden;
            .observe-cards {
                grid-template-columns: repeat(1, 1fr);
            }
            .on-touch {
                flex-direction: column;
                justify-content: center;
                &__info {
                    .title {
                        text-align: center;
                    }
                    .description {
                        text-align: center;
                    }
                }
                &__icon {
                    display: none;
                }
                button {
                    margin: auto;
                }
            }
        }
        &__reviews {
            .title {
                text-align: center;
            }
            .content {
                flex-direction: column;
                &__most-helpful {
                    .text {
                        width: calc(100% - 64px);
                    }
                }
                &__others {
                    padding-right: 0px;
                    .slider {
                        &__left-arrow, &__right-arrow {
                            display: none;
                        }
                    }
                    .additional {
                        padding: 0;
                        align-items: center;
                    }
                }
            }
        }
        &__pricing {
            .cards {
                grid-template-columns: repeat(1, 1fr);
            }
        }
        &__contacts {
            .info {
                &__title {
                    text-align: center;
                }
                &__description {
                    text-align: center;
                }
            }
            .send-message {
                margin-left: 0;
            }
        }
    }
}

@media (max-width: 576px){
    .landing-page{
        &__main-frame {
            .on-touch {
                flex-direction: column;
                justify-content: center;
                &__info {
                    .title {
                        font-size: 24px
                    }
                    .description {
                        font-size: 18px
                    }
                }
                button {
                    margin: auto;
                    width: 200px !important;
                }
            }
        }
        &__choice-learn {
            .title {
                font-size: 24px;
                word-wrap: break-word;
            }
        }
        &__premium-packages {
            .title {
                font-size: 24px;
                word-wrap: break-word;
            }
            .goods {
                &__item {
                    .description {
                        font-size: 14px;
                    }
                }
            }
        }
        &__reviews {
            .title {
                font-size: 24px;
            }
            .content {
                flex-direction: column;
                &__most-helpful {
                    .text {
                        width: calc(100% - 64px);
                        font-size: 14px;
                    }
                }
                &__others {
                    padding-right: 0px;
                    .slider {
                        &__left-arrow, &__right-arrow {
                            display: none;
                        }
                    }
                    .additional {
                        justify-content: center;
                        &__overall {
                            display: none;
                        }
                    }
                }
            }
        }
        &__pricing {
            padding-left: 5px;
            padding-right: 5px;
            .title {
                font-size: 24px;
            }
            .subtitle {
                padding: 0;
                font-size: 14px;
            }
        }
        &__contacts {
            .info {
                &__title {
                    text-align: center;
                }
                &__description {
                    text-align: center;
                }
            }
            .send-message {
                width: 80%;
                &__sender {
                    flex-direction: column;
                    align-items: start;
                    width: 100%;
                    gap: 12px;
                    .name {
                        width: 100%;
                    }
                    .email {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
