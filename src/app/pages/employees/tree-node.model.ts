export interface TreeNode {
    id: number;
    parentId?: number;
    name: string;
    description?: string;
    photoUrl?: string;
    numChildren: number;
    render?: boolean;
}
