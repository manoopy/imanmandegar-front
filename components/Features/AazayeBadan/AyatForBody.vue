<script lang="ts" setup>
const { ayatForBodyPart, getAyatForBodyPart } = await useBodyPart();

const parts = [
  { title: "مو", value: "hair" },
  { title: "سر", value: "head" },
  { title: "چشم", value: "eye" },
  { title: "بینی", value: "nose" },
  { title: "دهان", value: "mouth" },
  { title: "ریش", value: "beard" },
  { title: "شانه", value: "shoulder" },
  { title: "سینه", value: "breast" },
  { title: "پشت", value: "back" },
  { title: "شکم", value: "stomack" },
  { title: "زکار", value: "zakar" },
  { title: "پا", value: "foot" },
];

const selected = ref(parts[0].value);

const _getAyatForBodyPart = async () => {
  await getAyatForBodyPart(selected.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <USelectMenu
          v-model="selected"
          :options="parts"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getAyatForBodyPart()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template v-for="(item, index) in ayatForBodyPart" :key="index">
          <div class="border-b pb-3 mb-3">
            <p>
              <span class="font-bold">شماره سوره: </span>
              {{ item.chapter }}
            </p>

            <p>
              <span class="font-bold">آیه: </span>
              {{ item.verse }}
            </p>

            <p>
              <span class="font-bold">متن: </span>
              {{ item.text }}
            </p>
          </div>
        </template>
      </div>
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
