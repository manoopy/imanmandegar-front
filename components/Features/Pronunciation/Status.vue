<script lang="ts" setup>
const { pronunciationStatus, getPronunciationStatus } =
  await usePronunciation();

const text = ref("علی");

const _getPronunciationStatus = async () => {
  await getPronunciationStatus(text.value);
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
          @click="_getPronunciationStatus()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template v-for="(item, index) in pronunciationStatus" :key="index">
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
