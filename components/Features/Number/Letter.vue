<script lang="ts" setup>
const { letterOfNumber, getLetterOfNumber } = await useNumber();

const number = ref(110);

const _getLetterOfNumber = async () => {
  await getLetterOfNumber(number.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="number" placeholder="متن قرآن" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getLetterOfNumber()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ letterOfNumber }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
