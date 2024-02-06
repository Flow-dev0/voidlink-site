<template>
    <section>
      <NuxtLink :id="sectionId" class="font-black dark:text-gray-300 text-gray-800 md:text-4xl text-3xl text-center md:text-left py-4">{{ sectionTitle }}</NuxtLink>
      <div class="flex flex-col">
        <div class="pt-12 pb-6 flex-1">
          <div class="container mx-auto grid md:grid-cols-2 gap-4">
            <div v-for="(post, index) in posts" class="flex flex-wrap md:-mx-3">
              <SpecialCard v-if="index === 0 || index === posts.length - 1"
                :path="post._path" :feature="post.feature" :title="post.title"
                :description="post.description" :date="post.date" :caption="post.alt" />
              <SpecialCard2 v-else 
                :path="post._path" :feature="post.feature" :title="post.title"
                :date="post.date" :caption="post.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: ['sectionId', 'sectionTitle', 'posts']
  }
  </script>