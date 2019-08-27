# babyCare路由

## /user        用户相关

### /register   注册相关

#### /getCode 获取注册验证码  get   phone

#### /adduser 添加新用户    post    phone, username, code, password

### /login      登录相关

#### /  直接登录      post    phone, password

### /change     修改个人信息

#### /username    修改用户名    get  username, phone

#### /imgurl        修改头像    post   image(File), phone

## /bill       账单相关

### /add   添加账单    get    phone, title, date, price

### /get   获取账单    get    phone     返回值{bill: [账单数组]}