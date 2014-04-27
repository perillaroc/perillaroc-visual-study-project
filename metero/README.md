# 全球气温

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


