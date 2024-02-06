<template>
	<footer class=" pt-4 sm:pt-6 lg:pt-8">
		<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
			<div class="flex flex-col items-center justify-between gap-2 rounded-md bg-sky-500 p-6 py-6 md:flex-row">
				<div class="mb-3 text-center md:mb-0 md:text-left">
					<span class="font-bold uppercase tracking-widest text-white">"Hey listen" - Navi</span>
					<p class="text-white">
						Follow me on <span class="font-bold uppercase">odysee</span> for an even less useful tech
						stuff... <span class="font-bold uppercase">(ㆆ _ ㆆ)</span>
					</p>
				</div>
				<NuxtLink :href="(`${ configdefault.MY_MASTODON_HANDLE }`)" target="_blank" rel="noopener noreferrer"
								class="text-sky-500 bg-white hover:scale-105 active:scale-100 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center  dark:hover:bg-blue-400 transition-all">
								<Icon class="mr-1" name="simple-icons:odysee" size="24px"></Icon>Subscribe
							</NuxtLink>
			</div>
		</div>

		<div class="pt-12">
			<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div class="grid gap-12 lg:gap-8">
					<div class="col-auto text-center max-w-lg mx-auto lg:col-span-2">
						<!-- logo - start -->
						<div class="mb-4 lg:-mt-2">
							<NuxtLink href="/"
								class="text-black-800 inline-flex items-center gap-2 text-xl font-bold md:text-2xl"
								aria-label="logo">
								<svg width="131.569" height="26.057" viewBox="0 0 34.811 6.894" xml:space="preserve"
									xmlns="http://www.w3.org/2000/svg">
									<g transform="translate(-.412 -5.334) scale(2.88673)">
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="M.143 1.853h.622l.848 2.379-.633-.006z" />
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.496914;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="M2.45 1.848h-.622L.98 4.226l.633-.005z" />
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="M2.965 2.649a.793.793 0 0 0-.794.793.793.793 0 0 0 .794.794.793.793 0 0 0 .793-.794.793.793 0 0 0-.793-.793zm.08.474h.066l-.238.666h-.065zm-.327.116v.073l-.256.13.256.132v.073l-.338-.176v-.056zm.518 0 .34.176v.056l-.34.176v-.073l.257-.131-.257-.131zM4.059 2.637l-.012 1.596h.58l.008-1.588zM5.636 2.651a.792.792 0 0 0-.792.793.792.792 0 0 0 .792.792.792.792 0 0 0 .792-.792.792.792 0 0 0-.792-.793zm0 .475a.317.317 0 0 1 .317.318.317.317 0 0 1-.317.317.317.317 0 0 1-.318-.317.317.317 0 0 1 .318-.318z" />
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="M6.056 1.852h.606v2.381h-.606z" />
										<circle
											style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											cx="4.341" cy="2.192" r=".337" />
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="M6.877 1.854h.606v2.381h-.606zM8.537 4.235V3.187c.003-.045.253-.724.818-.697.564.028.833.518.849.639.015.12.008 1.106.008 1.106l-.53-.002v-.878s.02-.253-.28-.296c-.3-.043-.34.292-.34.292l-.002.882zM10.451 1.85h.606v2.381h-.606z" />
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="m10.539 3.386.914-.854.745-.001-1.01.855 1.014.848-.727-.001z" />
										<path
											style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											d="M7.713 2.639 7.7 4.234h.58l.008-1.588z" />
										<circle
											style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
											cx="7.995" cy="2.194" r=".337" />
									</g>
								</svg>
							</NuxtLink>
						</div>
						<!-- logo - end -->

						<p class="mb-6 text-gray-600  dark:text-gray-400 sm:pr-8">{{ configdefault.SITE_DESCRIPTION }}
						</p>

						<!-- social - start -->
						<!-- github -->
						<div class="flex gap-4 justify-center">
							<NuxtLink :href="(`${ configdefault.REPO_URL }`)" target="_blank" rel="noopener noreferrer"
								class="text-white bg-sky-500 hover:bg-blue-400 hover:scale-105 active:scale-100 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-500 dark:hover:bg-blue-400 transition-all">
								<Icon class="mr-1" name="lucide:github" size="24px"></Icon>Github
							</NuxtLink>
							<!-- mostodon -->
							<NuxtLink :href="(`${ configdefault.MY_MASTODON_HANDLE }`)"target="_blank" rel="noopener noreferrer"
								class="text-white bg-sky-500 hover:bg-blue-400 hover:scale-105 active:scale-100 font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-500 dark:hover:bg-blue-400 transition-all">
								<Icon class="mr-1" name="pajamas:mastodon" size="24px"></Icon>Mastodon
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center justify-center">
				<div class="border-t border-sky-500 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
					© {{ configdefault.SITE_TITLE }}
					2024 - All rights reserved.
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	const {
		data: configdefault
	} = await useAsyncData('configuration', () => queryContent('configuration').findOne())

	const route = useRoute()
</script>