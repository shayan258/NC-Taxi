import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './drivers';

@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPage),
    ComponentsModule
  ],
  exports: [
    DriverPage
  ]
})
export class InboxPageModule {}
