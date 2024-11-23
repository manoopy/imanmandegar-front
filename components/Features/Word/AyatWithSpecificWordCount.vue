<script lang="ts" setup>
const { ayatWithSpecificWordCount, getAyatWithSpecificWordCount } =
  await useWord();

const word = ref("بسم");
const count = ref(1);

const _getAyatWithSpecificWordCount = async () => {
  await getAyatWithSpecificWordCount(word.value, count.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="عبارت خود را وارد کنید." size="lg">
        <UTextarea v-model="word" placeholder="متن" />
      </UFormGroup>

      <UFormGroup label="تعداد را وارد کنید." size="lg">
        <UInput v-model="count" placeholder="تعداد" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getAyatWithSpecificWordCount()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template
          v-for="(item, index) in ayatWithSpecificWordCount"
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
