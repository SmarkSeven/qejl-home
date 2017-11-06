import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IntroduceComponent } from './introduce.component'
import { CardComponent } from './card.component'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    IntroduceComponent,
    CardComponent
  ],
  providers: [],
  exports: [
    IntroduceComponent
  ]
})
export class IntroduceModule { }
