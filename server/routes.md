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

### /add   添加账单    get   _id phone, title, date, price

### /get   获取账单    get    phone     返回值{bill: [账单数组]}

### /delete 删除账单    get   id

## /baby        婴儿相关

### /add  添加婴儿   get  phone,name,sex, birthday

### /get  查找婴儿   get  phone

### /data/add  添加身高体重数据  get phone, id, weight, height time

### /data/get 获取身高体重数据  get phone id

## /olds     老人相关

### /add 添加老人   get     phone,name,sex, birthday,emePhone

### /add 查找老人   get     phone

## /share 成长信息

### /upload

#### /imgurl 上传图片和文字  post  phone   content  time  image

### /get  获取成长信息  get  phone
