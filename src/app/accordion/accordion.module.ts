import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionRoutingModule } from './accordion-routing.module';
import { GrowlModule } from 'primeng/components/growl/growl';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import {TabViewModule} from 'primeng/components/tabview/tabview';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    AccordionModule,
    TabViewModule,
    RouterModule,
    RouterModule.forChild(AccordionRoutingModule)
  ],
  declarations: [AccordionComponent],
  exports: []
})

export class AcordionModule {

}
