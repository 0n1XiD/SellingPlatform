<template>
    <div class="header-layout">
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
            <div class="menu">
                <svg-icon
                    icon="Kebab"
                    width="24"
                    height="24"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
 .header-layout {
    padding-top: 30px;
    padding-left: 134px;
    padding-right: 119px;
    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .home {
            font-weight: 700;
            font-size: 32px;
            line-height: 75%;
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
                    transition: 0.3s;
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
        }
    }
 }

 @media (max-width: 1040px){
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
}

@media (max-width: 768px){
    .header-layout {
        padding: 30px 39px 0 39px;
    }
}
</style>
