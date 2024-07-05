<template>
    <div :class="['header-layout', { 'header-layout_open': isMenuOpen }]">
        <div class="header-layout__content">
            <nuxt-link
                class="home"
                to="/"
            >
                EduMastery
            </nuxt-link>
            <div class="right-content">
                <div class="right-content__navigation">
                    <nuxt-link
                        to="#reviews"
                        class="item"
                    >
                        Отзывы
                    </nuxt-link>
                    <nuxt-link
                        to="#pricing"
                        class="item"
                    >
                        Цены
                    </nuxt-link>
                    <nuxt-link
                        to="#contacts"
                        class="item"
                    >
                        Контакты
                    </nuxt-link>
                </div>
                <div class="right-content__line" />
                <svg-icon
                    class="right-content__lang"
                    icon="RuLang"
                    width="28"
                    height="28"
                />
                <button-custom
                    width="147"
                    height="40"
                >
                    Начните сейчас
                </button-custom>
            </div>
            <div
                class="menu"
                @click="toggleMenu()"
            >
                <svg-icon
                    v-if="!isMenuOpen"
                    icon="Kebab"
                    width="24"
                    height="24"
                />
                <svg-icon
                    v-else
                    icon="Close"
                    width="24"
                    height="24"
                />
            </div>
        </div>
        <transition name="slide">
            <div
                v-if="isMenuOpen"
                class="mobile-menu"
            >
                <div class="mobile-menu__content">
                    <nuxt-link
                        to="#reviews"
                        @click="toggleMenu()"
                    >
                        Отзывы
                    </nuxt-link>
                    <nuxt-link
                        to="#pricing"
                        @click="toggleMenu()"
                    >
                        Цены
                    </nuxt-link>
                    <nuxt-link
                        to="#contacts"
                        @click="toggleMenu()"
                    >
                        Контакты
                    </nuxt-link>
                    <button-custom
                        width="147"
                        height="40"
                        purple
                        @click="toggleMenu()"
                    >
                        Начать сейчас
                    </button-custom>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss">
  .header-layout {
    padding: 30px 134px 15px 119px;
    transition: background-color 0.3s, color 0.3s;

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .home {
        font-weight: 700;
        font-size: 32px;
        line-height: 75%;
        color: var(--text-color-link);
        transition: color 0.3s;
      }

      .right-content {
        display: flex;
        align-items: flex-end;

        &__navigation {
          display: flex;
          gap: 35px;
          margin-right: 15px;

          .item {
            font-weight: 400;
            font-size: var(--font-size-xl);
            line-height: 171%;
            color: var(--text-color-link);
            transition: color 0.3s;

            &:hover {
              opacity: 0.8;
            }
          }
        }

        &__line {
          margin-right: 15px;
          width: 1px;
          height: 36px;
          background: #f5f5f5;
        }

        &__lang {
          padding-bottom: 3px;
          margin-right: 17px;
        }
      }

      .menu {
        display: none;
        cursor: pointer;
      }
    }

    &_open {
      background-color: #fff;
      .home,
      .right-content .item {
        color: #000;
      }
    }
  }

@media (max-width: 1040px) {
    .header-layout {
        &__content {
        .right-content {
            display: none;
        }

        .menu {
            display: block;
        }
        }
    }

    .mobile-menu {
        position: absolute;
        top: 68px;
        left: 0;
        width: 100%;
        height: fit-content;
        background-color: #fff;
        z-index: 1000;
        box-shadow: -2px 0 0 rgba(0, 0, 0, 0.1);

        &__content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            padding-left: 119px;
            padding-right: 134px;

            a {
                font-size: var(--font-size-xl);
                text-decoration: none;
                color: #000;
                margin-bottom: 20px;
                transition: 0.3s;

                &:hover {
                opacity: 0.8;
                }
            }

            .mobile-menu__close {
                align-self: flex-end;
                cursor: pointer;
            }
        }
        .slide-enter-active, .slide-leave-active {
            transition: transform 0.3s ease;
        }
        .slide-enter {
            transform: translateY(100%);
            opacity: 1;
            transition: opacity 0.3s;
        }

        .slide-leave-to {
            height: 0;
            opacity: 0;
        }
    }
}

@media (max-width: 768px) {
  .header-layout {
    padding: 30px 39px 5px 39px;

    .mobile-menu {
        top: 55px;
        &__content {
          padding-left: 39px;
          padding-right: 39px;
      }
    }
  }
}

</style>
