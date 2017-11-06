import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PageHeaderComponent } from './header.component'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  providers: [],
  exports: [
    PageHeaderComponent
  ]
})
export class HeaderModule { }
