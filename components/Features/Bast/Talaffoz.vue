<script lang="ts" setup>
const { bastTalafozOfString, getBastTalafozOfString } = await useBast();

const text = ref("علی");
const level = ref(2);

const getBastTalffoz = async () => {
  await getBastTalafozOfString(text.value, +level.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="سطح را وارد کنید." size="lg">
        <UInput v-model="level" placeholder="سطح" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="getBastTalffoz()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ bastTalafozOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
