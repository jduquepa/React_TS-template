import Services from './services.json'

export interface IService{
    name: string,
    type: string,
    url: string
}

export function getServices(){
    return Services as Array<IService>;
}

export default getServices;

