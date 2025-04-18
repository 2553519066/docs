# 文件处理

常用的文件上传下载相关的函数

## formatFileSize

参数：{Number} value 文件大小（单位：字节 Byte）
返回值：{String}
说明：转换为带单位的文件大小
示例：
formatFileSize(500 _ 1000) // 488.28K
formatFileSize(1024 _ 1000 _ 1000) // 976.56M
formatFileSize(5 _ 1024 _ 1000 _ 1000) // 4.77G

## dataURL2File

参数：
{String} value base64 数据字符串
{String} fileName 文件名
返回值：{File}
说明：将 base64 数据转为 File 对象
示例：
dataURL2File(
`data:image/png;base64,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`,
'ios.png'
) // File 见下方
{
"lastModified": 1600918623825,
"lastModifiedDate": "Thu Sep 24 2020 11:37:03 GMT+0800 (中国标准时间)",
"name": "ios.png",
"size": 1697,
"type": "image/png",
"webkitRelativePath": ""
}

## file2DataURL

参数：{File} file 文件对象
返回值：{Promise -> String}
说明：将 File 对象转 base64 数据
示例：
file2DataURL(new File([1, 2, 3, 'e'], 'ios.png', { type: 'image/png' })).then((base64) => {
console.log(base64) // data:image/png;base64,MTIzZQ==
})

## captureVideoFrame

参数：{String} url 视频地址
返回值：{Promise -> String}
说明：截取视频的第一帧 base64 图片
示例：
captureVideoFrame('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4').then((base64) => {
console.log(base64) // data:image/png;base64,..................
})

## getImageOriginSize

参数：{String | File} img 图片地址或图片文件对象
返回值：{Promise -> Object}
{Number} width 图片宽度
{Number} height 图片高度
说明：获取图片的原始尺寸
示例：
getImageOriginSize('https://s1.ax1x.com/2020/09/24/0SSYHH.jpg').then((res) => {
console.log(res) // {width: 1920, height: 1080}
})
