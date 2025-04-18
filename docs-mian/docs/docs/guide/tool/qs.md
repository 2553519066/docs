# 查询参数

常用的参数处理相关的函数

## parseParams

参数：
{String} value 查询字符串
{Object} options 配置项
{Boolean} decode 是否解码键名和键值
{String} arrayFormat 数组的表现形式
bracket 中括号
index 索引
comma 逗号
separator 自定义分隔符
none 重复键(默认值)
{String} arrayFormatSeparator 当 arrayFormat 为 separator 时的分隔符
{Boolean} parseNumbers 是否将字符串的数字转为数字
{Boolean} parseBooleans 是否将字符串的布尔值转为布尔值
返回值：{Object}
说明：将查询字符串转为对象
示例：
parseParams('name=alex&age=18&date=2019-08-10')
// 返回:
{
age: "18",
date: "2019-08-10",
name: "alex"
}
parseParams('name=alex&name=lucy&name=jack')
// 返回:
{
name: ['alex', 'lucy', 'jack']
}
parseParams('name[]=alex&name[]=lucy&name[]=jack', { arrayFormat: 'bracket' })
// 返回:
{
name: ['alex', 'lucy', 'jack']
}
parseParams('name[0]=alex&name[1]=lucy&name[2]=jack', { arrayFormat: 'index' })
// 返回:
{
name: ['alex', 'lucy', 'jack']
}
parseParams('name=alex,lucy,jack', { arrayFormat: 'comma' })
// 返回:
{
name: ['alex', 'lucy', 'jack']
}
parseParams('name=alex|lucy|jack', { arrayFormat: 'separator', arrayFormatSeparator: '|' })
// 返回:
{
name: ['alex', 'lucy', 'jack']
}
parseParams('name=alex&age=18', { parseNumbers: true })
// 返回:
{
age: 18,
name: "alex"
}
parseParams('name=alex&female=true', { parseBooleans: true })
// 返回:
{
female: true,
name: "alex"
}

## stringifyParams

参数：
{Object} value 查询对象
{Object} options 配置项
{Boolean} encode 是否编码键名和键值
{String} arrayFormat 同 parseParams 方法
{String} arrayFormatSeparator 同 parseParams 方法
{Boolean} skipNull 是否跳过值为 null 的项
{Boolean} skipEmptyString 是否跳过值为空字符串的项
返回值：{String}
说明：将对象转为查询字符串
示例：
stringifyParams({ name: '团结', age: 20 }) // name=%E5%9B%A2%E7%BB%93&age=20

## parseURL

参数：
{String} value 查询字符串
{Object} options 配置项同 parseParams
返回值：{Object}
说明：将 URL 和查询字符串转为对象
示例：
parseURL('http://fe.packages.com/login?name=alex&password=123456')
// 返回:
{
"url": "http://fe.packages.com/login",
"query": {
"name": "alex",
"password": "123456"
}
}

## stringifyURL

参数：
{Object} value 查询对象
{Object} options 配置项同 stringifyParams
返回值：{String}
说明：将对象转为 URL 和查询字符串
示例：
stringifyURL({
url: 'http://fe.packages.com/login',
query: {
name: 'alex',
password: '123456'
}
})
// http://fe.packages.com/login?name=alex&password=123456
