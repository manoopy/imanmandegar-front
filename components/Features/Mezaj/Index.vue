<script lang="ts" setup>
const { mezajOfString, getMezajOfString } = await useMezaj();

const mabnaes = [
  {
    title: "کوکبی",
    value: "kokabi",
  },
  {
    title: "اونصوری",
    value: "onsori",
  },
];

const types = [
  {
    title: "آتشی",
    value: 1,
    // value: "fire",
  },
  {
    title: "آبی",
    value: 2,
    // value: "water",
  },
  {
    title: "خاکی",
    value: 3,
    // value: "earth",
  },
  {
    title: "بادی",
    value: 4,
    // value: "air",
  },
];

const text = ref("علی");
const mabna = ref(mabnaes[0].value);
const type = ref(types[0].value);

const _getMezajOfString = async () => {
  await getMezajOfString(text.value, type.value, mabna.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="انتخاب مبنا." size="lg">
        <USelectMenu
          v-model="mabna"
          :options="mabnaes"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <UFormGroup label="انتخاب نوع." size="lg">
        <USelectMenu
          v-model="type"
          :options="types"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getMezajOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <template v-if="mezajOfString">
        <p>
          <span class="font-bold">شماره: </span>
          {{ mezajOfString.number }}
        </p>

        <p>
          <span class="font-bold">مزاج: </span>
          {{ mezajOfString.mezaj }}
        </p>
      </template>
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
