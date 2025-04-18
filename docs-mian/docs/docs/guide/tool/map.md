# 地图

地图常用的函数（基于高德地图 JS API v2.0）

## getCurrentCity

参数：{Object} AMap 高德地图工具类
返回值：{Promise<Array>} 经纬度 [lng, lat]
说明：获取当前城市经纬度
示例：
getCurrentCity(AMap).then(ret => {
console.log(ret)
})

## getGeoAddress

参数：
{Object} AMap 高德地图工具类
{Array} position 经纬度 [lng, lat]
返回值：{Promise<String>} 详细地址
说明：根据经纬度获取详细地址
示例：
getGeoAddress(AMap, [110.12901231,24.12031231]).then(ret => {
console.log(ret)
})

## getGeoLngLatByRegion

参数：
{Object} AMap 高德地图工具类
{Array} address 省市区数组 ['四川省', '成都市', '双流区']
返回值：{Promise<Array>} 经纬度 [lng, lat]
说明：根据省市区区域获取经纬度
示例：
getGeoLngLatByRegion(AMap, ['重庆市', '九龙坡区']).then(ret => {
console.log(ret)
})

## getCurrentLngLat

参数：{Object} AMap 高德地图工具类
返回值：{Promise<Array>} 经纬度 [lng, lat]
说明：获取当前定位的经纬度
示例：
getCurrentLngLat(AMap).then(ret => {
console.log(ret)
})

## getDistance

参数：
{Object} AMap 高德地图工具类
{Array} pos1 经纬度 1 [lng, lat]
{Array} pos2 经纬度 2 [lng, lat]
返回值：{Number} 距离值，单位（米）
说明：获取两个经纬度之间的距离
示例：
const pos1 = [110.12901231, 24.12031231]
const pos2 = [110.349201319, 24.2132921]
getDistance(AMap, pos1, pos2).then(ret => {
console.log(ret)
})
