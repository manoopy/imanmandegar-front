
const eerabCountOfString = ref();

export const useEerab = async () => {

  const getEerabCountOfString = async (input:string, eerab:string) => {
    const { data } = await useIFetch<any>(
      `/api/Eerab/GetEerabCountOfString/${input}/${eerab}`
    );

    eerabCountOfString.value = data.value
  };
  
  

  return {
    // Values
    eerabCountOfString,
   

    // APIs
    getEerabCountOfString,
   

  };
};
