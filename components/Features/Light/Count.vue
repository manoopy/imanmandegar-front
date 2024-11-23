<script lang="ts" setup>
const { lightCountOfString, getLightCountOfString } = await useLight();

const lights = [
  {
    title: "نورانی",
    value: "nurani",
  },
  {
    title: "ظلمانی",
    value: "zolmani",
  },
];
const text = ref("علی");
const selected = ref(lights[0].value);

const _getLightCountOfString = async () => {
  await getLightCountOfString(text.value, selected.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="انتخاب نورانی و ظلمانی." size="lg">
        <USelectMenu
          v-model="selected"
          :options="lights"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getLightCountOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ lightCountOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
