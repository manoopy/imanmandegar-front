<script lang="ts" setup>
const { sureWitSpecificLetter, getSureWitSpecificLetter } = await useLetter();

const letter = ref("علی");

const _getSureWitSpecificLetter = async () => {
  await getSureWitSpecificLetter(letter.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="حروف خود را وارد کنید." size="lg">
        <UInput v-model="letter" placeholder="حروف" />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getSureWitSpecificLetter()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      <div class="flex flex-col">
        <template v-for="(item, index) in sureWitSpecificLetter" :key="index">
          <div class="border-b pb-3 mb-3">
            <p>
              <span class="font-bold">شماره سوره: </span>
              {{ item }}
            </p>
          </div>
        </template>
      </div>
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
