import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
const modules = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [...[modules]]
  ], exports: [
    [...[modules]]
  ]
})
export class MaterialModule {

}
