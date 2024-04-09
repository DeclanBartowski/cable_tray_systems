<script setup lang="ts">
import type { LayoutData, LayoutLink } from '~/types/layout'

const rootStore = useRootStore()
const { isOpenMenu, isOpenCatalog, isHeaderActive } = storeToRefs(rootStore)

const props = defineProps<{
  data: LayoutData
}>()
const { data } = toRefs(props)

const search = ref('')
const isOpenMore = ref(false)
const isOpenSearch = ref(false)
const contactsLink = ref<LayoutLink | undefined>(undefined)
const deliveryLink = ref<LayoutLink | undefined>(undefined)

watchEffect(() => {
  if (data.value) {
    data.value.menuHeader.splice(5)
    contactsLink.value = data.value.menuHeader.find((el: LayoutLink) => el.title === 'Контакты')
    deliveryLink.value = data.value.menuHeader.find((el: LayoutLink) => el.title === 'Доставка')
  }
})

onMounted(() => {
  document.addEventListener("scroll", () => {
    let bodyPosition = document.body.getBoundingClientRect().top

    if (bodyPosition < -120) {
      isHeaderActive.value = true
    } else {
      isHeaderActive.value = false
    }
  })
})
</script>

<template>
  <div
    class="fixed left-0 w-screen z-[100] bg-white text-black mobile:pt-4"
    :class="isHeaderActive ? 'h-[100px] flex items-center shadow-header mobile:h-[150px]' : 'pt-5'"
  >
    <div class="container">
      <div
        class="relative flex"
        :class="isHeaderActive ? 'flex-row gap-0 justify-between items-center mobile:flex-col' : 'flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:gap-5'"
      >
        <div class="pt-1 flex items-center justify-between">
          <nuxt-link to="/">
            <img
              src="/images/logo.png"
              alt="Логотип"
              :class="isHeaderActive ? 'mobile:hidden' : 'laptop:w-[120px] mobile:w-20'"
            >
          </nuxt-link>
          <div
            v-if="!isHeaderActive"
            class="flex items-center gap-10 laptop:gap-7 tablet:hidden"
          >
            <div
              v-for="d in data.phones"
              :key="d.href"
              class="flex flex-col gap-1"
            >
              <a
                :href="d.href"
                class="text-m font-add font-semibold laptop:text-laptopM"
              >{{ d.title }}</a>
              <span class="text-xs laptop:text-laptopXs">{{ d.text }}</span>
            </div>
          </div>
          <div
            v-if="!isHeaderActive"
            class="flex items-center gap-[50px] laptop:gap-9 mobile:gap-4"
          >
            <nuxt-link
              to="/favorites"
              class="border-none relative"
            >
              <heart class="mobile:w-6 mobile:h-6" />
              <span
                class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%] laptop:text-laptopXxs"
              >0</span>
            </nuxt-link>
            <nuxt-link
              to="/comparison"
              class="border-none relative"
            >
              <bar-active class="mobile:w-6 mobile:h-6" />
              <span
                class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%] laptop:text-laptopXxs"
              >0</span>
            </nuxt-link>
            <nuxt-link
              to="/cart"
              class="border-none relative"
            >
              <cart class="mobile:w-6 mobile:h-6" />
              <span
                class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%] laptop:text-laptopXxs"
              >0</span>
            </nuxt-link>
          </div>
          <ui-button
            v-if="!isHeaderActive"
            text="Войти"
            class="tablet:w-[138px] mobile:hidden"
          />
          <button
            v-if="!isHeaderActive"
            class="hidden border-none tablet:flex"
            @click="isOpenMenu = true"
          >
            <img
              src="/svg/menu.svg"
              alt="Меню"
              class="mobile:w-6 mobile:h-6"
            >
          </button>
        </div>
        <div class="flex items-center justify-between mobile:flex-col mobile:gap-4">
          <div
            class="mobile:flex mobile:items-center mobile:gap-4"
            :class="isHeaderActive ? 'mr-[51px] laptop:mr-10 tablet:mr-4 mobile:mr-0 mobile:flex mobile:flex-row-reverse gap-4' : ''"
          >
            <button
              v-if="isHeaderActive"
              class="hidden border-none mobile:flex"
              @click="isOpenMenu = true"
            >
              <img
                src="/svg/menu.svg"
                alt="Меню"
                class="mobile:w-6 mobile:h-6"
              >
            </button>
            <ui-button
              v-if="!isOpenCatalog"
              item="icon"
              fill="fill"
              text="Каталог"
              @click="isOpenCatalog = true"
            >
              <catalog />
            </ui-button>
            <ui-button
              v-else
              item="icon"
              text="Каталог"
              @click="isOpenCatalog = false"
            >
              <close class="text-black" />
            </ui-button>
            <nuxt-link to="/">
              <img
                v-if="isHeaderActive"
                src="/images/logo.png"
                alt="Логотип"
                class="hidden mobile:flex mobile:w-20"
              >
            </nuxt-link>
            <ui-button
              v-if="!isHeaderActive"
              text="Войти"
              class="hidden mobile:flex w-[138px]"
            />
          </div>
          <nav
            v-if="!isHeaderActive"
            class="relative flex items-end gap-6 laptop:gap-5 tablet:hidden"
          >
            <ul class="flex items-center gap-14 laptop:gap-10">
              <li
                v-for="d in data.menuHeader"
                :key="d.link"
                class="text-m transition-all laptop:text-laptopM hover:text-gray300"
              >
                <nuxt-link :to="d.link">
                  {{ d.title }}
                </nuxt-link>
              </li>
            </ul>
            <button
              class="border-none"
              @click="isOpenMore = !isOpenMore"
            >
              <more />
            </button>
            <layout-header-more v-if="isOpenMore" />
          </nav>
          <nav
            v-if="isHeaderActive"
            class="relative flex items-end mr-[77px] gap-[57px] laptop:gap-10 laptop:mr-12 tablet:hidden"
          >
            <ul class="flex items-center gap-14 laptop:gap-10">
              <li
                v-if="contactsLink"
                class="text-m transition-all laptop:text-laptopM hover:text-gray300"
              >
                <nuxt-link :to="contactsLink.link">
                  {{ contactsLink.title }}
                </nuxt-link>
              </li>
              <li
                v-if="deliveryLink"
                class="text-m transition-all laptop:text-laptopM hover:text-gray300"
              >
                <nuxt-link :to="deliveryLink.link">
                  {{ deliveryLink.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div
            class="relative"
            :class="isHeaderActive ? 'w-[420px] laptop:w-[320px] mobile:w-full' : 'w-full max-w-[420px] laptop:max-w-[320px]'"
          >
            <label
              class="relative w-full flex items-center pt-4 pl-[23px] pr-[47px] rounded-m"
              :class="isOpenSearch ? 'border-t border-x border-solid border-gray100 pb-8' : 'border border-solid border-gray100 pb-4'"
            >
              <input
                v-model="search"
                type="text"
                class="flex items-center outline-none w-full font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:text-gray300 placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
                placeholder="Поиск по каталогу"
              >
              <img
                src="/svg/search.svg"
                alt="Поиск"
                class="absolute right-[23px]"
                :class="isOpenSearch ? 'top-[14px]' : 'top-[50%] translate-y-[-50%]'"
              >
            </label>
            <div
              v-if="isOpenSearch"
              class="absolute top-[38px] left-0 flex flex-col border-x border-solid border-gray100 rounded-b-m"
            >
              <div class="flex flex-col px-5 z-50 bg-white">
                <div
                  class="pt-[9px] pb-[19px] pr-[27px] flex items-center gap-[31px] bg-white text-gray300 border-b border-solid border-gray100 transition-all hover:bg-gray hover:text-black"
                >
                  <img
                    src="/images/products-1.png"
                    alt="Товар"
                    class="w-[60px] h-[60px]"
                  >
                  <p class="text-s">
                    Перфорированные лотки простого типа AN-234
                  </p>
                </div>
                <div
                  class="pt-[9px] pb-[19px] pr-[27px] flex items-center gap-[31px] bg-white text-gray300 border-b border-solid border-gray100 transition-all hover:bg-gray hover:text-black"
                >
                  <img
                    src="/images/products-1.png"
                    alt="Товар"
                    class="w-[60px] h-[60px]"
                  >
                  <p class="text-s">
                    Перфорированные лотки простого типа AN-234
                  </p>
                </div>
              </div>
              <nuxt-link
                to="/catalog"
                class="z-50 py-4 flex items-center justify-center bg-gray300 text-white text-m rounded-b-m laptop:text-laptopM mobile:text-mobileM"
              >
                <span>Показать все</span>
                <span v-if="false">Нет результата</span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          v-if="isHeaderActive"
          class="flex flex-col gap-1 tablet:hidden"
        >
          <a
            :href="data.phones[1].href"
            class="text-m font-add font-semibold laptop:text-laptopM"
          >{{ data.phones[1].title }}</a>
          <span class="text-xs laptop:text-laptopXs">{{ data.phones[1].text }}</span>
        </div>
        <button
          v-if="isHeaderActive"
          class="hidden border-none tablet:flex tablet:ml-3 mobile:hidden"
          @click="isOpenMenu = true"
        >
          <img
            src="/svg/menu.svg"
            alt="Меню"
            class="mobile:w-6 mobile:h-6"
          >
        </button>
        <layout-catalog v-if="isOpenCatalog" />
        <layout-mobile-menu v-if="isOpenMenu" />
      </div>
    </div>
  </div>
</template>
