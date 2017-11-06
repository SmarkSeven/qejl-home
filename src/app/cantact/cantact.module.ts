import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CantactComponent } from './cantact.component'
import { ItemComponent } from './item.component'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    CantactComponent,
    ItemComponent
  ],
  providers: [],
  exports: [
    CantactComponent
  ]
})
export class CantactModule { }
