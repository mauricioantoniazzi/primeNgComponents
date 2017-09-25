import { Component, OnInit } from '@angular/core';

// import { AccordionModule } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {

    msgs: Message[];

    index = 0;

    onTabClose(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }

    openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 3 : this.index - 1;
    }

}
