# 校验

校验器相关的函数集合

## isEmpty

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为空
示例：
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('') // true
isEmpty('abc') // false
isEmpty(120) // false
isEmpty(NaN) // false
isEmpty(Infinity) // false
isEmpty({}) // false
isEmpty([]) // false
isEmpty(true) // false

## isEmptyObject

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为空对象
示例：
isEmptyObject({}) // true
isEmptyObject(null) // false
isEmptyObject(false) // false
isEmptyObject({ name: 'alex' }) // false
isEmptyObject([]) // false

## isEmptyArray

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为空数组
示例：
isEmptyArray([]) // true
isEmptyArray({}) // false
isEmptyArray(null) // false
isEmptyArray(false) // false

## isObject

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为对象
示例：
isObject({ name: 'alex' }) // true
isObject([1, 2, 3]) // false
isObject(null) // false
isObject(true) // false

## isArray

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为数组
示例：
isArray({ name: 'alex' }) // false
isArray([1, 2, 3]) // true

## isFunction

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为函数

## isString

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为字符串

## isNumber

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为数字
示例：
isNumber(5e3) // true
isNumber(0xff) // true
isNumber(-1.1) // true
isNumber(0) // true
isNumber(1) // true
isNumber(1.1) // true
isNumber(10) // true
isNumber(10.1) // true
isNumber(100) // true
isNumber('-1.1') // true
isNumber('0') // true
isNumber('012') // true
isNumber('0xff') // true
isNumber('1') // true
isNumber('1.1') // true
isNumber('10') // true
isNumber('10.10') // true
isNumber('100') // true
isNumber('5e3') // true
isNumber(parseInt('012')) // true
isNumber(parseFloat('012')) // true

isNumber(Infinity) // false
isNumber(NaN) // false
isNumber(null) // false
isNumber(undefined) // false
isNumber('') // false
isNumber(' ') // false
isNumber('foo') // false
isNumber([1]) // false
isNumber([]) // false
isNumber(function () {}) // false
isNumber({}) // false

## isSafeNumber

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为安全的数字

## isPureNumber

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为纯数字

## isBoolean

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为布尔值

## isPromise

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为 Promise

## isEmail

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的邮箱

## isPhone

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的手机号

## isTel

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的座机号

## isIDCard

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的身份证号
WARNING

小写的尾号 x 也允许校验通过

## isBankCard

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的银行卡号
WARNING

只校验了长度是否合法

## isPostalCode

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的邮政编码
#isWebURL
参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的网页 url

## isIPv4

参数：{Any} value
返回值：{Boolean}
说明：判断值是否为有效的 IPV4 地址
