import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { StepperComponentComponent } from './stepper-component/stepper-component.component';
import { routing } from './routes';
import { MaterialModuleModule } from './material-module/material-module.module';
// To use Animations  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { SidenavComponentComponent } from './sidenav-component/sidenav-component.component';
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';
import { BottomsheetComponentComponent, BottomsheetExampleComponentComponent } from './bottomsheet-component/bottomsheet-component.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { SimpleDialogComponent } from './dialog-component/simpleDialog.component';
import { DialogWithFormComponent } from './dialog-component/dialogWithForm.component';
import { AlertDialogComponent } from './dialog-component/alertDialog.component';
import { SnackbarComponentComponent } from './snackbar-component/snackbar-component.component';
import { TooltipComponentComponent } from './tooltip-component/tooltip-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsComponentComponent } from './buttons-component/buttons-component.component';
import { TogglebuttonsComponentComponent } from './togglebuttons-component/togglebuttons-component.component';
import { BadgeComponentComponent } from './badge-component/badge-component.component';
import { ChipsComponentComponent } from './chips-component/chips-component.component';
import { ProgressbarComponentComponent } from './progressbar-component/progressbar-component.component';
import { ProgressspinnerComponentComponent } from './progressspinner-component/progressspinner-component.component';
import { FormcontrolsComponentComponent } from './formcontrols-component/formcontrols-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    StepperComponentComponent,
    TabsComponentComponent,
    MenuComponentComponent,
    SidenavComponentComponent,
    ToolbarComponentComponent,
    BottomsheetComponentComponent,
    BottomsheetExampleComponentComponent,
    DialogComponentComponent,
    SimpleDialogComponent,
    DialogWithFormComponent,
    AlertDialogComponent,
    SnackbarComponentComponent,
    TooltipComponentComponent,
    DashboardComponent,
    ButtonsComponentComponent,
    TogglebuttonsComponentComponent,
    BadgeComponentComponent,
    ChipsComponentComponent,
    ProgressbarComponentComponent,
    ProgressspinnerComponentComponent,
    FormcontrolsComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  entryComponents: [
    BottomsheetComponentComponent, 
    BottomsheetExampleComponentComponent,
    DialogComponentComponent,
    SimpleDialogComponent,
    DialogWithFormComponent,
    AlertDialogComponent
  ],
  exports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
