<template>
					<NuxtLink :href="(`${ path }`)" class=" px-3 mb-6 w-full md:hover:scale-105 md:active:scale-100 md:transition-all">
                        <div class="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded-lg dark:text-gray-300 overflow-hidden shadow-lg"
                        :style="{ backgroundImage: `url(${feature})` }" :alt="(`${ caption }`)">
                            <h2 class="text-gray-200 text-lg mb-2 dark:text-gray-200">{{ title }}</h2>
                            <p class="text-gray-200 opacity-90 dark:text-gray-300">{{ description }}</p>
                            <div class="flex flex-wrap justify-between items-center mt-auto pt-6">
                                <div class="inline-flex items-center">
                                    <div class="flex-1 pl-2">
                                        <h2 class="text-gray-200 mb-1 dark:text-gray-300">Shane. B</h2>
                                        <p class="text-gray-200 opacity-80 text-xs dark:text-gray-200">{{ date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
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