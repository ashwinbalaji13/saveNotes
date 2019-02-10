import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatSnackBar, MatSnackBarModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";

const modules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatTableModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [...[modules]]],
  exports: [[...[modules]]]
})
export class MaterialModule {}
