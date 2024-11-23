
const lightCountOfString = ref();
const lightStatusOfString = ref();

export const useLight = async () => {

  const getLightCountOfString = async (input:string, light:string) => {
    const { data } = await useIFetch<any>(
      `/api/Light/GetLightCountOfString/${input}/${light}`
    );

    lightCountOfString.value = data.value
  };
  
  
  const getLightStatusOfString = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Light/GetLightStatusOfString/${input}`
    );

    lightStatusOfString.value = data.value
  };

  return {
    // Values
    lightCountOfString,
    lightStatusOfString,
   

    // APIs
    getLightCountOfString,
    getLightStatusOfString
   

  };
};
