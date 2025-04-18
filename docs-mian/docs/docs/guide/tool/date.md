# 日期处理

常用的日期处理函数

## str2dateobject

参数：{String | Number} value
返回值：{Date}
说明：将给定的日期字符串或时间戳转化为日期对象
示例：
str2dateObject('2020/09/24') // Thu Sep 24 2020 00:00:00 GMT+0800
str2dateObject('1600911748251') // Thu Sep 24 2020 09:42:28 GMT+0800

## gettimestamp

参数：{String | Date} value
返回值：{Number}
说明：将给定的日期字符串或日期对象转化为时间戳（毫秒）
示例：
getTimestamp('2020/09/24') // 1600876800000
getTimestamp(new Date()) // 1600912137389

## formattime

参数：

{String | Date | Number} value
{String} formatter 格式化占位符
返回值：{String}

说明：将给定的日期字符串/日期对象/时间戳格式化

详细： formatter 占位符列表如下

格式 输出 描述
YY 18 两位数的年份
YYYY 2018 四位数的年份
M 1-12 月份，从 1 开始
MM 01-12 月份，两位数
MMM 1 月-12 月 简写的月份名称
MMMM 一月-十二月 完整的月份名称
D 1-31 月份里的一天
DD 01-31 月份里的一天，两位数
d 0-6 一周中的一天，星期天是 0
dd 一-日 最简写的一周中一天的名称
ddd 周一-周日 简写的一周中一天的名称
dddd 星期一-星期日 一周中一天的名称
H 0-23 小时
HH 00-23 小时，两位数
h 1-12 小时, 12 小时制
hh 01-12 Hours, 12 小时制, 两位数
m 0-59 分钟
mm 00-59 分钟，两位数
s 0-59 秒
ss 00-59 秒 两位数
SSS 000-999 毫秒 三位数
Z +05:00 UTC 的偏移量
ZZ +0500 UTC 的偏移量，数字前面加上 0
A AM PM
a am pm
示例：

formatTime('2020/09/24', 'YYYY-MM-DD') // 2020-09-24
formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss') // 2020-09-24 09:59:58
formatTime(1600912137389, 'YYYY-MM-DD HH:mm:ss') // 2020-09-24 09:48:57

## gettimeduration

参数：{Number} duration 单位：毫秒
返回值：{String}
说明：将一段时间间隔（毫秒）转为年月日时分秒的精准时长描述
示例：
getTimeDuration(61347979) // 17 小时 2 个月 27.979 秒
getTimeDuration(185205859) // 2 天 3 小时 26 个月 45.859 秒

## gettimeago

参数：
{Number} duration 单位：毫秒
{Boolean} before 是否为过去
true 过去
false 将来
返回值：{String}
说明：将一段时间间隔（毫秒）转为自然语言的大概时长描述
示例：
getTimeago(61347979, true), // 17 小时前
getTimeago(185205859, false), // 2 天后

## getmidnightanddawn

参数：{Number | String | Date} value
返回值：{Object}
{Number} dawn 凌晨(00:00:00)
{Number} midnight 午夜(11:59:59)
说明：获取给定日期那天的午夜和凌晨对应的时间戳
示例：
getMidnightAndDawn('2020/09/17 18:26:30') // {midnight: 1600358399000, dawn: 1600272000000}
getMidnightAndDawn(1600912137389) // {midnight: 1600963199000, dawn: 1600876800000}
getMidnightAndDawn(new Date('2020/08/30')) // {midnight: 1598803199000, dawn: 1598716800000}
