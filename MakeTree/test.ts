import {convert_format} from "./index";

let industry_list = [
    {
        "parent_ind": "女装",
        "name": "连衣裙"
    },
    {
        "name": "女装"
    },
    {
        "parent_ind": "女装",
        "name": "半身裙"
    },
    {
        "parent_ind": "女装",
        "name": "A字裙"
    },
    {
        "name": "数码"
    },
    {
        "parent_ind": "电脑配件",
        "name": "显卡"
    },
    {
        "parent_ind": "数码",
        "name": "电脑配件"
    },
    {
        "parent_ind": "电脑配件",
        "name": "内存"
    },
]

test("convert_format:", () => {
    expect(JSON.stringify(convert_format(industry_list)))
        .toBe('{"女装":{"连衣裙":{},"半身裙":{},"A字裙":{}},"数码":{"电脑配件":{"显卡":{},"内存":{}}}}')
})
