
import { Component } from '@angular/core';

import { MenuItem } from 'primeng/components/common/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.items = [
            {
                label: 'PrimeNg',
                icon: 'fa-file-o',
                items: [{
                        label: 'Componentes',
                        icon: 'fa-plus',
                        items: [
                          {
                            label: 'Accordion',
                            routerLink: '/accordion'
                          },
                          {
                            label: 'Tree',
                            routerLink: '/tree'
                          },
                          {
                            label: 'Data Table',
                            routerLink: '/datatable'
                          },
                        ]
                    }
                ]
            }
        ];
    }
}
