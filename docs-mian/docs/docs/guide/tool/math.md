# 数学计算

由于原生 js 的数学计算存在精度丢失的问题，这里做了简单的封装

## calcPlus

参数：{Number} arguments 多个参数
返回值：{Number}
说明：多个数字求和
示例：
0.1 + 0.2 // 0.30000000000000004
calcPlus(0.1, 0.2) // 0.3

## calcMinus

参数：{Number} arguments 多个参数
返回值：{Number}
说明：多个数字求差
示例：
0.3 - 0.2 // 0.09999999999999998
calcMinus(0.3, 0.2) // 0.1

## calcTimes

参数：{Number} arguments 多个参数
返回值：{Number}
说明：多个数字求积
示例：
0.012345 \* 0.000001 // 1.2344999999999999e-8
calcTimes(0.012345, 0.000001) // 1.2345e-8

## calcDivide

参数：{Number} arguments 多个参数
返回值：{Number}
说明：多个数字求商
示例：
0.000001 / 0.0001 // 0.009999999999999998
calcDivide(0.000001, 0.0001) // 0.01

## calcRound

参数：
{Number} value
{Number} keep 小数点保留位数
返回值：{Number}
说明：对数字进行四舍五入
示例：
calcRound(0.12738, 4) // 0.1274
calcRound(0.47162981, 2) // 0.47

## calcCeil

参数：
{Number} value
{Number} keep 小数点保留位数
返回值：{Number}
说明：对数字进行向上取值
示例：
calcCeil(0.12738, 4) // 0.1274
calcCeil(0.47162981, 2) // 0.48

## calcFloor

参数：
{Number} value
{Number} keep 小数点保留位数
返回值：{Number}
说明：对数字进行向下取值
示例：
calcFloor(0.12738, 4) // 0.1273
calcFloor(0.47162981, 2) // 0.47
