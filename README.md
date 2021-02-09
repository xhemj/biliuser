一个B站用户主页的短链接（其实也不短）
## 用法：
```
https://bii.now.sh/{b站昵称}
```

## 例子
你想看[这个人](https://space.bilibili.com/208259)的B站
你只需在浏览器中打开：
```
https://bii.now.sh/陈睿
```
会跳转到：`https://space.bilibili.com/208259`

## 高级用法
因为本项目的原理是调用B站的搜索接口来查询用户的UID进行跳转，

所以原则上只要你在B站搜索框输入任意关键词只要在用户那一栏的搜索结果排第一，

你就可以用这个关键词来代替你的完整昵称。

例如你想跳转到`哔哩哔哩弹幕网`的首页，你发现：

![bilibili](https://i.loli.net/2021/02/09/3SipxDEvojsUkYI.png)

搜索`bilibili`时它排在第一，
所以你可以直接进入：
```
https://bii.now.sh/bilibili
```
（等同于`https://bii.now.sh/哔哩哔哩弹幕网`）
