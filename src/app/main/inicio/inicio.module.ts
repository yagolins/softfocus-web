import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogService } from '../modal/dialog.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
     MatCardModule,
     MatDialogModule,
     MatTooltipModule,
     MatTableModule,
     MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
     MatRadioModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioModule { }
