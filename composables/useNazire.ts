
const tarafoOfString= ref();
const tanazolOfString= ref();
const azireOfString= ref();

export const useNazire = async () => {

  const getTarafoOfString = async (circle:string, input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Nazire/GetTarafoOfString/${circle}/${input}`
    );

    tarafoOfString.value = data.value
  };
  
  
  const getTanazolOfString = async (circle:string, input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Nazire/GetTanazolOfString/${circle}/${input}`
    );

    tanazolOfString.value = data.value
  };


  const getazireOfString = async (circle:string, input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Nazire/GetazireOfString/${circle}/${input}`
    );

    azireOfString.value = data.value
  };
  return {
    // Values
    tarafoOfString,
    tanazolOfString,
    azireOfString,
   

    // APIs
    getTarafoOfString,
    getTanazolOfString,
    getazireOfString,
   

  };
};
