<template>
  <nav >
    <div class="px-4">
      <div class="flex justify-between">

        <div class="flex space-x-4">
          <!-- logo -->
          <div class="">
            <div class="flex items-center pr-2 py-8 text-gray-700 dark:text-gray-200 hover:text-gray-900">
              <span class="flex" href="/">
                <NuxtImg class="md:hidden" format="webp" width="120" height="24" loading="lazy" alt="logo" src="/logo-full.png" />
              </span>



              <div class="flex">
                <NuxtLink href="/"
                  class="rounded-lg py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white hidden md:block hover:no-underline transition-all duration-300">
                  Home
                </NuxtLink>
                <NuxtLink href="/posts"
                  class="rounded-lg py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white hidden md:block hover:no-underline transition-all duration-300">
                  Blog
                </NuxtLink>
                <NuxtLink href="/about"
                  class="rounded-lg py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white hidden md:block hover:no-underline transition-all duration-300">
                  About
                </NuxtLink>
                <div class="flex">
                  <details class="relative" @toggle="detailsOpen = !detailsOpen">
                    <summary
                      class="rounded-lg py-2 px-4 text-md hover:bg-sky-500 hover:text-white hidden md:block hover:no-underline transition-all duration-300">
                      Catergories
                    </summary>
                    <ul class="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-sky-500 hidden md:block">
                      <li>
                        <NuxtLink href="/#linux"
                          class="block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-lg">
                          Linux</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink href="#android"
                          class="block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-lg">
                          Android</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink href="#security"
                          class="block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-lg">
                          Privacy</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink href="#security"
                          class="block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-lg">
                          Security</NuxtLink>
                      </li>
                    </ul>
                  </details>
                </div>
              </div>
            </div>

          </div>
        </div>

        <ul class="flex items-center space-x-4 ">
          <li class="rounded-lg border-sky-500 py-8 text-center hidden md:block text-sky-500">
  <NuxtLink href="https://fosstodon.org/@VoidLink_" target="_blank" rel="noopener noreferrer" aria-label="Mastodon source">
    <Icon name="mingcute:mastodon-line" size="28px"></Icon>
    <span class="sr-only">Mastodon source</span>
  </NuxtLink>
</li>
<li class="rounded-lg border-sky-500 py-8 text-center hidden md:block text-sky-500" href="/"
  aria-label="Odysee source">
  <NuxtLink href="https://odysee.com/@VoidLink" target="_blank" rel="noopener noreferrer"> 
    <Icon name="simple-icons:odysee" size="24px"></Icon>
    <span class="sr-only">Odysee source</span>
  </NuxtLink>
</li>
<!-- Github -->
<li class="rounded-lg border-sky-500 py-8 text-center hidden md:block text-sky-500" href="/"
  aria-label="GitHub source">
  <NuxtLink href="https://github.com/Flow-dev0" target="_blank" rel="noopener noreferrer">
    <Icon name="lucide:github" size="24px"></Icon>
    <span class="sr-only">GitHub source</span>
  </NuxtLink>
</li>
<li @click="toggleDarkMode" aria-label="Toggle Dark Mode" class="aspect-square items-center justify-center rounded-lg text-center transition-all hidden md:flex">
  <Icon class="text-sky-500 active:text-white transition-colors duration-1000" name="lucide:sun-moon"  size="24px"></Icon>
  <span class="sr-only">Toggle Dark Mode</span>
</li>
  <li class="md:hidden flex items-center dark:text-gray-200 active:scale-125 transition-all duration-150">
    <div @click="showNav = !showNav" class="mobile-menu-button list-none">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </li>
