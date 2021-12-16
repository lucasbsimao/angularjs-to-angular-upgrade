import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';

import { Phone } from './core/phone/phone.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  providers: [
    Phone,
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}