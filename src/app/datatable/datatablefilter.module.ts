import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DatatablefilterComponent } from '../datatable/datatablefilter.component';
import { DatatablefilterRoutingModule } from './datatablefilter-routing.module';
import { GrowlModule } from 'primeng/components/growl/growl';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { SliderModule } from 'primeng/components/slider/slider';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    DataTableModule,
    TabViewModule,
    RouterModule,
    RouterModule.forChild(DatatablefilterRoutingModule),
    SliderModule,
    MultiSelectModule,
    DropdownModule
  ],
  declarations: [DatatablefilterComponent],
  exports: []
})

export class DatatablefilterModule {


}
