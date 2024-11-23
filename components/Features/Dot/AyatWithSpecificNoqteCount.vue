<script lang="ts" setup>
const { ayatWithSpecificNoqteCount, getAyatWithSpecificNoqteCount } =
  await useDot();

const count = ref(1);

const _getAyatWithSpecificNoqteCount = async () => {
  await getAyatWithSpecificNoqteCount(count.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="تعداد نقطه را وارد کنید." size="lg">
        <UInput v-model="count" placeholder="تعداد" type="number" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getAyatWithSpecificNoqteCount()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template
          v-for="(item, index) in ayatWithSpecificNoqteCount"
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
