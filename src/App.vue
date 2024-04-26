<template>
  <div class="max-w-[1440px] mx-auto">
    <NavigationBar />
    <Content />
<!--    <main class="container mx-auto mt-5 mb-auto">-->
<!--      <router-view v-slot="{ Component }">-->
<!--        <transition name="fade" mode="out-in">-->
<!--          <component :is="Component" />-->
<!--        </transition>-->
<!--      </router-view>-->
<!--    </main>-->
  </div>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
import Content from './components/Content.vue'
</script>