# 双向链表

## 定义
链表的一种，每个节点拥有两个指针，用于指向直接前驱和直接后继。  
可以从任意一个节点，访问到前驱节点或后继节点，因此可以进行尾循环。  
并且头结点的前驱指针为null，尾结点的后继指针为null，以此来标识链表范围。  
只有一个节点的双链表，head和tail为同一个节点，prev和next都为null。  
还可以将双向链表"收尾相连"构成循环链表，也就是尾结点的后继指向头结点，头结点的前驱指向尾结点。  

## 基本结构
双链表节点结构
```typescript
interface DListNode<T> {
  prev: DListNode<T> | null,
  data: T,
  next: DListNode<T> | null
}
```
双链表
```typescript
interface IDList<T> {
  size: number;
  head: DListNode<T>;
  tail: DListNode<T>;
}

```

## 基本操作
按照算法相关书籍的介绍，主要有以下基本操作：
- dlist_init 初始化双向链表
- dlist_destroy 销毁
- dlist_ins_next 在指定位置元素之后插入
- dlist_ins_prev 在指定位置元素之前插入
- dlist_remove 移除指定元素
- dlist_size 链表长度
- dlist_head 返回头元素
- dlist_tail 返回尾元素
- dlist_is_head 指定元素是否为头元素
- dlist_is_tail 指定元素是否为尾元素
- dlist_data 返回整个数据域
- dlist_next 返回指定元素的下一个元素
- dlist_prev 返回指定元素的上一个元素