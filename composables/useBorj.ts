
const borjStatus = ref();

export const useBorj = async () => {

  const getBorjStatus = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Borj/GetBorjStatus/${input}`
    );

    borjStatus.value = data.value
  };
  
  

  return {
    // Values
    borjStatus,
   

    // APIs
    getBorjStatus,
   

  };
};
