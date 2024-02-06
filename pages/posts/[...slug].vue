<template>
    <section class="flex flex-col justify-center antialiased text-gray-800 pt-2">
        <div class="p-4 sm:px-6 h-full max-w-6xl mx-auto">
            <article
                class="max-w-6xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <a class="relative block group" href="#0">
                    <div class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"></div>
                    <figure
                        class="relative md:h-72 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <NuxtImg
                            class="absolute dark:text-gray-200 inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                            :src="(`${ blogpost.feature }`)" :alt="(`${ blogpost.alt }`)" width="540" height="303" />
                    </figure>
                </a>
                <div>
                    <header>
                        <div class="mb-3">
                            <div class="flex flex-wrap py-6 gap-2 border-b border-dashed dark:border-gray-400">
                                <a rel="noopener noreferrer" :href="`/posts?tag=${blogpost.tags}`"
                                    class="px-3 py-1 rounded-md hover:underline bg-sky-500 dark:text-gray-900" >{{ blogpost.tags }}</a>

                            </div>

                        </div>
                        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-200 md:text-5xl">{{ blogpost.title }}</h1>
                    </header>
                    <p class="flex-grow md:max-w-lg overflow-hidden text-gray-800 dark:text-gray-300">{{ blogpost.description }}</p>
                    <div class="flex items-center mt-4">
                        <a href="#0">
                            <NuxtImg class="rounded-full flex-shrink-0 mr-4 dark:text-gray-400"
                                src="/about.png" width="40"
                                height="40" alt="Author" />
                        </a>
                        <div>
                            <a class="font-medium text-gray-800 hover:text-gray-100 transition duration-150 ease-in-out dark:text-gray-400"
                                href="#0">Shane.B</a>
                            <span class="text-gray-700"> - </span>
                            <span class="text-gray-500 dark:text-gray-400">{{ blogpost.date }}</span>
                        </div>
                    </div>
                </div>
                <div class="prose mt-6 w-full mx-auto max-w-6xl dark:prose-invert md:p-4 lg:p-6 py-1 sm:px-6">
        <ContentDoc v-slot="blogpost" />
    </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = route.params.slug.join('/')
const { data: blogpost } = await useAsyncData('posts', () => queryContent(`posts/${currentPath}`).findOne())

const search = ref('')
onMounted(() => {
  if (route.query.tag) {
    search.value = route.query.tag
  }
})

const seoMeta = computed(() => ({
  ogTitle: blogpost.value?.title,
  ogDescription: blogpost.value?.description,
  ogImage: blogpost.value?.feature,
}))

useSeoMeta(seoMeta.value)

useHead({
  htmlAttrs: {
    lang: 'en'
  },
})

</script>