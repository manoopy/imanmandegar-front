<script lang="ts" setup>
const { ayatWithSpecificStartEndLetter, getAyatWithSpecificStartEndLetter } =
  await useLetter();

const start = ref("ا");
const end = ref("ب");

const _getAyatWithSpecificStartEndLetter = async () => {
  await getAyatWithSpecificStartEndLetter(start.value, end.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="حرف شروع خود را وارد کنید." size="lg">
        <UInput v-model="start" placeholder="حرف شروع" />
      </UFormGroup>

      <UFormGroup label="حرف پایان خود را وارد کنید." size="lg">
        <UInput v-model="end" placeholder="حرف پایان" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getAyatWithSpecificStartEndLetter()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template
          v-for="(item, index) in ayatWithSpecificStartEndLetter"
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
