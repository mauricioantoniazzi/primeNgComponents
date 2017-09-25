import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { NodeService } from './service/nodeservice';
import { CarService } from './service/carservice';
import { MenubarModule } from 'primeng/components/menubar/menubar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    HttpModule,
    MenubarModule
  ],
  providers: [NodeService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
