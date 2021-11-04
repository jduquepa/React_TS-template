import { Switch } from 'react-router';
import envLocal from './env-local.json'
import envProd from './env-prod.json'
import envTest from './env-test.json'

export enum EnumEnvName{
    Dev = 'development',
    Prod = 'production',
    Test = 'test'
}

export interface ISettings{
    Base_API: string;
}

export function getSettings(){
    switch(process.env.NODE_ENV){
        case EnumEnvName.Dev:
            return envLocal as ISettings
        case EnumEnvName.Prod:
            return envProd as ISettings
        case EnumEnvName.Test:
            return envTest as ISettings
        default:
            throw new Error("No Env was selected");
    }
}

export default getSettings;