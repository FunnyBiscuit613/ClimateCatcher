# ClimateCatcher
# 更新日志
<font style="color:rgb(31, 35, 40);">###########################################</font>

<font style="color:rgb(31, 35, 40);">2025.07.30 </font>

<font style="color:rgb(31, 35, 40);">ERA5支持多要素下载；</font>

<font style="color:rgb(31, 35, 40);">修复日期选择弹出窗为黑底黑字的BUG；</font>

<font style="color:rgb(31, 35, 40);">新增软件启动自动检测是否有可用更新；</font>

<font style="color:rgb(31, 35, 40);">更新台站基础信息到2025年7月26日；</font>

<font style="color:rgb(31, 35, 40);">优化多个组件的大小；</font>


<font style="color:rgb(31, 35, 40);">###########################################</font>

<font style="color:rgb(31, 35, 40);">2025.07.07 </font>

<font style="color:rgb(31, 35, 40);">将环境检测数据的官网直接嵌入至环境检测数据下载页面中，如需下载完整数据集可通过CSDN的聊天功能联系到博主：https://blog.csdn.net/qq_44907989?spm=1000.2115.3001.5343；</font>

<font style="color:rgb(31, 35, 40);">###########################################</font>

<font style="color:rgb(31, 35, 40);">2025.06.22 </font>

<font style="color:rgb(31, 35, 40);">修复工具栏无法弹出菜单的Bug；</font>

<font style="color:rgb(31, 35, 40);">###########################################</font>

<font style="color:rgb(31, 35, 40);">2025.06.01 儿童节快乐 </font>

<font style="color:rgb(31, 35, 40);">台站数据下载页面：由Cartopy静态地图框架切换为Leaflet，提升交互体验；</font>

<font style="color:rgb(31, 35, 40);">软件框架：由Pyqt5框架迁移到Pyside6框架。</font>

###########################################

2025.05.12更新为ClimateCatcherV1.0.0正式版更新

本次更新重构UI设计

添加高DPI支持

重新设计工具栏，新增台站数据元数据下载功能

台站数据下载页面：使不同国家拥有不同的颜色

台站数据下载页面：添加单台站数据下载功能

台站数据下载页面：移除底部提示框

台站数据处理页面：添加单台站数据查询功能

台站数据处理页面：添加时间范围选择功能

台站数据处理页面：添加查询列表翻页功能

ERA5数据下载页面：修复部分情况下ERA5无法下载的BUG，并更换为最新的CDSAPI请求命令

ERA5数据下载页面：汉化ERA5各变量名称，添加下拉框搜索功能

新增环境检测数据页面，可以根据地图下载AQI空气质量

###########################################

2025.03.03更新  
新增联网检测更新功能  
修复ERA5下载过程中的BUG（鸣谢CSDN网友：m0_68809110）  
台站查询新增经纬度显示功能  
经纬度信息同样会被同步导出到文件  
在下载台站数据时，会自动下载台站经纬度文件  
###########################################  
2025.01.20更新  
主要内容：  
修复在下载ERA5数据时，可能出现下载不成功的错误；  
###########################################  
2024.12.11更新  
主要内容：  
添加台站下载终止、ERA5数据下载终止；  
优化CDSAPI配置界面的UI；  
优化声明界面的UI；

# 核心功能介绍
## 国际交换站数据下载
本模块主要下载全球各个国家或地区的气象台站观测数据，这些数据主要是1小时或者3小时分辨率，部分地区可能为6小时分辨率，时间是标准的UTC时区，因此在后需处理过程中需要注意（本程序并并未对时区进行处理）

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748788914880-0c9dfa1c-a814-4fe9-b3c3-6d35aedbd724.png)  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748788933664-841588f7-a214-4bad-a489-8c4cec6a2fab.png)

（所有台站信息来自于NOAA，与作者无关）

选择好国家或者地区，输入起止年份，直接点击'开始下载即可'  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748788955428-25aa8114-1586-4745-aaa3-85730383149e.png)  
正在下载数据

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748788962466-ac41a3e1-a1df-4b09-84bf-7935d065c41d.png)

