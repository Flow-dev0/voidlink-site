<template>
					<NuxtLink :href="(`${ path }`)" class=" px-3 mb-6 w-full md:hover:scale-105 md:active:scale-100 md:transition-all">
                        <div class="flex w-full h-full flex-wrap shadow-lg overflow-hidden rounded-lg">
                            <div class="w-2/6">
                                <NuxtImg width="330px" height="170px" class="object-cover h-full w-full"
                                :src="(`${ feature }`)" :alt="(`${ caption }`)"/>
                            </div>
                            <div class="w-4/6 p-5">
                                <h2 class="text-gray-800 leading-normal text-lg dark:text-gray-200">{{ title }}</h2>
                                <div class="flex flex-wrap justify-between items-center mt-6">
                                    <div class="inline-flex items-center">
                                        <div class="flex-1 pl-2">
                                            <h2 class="text-gray-800 mb-1 dark:text-gray-300">Shane. B</h2>
                                            <p class="text-gray-800 opacity-50 text-xs dark:text-gray-200">{{ date }}</p>
                                        </div>
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