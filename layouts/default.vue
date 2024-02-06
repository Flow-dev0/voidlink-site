<template>
    <div class="relative scroll-smooth">
        <div class="absolute left-0 right-0 top-0 bottom-0 ">
            <div class="bg-white dark:bg-gradient-to-r dark:from-stone-900 dark:to-neutral-900">
                <div class="w-11/12 mx-auto">
                    <Nav/>
            <main>
                <slot/>
            </main>
            <Footer/>
            </div>
                </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    min-height: calc(100vh - 530px -104px);
}
</style>
