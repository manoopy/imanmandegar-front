<script lang="ts" setup>
const { shamsiQamariStatusOfString, getShamsiQamariStatusOfString } =
  await useShamsiQamari();

const text = ref("علی");

const _getShamsiQamariStatusOfString = async () => {
  await getShamsiQamariStatusOfString(text.value);
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
          @click="_getShamsiQamariStatusOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <p>
        <span class="font-bold">شمسی: </span>
        {{ shamsiQamariStatusOfString.shamsi }}
      </p>

      <p>
        <span class="font-bold">قمری: </span>
        {{ shamsiQamariStatusOfString.qamari }}
      </p>
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
