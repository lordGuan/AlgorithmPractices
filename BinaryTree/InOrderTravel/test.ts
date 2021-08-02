import {inorder_recursive, inorder_stack, inorder_morris, Node} from './index'

describe("inorder", () => {
  const Tree: Node<number> = {
    left: {
      left: {
        left: null,
        value: 4,
        right: null
      },
      value: 2,
      right: {
        left: null,
        value: 5,
        right: null
      }
    },
    value: 1,
    right: {
      left: {
        left: null,
        value: 6,
        right: null
      },
      value: 3,
      right: null
    }
  }
  test('inorder_recursive', () => {
    expect(inorder_recursive(Tree)).toStrictEqual([4, 2, 5, 1, 6, 3])
  })

  test('inorder_stack', () => {
    expect(inorder_stack(Tree)).toStrictEqual([4, 2, 5, 1, 6, 3])
  })

  test('inorder_morris', () => {
    expect(inorder_morris(Tree)).toStrictEqual([4, 2, 5, 1, 6, 3])
  })
})


