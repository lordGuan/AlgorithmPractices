let name

class Thing {
    constructor(inputName) {
        this.name = inputName
        const proxy = new Proxy(this, {
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
                        case 'and_the':
                        case 'can':
                            Thing.root = target

                            return new Thing(property)
                        // case 'parent_of':
                        //     let child = new Thing(property)
                        //
                        //     if (Thing.root) {
                        //         Thing.root[property] = child
                        //     }
                        //
                        //     return child
                        // 处理has函数
                        case 'has':
                        // having函数
                        case 'having':
                            return function (n) {
                                Thing.root = target
                                let p = having(n)
                                Thing.root = null
                                return p
                            }
                        default:
                            switch (target.name) {
                                case 'is_a':
                                case 'is_not_a':
                                    if (Thing.root) {
                                        Thing.root[target.name + '_' + property] = true
                                        Thing.root = null
                                    }
                                    break
                                case 'is_the':
                                case 'and_the':
                                    let child = new Thing(property)
                                    Thing.root[property] = child
                                    return child
                                case 'can':
                                    let root = Thing.root
                                    Thing.root = null
                                    name = root.name
                                    return function speak(cache, fn) {
                                        let resultFn
                                        if (typeof cache === 'function') {
                                            resultFn = cache
                                        } else if (typeof cache === 'string') {
                                            root[cache] = []
                                            resultFn = function (arg) {
                                                let result = fn(arg)
                                                root[cache].push(result)
                                                return result
                                            }
                                        }
                                        root[property] = resultFn
                                    }
                                default:
                                    if (Thing.root) {
                                        let root = Thing.root
                                        root[target.name] = property
                                        Thing.root = null
                                        return root
                                    } else {
                                        return false
                                    }
                            }
                    }
                }
            }
        })

        Object.setPrototypeOf(proxy, Thing.prototype)

        return proxy
    }
}

function having(n) {
    target = Thing.root
    return new Proxy({}, {
        get(innerTarget, innerProperty) {
            innerProperty = String(innerProperty)
            if (n >= 2) {
                let array = new Array(n).fill(new Thing(innerProperty.slice(0, innerProperty.length - 1)))
                array.each = function (fn) {
                    array.forEach(t => {
                        Thing.root = t
                        fn(t)
                        Thing.root = null
                    })
                }
                target[innerProperty] = array
            } else {
                target[innerProperty] = new Thing(innerProperty)
            }
            return target[innerProperty]
        }
    })
}

const being_the = Thing.root ? Thing.root.is_the : new Thing('is_the')
