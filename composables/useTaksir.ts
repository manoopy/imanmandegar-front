
const taksirMoakharSadr = ref();
const taksirSadrMoakhar = ref();
const taksirMashhur = ref();
const taksirMosanaFirstPart = ref();
const taksirMosanaSecondPart = ref();
const taksirMosanaReverse = ref();
const taksirMosanaReverseReverse = ref();



export const useTaksir = async () => {

  const getTaksirMoakharSadr = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirMoakharSadr/${input}`
    );

    taksirMoakharSadr.value = data.value
  };

  const getTaksirSadrMoakhar = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirSadrMoakhar/${input}`
    );

    taksirSadrMoakhar.value = data.value
  };

  const getTaksirMashhur = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirMashhur/${input}`
    );

    taksirMashhur.value = data.value
  };

  const getTaksirMosanaFirstPart = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirMosanaFirstPart/${input}`
    );

    taksirMosanaFirstPart.value = data.value
  };

  const getTaksirMosanaSecondPart = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirMosanaSecondPart/${input}`
    );

    taksirMosanaSecondPart.value = data.value
  };

  const getTaksirMosanaReverse = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirMosanaReverse/${input}`
    );

    taksirMosanaReverse.value = data.value
  };

  const getTaksirMosanaReverseReverse = async (input:string) => {
    const { data } = await useIFetch<any>(
      `/api/Taksir/GetTaksirMosanaReverseReverse/${input}`
    );

    taksirMosanaReverseReverse.value = data.value
  };
  
  


  return {
    // Values
    taksirMoakharSadr,
    taksirSadrMoakhar,
    taksirMashhur,
    taksirMosanaFirstPart,
    taksirMosanaSecondPart,
    taksirMosanaReverse,
    taksirMosanaReverseReverse,
   

    // APIs
    getTaksirMoakharSadr,
    getTaksirSadrMoakhar,
    getTaksirMashhur,
    getTaksirMosanaFirstPart,
    getTaksirMosanaSecondPart,
    getTaksirMosanaReverse,
    getTaksirMosanaReverseReverse,
   

  };
};
