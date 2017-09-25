import { Component, OnInit, ViewChild } from '@angular/core';

import { Message, MenuItem } from 'primeng/components/common/api';
import { Tree } from 'primeng/components/tree/tree';
import { NodeService } from '../service/nodeservice';

import { TreeNode } from 'primeng/primeng';
import { TreeDragDropService } from 'primeng/components/common/api';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [TreeDragDropService]
})

export class TreeComponent implements OnInit {
  msgs: Message[];

  @ViewChild('expandingTree')
    expandingTree: Tree;


    filesTree11: TreeNode[];

    selectedFile3: TreeNode;

    items: MenuItem[];

    loading: boolean;

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
      this.loading = true;
      this.nodeService.getFiles().then(files => {
            this.filesTree11 = [{
                label: 'Root',
                children: files
            }];
      });

    }

    // nodeSelect(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    // }

    // nodeUnselect(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    // }

    // nodeExpandMessage(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
    // }

    // viewFile(file: TreeNode) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
    // }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
}
