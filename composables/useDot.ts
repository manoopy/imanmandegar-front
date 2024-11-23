
const dotCountOfString = ref();
const ayatWithSpecificNoqteCount = ref();

export const useDot = async () => {

  const getDotCountOfString = async (input: string) => {
    const { data } = await useIFetch<any>(
      `/GetDotCountOfString/${input}`
    );

    dotCountOfString.value = data.value
  };


  const getAyatWithSpecificNoqteCount = async (count: number) => {
    const { data } = await useIFetch<any>(
      `/GetAyatWithSpecificNoqteCount/${count}`
    );

    ayatWithSpecificNoqteCount.value = data.value
  };

  return {
    // Values
    dotCountOfString,
    ayatWithSpecificNoqteCount,


    // APIs
    getDotCountOfString,
    getAyatWithSpecificNoqteCount


  };
};
