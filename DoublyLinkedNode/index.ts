interface DListNode<T> {
  $$typeof: Symbol;
  prev: DListNode<T> | null;
  data: T;
  next: DListNode<T> | null;
}

interface IDList<T> {
  size: number;
  head: DListNode<T>;
  tail: DListNode<T>;
}

function createDListNode<T>(ele: T): DListNode<T> {
  return {
    data: ele,
    next: null,
    prev: null,
    $$typeof: Symbol.for("DListNode")
  }
}

export class DList<T> implements IDList<T> {
  head: DListNode<T>;
  size: number;
  tail: DListNode<T>;

  /**
   * 用已有数据进行初始化
   * @param initData
   */
  constructor(initData: T | T[]) {
    this.size = 0
    this.head = null
    this.tail = null

    if (Array.isArray(initData)) {
      this.size = initData.reduce<number>((previousValue, currentValue) => {
        let newNode = createDListNode(currentValue)
        this.push(newNode)
        return previousValue + 1
      }, 0)
    } else {
      let newNode = createDListNode(initData)
      this.head = newNode
      this.tail = newNode
    }
  }

  /**
   * 判断节点是否为双向链表有效节点
   * prev和next都必须是空，否则会产生拼接的情况
   * @param ele
   */
  static isDListNode<T>(ele: any): ele is DListNode<T> {
    return (ele as DListNode<T>).$$typeof === Symbol.for("DListNode")
  }

  /**
   * 添加元素
   * @param ele
   */
  push(ele: DListNode<T> | T): number {
    if (!DList.isDListNode(ele)) {
      // 原始数据
      ele = createDListNode(ele)
    }

    if (this.size > 0) {
      this.insertAfter(this.tail, ele)
    } else {
      this.head = ele
      this.tail = ele
    }

    return ++this.size
  }

  /**
   * 获取指定位置元素
   * @param index
   */
  get(index: number): DListNode<T> {
    return this.head
  }

  /**
   * 在指定位置插入
   * @param index
   * @param ele
   */
  insert(index: number, ele: DListNode<T>) {

  }

  /**
   * 在指定元素后插入
   * @param prevEle
   * @param ele
   */
  insertAfter(prevEle: DListNode<T>, ele: DListNode<T>) {
    ele.prev = prevEle
    ele.next = prevEle.next
    prevEle.next = ele
  }
}
