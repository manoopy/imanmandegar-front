<script lang="ts" setup>
const { ayatWithSpecificLetterCount, getAyatWithSpecificLetterCount } =
  await useLetter();

const letter = ref("ع");
const count = ref(1);

const _getAyatWithSpecificLetterCount = async () => {
  await getAyatWithSpecificLetterCount(letter.value, count.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="حروف دلخواه خود را وارد کنید." size="lg">
        <UInput v-model="letter" placeholder="حروف" />
      </UFormGroup>

      <UFormGroup label="تعداد تکرار." size="lg">
        <UInput v-model="count" placeholder="تعداد" type="number" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getAyatWithSpecificLetterCount()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template
          v-for="(item, index) in ayatWithSpecificLetterCount"
          :key="index"
        >
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
