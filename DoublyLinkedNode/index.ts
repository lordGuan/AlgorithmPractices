/**
 * 双连标节点数据结构，用$$typeof来标示数据类型
 */
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
          this.tail = ele
      } else {
          this.head = ele
          this.tail = ele
      }

      return ++this.size
  }

    /**
     * 查找，方便内外部使用
     * @param index
     * @param flag
     * @private
     */
    private _get(index: number, flag: boolean = false): DListNode<T> | null {
        let size = this.size - 1
        let p = Math.ceil(size / 2)

        if (index < 0 || index > size) {
            return null
        }

        // 查找的平均访问节点数为n/4
        if (index > p) {
            // 后半段用尾遍历
            let ele = this.tail

            while (size > index) {
                ele = ele.prev
                size--
            }
            return ele
        } else {
            // 前半段用头遍历
            let ele = this.head
            while (index > 0) {
                ele = ele.next
                index--
            }
            return ele
        }
    }

    /**
     * 获取指定位置元素
     * @param index
     */
    get(index: number): T | null {
        let result = this._get(index);
        return result ? this._get(index).data : null;
    }

    /**
     * 返回指定元素的下标
     * @param ele
     */
    indexOf(ele: DListNode<T> | T): number {
        let index = 0;
        let head = this.head
        // 兼容查找的类型
        if (DList.isDListNode(ele)) {
            ele = ele.data
        }
        while (index < this.size) {
            if (head.data === ele) {
                return index
            }
            index++
            head = head.next
        }
        return -1;
    }

    /**
     * 在指定位置插入
     * @param index
     * @param ele
     */
    insertAt(index: number, ele: DListNode<T> | T): boolean {
        // 插入位置校验
        if (index < 0 || index >= this.size) {
            return false
        }

        if (!DList.isDListNode(ele)) {
            ele = createDListNode(ele)
        }

        // 拿出要插入位置的前驱
        let prev = this._get(index - 1);
        this.insertAfter(prev, ele)
    }

    /**
     * 在指定元素后插入
     * @param prevEle
     * @param ele
     */
    insertAfter(prevEle: DListNode<T>, ele: DListNode<T> | T): boolean {
        if (!DList.isDListNode(prevEle)) {
            return false
        }
        if (!DList.isDListNode(ele)) {
            ele = createDListNode(ele)
        }
        ele.prev = prevEle
        ele.next = prevEle.next
        prevEle.next = ele
        return true
    }
}
