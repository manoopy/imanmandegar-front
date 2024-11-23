<script lang="ts" setup></script>

<template>
  <div class="shadow rounded-lg overflow-hidden">
    <div class="bg-green-50 py-1.5 px-4">
      <p class="font-bold">خروجی</p>
    </div>

    <div class="p-4">
      <p class="text-lg">
        <slot />
      </p>
    </div>
  </div>
</template>

<style scoped></style>
