
const natureStatusOfString = ref();

export const useNature = async () => {

  const getNatureStatusOfString = async (input: string) => {
    const { data } = await useIFetch<any>(
      `/api/Nature/GetNatureStatusOfString/${input}`
    );

    natureStatusOfString.value = data.value
  };

  return {
    // Values
    natureStatusOfString,

    // APIs
    getNatureStatusOfString,
  };
};
