<script lang="ts" setup>
const { similarAbjadWord, getSimilarAbjadWord } = await useWord();

const word = ref("بسم");

const _getSimilarAbjadWord = async () => {
  await getSimilarAbjadWord(word.value);
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
          @click="_getSimilarAbjadWord()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <template v-for="(item, index) in similarAbjadWord" :key="index">
        <p>
          <span class="font-bold">{{ index + 1 }}- </span>
          {{ item }}
        </p>
      </template>
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
