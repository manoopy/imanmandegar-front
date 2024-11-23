
const pronunciationCountOfString = ref();
const pronunciationStatus = ref();

export const usePronunciation = async () => {

  const getPronunciationCountOfString = async (input:string, pronunciation:string) => {
    const { data } = await useIFetch<any>(
      `/api/Pronunciation/GetPronunciationCountOfString/${input}/${pronunciation}`
    );

    pronunciationCountOfString.value = data.value
  };
  
  
  const getPronunciationStatus = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Pronunciation/GetPronunciationStatus/${input}`
    );

    pronunciationStatus.value = data.value
  };

  return {
    // Values
    pronunciationCountOfString,
    pronunciationStatus,
   

    // APIs
    getPronunciationCountOfString,
    getPronunciationStatus
   

  };
};
