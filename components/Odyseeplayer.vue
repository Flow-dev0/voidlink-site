<template>
    <section class="w-full mx-auto px-2 sm:px-4 py-8 my-8 items-center rounded-lg">
	<div class=" px-2 sm:px-4 items-center">
		<div class="relative" style="padding-top: 56.25%">
		<iframe class="absolute w-full inset-0 h-full rounded-lg border-none"
		:src="(`${ link }`)" title="Odysee video player" frameborder="0"
			allow="accelerometer; gyroscope; picture-in-picture"
			allowfullscreen></iframe>
		</div>
	</div>
</section>
</template>

<script setup lang="ts">
    const route = useRoute()

	const props = defineProps({
        link: String,
    })


</script>