import { MenuComponent } from '../app/menu/menu.component';
import { MenuEventComponent } from '../app/menu/menu-event.component';
import { MenuCDNComponent } from '../app/menu/menu-cdn.component';
import { MenuConfiguredComponent } from '../app/menu/menu-configured.component';


export default {
    title: 'Menu',
    component: MenuComponent,
};

export const Base = () => ({
    component: MenuComponent,
});

export const Configurated = () => ({
    component: MenuConfiguredComponent,
});

export const CDN = () => ({
    component: MenuCDNComponent,
});

export const Events = () => ({
    component: MenuEventComponent,
});

// // export const Data = () => ({
// //     component: RibbonDataComponent,
// // });


