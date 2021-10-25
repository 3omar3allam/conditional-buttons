import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../tree-node.model';

@Component({
  selector: 'hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss'],
})
export class HierarchyTreeComponent implements OnInit {

  @Input() data: TreeNode[][] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
