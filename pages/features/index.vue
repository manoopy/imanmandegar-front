<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      const redirectParams = {
        accountPage: "bast",
        accountPageName: "bastTalaffoz",
      };

      return navigateTo({
        name: "features-page-name",
        params: { ...redirectParams },
      });
    },
  ],
});
</script>

<template>
  <div></div>
</template>
