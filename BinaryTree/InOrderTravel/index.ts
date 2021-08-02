export type Node<T> = {
  value: T,
  left: Node<T> | null,
  right: Node<T> | null
}

/**
 * 递归法
 * @param root
 */
export function inorder_recursive<T>(root: Node<T>): T[] {
  const result = []

  function walk(root) {
    if (!root) return
    walk(root.left)
    result.push(root.value)
    walk(root.right)
  }

  walk(root)
  return result
}

/**
 * 迭代法
 * @param root
 */
export function inorder_stack<T>(root: Node<T>): T[] {
  const result = []
  const stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    // 开始尝试读取左
    root = stack.pop()
    // 根
    result.push(root.value)
    // 然后对右子树进行处理
    root = root.right
  }

  return result
}

export function inorder_morris<T>(root: Node<T>): T[] {
  const result = []

  while (root) {
    if (root.left) {
      // 找左子树的最右节点
      let lastRight = root.left
      while (lastRight.right && lastRight.right !== root) {
        lastRight = lastRight.right
      }
      if (lastRight.right === null) {
        lastRight.right = root
        root = root.left
      } else if (lastRight.right === root) {
        result.push(root.value)
        root = root.right
      }
    } else {
      result.push(root.value)
      root = root.right
    }
  }

  return result
}



