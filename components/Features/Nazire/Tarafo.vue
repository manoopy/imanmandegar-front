<script lang="ts" setup>
const { tarafoOfString, getTarafoOfString } = await useNazire();

const circles = [
  {
    title: "ابجد",
    value: "abjad",
  },
  {
    title: "احطم",
    value: "ahtam",
  },
  {
    title: "ابتس",
    value: "abtas",
  },
  {
    title: "ایقاق",
    value: "iqaq",
  },
];

const text = ref("علی");
const circle = ref(circles[0].value);

const _getTarafoOfString = async () => {
  await getTarafoOfString(circle.value, text.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="انتخاب دوایر" size="lg">
        <USelectMenu
          v-model="circle"
          :options="circles"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getTarafoOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ tarafoOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
