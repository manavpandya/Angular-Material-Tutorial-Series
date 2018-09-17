import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';
import { StepperComponentComponent } from './stepper-component/stepper-component.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { SidenavComponentComponent } from './sidenav-component/sidenav-component.component';
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';
import { BottomsheetComponentComponent } from './bottomsheet-component/bottomsheet-component.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { SnackbarComponentComponent } from './snackbar-component/snackbar-component.component';
import { TooltipComponentComponent } from './tooltip-component/tooltip-component.component';

const appRoutes: Routes = [
    // Default Page   
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponentComponent },
    { path: 'stepper', component: StepperComponentComponent },
    { path: 'tabs', component: TabsComponentComponent },
    { path: 'menu', component: MenuComponentComponent },
    { path: 'sidenav', component: SidenavComponentComponent },
    { path: 'toolbar', component: ToolbarComponentComponent },
    { path: 'bottomsheet', component: BottomsheetComponentComponent },
    { path: 'dialog', component: DialogComponentComponent },
    { path: 'snackbar', component: SnackbarComponentComponent },
    { path: 'tooltip', component: TooltipComponentComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);