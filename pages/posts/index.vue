<template>
	<div class="min-h-[calc(100vh-104px)]">
		<section class="mx-auto mb-16 flex max-w-4xl flex-col items-start justify-center px-4 sm:px-8 ">
			<div class=" top-0">
				<h1 class="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
					Blog
				</h1>
				<p class="my-8 text-zinc-600 dark:text-zinc-400">
					Hey there! Welcome to my little corner of the internet. 
					This blog primarly serves as a personal knowledge base. I occasionally share some random tech topics and discoveries whenever I get that itch to learn something new.
				</p>
				<div class="relative mb-4 w-full">
					<input v-model="search" aria-label="Search articles by title and description" type="text"
						placeholder="Use the search box to find posts or start with '/' to search by tags."
						class="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-zinc-900 focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100" />
					<svg class="absolute right-3 top-3 h-5 w-5 text-zinc-400 dark:text-zinc-300"
						xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
				<h2 class="mb-4 mt-8 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
				</h2>
				<h2 class="mb-4 mt-8 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
					<div>
						Searching <span class="bg-sky-500 p-2 text-white rounded-lg"
							v-if="filteredPosts && filteredPosts.length > 0">{{ search ? search : 'All' }}</span>
						<span class="bg-sky-500 p-2 text-white rounded-lg"
							v-else="filteredPosts.length > 0">{{ search}}</span>
					</div>

				</h2>
				<div class=" w-full">
					<div class="md:pt-12 w-full top-0 left-0">
						<ul v-if="filteredPosts.length > 0" id="skip">
							<li v-for="post in filteredPosts">
									<BlogCard class="mb-8 text-lg" :path="post._path" :title="post.title" :tags="post.tags" :date="post.date"
										:description="post.description" @tag-clicked="tagClicked" />
							</li>
						</ul>
						<ul v-else id="skip" class="w-full">
							<div class="w-full my-12">
								<div class="flex w-full justify-center">
									<Icon name="noto-v1:crying-cat" size="256px"></Icon>
								</div>
								<h3 class="text-4xl font-bold mx-auto flex container justify-center">No blogposts found!
								</h3>
							</div>
						</ul>
						<div class="text-center justify-center items-center">
							<button v-if="filteredPosts.length < totalPosts" @click="loadMore" class="load-more text-white bg-sky-500 hover:bg-blue-400 hover:scale-105 active:scale-100 font-medium rounded-md text-sm px-3 py-2   dark:bg-blue-500 dark:hover:bg-blue-400 transition-all">Load More</button>
						</div>
					</div>

				</div>
			</div>
		</section>
	</div>

</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Fuse from 'fuse.js';

const search = ref('');
const fetchedPosts = ref(10);
const totalPosts = ref(0);

const { data: postslist } = await useAsyncData('posts', () => queryContent('posts').where({ draft: false }).sort({ 'date': -1 }).limit(fetchedPosts.value).find());

const filteredPosts = computed(() => {
    if (!search.value) return postslist.value;

    // If search starts with '/', filter by tag
    if (search.value.startsWith('/')) {
        const tag = search.value.slice(1);
        return postslist.value.filter(post => post.tags.includes(tag));
    }
    
    const options = {
        keys: ['title', 'description'],
        includeScore: true,
    };
    
    const fuse = new Fuse(postslist.value, options);
    return fuse.search(search.value).map(({ item }) => item);
});



useSeoMeta({
    title: 'Blogposts | Voidlink ',
    ogTitle: 'Blogposts | Voidlink ',
    description: 'Thank you for visiting Voidlink! I appreciate your time and interest in my blog.',
    ogDescription: 'Thank you for visiting Voidlink! I appreciate your time and interest in my blog.',
    ogImage: '/default.png',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
})

// Get the current route
const route = useRoute();
const router = useRouter();


// On component mount, check for 'tag' query parameter and update 'search' ref

onMounted(async () => {
	if (route.query.tag) {
    search.value = '/' + route.query.tag;
  }
  totalPosts.value = await queryContent('posts').where({ draft: false }).count();
});

watch(fetchedPosts, async (newVal) => {
  postslist.value = await queryContent('posts').where({ draft: false }).sort({ 'date': -1 }).limit(newVal).find();
});

const loadMore = () => {
  fetchedPosts.value += 10;
};

onMounted(() => {
  if (route.query.tag) {
    search.value = '/' + route.query.tag;
  }
});

const tagClicked = (tag) => {
  search.value = '/' + tag;
  router.push({ query: { tag } });
};
</script>

<style scoped>
.solid {
    position: absolute;
    top: 0;
    left: 0;
}

.load-more {
  /* Add your styles here */
}
</style> 