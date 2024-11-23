<script setup lang="ts">
let surahs = [
  {
    name: "الحمد",
  },
  {
    name: "البقرة",
  },
  {
    name: "آل عمران",
  },
  {
    name: "النساء",
  },
  {
    name: "المائدة",
  },
  {
    name: "الأنعام",
  },
  {
    name: "الأعراف",
  },
  {
    name: "الأنفال",
  },
  {
    name: "التوبة",
  },
  {
    name: "يونس",
  },
  {
    name: "هود",
  },
  {
    name: "يوسف",
  },
  {
    name: "الرعد",
  },
  {
    name: "إبراهيم",
  },
  {
    name: "الحجر",
  },
  {
    name: "النحل",
  },
  {
    name: "الإسراء",
  },
  {
    name: "الكهف",
  },
  {
    name: "مريم",
  },
  {
    name: "طه",
  },
  {
    name: "الأنبياء",
  },
  {
    name: "الحج",
  },
  {
    name: "المؤمنون",
  },
  {
    name: "النور",
  },
  {
    name: "الفرقان",
  },
  {
    name: "الشعراء",
  },
  {
    name: "النمل",
  },
  {
    name: "القصص",
  },
  {
    name: "العنكبوت",
  },
  {
    name: "الروم",
  },
  {
    name: "لقمان",
  },
  {
    name: "السجدة",
  },
  {
    name: "الأحزاب",
  },
  {
    name: "سبأ",
  },
  {
    name: "فاطر",
  },
  {
    name: "يس",
  },
  {
    name: "الصافات",
  },
  {
    name: "ص",
  },
  {
    name: "الزمر",
  },
  {
    name: "غافر",
  },
  {
    name: "فصلت",
  },
  {
    name: "الشورى",
  },
  {
    name: "الزخرف",
  },
  {
    name: "الدخان",
  },
  {
    name: "الجاثية",
  },
  {
    name: "الأحقاف",
  },
  {
    name: "محمد",
  },
  {
    name: "الفتح",
  },
  {
    name: "الحجرات",
  },
  {
    name: "ق",
  },
  {
    name: "الذاريات",
  },
  {
    name: "الطور",
  },
  {
    name: "النجم",
  },
  {
    name: "القمر",
  },
  {
    name: "الرحمن",
  },
  {
    name: "الواقعة",
  },
  {
    name: "الحديد",
  },
  {
    name: "المجادلة",
  },
  {
    name: "الحشر",
  },
  {
    name: "الممتحنة",
  },
  {
    name: "الصف",
  },
  {
    name: "الجمعة",
  },
  {
    name: "المنافقون",
  },
  {
    name: "التغبن",
  },
  {
    name: "الطلاق",
  },
  {
    name: "التحريم",
  },
  {
    name: "الملك",
  },
  {
    name: "القلم",
  },
  {
    name: "الحاقة",
  },
  {
    name: "المعارج",
  },
  {
    name: "نوح",
  },
  {
    name: "الجن",
  },
  {
    name: "المزمل",
  },
  {
    name: "المدثر",
  },
  {
    name: "القيامة",
  },
  {
    name: "الإنسان",
  },
  {
    name: "المرسلات",
  },
  {
    name: "النبأ",
  },
  {
    name: "النازعات",
  },
  {
    name: "عبس",
  },
  {
    name: "التكوير",
  },
  {
    name: "الإنفطار",
  },
  {
    name: "المطففين",
  },
  {
    name: "الانشقاق",
  },
  {
    name: "البروج",
  },
  {
    name: "الطارق",
  },
  {
    name: "الأعلى",
  },
  {
    name: "الغاشية",
  },
  {
    name: "الفجر",
  },
  {
    name: "البلد",
  },
  {
    name: "الشمس",
  },
  {
    name: "الليل",
  },
  {
    name: "الضحى",
  },
  {
    name: "الانشراح",
  },
  {
    name: "التين",
  },
  {
    name: "العلق",
  },
  {
    name: "القدر",
  },
  {
    name: "البينة",
  },
  {
    name: "الزلزال",
  },
  {
    name: "العاديات",
  },
  {
    name: "القارعة",
  },
  {
    name: "التكاثر",
  },
  {
    name: "العصر",
  },
  {
    name: "الهمزة",
  },
  {
    name: "الفيل",
  },
  {
    name: "قريش",
  },
  {
    name: "الماعون",
  },
  {
    name: "الكوثر",
  },
  {
    name: "الكافرون",
  },
  {
    name: "النصر",
  },
  {
    name: "لهب",
  },
  {
    name: "الإخلاص",
  },
  {
    name: "الفلق",
  },
  {
    name: "الناس",
  },
];

