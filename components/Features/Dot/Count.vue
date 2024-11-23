<script lang="ts" setup>
const { dotCountOfString, getDotCountOfString } = await useDot();

const text = ref("علی");

const _getDotCountOfString = async () => {
  await getDotCountOfString(text.value);
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
          @click="_getDotCountOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ dotCountOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
