#Perillaroc's D3 Study

使用d3.js，为博客的2013年度访问量做了几个统计图，留作纪念。

##版本说明

###v0.0.1 条形图

###v0.0.2 比例尺

###v0.0.3 坐标轴

###v0.0.4 过渡动画

###v0.0.5 交互标签

####svg标签

####div标签

###v0.0.6 布局

####饼状图

####堆叠图

###v0.0.7 地图

####数据：

数据来自[Natural Earth](http://www.naturalearthdata.com/)，按照下面文章中的步骤处理成TopoJSON格式。

####数据处理

使用GDAL/OGR转为[GeoJSON](http://geojson.org/)格式

```
ogrinfo -so ne_10m_admin_1_states_provinces_lakes.shp -sql "SELECT * FROM ne_10m_admin_1_states_provinces_lakes"

ogr2ogr -f GeoJSON -where "gu_a3 IN ('CHN','TWN')" states.json ne_10m_admin_1_states_provinces_lakes.shp
```

使用topojson压缩

```
topojson --id-property gu_a3 -p name=NAME -p name -o china.json states.json
```

####填充颜色

使用d3中包含的[colorbrewer](http://colorbrewer2.org/)库。

####参考：

[Let’s Make a Map](http://bost.ocks.org/mike/map/)

介绍从获取数据到出图的每个步骤。

[Russia choropleth example](http://bl.ocks.org/KoGor/5685876)

仿制其中的图例。