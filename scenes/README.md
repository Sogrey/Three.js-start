# <a id="top"></a>场景（Scene）

场景就像一个容器，允许你把哪些对象被three.js渲染以及渲染在哪里。我们在场景中放置对象、灯光和相机。 

查看**[源码](https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js)**

### 构造器（Constructor）

**Scene()**

创建一个新的场景对象。

``` javascript
var scene = new THREE.Scene();
```

### 属性（Properties）

- .fog
  一个 fog 实例，定义了场景中的雾状背景类型。默认为空（null）。
- .overrideMaterial
  如果不为空，它将迫使在场景中的一切对象都使用该材料进行渲染。默认为空（null）。
- .autoUpdate
  默认是true。如果设置为true，那么每一帧渲染都要检查场景和对象是否需要矩阵更新。否则，你必须自己来维护场景中的所有矩阵。


## <a id="Fog"></a>线性雾（Fog）

这个类包含定义线性雾的参数，也就是说，密度随着距离的增加呈线性增长。 

查看**[源码](https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js)**

### 构造器（Constructor）

**Fog( hex, near, far )**
这个hex参数被传递给 Color 构造函数来设置颜色属性。hex是一个十六进制整数或CSS样式的字符串。

### 属性（Properties）

- .name
  默认为空字符串。
- .color
  雾的颜色。比如：如果设置为黑色，远处的物体将被渲染为黑色。
- .near
  开始应用雾的最小距离。距离当前相机小于near个单位的对象，将不会受到雾的影响。
  缺省为 1.
- .far
  结束应用雾的最大距离。距离当前相机大于far个单位的对象，将不会受到雾的影响。
  缺省为 1000.

### 方法（Methods）

- .clone ()
  返回一个副本。

## <a id="FogExp2"></a>指数雾（FogExp2）

这个类包含定义指数雾的参数，也就是说，密度随距离呈指数级增长。 

查看**[源码](https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js)**

### 构造器（Constructor）

**FogExp2( hex, density )**
这个hex参数被传递给 Color 构造函数来设置颜色属性。hex是一个十六进制整数或CSS样式的字符串。

### 属性（Properties）

- .name
  默认为空字符串。
- .color
  雾的颜色。比如：如果设置为黑色，远处的物体将被渲染为黑色。
- .density
  定义雾密度的增长速度。
  缺省为 0.00025.

### 方法（Methods）

- .clone ()
  返回一个副本。