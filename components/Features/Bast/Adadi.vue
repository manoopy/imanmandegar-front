<script lang="ts" setup>
const { bastAdadiOfString, getBastAdadiOfString } = await useBast();

const text = ref("علی");

const _getBastAdadiOfString = async () => {
  await getBastAdadiOfString(text.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getBastAdadiOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ bastAdadiOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
