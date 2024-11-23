<script lang="ts" setup>
const { mezajStatusOfString, getMezajStatusOfString } = await useMezaj();

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

const _getMezajStatusOfString = async () => {
  await getMezajStatusOfString(text.value, type.value, mabna.value);
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
          @click="_getMezajStatusOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template v-for="(item, index) in mezajStatusOfString" :key="index">
          <div class="border-b pb-3 mb-3">
            <p>
              <span class="font-bold">حرف: </span>
              {{ item.letter }}
            </p>

            <p>
              <span class="font-bold">تعداد: </span>
              {{ item.count }}
            </p>

            <p>
              <span class="font-bold">وضعیت: </span>
              {{ item.status }}
            </p>
          </div>
        </template>
      </div>
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
