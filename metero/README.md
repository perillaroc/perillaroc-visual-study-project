# 全球气温

## 数据处理

### 抽取特定消息

使用GRIB API的命令行工具grib_copy提取需要的grib2消息。

	grib_copy -w count=60 gmf.639.2014042412003.grb2 60.t.grb2

### 转换分辨率

使用wgrib2，需在编译时打开`USE_IPOLATES`选项。详情参见[http://www.cpc.ncep.noaa.gov/products/wesley/wgrib2/new_grid.html](http://www.cpc.ncep.noaa.gov/products/wesley/wgrib2/new_grid.html "wgrib2的new_grid参数")

	 wgrib2 60.t.grb2 -set_grib_type same -new_grid_winds earth -new_grid latlon 0:360:1 -90:180:1 60.out.t.grb2

### 转换为json格式

使用grib2json

	grib2json --names --data -o 60.t.json 60.out.t.grb2


## 参考：earth at nullschool

参考[http://earth.nullschool.net/](http://earth.nullschool.net/)网站的代码

项目源代码：[https://github.com/cambecc/earth/](https://github.com/cambecc/earth/)

### 概述

使用D3和Canvas搭建。

背景地图使用D3绘制在svg上，填充图和风场动画绘制到覆盖在svg的canvas上，最上层是提供用户交互的svg层。

#### 填充图层

创建Image，设置图像中每个像素点的值。

得到canvas的填充区域图像对象

	var imageData = context.getImageData(0, 0, width, height);

再依次设置图像像素值


