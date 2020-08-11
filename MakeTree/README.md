# 树形结构转换

## 描述
假设有一个描述"关系"的结构：
```typescript
interface Relation {
  parent_ind?: string
  name: string
}

type RelationTree = Relation[]
```
转换成如下结构：
```typescript
interface TreeNode {
  [key: string]: TreeNode
}

type TreeRoot = TreeNode
```

## 用例
```js
const relations = [
  {
    parent_ind: 'A',
    name: 'B'
  },
  {
    name: 'A'
  }
]

// 转换成
const tree = {
  A: {
    B: {}
  }
}
```

## 伪算法
为了方便描述，将一些关键内容进行文字表达：  
```js
relations.reduce((root, relation)=>{
  // 在root中，找到拥有relation.parent_ind键的集合parent
  // 如果没有找到，创建一个以relation.parent_ind为名的集合
  root[relation.parent_ind] = {
    [relation.name]: {}
  }
  // 如果找到了
  
}, {})
```

