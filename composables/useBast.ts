
const bastTalafozOfString = ref();
const bastAdadiOfString = ref();
const bastAdadiAdadOfString = ref();
const bastAziziOfString = ref();
const bastMozaafOfString = ref();

export const useBast = async () => {

  const getBastTalafozOfString = async (input:string, level:number) => {
    const { data } = await useIFetch<any>(
      `/api/Bast/GetBastTalafozOfString/${input}/${level}`
    );

    bastTalafozOfString.value = data.value
  };

  const getBastAdadiOfString = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Bast/GetBastAdadiOfString/${input}`
    );

    bastAdadiOfString.value = data.value
  };


  const getBastAdadiAdadOfString = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Bast/GetBastAdadiAdadOfString/${input}`
    );

    bastAdadiAdadOfString.value = data.value
  };
  
  const getBastAziziOfString = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Bast/GetBastAziziOfString/${input}`
    );

    bastAziziOfString.value = data.value
  };
  
  const getBastMozaafOfString = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Bast/GetBastMozaafOfString/${input}`
    );

    bastMozaafOfString.value = data.value
  };
  
  

  return {
    // Values
    bastTalafozOfString,
    bastAdadiOfString,
    bastAdadiAdadOfString,
    bastAziziOfString,
    bastMozaafOfString,

    // APIs
    getBastTalafozOfString,
    getBastAdadiOfString,
    getBastAdadiAdadOfString,
    getBastAziziOfString,
    getBastMozaafOfString,

  };
};
