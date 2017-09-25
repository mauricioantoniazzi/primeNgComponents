import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'tree',
        loadChildren: 'app/tree/tree.module#TreeDemoModule',
  },
  { path: 'accordion',
        loadChildren: 'app/accordion/accordion.module#AcordionModule',
  }
  ,
  { path: 'datatable',
        loadChildren: 'app/datatable/datatablefilter.module#DatatablefilterModule',
  }
];

