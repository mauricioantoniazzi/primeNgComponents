
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TreeComponent } from '../tree/tree.component';
import { TreeRoutingModule } from './tree-routing.module';
import { GrowlModule } from 'primeng/components/growl/growl';
import { TreeModule } from 'primeng/components/tree/tree';
import { TabViewModule } from 'primeng/components/tabview/tabview';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    TreeModule,
    TabViewModule,
    RouterModule,
    RouterModule.forChild(TreeRoutingModule)
  ],
  declarations: [TreeComponent],
  exports: []
})

export class TreeDemoModule {


}
