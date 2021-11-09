import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';
import { MatSliderModule } from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AddItemComponent } from './add-item/add-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule  } from "@angular/forms";

@NgModule({
  declarations: [
    DemoComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class DemoModule { }
