
const kokabStatusOfString = ref();

export const useKokab = async () => {

  const getKokabStatusOfString = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Kokab/GetKokabStatusOfString/${input}`
    );

    kokabStatusOfString.value = data.value
  };
  
  

  return {
    // Values
    kokabStatusOfString,
   

    // APIs
    getKokabStatusOfString,
   

  };
};
