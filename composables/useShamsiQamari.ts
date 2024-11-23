
const shamsiQamariStatusOfString = ref();

export const useShamsiQamari = async () => {

  const getShamsiQamariStatusOfString = async (input: string) => {
    const { data } = await useIFetch<any>(
      `/api/ShamsiQamari/GetShamsiQamariStatusOfString/${input}`
    );

    shamsiQamariStatusOfString.value = data.value
  };



  return {
    // Values
    shamsiQamariStatusOfString,


    // APIs
    getShamsiQamariStatusOfString,
  };
};
