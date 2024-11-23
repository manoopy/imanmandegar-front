<script lang="ts" setup>
const { wordCountOfQuran, getWordCountOfQuran } = await useWord();

const word = ref("بسم");

const _getWordCountOfQuran = async () => {
  await getWordCountOfQuran(word.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="عبارت خود را وارد کنید." size="lg">
        <UTextarea v-model="word" placeholder="متن" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getWordCountOfQuran()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ wordCountOfQuran }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
