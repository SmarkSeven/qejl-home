import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { QuetionComponent } from './question.component'
import { CardComponent } from './card.component'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    QuetionComponent,
    CardComponent
  ],
  providers: [],
  exports: [
    QuetionComponent
  ]
})
export class QuestionModule { }
