<script lang="ts" setup>
const { pronunciationCountOfString, getPronunciationCountOfString } =
  await usePronunciation();

const pronunciations = [
  {
    title: "ملبوبی",
    value: "malbubi",
  },
  {
    title: "ملفوزی",
    value: "malfuzi",
  },
  {
    title: "مصروری",
    value: "masruri",
  },
];

const text = ref("علی");
const pronunciation = ref(pronunciations[0].value);

const _getPronunciationCountOfString = async () => {
  await getPronunciationCountOfString(text.value, pronunciation.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="انتخاب تلفظ" size="lg">
        <USelectMenu
          v-model="pronunciation"
          :options="pronunciations"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getPronunciationCountOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ pronunciationCountOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
