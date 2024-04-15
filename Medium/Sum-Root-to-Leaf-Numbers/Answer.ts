// TODO: Define type of TreeNode
type TreeNode = any;

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const sumNode = (node: TreeNode, prefix: number) => {
  return !node.left && !node.right
    ? prefix * 10 + node.val
    : (node.left ? sumNode(node.left, prefix * 10 + node.val) : 0) +
        (node.right ? sumNode(node.right, prefix * 10 + node.val) : 0);
};
function sumNumbers(root: TreeNode | null): number {
  return sumNode(root, 0);
}