</ul>
      </div>
    </div>

    <!-- mobile menu -->
    <transition name="slide">
      <div v-if="showNav"
        class="shadow-2xl z-[999] mobile-menu fixed top-0 left-0 w-64 h-full bg-white dark:bg-gradient-to-r dark:from-stone-900 dark:to-neutral-900 overflow-auto transition-transform transform translate-x-0 px-4 py-8 md:hidden"
        :class="{'-translate-x-full': showNav}">
        <span class="flex" href="/">
          <NuxtImg class="h-6 md:hidden mb-4" format="webp" width="120" height="24" loading="lazy" alt="logo" src="/logo-full.png" />
        </span>
        <hr class="md:w-3/5 mx-auto border-1 border-zinc-200 dark:border-zinc-800 my-4" />
        <ul>
          <li>
          <NuxtLink href="/"
          class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white hover:no-underline rounded-md  transition-all duration-300 dark:text-gray-300">
          Home
        </NuxtLink></li>
        <li>
          <NuxtLink href="/posts"
          class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white hover:no-underline rounded-md  transition-all duration-300 dark:text-gray-300">
          Blog
        </NuxtLink>
        </li>
        <li>
          <NuxtLink href="/about"
          class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white hover:no-underline rounded-md  transition-all duration-300 dark:text-gray-300">
          About
        </NuxtLink>
        </li>
        </ul>


        <div class="flex">
          <details class="relative w-full" @toggle="detailsOpen = !detailsOpen">
  <summary
    class="flex hover:shadow-lg rounded-lg py-2 px-4 text-md hover:bg-sky-500 active:bg-sky-600 hover:text-white md:hidden hover:no-underline transition-all duration-300 dark:text-gray-300">
    Catergories 
    <span class="inline-block md:hidden ml-auto" v-if="detailsOpen">▲</span>
    <span class="inline-block md:hidden ml-auto dark:text-gray-300" v-else>▼</span>
  </summary>
            <ul class="relative left-0 mt-2 w-48 rounded-md  bg-white dark:bg-sky-500">
              <li>
                <NuxtLink href="/#linux"
                  class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-md dark:text-gray-300 transition-all duration-300">
                  Linux</NuxtLink>
              </li>
              <li>
                <NuxtLink href="/#android"
                  class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-md dark:text-gray-300 transition-all duration-300">
                  Android</NuxtLink>
              </li>
              <li>
                <NuxtLink href="/#security"
                  class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-md dark:text-gray-300 transition-all duration-300">
                  Privacy</NuxtLink>
              </li>
              <li>
                <NuxtLink href="/#security"
                  class="hover:shadow-lg block py-2 px-4 text-md hover:bg-sky-600 active:bg-sky-700 hover:text-white hover:no-underline rounded-md dark:text-gray-300 transition-all duration-300">
                  Security</NuxtLink>
              </li>
            </ul>
          </details>
        </div>
        <hr class="md:w-3/5 mx-auto border-1 border-zinc-200 dark:border-zinc-800 my-4" />

        <ul class="grid grid-cols-4 items-center">
          <!-- RSS -->
          <li class="rounded-lg border-sky-500 py-8 text-center block md:hidden text-sky-500">
  <NuxtLink href="https://fosstodon.org/@VoidLink_" target="_blank" rel="noopener noreferrer" aria-label="Mastodon source">
    <Icon name="mingcute:mastodon-line" size="24px"></Icon>
    <span class="sr-only">Mastodon source</span>
  </NuxtLink>
</li>
<!-- Github -->
<li class="rounded-lg border-sky-500 py-8 text-center block md:hidden text-sky-500">
  <NuxtLink href="https://github.com/Flow-dev0" target="_blank" rel="noopener noreferrer" aria-label="Github source">
    <Icon name="lucide:github" size="24px"></Icon>
    <span class="sr-only">Github source</span>
  </NuxtLink>
</li>
<li class="rounded-lg border-sky-500 py-8 text-center block md:hidden text-sky-500">
  <NuxtLink href="https://odysee.com/@VoidLink" target="_blank" rel="noopener noreferrer" aria-label="Odysee Source">
    <Icon name="simple-icons:odysee" size="24px"></Icon>
    <span class="sr-only">Odysee Source</span>
  </NuxtLink>
</li>
<li @click="toggleDarkMode" aria-label="Toggle Dark Mode"
  class="rounded-lg border-sky-500 py-8 text-center block md:hidden text-sky-500">
  <Icon name="lucide:sun-moon" size="24px"></Icon>
  <span class="sr-only">Toggle Dark Mode</span>
</li>
        </ul>

      </div>


    </transition>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showNav: false,
      detailsOpen: false,
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
    },
    closeNav() {
      this.showNav = false;
    },
    handleClickOutside(event) {
      const nav = this.$refs.nav;
      if (nav && !nav.contains(event.target)) {
        this.closeNav();
      }
    },
  },
  watch: {
    showNav(newVal) {
      if (newVal) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  },
};
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform .3s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
  }
</style>