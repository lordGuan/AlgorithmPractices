/**
 * 乍一看挺简单，动手写起来花了不少时间
 * 把问题看做是将上下级关系的集合，转化成树（森林）
 * 拼：尝试在已有森林中找到满足关系下级的子树，组成更深的子树
 * 如果没有构成更深的子树，进行接
 * 接：尝试将该子树接到其他的子树
 * 如果没有接到其他子树，就当成独立的树置于森林中
 * 平时很少锻炼写算法，写起来坑坑巴巴
 * 本例中没有处理异常关系：
 * 如：已有子树a-b-c，处理a-c关系将会产生a-(b,c)-c的问题
 * 要处理的话可能需要在"融合"标记处，进行遍历子树
 */
interface Relation {
    parent_ind?: string,
    name: string
}

interface TreeNode {
    [key: string]: TreeNode
}

type TreeRoot = TreeNode

/**
 * 拼
 * @param root
 * @param r
 */
function make(root: TreeRoot, r: Relation): TreeNode {
    let rSet = {
        [r.name]: {}
    }
    if (root[r.name]) {
        rSet[r.name] = root[r.name]
        delete root[r.name]
    }

    if (!connect(undefined, root, r.parent_ind, rSet)) {
        root[r.parent_ind] = rSet
    }

    return root
}

/**
 * 接
 * @param rootKey
 * @param rootSet
 * @param key
 * @param set
 */
function connect(rootKey: undefined | string, rootSet: TreeRoot, key: undefined | string, set: TreeNode) {
    if (rootKey === key) {
        // 融合
        Object.entries(set).forEach(([sKey, sSet]) => {
            rootSet[sKey] = sSet
        })
        return true
    } else {
        for (let k in rootSet) {
            if (rootSet.hasOwnProperty(k)) {
                if (connect(k, rootSet[k], key, set)) {
                    return true
                }
            }
        }
        return false
    }
}


export function convert_format(data: Relation[]): TreeRoot {
    return data.reduce((root, r) => {
        return make(root, r)
    }, {})
}

