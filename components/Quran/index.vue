<script lang="ts" setup>
import quran from "@/assets/content/quran.json";

const config = useConfigStore();

const state = reactive({
  surah: 1,
  from: 1,
  to: 7,
});

const onSubmit = () => {
  config.surah = quran[state.surah].slice(state.from - 1, state.to + 1);
};

const copyText = () => {
  const res = config.surah.map((item) => item.text + " ").join("");

  navigator.clipboard.writeText(res).then(() => {
    alert("متن کپی شد");
  });
};
</script>

<template>
  <div>
    <UForm :state="state" @submit="onSubmit" class="grid grid-cols-4 gap-6">
      <UFormGroup label="سوره" name="surah" size="lg">
        <USelectMenu
          v-model="state.surah"
          :options="surahList"
          placeholder="انتخاب کنید"
          option-attribute="name"
          value-attribute="number"
        />
      </UFormGroup>

      <UFormGroup label="از آیه" name="from" size="lg">
        <UInput v-model="state.from" size="lg" type="number" />
      </UFormGroup>

      <UFormGroup label="تا آیه" name="to" size="lg">
        <UInput v-model="state.to" size="lg" type="number" />
      </UFormGroup>

      <div class="flex gap-2 items-end">
        <UButton label="اجرا" size="md" class="px-4" type="submit" />

        <UButton label="کپی" size="md" class="px-4" @click="copyText" />
      </div>
    </UForm>

    <div class="flex flex-col mt-12 text-lg">
      <template v-for="(ayah, index) in config.surah" :key="index">
        <p class="border-b border-gray-100 pb-2 mb-2 text-center">
          <span class="select-all">{{ ayah.text }}</span>
          <template v-if="index > 0">
            <span class="text-green-800 mr-1">({{ index }})</span>
          </template>
        </p>
      </template>
    </div>
  </div>
</template>
