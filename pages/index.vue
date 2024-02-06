<template>
	<div>
		<!-- section start -->
		<section>
			<!-- component -->
			<div class="flex md:h-[calc(100vh-92px)] flex-wrap items-center">
				<div class=" min-h-[calc(100vh-92px)] w-full lg:w-1/2">
					<div class="mx-4 md:mx-8">
						<h1
							class="mb-8 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl md:text-5xl">
							This is
							<br />
							<span
								class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-sky-500">
								<span
									class="relative skew-y-3 text-white dark:text-cyan-100">{{ configuration.SITE_TITLE }}</span>
							</span>
							!
						</h1>

						<h2 class="pt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
							Covering all things open source
						</h2>
						<div class="mt-16 flex font-light text-gray-800">
							<div class="pr-4">
								<NuxtLink href="#linux" class="uppercase dark:text-gray-100 hover:no-underline text-sky-500">
									Linux</NuxtLink>
							</div>
							<div class="pr-4">
								<NuxtLink href="#android" class="uppercase dark:text-gray-100 hover:no-underline text-sky-500">
									Android</NuxtLink>
							</div>
							<div class="pr-4">
								<NuxtLink href="#security" class="uppercase dark:text-gray-100 hover:no-underline text-sky-500">
									Privacy</NuxtLink>
							</div>
							<div class="visible pr-4 ">
								<NuxtLink href="#security" class="uppercase dark:text-gray-100 hover:no-underline text-sky-500">
									Security</NuxtLink>
							</div>
						</div>

						<!-- description -->
						<div
							class="description mt-16 w-full text-lg text-gray-800 dark:text-gray-300 lg:w-2/3 lg:text-base">
							<p>
								Hey there tech enthusiasts! Welcome to my little corner of the internet, where we explore
								technology in a way that's simple and easy to understand. Die-hard tech geek or just curious and want to learn something new? 
								I got your back, So why wait? Dive in and explore all the wonders of the digital world!
							</p>
						</div>
						<div />
					</div>
				</div>

				<div class="hidden md:h-screen w-full items-center object-scale-down md:w-1/2 md:pb-0 lg:flex ">
					<NuxtImg loading="lazy" src="/1024.svg" width="851px" height="844px" class="w-full"
						alt="banner with a panda on circuit board" />
				</div>
			</div>
		</section>
		<!-- section end -->
	</div>
	<div
		class="relative sm:mx-0 md:mx-auto flex max-w-6xl flex-col items-start justify-center border-zinc-200 px-4 pb-2 dark:border-zinc-700 sm:px-8">
		<div class="mb-8 flex flex-col-reverse items-start sm:flex-row" />

		<section id="skip" class="mb-16 w-full lg:mt-10">
			<h3 class="font-black dark:text-gray-300 text-gray-800 md:text-4xl text-3xl text-center md:text-left py-4">
				Featured posts</h3>
			<div class="grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-12 gap-x-4 gap-y-4 md:gap-y-12">
				<div v-for="post in posts" class="px-4 md:px-0 ">
					<LazyFeaturedPost class="mx-auto" :title="(`${ post.title }`)" :date="(`${ post.date }`)"
						:path="(`${ post._path }`)" :description="(`${ post.description }`)"
						:feature="(`${ post.feature }`)" :caption="(`${ post.alt }`)" />
				</div>
			</div>
			<NuxtLink
				class="mt-8 flex h-6 rounded-lg leading-7 text-zinc-600 transition-all dark:text-zinc-400 dark:hover:text-zinc-200"
				href="/posts">See all posts
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="ml-1 h-6 w-6">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z" />
				</svg>
			</NuxtLink>
		</section>

		<div>
    <LazySectionComponent sectionId="linux" sectionTitle="Linux" :posts="linuxposts" />
    <LazySectionComponent sectionId="android" sectionTitle="Android" :posts="androidposts" />
    <LazySectionComponent sectionId="security" sectionTitle="Security & Privacy" :posts="securityposts" />
  </div>

		<LazyOdyseeplayer :link="(`${ configuration.MY_ODYSEE_EMBED }`)" />

	</div>
</template>

<script setup lang="ts">

    const route = useRoute()

    async function getAllPosts() {
        return await useAsyncData('posts', () => queryContent('posts').sort({ 'date': -1 }).find())
    }

    const { data: configuration } = await useAsyncData('configuration', () => queryContent('configuration').findOne())
    const { data: allPosts } = await getAllPosts()

	const posts = allPosts.value.slice(0, 3)
	const linuxposts = allPosts.value.filter(post => post.tags.includes('linux')).slice(0, 6)
	const androidposts = allPosts.value.filter(post => post.tags.includes('android')).slice(0, 6)
	const securityposts = allPosts.value.filter(post => post.tags.includes('security')).slice(0, 6)

    useSeoMeta({
        title: 'Home | Voidlink ',
        ogTitle: 'Home | Voidlink ',
        description: 'Get the latest technology news, advice, and entertaining rants about Linux, Android, privacy, and security. Stay up to date and entertained with our tech articles.',
        ogDescription: 'Get the latest technology news, advice, and entertaining rants about Linux, Android, privacy, and security. Stay up to date and entertained with our tech articles.',
        ogImage: '/default.png',
    })

    useHead({
        htmlAttrs: {
            lang: 'en'
        },
    })
</script>