数据下载完成  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748789189659-f7dc9ef1-f325-44e6-a7bd-c9042cf1a927.png)  
下载的数据可以在软件根目录下的Download文件夹中找到，其中docs文件夹为台站所属国家信息、台站元信息、数据格式的说明，其余文件为气象观测数据（注意时间为UTC世界时，在后续处理过程中需要注意）

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748789229411-bc2538a8-2f0a-48cf-91ec-6bff8d5c57e5.png)

docs文件夹内容

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062074492-99f92678-81d4-41b9-a0f9-96fe68d58b44.png)

## 国际交换站数据处理
在下载好数据之后需要点击’台站数据处理’页面的‘数据更新’按钮  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062107157-de28c62e-5a8b-43c8-9aa8-67b2e92ebe53.png)

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062162835-58230c57-d1a8-4fc0-ba5e-daa8c54be4e9.png)

随后可在红框标注区域内选择查询的时间和台站

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062208762-b0407cca-033d-4827-9d66-fb5be9c229cc.png)

日期范围选择

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062224817-9b7b134f-ba44-4618-9979-2691f633fcf3.png)

台站选择

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062251316-8a21c3e4-fa79-44cb-975c-589c77c76c84.png)

选择好时间范围和台站后可以直接点击‘查询数据’按钮进行数据查询

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062277598-e2e811a6-d645-4633-a8e8-e2aaa61ce301.png)

如需逐条查看数据则可以点击‘上一页’和‘下一页’按钮进行翻页查看

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062351538-f7356f93-81dd-4bbb-afc3-159c88a934f9.png)

或点击‘导出数据’按钮，将所查询的数据直接导出为CSV或Excel格式

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062365914-ce61e9df-4a27-4af9-a86e-25946a0cc0c2.png)

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062452260-7a59c128-f237-4d97-9b79-6eaee4b20607.png)





## ERA5数据下载
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062511705-e15559ee-6201-4aab-86c8-2214e689f920.png)

在下载ERA5数据之前我们需要配置ERA5的CDSAPI，因此需要先点击‘配置CDSAPI’。

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062524909-19c59bed-052b-420c-9f7a-87d10d08122e.png)

如果大家不会配置API则可以点击[如何使用?如何配置API](https://blog.csdn.net/qq_44907989/article/details/147776332?spm=1011.2415.3001.5331)直接跳转的教程页面  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062611697-20fd8e39-f284-4fd0-806d-cfc6f2a9a2c4.png)  
这个网页会教大家一步一步的配置  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062714516-1b0cb86b-70be-4705-81de-431907ca0549.png)

大家注册好之后，将url和key这两个字段复制到里面，然后点保存就好了！  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1748788871605-f8ac3af6-6a65-411a-b512-b66135946294.png)

随后，即可使用本软件批量下载ERA5数据了。  
目前本软件支持下载ERA5-Land、ERA5-single-level和ERA5-pressure-level。以及这三个数据集逐小时、逐日（支持时区转换）、逐月数据。  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062756112-9325d4be-9cf5-42c3-bfee-ea5270e4d075.png)  
以ERA5-Land的逐日数据为例  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062847076-893d96b0-730f-4a01-b84f-a431c32b6bb7.png)

（注意：不要请求实时的数据，因为ERA5官网自己也没有）  
下载好的数据就是如下的形式  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062908500-76a97f22-a73d-4ba7-9669-c4a29bf3c93b.png)

# 环境监测台站查询
由于这个页面需要使用leaflet框架显示站点信息（本人尚在学习之中），所以制作的页面略显粗糙，当前该页面的功能有：查询台站，下载AQI数据

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747063300894-d599d326-4e18-4b7d-a12d-9f3e6c9a6bf1.png)

点击‘下载全部台站数据’即可根据查询信息直接下载所有的台站AQI

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747063335614-e009fc39-12b5-4dc8-a4f3-6cc75e48a58b.png)

# 下载地址
[https://funnybiscuit613.github.io/ClimateCatcher/](https://funnybiscuit613.github.io/ClimateCatcher/)

![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747064116469-33cdca98-a326-44c9-9d02-9abf162da6a3.png)  
![](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747064126877-c14f34e3-dabc-4805-bfb7-ecf66b34f82a.png)

