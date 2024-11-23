
const numberOfString = ref();
const letterOfNumber = ref();

export const useNumber = async () => {

  const getNumberOfString = async (circle: string, input: string) => {
    const { data } = await useIFetch<any>(
      `/api/Number/GetNumberOfString/${circle}/${input}`
    );

    numberOfString.value = data.value
  };


  const getLetterOfNumber = async (number: number) => {
    const { data } = await useIFetch<any>(
      `/api/Number/GetLetterOfNumber/${number}`
    );

    letterOfNumber.value = data.value
  };

  return {
    // Values
    numberOfString,
    letterOfNumber,


    // APIs
    getNumberOfString,
    getLetterOfNumber


  };
};
