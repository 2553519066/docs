# 加密

常用的加密函数（待补充）

## MD5

参数：{String} value
返回值：{String}
说明：md5 加密
示例：
MD5('123456') // e10adc3949ba59abbe56e057f20f883e
MD5('abcdef') // e80b5017098950fc58aad83c8c14978e

## SHA256

参数：{String} value
返回值：{String}
说明：sha256 加密
示例：
SHA256('123456') // 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
SHA256('abcdef') // bef57ec7f53a6d40beb640a780a639c83bc29ac8a9816f1fc6c5c6dcd93c4721

## RSA

参数：
{String} type
encrypt 加密
decrypt 解密
{String} key 公钥或私钥
{String} value 要加密或解密的字符串
返回值：{String} 加密或解密后的值
说明：rsa 非对称加密
示例：
const str = RSA('encrypt', '公钥串', '123456')
RSA('decrypt', '私钥串', str) // 返回 123456
