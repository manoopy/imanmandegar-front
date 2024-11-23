
const letterCountOfString = ref();
const specificLetterCountOfString = ref();
const ayatWithSpecificLetterCount = ref();
const ayatWithSpecificStartEndLetter = ref();
const ayatWithSpecificLetter = ref();
const ayatWithoutSpecificLetter = ref();
const sureWitSpecificLetter = ref();
const sureWithoutSpecificLetter = ref();

export const useLetter = async () => {

  const getLetterCountOfString = async (input: string) => {
    const { data } = await useIFetch<any>(
      `/GetLetterCountOfString/${input}`
    );

    letterCountOfString.value = data.value
  };


  const getSpecificLetterCountOfString = async (input: string, letter: string) => {
    const { data } = await useIFetch<any>(
      `/GetSpecificLetterCountOfString/${input}/${letter}`
    );

    specificLetterCountOfString.value = data.value
  };


  const getAyatWithSpecificLetterCount = async (letter: string, count: number) => {
    const { data } = await useIFetch<any>(
      `/GetAyatWithSpecificLetterCount/${letter}/${count}`
    );

    ayatWithSpecificLetterCount.value = data.value
  };

  const getAyatWithSpecificStartEndLetter = async (start: string, end: string) => {
    const { data } = await useIFetch<any>(
      `/GetAyatWithSpecificStartEndLetter/${start}/${end}`
    );

    ayatWithSpecificStartEndLetter.value = data.value
  };

  const getAyatWithSpecificLetter = async (letter: string) => {
    const { data } = await useIFetch<any>(
      `/GetAyatWithSpecificLetter/${letter}`
    );

    ayatWithSpecificLetter.value = data.value
  };

  const getAyatWithoutSpecificLetter = async (letter: string) => {
    const { data } = await useIFetch<any>(
      `/GetAyatWithoutSpecificLetter/${letter}`
    );

    ayatWithoutSpecificLetter.value = data.value
  };


  const getSureWitSpecificLetter = async (letter: string) => {
    const { data } = await useIFetch<any>(
      `/GetSureWitSpecificLetter/${letter}`
    );

    sureWitSpecificLetter.value = data.value
  };

  const getSureWithoutSpecificLetter = async (letter: string) => {
    const { data } = await useIFetch<any>(
      `/GetSureWithoutSpecificLetter/${letter}`
    );

    sureWithoutSpecificLetter.value = data.value
  };



  return {
    // Values
    letterCountOfString,
    specificLetterCountOfString,
    ayatWithSpecificLetterCount,
    ayatWithSpecificStartEndLetter,
    ayatWithSpecificLetter,
    ayatWithoutSpecificLetter,
    sureWitSpecificLetter,
    sureWithoutSpecificLetter,


    // APIs
    getLetterCountOfString,
    getSpecificLetterCountOfString,
    getAyatWithSpecificLetterCount,
    getAyatWithSpecificStartEndLetter,
    getAyatWithSpecificLetter,
    getAyatWithoutSpecificLetter,
    getSureWitSpecificLetter,
    getSureWithoutSpecificLetter


  };
};
