
const ayatForBodyPart = ref();

export const useBodyPart = async () => {

  const getAyatForBodyPart = async (part:string) => {
    const { data } = await useIFetch<any>(
      `/api/BodyPart/GetAyatForBodyPart/${part}`
    );

    ayatForBodyPart.value = data.value
  };
  
  

  return {
    // Values
    ayatForBodyPart,
   

    // APIs
    getAyatForBodyPart,
   

  };
};
