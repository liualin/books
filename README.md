# book项目

### 1.主页面
> index.html
```
  请求require.js   mian.js  index.js
  1.handlebars template  渲染
  2.分页请求主页面数据
       http://localhost:8008/book/recommend1?pagenum=1&limit=10

    {
      url: '/book/recommend1',
      dataType: 'json',
      data: {
            pagenum: pagenum,
            limit: limit
          }
    }
``` 
![image](https://typeofyh.github.io/bookCitys/page/home.png)
### 2.搜索页面
> search.html
```
  请求search.js
  1.
    渲染历史标签 http://localhost:8008/book/Key
    {
        url: '/book/Key',
    }
```
  ![image](https://typeofyh.github.io/bookCitys/page/search.png)
### 3.详情页
> detail.html
```
   请求detail.js
   1.渲染页面 http://localhost:8008/book/detail?titd=path   (path所请求详情页的id)
     {
        url: '/book/detail',
        dataType: 'json',
        data: {
            tiid: path
        },
```
![image](https://typeofyh.github.io/bookCitys/page/detail.png)
### 4.阅读页面
> readstar.html
```
  请求readstar.js
  1.渲染阅读页 http://localhost:8008/book/list?articl=1 （articl请求的要渲染页的文本）
     {
        url: '/book/list',
        dataType: 'json',
        data: {
            articl: dataid
    }
   2.渲染目录： http://localhost:8008/book/chap
```
![image](https://typeofyh.github.io/bookCitys/page/read.png)

