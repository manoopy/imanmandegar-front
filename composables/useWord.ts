
const wordCountOfString = ref();
const wordCountOfQuran = ref();
const ayatWithSpecificWordCount = ref();
const similarAbjadWord = ref();

export const useWord = async () => {


  const getWordCountOfString = async (input: string, word: string) => {
    const { data } = await useIFetch<any>(
      `/api/Word/GetWordCountOfString/${input}/${word}`
    );

    wordCountOfString.value = data.value
  };

  const getWordCountOfQuran = async (word: string) => {
    const { data } = await useIFetch<any>(
      `/api/Word/GetWordCountOfQuran/${word}`
    );

    wordCountOfQuran.value = data.value
  };

  const getAyatWithSpecificWordCount = async (word: string, count: number) => {
    const { data } = await useIFetch<any>(
      `/api/Word/GetAyatWithSpecificWordCount/${word}/${count}`
    );

    ayatWithSpecificWordCount.value = data.value
  };

  const getSimilarAbjadWord = async (word: string) => {
    const { data } = await useIFetch<any>(
      `/api/Word/GetSimilarAbjadWord/${word}`
    );

    similarAbjadWord.value = data.value
  };

  return {
    // Values
    wordCountOfString,
    wordCountOfQuran,
    ayatWithSpecificWordCount,
    similarAbjadWord,


    // APIs
    getWordCountOfString,
    getWordCountOfQuran,
    getAyatWithSpecificWordCount,
    getSimilarAbjadWord,


  };
};
