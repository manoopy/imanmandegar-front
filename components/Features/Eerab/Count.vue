<script lang="ts" setup>
const { eerabCountOfString, getEerabCountOfString } = await useEerab();

const eerabs = [
  { title: "تنوین فتحه", value: "tanween_fatha" },
  { title: "تنوین ضمه", value: "tanween_zamma" },
  { title: "تنوین کسره", value: "tanween_kasra" },
  { title: "فتحه", value: "fatha" },
  { title: "ضمه", value: "zamma" },
  { title: "کسره", value: "kasra" },
  { title: "سکون", value: "sokun" },
  { title: "الف مقصوره", value: "alif_maqsura" },
  { title: "همه", value: "all" },
];

const text = ref("علی");
const selected = ref(eerabs[0].value);

const _getEerabCountOfString = async () => {
  await getEerabCountOfString(text.value, selected.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <div class="flex flex-col gap-4">
      <UFormGroup label="متن دلخواه خود را وارد کنید." size="lg">
        <UTextarea v-model="text" placeholder="متن قرآن" />
      </UFormGroup>

      <UFormGroup label="اعراب" size="lg">
        <USelectMenu
          v-model="selected"
          :options="eerabs"
          placeholder="انتخاب کنید"
          option-attribute="title"
          value-attribute="value"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton
          @click="_getEerabCountOfString()"
          label="اجرا"
          size="md"
          class="px-8"
        />
      </div>
    </div>

    <FeaturesOutput>
      {{ eerabCountOfString }}
    </FeaturesOutput>
  </div>
</template>

<style scoped></style>
