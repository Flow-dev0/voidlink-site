<template>
  <section class="mx-auto flex max-w-4xl flex-col items-start justify-center px-4 sm:px-8 min-h-screen">
      <div class=" top-0 flex flex-col">
          <NuxtImg height="250px" width="250px" format="webp" class=" max-h-[250px] object-contain mx-auto" id='skip' alt="logo" src="/about.png"/>
          <h1 class="my-2 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl text-center">
              Hey there, I am {{ about.author }}
          </h1>
          <p class="my-4 text-zinc-600 dark:text-zinc-400 text-center">
              {{ about.description }}
          </p>
          <section class="text-center mx-auto mb-8 flex max-w-4xl flex-col items-start justify-center px-4 sm:px-8 text-zinc-600 dark:text-zinc-400">
              {{ about.quote }}
          </section>
          <section class="text-center mx-auto mb-8 flex max-w-4xl flex-col items-start justify-center px-4 sm:px-8 text-zinc-600 dark:text-zinc-400">
              {{ about.quoteattr }}
          </section>

      </div>
  </section>
</template>

<script lang="ts">

export default {
async setup() {

  useSeoMeta({
  title: 'About me | Voidlink',
  ogTitle: 'About me | Voidlink',
  description: 'A tech enthusiast, creator, and amateur blogger who loves everything geeky. From anime to videogames',
  ogDescription: 'A tech enthusiast, creator, and amateur blogger who loves everything geeky. From anime to videogames',
  ogImage: '/default.png',
})

useHead({
        htmlAttrs: {
            lang: 'en'
        },
    })

  const { data: about } = await useAsyncData('about', () => queryContent('about').findOne())
  return { about }
}

}
</script>

<style scoped>
</style>