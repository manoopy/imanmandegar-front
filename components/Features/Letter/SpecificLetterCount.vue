<script lang="ts" setup>
const { specificLetterCountOfString, getSpecificLetterCountOfString } =
  await useLetter();

const text = ref("علی");
const letter = ref("ع");

const _getSpecificLetterCountOfString = async () => {
  await getSpecificLetterCountOfString(text.value, letter.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="حروف دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="letter" placeholder="حروف" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getSpecificLetterCountOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ specificLetterCountOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