const searchTypes = [
  {
    title: "سوره",
    value: "surah",
  },
  {
    title: "آیه",
    value: "ayah",
  },
  {
    title: "کلمات",
    value: "verse",
  },
];

const searchIn = ref("");
const customText = ref("");
const selected = ref(surahs[0]);

const initialLetterCount = reactive({
  letter: "",
  from: "",
  to: "",
});
const lettersCount = reactive([{ ...initialLetterCount }]);

const addLettersCount = (index: number) => {
  lettersCount.push({ ...initialLetterCount });
};
const removeLettersCount = (index: number) => {
  lettersCount.splice(index, 1);
};

const initialSearchRange = reactive({
  surah: "",
  from: "",
  to: "",
});
const searchRange = reactive([{ ...initialSearchRange }]);

const addSearchRange = (index: number) => {
  searchRange.push({ ...initialSearchRange });
};
const removeSearchRange = (index: number) => {
  searchRange.splice(index, 1);
};
</script>

<template>
  <div>
    <p class="text-xl font-bold mb-8">ویژگی یک</p>

    <div class="grid grid-cols-3 gap-12">
      <UFormGroup label="متن دلخواه خود را وارد کنید.">
        <UInput v-model="customText" placeholder="متن قرآن" />
      </UFormGroup>

      <div class="col-span-2 flex gap-12">
        <p class="w-36">محدوده جستجو:</p>

        <div class="grid grid-cols-4 gap-x-8 gap-y-3">
          <template v-for="(item, index) in searchRange" :key="4">
            <UFormGroup label="سوره">
              <USelectMenu
                v-model="searchRange[index].surah"
                :options="surahs"
                option-attribute="name"
                placeholder="انتخاب کنید"
              />
            </UFormGroup>

            <UFormGroup label="از آیه">
              <UInput v-model="searchRange[index].from" placeholder="عدد" />
            </UFormGroup>

            <UFormGroup label="تا آیه">
              <UInput v-model="searchRange[index].to" placeholder="عدد" />
            </UFormGroup>

            <div class="flex items-end gap-4">
              <template v-if="index == searchRange.length - 1">
                <UButton
                  icon="i-heroicons-plus"
                  color="green"
                  variant="soft"
                  @click="addSearchRange(index)"
                />
              </template>

              <template v-if="searchRange.length > 1">
                <UButton
                  icon="i-heroicons-x-mark"
                  color="red"
                  variant="soft"
                  @click="removeSearchRange(index)"
                />
              </template>
            </div>
          </template>
        </div>
      </div>

      <UFormGroup label="واحد جستجو">
        <USelectMenu
          v-model="searchIn"
          :options="searchTypes"
          option-attribute="title"
          by="value"
          placeholder="انتخاب کنید"
        />
      </UFormGroup>

      <div class="col-span-2 flex gap-12">
        <p class="w-36">تعداد حروف:</p>

        <div class="grid grid-cols-4 gap-x-8 gap-y-3">
          <template v-for="(item, index) in lettersCount" :key="index">
            <UFormGroup label="حرف">
              <UInput v-model="lettersCount[index].letter" placeholder="حرف" />
            </UFormGroup>

            <UFormGroup label="از">
              <UInput v-model="lettersCount[index].from" placeholder="عدد" />
            </UFormGroup>

            <UFormGroup label="تا">
              <UInput v-model="lettersCount[index].to" placeholder="عدد" />
            </UFormGroup>

            <div class="flex items-end gap-4">
              <template v-if="index == lettersCount.length - 1">
                <UButton
                  icon="i-heroicons-plus"
                  color="green"
                  variant="soft"
                  @click="addLettersCount(index)"
                />
              </template>

              <template v-if="lettersCount.length > 1">
                <UButton
                  icon="i-heroicons-x-mark"
                  color="red"
                  variant="soft"
                  @click="removeLettersCount(index)"
                />
              </template>
            </div>
          </template>
        </div>
      </div>

      <div class="col-span-full">
        <div class="flex justify-end">
          <UButton label="اجرا" class="px-12" />
        </div>
      </div>
    </div>

    <UCard class="mt-12">
      <template #header>
        <p>سوره فلان</p>
        <p>تعداد آیات</p>
      </template>

      <div>
        <p>﴿بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ١﴾</p>
        <p>
          ﴿الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ٢ الرَّحْمَنِ الرَّحِيمِ ٣
          مَالِكِ يَوْمِ الدِّينِ ٤ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ٥
          اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ٦ صِرَاطَ الَّذِينَ أَنْعَمْتَ
          عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ٧﴾
        </p>
      </div>

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </div>
</template>

<style scoped lang="scss"></style>
