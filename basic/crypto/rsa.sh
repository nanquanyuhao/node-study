# 过程中询问加密密钥
openssl genrsa -aes256 -out rsa-key.pem 2048
# 需要使用上面设置的解密密钥导出
openssl rsa -in rsa-key.pem -outform PEM -out rsa-prv.pem
# 需要使用上面设置的解密密钥导出
openssl rsa -in rsa-key.pem -outform PEM -pubout -out rsa-pub.pem