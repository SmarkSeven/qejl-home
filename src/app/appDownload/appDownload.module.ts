import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppDownloadComponent } from './appDownload.component'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    AppDownloadComponent,
  ],
  providers: [],
  exports: [
    AppDownloadComponent
  ]
})
export class AppDownloadModule { }
