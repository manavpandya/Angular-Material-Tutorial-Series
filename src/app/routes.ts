import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { ButtonsComponentComponent } from './buttons-component/buttons-component.component';
import { TogglebuttonsComponentComponent } from './togglebuttons-component/togglebuttons-component.component';
import { BadgeComponentComponent } from './badge-component/badge-component.component';
import { ChipsComponentComponent } from './chips-component/chips-component.component';
import { ProgressbarComponentComponent } from './progressbar-component/progressbar-component.component';
import { ProgressspinnerComponentComponent } from './progressspinner-component/progressspinner-component.component';

const appRoutes: Routes = [
    // Default Page   
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
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
    { path: 'buttons', component: ButtonsComponentComponent },
    { path: 'togglebutton', component: TogglebuttonsComponentComponent },
    { path: 'badge', component: BadgeComponentComponent },
    { path: 'chips', component: ChipsComponentComponent },
    { path: 'progressbar', component: ProgressbarComponentComponent },
    { path: 'progresspinner', component: ProgressspinnerComponentComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);