<script lang="ts" setup>
import quran from "@/assets/content/quran.json";
const config = useConfigStore();
const router = useRouter();

const items = [
  {
    label: "سوره",
    slot: "surah",
  },
  {
    label: "جزء",
    slot: "joz",
  },
  {
    label: "صفحه",
    slot: "page",
  },
];

const filters = reactive({
  surah: "",
  ayah: "",
});

const surahs = computed(() => {
  return surahList.filter((item) =>
    item.name.toLowerCase().includes(filters.surah.toLowerCase())
  );
});

const getSurah = (index: number) => {
  router.push("/");
  config.surah = quran[index];
};
</script>

<template>
  <div class="border-r-2 h-full px-4 py-5">
    <UTabs :items="items" class="w-full">
      <template #surah>
        <div class="grid grid-cols-3 gap-2 mb-2">
          <div class="col-span-2">
            <UInput v-model="filters.surah" placeholder="سوره" />
          </div>
          <div class="col-span-1">
            <UInput v-model="filters.ayah" placeholder="آیه" />
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div class="col-span-2">
            <div class="flex flex-col gap-y-2">
              <template v-for="(surah, index) in surahs" :key="index">
                <UButton
                  :label="`${index + 1} - ${surah.name}`"
                  variant="ghost"
                  @click="getSurah(index + 1)"
                />
              </template>
            </div>
          </div>
          <div class="col-span-1"></div>
        </div>
      </template>

      <template #joz> جزء </template>

      <template #page> page </template>
    </UTabs>
  </div>
</template>

<style lang="scss" scoped></style>
