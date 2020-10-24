import {resolveToBinary} from './index'

// F('a', index) 对应的密码表
const target = 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'

test("resolveToBinary", () => {
    let result = resolveToBinary(target)
    console.log(result)
    expect(result.length).toBe(66)
})

