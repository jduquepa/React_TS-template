import routes from './routes.json'

export interface IComponent {
    component: string,
    url: string,
    requireLogin: boolean
}

export function getRoute(component: IComponent, userLogued: boolean) {
    return  getRoutes(userLogued).find((route) => route.component == component.component);
};

export function getRoutes(userLogued: boolean){
    const allRoutes = routes as Array<IComponent>;
    if(userLogued) 
        return allRoutes;
    else
        return allRoutes.filter((routes) => routes.requireLogin === false);
}

export default getRoutes;