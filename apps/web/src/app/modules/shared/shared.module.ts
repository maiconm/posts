import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const sharedModules = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressSpinnerModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,
  ],
})
export class SharedModule {
}
