<script lang="ts" setup>
const features = [
  {
    label: "بست",
    defaultOpen: true,
    slot: "bast",
    items: [
      {
        title: "تلفظ",
        name: "bastTalaffoz",
      },
      {
        title: "عددی",
        name: "bastAdadi",
      },
      {
        title: "عددی عدد",
        name: "bastAdadiAdad",
      },
      {
        title: "عزیزی",
        name: "bastAzizi",
      },
      {
        title: "مضاعف",
        name: "bastMozaaf",
      },
    ],
  },
  {
    label: "اعضای بدن",
    defaultOpen: true,
    slot: "aazaye-badan",
    items: [
      {
        title: "آیات برای اعضای بدن",
        name: "ayatForBadan",
      },
    ],
  },
  {
    label: "برج",
    defaultOpen: true,
    slot: "borj",
    items: [
      {
        title: "وضعیت",
        name: "borjStatus",
      },
    ],
  },
  {
    label: "نقطه",
    defaultOpen: true,
    slot: "noghteh",
    items: [
      {
        title: "تعداد نقطه در آیه",
        name: "noghtehCount",
      },
      {
        title: "نمایش آیات با تعداد نقطه",
        name: "noghtehAyatWithSpecificNoqteCount",
      },
    ],
  },
  {
    label: "اعراب",
    defaultOpen: true,
    slot: "eerab",
    items: [
      {
        title: "تعداد اعراب",
        name: "eerabCount",
      },
    ],
  },
  // {
  //   label: "عمومی",
  //   defaultOpen: true,
  //   slot: "omomi",
  //   items: [
  //     {
  //       title: "تست",
  //       name: "test",
  //     },
  //   ],
  // },
  {
    label: "کوکب",
    defaultOpen: true,
    slot: "kokab",
    items: [
      {
        title: "وضعیت",
        name: "kokabStatus",
      },
    ],
  },
  {
    label: "حروف",
    defaultOpen: true,
    slot: "horof",
    items: [
      {
        title: "تعداد حروف",
        name: "horofCount",
      },
      {
        title: "تعداد حروف مشخص",
        name: "horofSpecificCount",
      },
      {
        title: "نمایش آیات با حرف و تعداد تکرار مشخص",
        name: "horofAyatWithSpecificLetterCount",
      },
      {
        title: "نمایش آیات با شروع و پایان حرف های مشخص",
        name: "horofAyatWithSpecificStartEndLetter",
      },
      {
        title: "نمایش آیات با حروف مشخص",
        name: "horofAyatWithSpecificLetter",
      },
      {
        title: "نمایش آیات با عدم حروف مشخص شده در آن",
        name: "horofAyatWithoutSpecificLetter",
      },
      {
        title: "نمایش سوره با حروف مشخص",
        name: "horofSureWitSpecificLetter",
      },
      {
        title: "نمایش سوره با عدم حروف مشخص در آن",
        name: "horofSureWithoutSpecificLetter",
      },
    ],
  },
  {
    label: "نورانی ظلمانی",
    defaultOpen: true,
    slot: "light",
    items: [
      {
        title: "تعداد نورانی و ظلمانی",
        name: "lightCount",
      },
      {
        title: "وضعیت نورانی و ظلمانی",
        name: "lightStatus",
      },
    ],
  },
  {
    label: "مزاج",
    defaultOpen: true,
    slot: "mezaj",
    items: [
      {
        title: "نمایش مزاج",
        name: "mezajMezaj",
      },
      {
        title: "نمایش وضعیت مزاج",
        name: "mezajStatus",
      },
    ],
  },
  {
    label: "طبیعت",
    defaultOpen: true,
    slot: "tabiat",
    items: [
      {
        title: "وضعیت",
        name: "tabiatStatus",
      },
    ],
  },
  {
    label: "نظیر",
    defaultOpen: true,
    slot: "nazir",
    items: [
      {
        title: "ترفع",
        name: "nazirTarafo",
      },
      {
        title: "تنزل",
        name: "nazirTanazol",
      },
      {
        title: "ازیر",
        name: "nazirAzire",
      },
    ],
  },
  {
    label: "شماره",
    defaultOpen: true,
    slot: "shomareh",
    items: [
      {
        title: "تبدیل حروف به شماره",
        name: "shomarehToNumber",
      },
      {
        title: "تبدیل شماره به حروف",
        name: "shomarehToLetter",
      },
    ],
  },
  {
    label: "تلفظ",
    defaultOpen: true,
    slot: "talaffoz",
    items: [
      {
        title: "تعداد",
        name: "talaffozCount",
      },
      {
        title: "وضعیت",
        name: "talaffozStatus",
      },
    ],
  },
  {
    label: "شمسی قمری",
    defaultOpen: true,
    slot: "shamsi-ghamari",
    items: [
      {
        title: "وضعیت",
        name: "shamsi-ghamariStatus",
      },
    ],
  },
  {
    label: "تکسیر",
    defaultOpen: true,
    slot: "taksir",
    items: [
      {
        title: "تست",
        name: "test",
      },
    ],
  },
  {
    label: "طالب و مطلوب",
    defaultOpen: true,
    slot: "taleb-matlob",
    items: [
      {
        title: "وضعیت",
        name: "taleb-matlobStatus",
      },
    ],
  },
  {
    label: "وفق",
    defaultOpen: true,
    slot: "vefg",
    items: [
      {
        title: "تست",
        name: "test",
      },
    ],
  },
  {
    label: "کلمه",
    defaultOpen: true,
    slot: "kalameh",
    items: [
      {
        title: "تعداد در متن",
        name: "kalamehCount",
      },
      {
        title: "تعداد در قران",
        name: "kalamehCountOfQuran",
      },
      {
        title: "نمایش آیات با حروف و تعداد تکرار آن",
        name: "kalamehAyatWithSpecificWordCount",
      },
      {
        title: "نمایش کلمه های با ابجد مشابه",
        name: "kalamehSimilarAbjadWord",
      },
    ],
  },
];
</script>

<template>
  <div class="border-l-2 h-full px-4 py-5">
    <UAccordion :items="features" multiple>
      <template
        v-for="(menuItem, index) in features"
        :key="index"
        #[menuItem.slot]
      >
        <div class="flex flex-col gap-y-2 pr-4">
          <template v-for="(menu, index2) in menuItem.items" :key="index2">
            <ULink
              :to="{
                name: 'features-page-name',
                params: {
                  page: menuItem.slot,
                  name: menu.name,
                },
              }"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {{ menu.title }}
            </ULink>
          </template>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<style lang="scss" scoped></style>
