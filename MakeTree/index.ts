interface NodeRelation {
  parent_ind?: string,
  name: string
}

interface TreeNode {
  [key: string]: TreeNode
}

type TreeRoot = TreeNode

function connect(root: TreeRoot, r: NodeRelation) {
  let queue: TreeNode[] = [root]
  while (queue.length > 0) {
    let parent = queue.splice(0, 1)[0]


    if (parent[r.parent_ind]) {
      // 包含父节点-》在父节点下添加子节点
      parent[r.parent_ind][r.name] = {}
    } else if (parent[r.name]) {
      // 包含子节点-》新建父节点，并将子节点下移
      parent[r.parent_ind] = {
        [r.name]: parent[r.name]
      }
      parent[r.name] = null
    } else {
      // 广度优先
      for (let k in parent) {
        if (parent.hasOwnProperty(k)) {
          queue.push(parent[k])
        }
      }
    }
  }
  return root
}

/**
 * 找出包含key的节点
 * @param root
 * @param key
 */
function getNode(root: TreeRoot, key: string): TreeNode | null {
  let queue: TreeNode[] = [root]
  while (queue.length > 0) {
    let node = queue.splice(0, 1)[0]
    if (node[key]) {
      return node
    }
    for (let k in node) {
      if (node.hasOwnProperty(k)) {
        queue.push(node[k])
      }
    }
  }
  return null
}

/**
 * 还是得递归
 * @param node 某个集合
 * @param r
 * @param parent node集合所在的集合
 */
function t(node: TreeNode, r: NodeRelation, parent?: TreeNode) {
  if (!r.parent_ind) {
    // 如果没有父级指向
    if (!node[r.name]) {
      // 如果还没有创建集合
      node[r.name] = {}
    }
  } else {
    // 如果有父级指向
    if (node[r.parent_ind]) {
      // 包含父级
      if (node[r.name]) {
        // 包含父级，也包含子集
        node[r.parent_ind][r.name] = node[r.name]
        delete node[r.name]
      } else {
        // 包含父级，不包含子集
        node[r.parent_ind][r.name] = {}
      }
    } else {
      // 不包含父级
      if (node[r.name]) {
        // 不包含父级，但包含子集
        // parent肯定不包含父级和子集
        node[r.parent_ind] = {
          [r.name]: node[r.name]
        }
        delete node[r.name]
      } else {
        // 不包含父级，也不包含子集
        if (!parent) {
          node[r.parent_ind] = {
            [r.name]: {}
          }
        } else {
          // 递归
          for (let k in node) {
            if (node.hasOwnProperty(k)) {
              t(node[k], r, node)
            }
          }
        }
      }
    }
  }
}


export function convert_format(data: NodeRelation[]): TreeRoot {
  return data.reduce<TreeRoot>((root, relation) => {
    t(root, relation)
    console.log(JSON.stringify(root))
    return root
  }, {})
}

