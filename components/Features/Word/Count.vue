<script lang="ts" setup>
const { wordCountOfString, getWordCountOfString } = await useWord();

const text = ref("بسم الله");
const word = ref("بسم");

const _getWordCountOfString = async () => {
  await getWordCountOfString(text.value, word.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="عبارت خود را وارد کنید." size="lg">
        <UTextarea v-model="word" placeholder="متن" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getWordCountOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ wordCountOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
