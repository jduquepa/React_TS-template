import routes from './Routes/routes'
import getSettings, { ISettings }  from './Settings/Settings'
import {getLanguajeText, EnumLanguage, SelectedLanguage }  from './Text/Text'
import  getMasterData,{IMasterData } from './MasterData/MasterData'
import  getServices, { IService } from './Services/Services'

export interface IConfig{
    text: Object,
    selectedLanguage: EnumLanguage,
    masterData: IMasterData,
    services:Array<IService>;
    settings:ISettings
}

export function getConfiguration(){
    const config : IConfig = <IConfig>{};
    config.masterData= getMasterData(),
    config.selectedLanguage = SelectedLanguage;
    config.text = getLanguajeText(SelectedLanguage);
    config.services = getServices();
    config.settings = getSettings()
    
    return config;
}

export default getConfiguration