export class Thing {
    static root: Thing
    name: string

    [propName: string]: any

    constructor(name: string) {
        this.name = name
        const proxy = new Proxy<Thing>(this, {
            get(target, property) {
                property = String(property)
                if (target.hasOwnProperty(property)) {
                    return target[property]
                } else {
                    switch (property) {
                        // 先处理三种声明式断言
                        case 'is_a':
                        case 'is_not_a':
                        case 'is_the':
                            Thing.root = target

                            return new Thing(property)
                        case 'parent_of':
                            let child = new Thing(property)

                            if (Thing.root) {
                                Thing.root[property] = child
                            }

                            return child
                        // 处理has函数
                        case 'has':
                        // having函数
                        case 'having':
                            return function has(n: number) {
                                return new Proxy({}, {
                                    get(innerTarget, innerProperty) {
                                        innerProperty = String(innerProperty)
                                        if (n >= 2) {
                                            let array = new Array(n).fill(new Thing(innerProperty.slice(0, innerProperty.length - 1)))
                                            // @ts-ignore
                                            array.each = function (fn) {
                                                array.forEach(fn)
                                            }
                                            target[innerProperty] = array
                                        } else {
                                            target[innerProperty] = new Thing(innerProperty)
                                        }
                                        return target[innerProperty]
                                    }
                                })
                            }
                        default:
                            if (Thing.root) {
                                if (target.name === 'parent_of') {
                                    Thing.root[target.name] = property
                                } else {
                                    Thing.root[target.name + '_' + property] = true
                                }
                                Thing.root = null
                            } else {
                                return false
                            }
                    }
                }
            }
        })

        Object.setPrototypeOf(proxy, Thing.prototype)

        return proxy
    }
}
