import { Component, Input } from "@angular/core";
import { TreeNode } from "../../tree-node.model";

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent {
  @Input() node: TreeNode = {} as TreeNode;

  @Input() level = 0;
  @Input() isActive = false;
  @Input() expand = false;
}
