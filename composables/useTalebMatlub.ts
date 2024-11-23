
const talebMatlubStatusOfString = ref();

export const useTalebMatlub = async () => {

  const getTalebMatlubStatusOfString = async (input: string) => {
    const { data } = await useIFetch<any>(
      `/api/TalebMatlub/GetTalebMatlubStatusOfString/${input}`
    );

    talebMatlubStatusOfString.value = data.value
  };


  return {
    // Values
    talebMatlubStatusOfString,

    // APIs
    getTalebMatlubStatusOfString,
  };
};
