import Languajes from './languages.json'

export interface ILanguage{
    code: string,
    description: string
}

export interface IMasterData{
    masterData:string
}

export function getMasterData<MasterData>(){

    const masterData: IMasterData = <IMasterData>{};
    masterData.masterData ="This is the MD Object"
    return masterData;
} 

export default getMasterData;
    
