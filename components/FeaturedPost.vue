<template>
    <div class="bg-white shadow-md border dark:border-none border-gray-200 rounded-lg max-w-full md:max-w-sm dark:bg-gradient-to-r dark:from-stone-800 dark:to-neutral-800">
        <NuxtLink class="md:block hidden max-h-[170px]" :href="(`${ path }`)">
            <NuxtImg class="rounded-t-lg object-cover w-full max-h-[170px]" format="webp" width="328px" height="170px" :src="(`${ feature }`)" :alt="(`${ caption }`)"/>
        </NuxtLink>
        <div class="p-5">
            <NuxtLink :href="(`${ path }`)">
                <h4 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-gray-300"> {{ title }}</h4>
            </NuxtLink>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400 h-[5ch] overflow-hidden">{{ description }}</p>
            <NuxtLink :href="(`${ path }`)" class="text-white bg-sky-500 hover:bg-blue-400 hover:scale-105 active:scale-100 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-500 dark:hover:bg-blue-400 transition-all">
                View Article
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
    // layouts/custom.vue
    const props = defineProps({
        title: String,
        date: String,
        description: String,
        feature: String,
		path: String,
        caption: String,
    })
</script>