# ClimateCatcher
# 前言
继上一次更新气象数据下载服务平台已经有一年多了，上一版[链接](https://blog.csdn.net/qq_44907989/article/details/131014900)，这次在上一版本中添加了ERA5数据下载模块（采用最新的CDSAPI访问代码），并且使用Github Page制作了一个下载访问页面。
接下来话不多说直接开始介绍
# 更新日志\n
2025.01.20更新
主要内容：
修复在下载ERA5数据时，可能出现下载不成功的错误；
###########################################\n
2024.12.11更新
主要内容：
添加台站下载终止、ERA5数据下载终止；
优化CDSAPI配置界面的UI；
优化声明界面的UI；

# 核心功能介绍
## 国际交换站数据下载
本模块主要下载全球各个国家或地区的气象台站观测数据，这些数据主要是1小时或者3小时分辨率，部分地区可能为6小时分辨率，时间是标准的UTC时区，因此在后需处理过程中需要注意（本程序并并未对时区进行处理）

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/3c02238c1f2d4d9093fcd2da9fb716f9.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5162700ee1804d9083b8c2fc199c13b5.png)

选择好国家或者地区，输入起止年份，直接点击'开始下载即可'
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f78086b96c574572a6c18fa10978faeb.png)
随后慢慢的等待数据下载完毕即可！！！
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/26f51980f703419dac80f7669b885782.png)
下载完毕后的数据可以直接在根目录的Download文件下找到！！！！

## 国际交换站数据处理

在导出数据之前一定要先更新数据，这一步会自动解压之前下载的文件，并根据官网提供的数据格式，将数据写入到SQLite数据库中。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c8b6428c6e5542b6b6b181756b86cb79.png)

随后，选择想要查看的日期范围，然后点击‘查询数据’就能看到详细的数据啦！！

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/e2975cdafa144a8786ecfe56f2a05122.png)
不过这里我们需要注意一下：**官网提供的数据是没有相对湿度这一项的，我们需要自己根据露点温度和当前气温反向计算。**

当然，不想查询，直接导出数据也行！！
导出的数据目前支持csv和excel两种格式，**我个人比较推荐csv格式**，因为这个格式不会限制数据行数上限
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/a76c29bac18047ac804bdd58e61e2816.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f9345479131243ccb7237828052142ad.png)
## ERA5数据下载
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/80d6ac3fc8ff4a56ab95dbafafece647.png)

在下载ERA5数据之前我们需要配置ERA5的CDSAPI，因此需要先点击‘配置CDSAPI’。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5f927bf0587a4893a09bd0d01e147ccd.png)
如果大家会配置CDSAPI的话，可以直接把key复制到这个框中即可，如果不会的话，可以点击“如何配置API”会跳转到一个网页，一步一步教大家怎么用。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8f5b894dd1234296b4947fc7d53ec378.png)

大家注册好之后，将url和key这两个字段复制到里面，然后点保存就好了！
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7da943e7b4a04eca947e5bc384c655a3.png)

随后，即可使用本软件批量下载ERA5数据了。
目前本软件支持下载ERA5-Land、ERA5-single-level和ERA5-pressure-level。以及这三个数据集逐小时、逐日（支持时区转换）、逐月数据。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/935c423e2a5c4e888fe5c9e9a76c0391.png)
以ERA5-Land的逐日数据为例
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/fa09f32c45534bd7ad8ca5badb860d09.png)
下载好的数据就是如下的形式
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/fc3c3ca8b48140069919352187f3703f.png)
# 下载地址
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/b067829e0b2d4ce8a7a1916a5b2d8a14.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/9f9448c04bd34545baf125e94ab86c82.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ceff895c52e24809a39128f1f1539242.png)




