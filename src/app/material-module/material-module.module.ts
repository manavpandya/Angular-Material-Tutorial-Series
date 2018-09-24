import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// To use Material Component  
import { MatCardModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTreeModule,
    MatSidenavModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTreeModule,
    MatSidenavModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
