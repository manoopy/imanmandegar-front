<script lang="ts" setup></script>

<template>
  <div>
    <TheHeader />

    <div class="grid grid-cols-11 gap-4">
      <div class="col-span-2">
        <SidebarFeature />
      </div>

      <div class="col-span-7 py-6">
        <slot />
      </div>

      <div class="col-span-2">
        <SidebarLeft />
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<style lang="scss" scoped></style>
