
const filterString = ref();
const aye = ref();
const ayatOfSure = ref();
const ayatOfInterval = ref();


export const useGeneral = async () => {

  const getFilterString = async (input:string, repeatLetter:boolean, upAlef:boolean, endTa:boolean, hamze:boolean) => {
    const { data } = await useIFetch<any>(
      `/api/General/FilterString/${input}/${repeatLetter}/${upAlef}/${endTa}/${hamze}`
    );

    filterString.value = data.value
  };
  
  const getAye = async (key:string) => {
    const { data } = await useIFetch<any>(
      `/api/General/GetAye/${key}`
    );

    aye.value = data.value
  };
  
  const getAyatOfSure = async (sure:number) => {
    const { data } = await useIFetch<any>(
      `/api/General/GetAyatOfSure/${sure}`
    );

    ayatOfSure.value = data.value
  };
  
  const getAyatOfInterval = async (skey:string, ekey:string) => {
    const { data } = await useIFetch<any>(
      `/api/General/GetAyatOfInterval/${skey}/${ekey}`
    );

    ayatOfInterval.value = data.value
  };
  

  return {
    // Values
    filterString,
    aye,
    ayatOfSure,
    ayatOfInterval,
   

    // APIs
    getFilterString,
    getAye,
    getAyatOfSure,
    getAyatOfInterval,
   

  };
};
