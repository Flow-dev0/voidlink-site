<template>
	<div class="dark:bg-gradient-to-r dark:from-stone-800 dark:to-neutral-800 dark:text-gray-100 rounded-lg">
		<div class="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md dark:bg-gradient-to-r dark:from-stone-800 dark:to-neutral-800 ">
			<div class="flex items-center justify-between">
				<span class="text-sm dark:text-gray-400">{{ date }}</span>
				<NuxtLink rel="noopener noreferrer" @click="tagClicked(tags)" :href="`/posts?tag=${tags}`" class="px-2 py-1 hover:underline font-bold rounded bg-sky-400 dark:text-gray-900">{{ tags }}</NuxtLink>
			</div>
			<div class="mt-3">
				<NuxtLink rel="noopener noreferrer" :href="(`${ path }`)" class="text-2xl font-bold hover:underline">{{title}}</NuxtLink>
				<p class="mt-2 max-h-[5ch] overflow-hidden">{{ description }}</p>
			</div>
			<div class="flex items-center justify-between mt-4">
				<NuxtLink rel="noopener noreferrer"  :href="(`${ path }`)" class="hover:underline dark:text-sky-400">View article</NuxtLink>
				<div>
					<div class="flex items-center">
						<span class="dark:text-gray-400">Voidlink</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()

const props = defineProps({
    title: String,
    date: String,
    path: String,
    description: String,
    tags: String,
})

const emit = defineEmits(['tag-clicked'])

const tagClicked = (tag) => {
  emit('tag-clicked', tag)
}
</script>