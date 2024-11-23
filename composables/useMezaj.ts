
const mezajOfString = ref();
const mezajStatusOfString = ref();

export const useMezaj = async () => {

  const getMezajOfString = async (input:string, type:number, mabna:string) => {
    const { data } = await useIFetch<any>(
      `/api/Mezaj/GetMezajOfString/${input}/${type}/${mabna}`
    );

    mezajOfString.value = data.value
  };
  
  
  const getMezajStatusOfString = async (input:string, type:number, mabna:string) => {
    const { data } = await useIFetch<any>(
      `/api/Mezaj/GetMezajStatusOfString/${input}/${type}/${mabna}`
    );

    mezajStatusOfString.value = data.value
  };

  return {
    // Values
    mezajOfString,
    mezajStatusOfString,
   

    // APIs
    getMezajOfString,
    getMezajStatusOfString
   

  };
};
