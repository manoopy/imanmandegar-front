<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 z-50">
    <div class="bg-white shadow py-4">
      <div class="container">
        <div class="flex items-center gap-6">
          <ULink
            to="/"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            خانه
          </ULink>

          <!-- Space -->
          <div class="mr-auto"></div>

          <ULink
            to="/vi"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ویژگی های نرم افزار
          </ULink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
