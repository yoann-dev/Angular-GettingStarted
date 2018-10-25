import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StartComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    StartComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
