import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../../tree-node.model';

@Component({
  selector: 'tree-level',
  templateUrl: './tree-level.component.html',
  styleUrls: ['./tree-level.component.scss'],
})
export class TreeLevelComponent implements OnInit {
  @Input() level = 0;
  @Input() levelNodes : TreeNode[] = [];
  @Input() activeNodeId = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
