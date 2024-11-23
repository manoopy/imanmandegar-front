<script lang="ts" setup>
const route = useRoute();

const renderComponent = computed(() => {
  const components = {
    bastTalaffoz: resolveComponent("LazyFeaturesBastTalaffoz"),
    bastAdadi: resolveComponent("LazyFeaturesBastAdadi"),
    bastAdadiAdad: resolveComponent("LazyFeaturesBastAdadiAdad"),
    bastAzizi: resolveComponent("LazyFeaturesBastAzizi"),
    bastMozaaf: resolveComponent("LazyFeaturesBastMozaaf"),
    ayatForBadan: resolveComponent("LazyFeaturesAazayeBadanAyatForBody"),
    borjStatus: resolveComponent("LazyFeaturesBorjStatus"),
    noghtehCount: resolveComponent("LazyFeaturesDotCount"),
    noghtehAyatWithSpecificNoqteCount: resolveComponent(
      "LazyFeaturesDotAyatWithSpecificNoqteCount"
    ),
    eerabCount: resolveComponent("LazyFeaturesEerabCount"),
    kokabStatus: resolveComponent("LazyFeaturesKokabStatus"),
    horofCount: resolveComponent("LazyFeaturesLetterCount"),
    horofSpecificCount: resolveComponent(
      "LazyFeaturesLetterSpecificLetterCount"
    ),
    horofAyatWithSpecificLetterCount: resolveComponent(
      "LazyFeaturesLetterAyatWithSpecificLetterCount"
    ),
    horofAyatWithSpecificStartEndLetter: resolveComponent(
      "LazyFeaturesLetterAyatWithSpecificStartEndLetter"
    ),
    horofAyatWithSpecificLetter: resolveComponent(
      "LazyFeaturesLetterAyatWithSpecificLetter"
    ),
    horofAyatWithoutSpecificLetter: resolveComponent(
      "LazyFeaturesLetterAyatWithoutSpecificLetter"
    ),
    horofSureWitSpecificLetter: resolveComponent(
      "LazyFeaturesLetterSureWitSpecificLetter"
    ),
    horofSureWithoutSpecificLetter: resolveComponent(
      "LazyFeaturesLetterSureWithoutSpecificLetter"
    ),

    lightCount: resolveComponent("LazyFeaturesLightCount"),
    lightStatus: resolveComponent("LazyFeaturesLightStatus"),

    mezajMezaj: resolveComponent("LazyFeaturesMezaj"),
    mezajStatus: resolveComponent("LazyFeaturesMezajStatus"),

    tabiatStatus: resolveComponent("LazyFeaturesNatureStatus"),

    nazirTarafo: resolveComponent("LazyFeaturesNazireTarafo"),
    nazirTanazol: resolveComponent("LazyFeaturesNazireTanazol"),
    nazirAzire: resolveComponent("LazyFeaturesNazireAzire"),

    shomarehToNumber: resolveComponent("LazyFeaturesNumber"),
    shomarehToLetter: resolveComponent("LazyFeaturesNumberLetter"),

    talaffozCount: resolveComponent("LazyFeaturesPronunciationCount"),
    talaffozStatus: resolveComponent("LazyFeaturesPronunciationStatus"),
    "shamsi-ghamariStatus": resolveComponent("LazyFeaturesShamsiQamariStatus"),
    "taleb-matlobStatus": resolveComponent("LazyFeaturesTalebMatlubStatus"),

    kalamehCount: resolveComponent("LazyFeaturesWordCount"),
    kalamehCountOfQuran: resolveComponent("LazyFeaturesWordCountOfQuran"),
    kalamehAyatWithSpecificWordCount: resolveComponent(
      "LazyFeaturesWordAyatWithSpecificWordCount"
    ),
    kalamehSimilarAbjadWord: resolveComponent(
      "LazyFeaturesWordSimilarAbjadWord"
    ),
  };

  return components[route.params.name];
});
</script>

<template>
  <div>
    <component v-if="renderComponent" :is="renderComponent" />
    <p v-else>محتوایی ندارد</p>
  </div>
</template>
