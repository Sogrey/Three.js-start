# <a id="top"></a>光照(Light)

## 光源的基类(Light)
光源的基类。 - 所有其他的光类型都继承了该类描述的属性和方法。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/Light.js)
### 构造器（Constructor）
**Light( color : Integer, intensity : float )**
- color - (可选参数) 16进制表示光的颜色。 缺省值 0xffffff (白色)。
- intensity - (可选参数) 光照强度。 缺省值 1。

这创造了一个给定颜色和强度的光源对象。。注意，这并不是直接调用的（而是使用派生类之一）。

### 属性（Properties）
公共属性请查看基类Object3D。

- .color : Color

光源的颜色。如果构造的时候没有传递，默认会创建一个新的 Color 并设置为白色。

- .intensity : Float

光照的强度，或者说能量。 在 physically correct 模式下, color 和强度 的乘积被解析为以坎德拉（candela）为单位的发光强度。 默认值 - 1.0 

- .isLight : Boolean

用来校验这个类或者派生类是不是平行光。默认是 true。

不应该去改变这个变量，因为内部使用这个变量做了些优化的工作。

### Methods
公共方法请查看基类 Object3D。

- .copy ( source : Light ) : Light

从source复制 color, intensity 的值到当前光源对象中。

- .toJSON ( meta : String ) : JSON

以JSON格式返回光数据。
## <a id="AmbientLight"></a>环境光(AmbientLight)
环境光会均匀的照亮场景中的所有物体。

环境光不能用来投射阴影，因为它没有方向。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js)

[示例](https://sogrey.github.io/Three.js-start/example/lights/AmbientLight.html )


### 构造函数

``` javascript
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
```

**AmbientLight( color : Integer, intensity : Float )**

- color - (参数可选）颜色的rgb数值。缺省值为 0xffffff。
- intensity - (参数可选)光照的强度。缺省值为 1。

创建一个环境光对象。

### 属性

公共属性请查看基类 [Light](#top)。

- .castShadow : Boolean

这个参数在对象构造的时候就被设置成了 undefined 。因为环境光不能投射阴影。

- .isAmbientLight : Boolean

用来校验这个类或者派生类是不是环境光.默认是 true。

不应该去改变这个变量,因为内部使用这个变量做了些优化的工作。

### 方法
公共方法请查看基类[Light](#top)。
## <a id="DirectionalLight"></a>平行光(DirectionalLight)
平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果; 太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。

平行光可以投射阴影 - 跳转至 [DirectionalLightShadow](../shadows/README.md#DirectionalLightShadow) 查看更多细节。

关于位置、目标和旋转说明
Three.js 的平行光常见的困惑是设置旋转没有效果。这是因为 three.js 的平行光类似与其他引擎的"目标平行光"。 

这意味着它的方向是从一个平行光的位置 position 到 target的位置。 (而不是一个只有旋转分量的'自由平行光')。

这样做的原因是为了让光线投射阴影。 - the shadow 摄像机需要一个位置来计算阴影。

有关更新目标的详细信息，请参阅 target 下面的目标属性。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js)

[示例](https://threejs.org/examples/#webgl_geometry_extrude_splines)

### 构造器

``` javascript
// White directional light at half intensity shining from the top.
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
```

**DirectionalLight( color : Integer, intensity : Float )**
- color - (可选参数) 16进制表示光的颜色。 缺省值为 0xffffff (白色)。
- intensity - (可选参数) 光照的强度。缺省值为1。

创建一个新的 DirectionalLight。

### 属性
公共属性请查看基类 [Light](#top)。
- .castShadow : Boolean

如果设置为 true 该平行光会产生动态阴影。 警告: 这样做的代价比较高而且需要一直调整到阴影看起来正确. 查看 DirectionalLightShadow 了解详细信息。该属性默认为 false。

- .isDirectionalLight : Boolean

用来校验这个类或者派生类是不是平行光.默认是 true。

不应该去改变这个变量,因为内部使用这个变量做了些优化的工作。

- .position : Vector3

假如这个值设置等于 Object3D.DefaultUp (0, 1, 0),那么光线将会从上往下照射。

- .shadow : DirectionalLightShadow

这个 DirectionalLightShadow 对象用来计算该平行光产生的阴影。

- .target : Object3D

平行光的方向是从它的位置到目标位置。默认的目标位置为原点 (0,0,0)。
注意: 对于目标的位置，要将其更改为除缺省值之外的任何位置,它必须被添加到 scene 场景中去。
``` javascript
scene.add( light.target );
```
这使得属性target中的 matrixWorld 会每帧自动更新。 

它也可以设置target为场景中的其他对象(任意拥有 position 属性的对象), 示例如下:
``` javascript
var targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;
```
完成上述操作后，平行光现在就可以追踪到目标对像了。

### 方法
公共方法请查看基类 [Light](#top)。
- .copy ( source : DirectionalLight ) : DirectionalLight

复制 source 的值到这个平行光源对象。
## <a id="HemisphereLight"></a>半球形光源(HemisphereLight)
光源直接放置于场景之上，光照颜色从天空光线颜色颜色渐变到地面光线颜色。 

半球光不能投射阴影。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js)

### 构造器（Constructor）
``` javascript
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );
```
**HemisphereLight( skyColor : Integer, groundColor : Integer, intensity : Float )**
- skyColor - (可选参数) 天空中发出光线的颜色。 缺省值 0xffffff。
- groundColor - (可选参数) 地面发出光线的颜色。 缺省值 0xffffff。
- intensity - (可选参数) 光照强度。 缺省值 1。

创建一个半球光。

### 属性（Properties）
公共属性请查看基类[Light](#top)。

- .castShadow : Boolean

该参数在构造时被设置为 undefined 因为半球光不能投射阴影。

- .color : Float

在构造时传递的天空发出光线的颜色。 默认会创建 Color 并设置为白色（0xffffff）。

- .groundColor : Float

在构造时传递的地面发出光线的颜色。 默认会创建 Color 并设置为白色（0xffffff）。

- .isHemisphereLight : Boolean

用来校验这个类或者派生类是不是半球光。缺省值为 true。

不应该去改变这个变量,因为内部使用这个变量做了些优化的工作。

- .position : Vector3

假如这个值设置等于 Object3D.DefaultUp (0, 1, 0),那么光线将会从上往下照射。

### 方法（Methods）
公共方法请查看基类 [Light](#top)。

- .copy ( source : HemisphereLight ) : HemisphereLight

从source复制 color, intensity 和 groundColor 的值到当前半球光对象中。

## <a id="PointLight"></a>点光源(PointLight)
从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。 

该光源可以投射阴影 - 跳转至 [LightShadow](../shadows/README.md#LightShadow) 查看更多细节。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js)
### 构造器（Constructor）
``` javascript
var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );
```
**PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )**
- color - (可选参数)) 十六进制光照颜色。 缺省值 0xffffff (白色)。
- intensity - (可选参数) 光照强度。 缺省值 1。 
- distance - 这个距离表示从光源到光照强度为0的位置。 当设置为0时，光永远不会消失(距离无穷大)。缺省值 0.
- decay - 沿着光照距离的衰退量。缺省值 1。 在 physically correct 模式中，decay = 2。

创建一个新的点光源（PointLight）。

### 属性（Properties）
公共属性请查看基类[Light](#top)。

- .decay : Float

沿着光照距离的衰减量。

在 physically correct 模式下，decay 设置为等于2将实现现实世界的光衰减。
缺省值为 1。

- .distance : Float

如果非零，那么光强度将会从最大值当前灯光位置处按照距离线性衰减到0。 缺省值为 0.0。

- .isPointLight : Boolean

用来校验这个类或者派生类是不是点光源。默认是 true。

不应该去改变这个变量，因为内部使用这个变量做了些优化的工作。

- .power : Float

光功率
在 physically correct 模式中, 表示以"流明（光通量单位）"为单位的光功率。 缺省值 - 4Math.PI。 

该值与 intensity 直接关联

power = intensity * 4π 修改该值也会导致光强度的改变。

- .shadow : LightShadow

LightShadow用与计算此光照的阴影。

此对象的摄像机被设置为 fov 为90度，aspect为1 ,近裁剪面 near 为0，远裁剪面far 为500的透视摄像机 [PerspectiveCamera](../cameras/README.md#PerspectiveCamera)。

### 方法（Methods）
公共方法请查看基类 [Light](#top)。

- .copy ( source : PointLight ) : PointLight

将所有属性的值从源 source 复制到此点光源对象。
## <a id="RectAreaLight"></a>区域灯光(RectAreaLight)
平面光光源从一个矩形平面上均匀地发射光线。这种光源可以用来模拟像明亮的窗户或者条状灯光光源。

> 注意事项:
> 
> - 不支持阴影。
> - 只支持 MeshStandardMaterial 和 MeshPhysicalMaterial 两种材质。
> - 你必须在你的场景中加入 RectAreaLightUniformsLib 。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js)

[示例](https://threejs.org/examples/#webgl_lights_rectarealight) 
[本地](https://sogrey.github.io/Three.js-start/example/lights/RectAreaLight.html)
### 构造器（Constructor）
**RectAreaLight( color : Integer, intensity : Float, width : Float, height : Float )**
- color - (可选参数) 十六进制数字表示的光照颜色。缺省值为 0xffffff (白色)
- intensity - (可选参数) 光源强度／亮度 。缺省值为 1。
- width - (可选参数) 光源宽度。缺省值为 10。
- height - (可选参数) 光源高度。缺省值为 10。

创建一个新的平行光。

### 属性（Properties）
公共属性请查看基类[Light](#top)。

- .isRectAreaLight : Boolean

用来校验这个类或者它的派生类是不是平面光光源。缺省值是 true。

不应该去改变这个变量,因为内部使用这个变量做了些优化的工作。

### 方法（Methods）
公共方法请查看基类[Light](#top)。

- .copy ( source : RectAreaLight ) : RectAreaLight

将所有属性的值从源 source 复制到此平面光光源对象。
## <a id="SpotLight"></a>聚光灯(SpotLight)

聚光灯是从一个方向上的一个点发出，沿着一个圆锥体，它离光越远，它的尺寸就越大。 

该光源可以投射阴影 - 跳转至 SpotLightShadow 查看更多细节。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLight.js)

[示例](https://threejs.org/examples/#webgl_lights_spotlight)
[本地](https://sogrey.github.io/Three.js-start/example/lights/SpotLight.html)

### 代码示例
``` javascript
// white spotlight shining from the side, casting a shadow

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );
```

### 构造器（Constructor）
**SpotLight( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float )**
- color - (可选参数) 十六进制光照颜色。 缺省值 0xffffff (白色)。
- intensity - (可选参数) 光照强度。 缺省值 1。
- distance - 从光源发出光的最大距离，其强度根据光源的距离线性衰减。 
- angle - 光线散射角度，最大为Math.PI/2。
- penumbra - 聚光锥的半影衰减百分比。在0和1之间的值。默认为0。
- decay - 沿着光照距离的衰减量。

创建一个新的聚光灯。

### 属性（Properties）
公共属性请查看基类[Light](#top)。
- .angle : Float

从聚光灯的位置以弧度表示聚光灯的最大范围。应该不超过 Math.PI/2。默认值为 Math.PI/3。

- .castShadow : Boolean

此属性设置为 true 聚光灯将投射阴影。警告: 这样做的代价比较高而且需要一直调整到阴影看起来正确。 查看 SpotLightShadow 了解详细信息。 默认值为 false

- .decay : Float

沿着光照距离的衰减量

在 physically correct 模式下，decay 设置为等于2将实现现实世界的光衰减。
缺省值为 1。

- .distance : Float

如果非零，那么光强度将会从最大值当前灯光位置处按照距离线性衰减到0。 缺省值为 0.0。

- .isSpotLight : Boolean

用来校验这个类或者它的派生类是不是聚光灯光源。缺省值是 true。

不应该去改变这个变量,因为内部使用这个变量做了些优化的工作。

- .penumbra : Float

聚光锥的半影衰减百分比。在0和1之间的值。 默认值 — 0.0。

- .position : Vector3

假如这个值设置等于 Object3D.DefaultUp (0, 1, 0)，那么光线将会从上往下照射。

- .power : Float

光功率
在 physically correct 模式中， 表示以"流明（光通量单位）"为单位的光功率。 缺省值 - 4Math.PI。 

该值与 intensity 直接关联
power = intensity * 4π 修改该值也会导致光强度的改变。

- .shadow : SpotLightShadow

SpotLightShadow用与计算此光照的阴影。

- .target : Object3D

平行光的方向是从它的位置到目标位置.默认的目标位置为原点 (0,0,0)。
注意: 对于目标的位置，要将其更改为除缺省值之外的任何位置，它必须被添加到 scene 场景中去。
scene.add( light.target ); 这使得属性target中的 matrixWorld 会每帧自动更新。

它也可以设置target为场景中的其他对象(任意拥有 position 属性的对象), 示例如下:
var targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject; 完成上述操作后，聚光灯现在就可以追踪到目标对像了。

### 方法（Methods）
公共方法请查看基类 [Light](#top)。
- .copy ( source : SpotLight ) : SpotLight

将所有属性的值从源 source 复制到此聚光灯光源对象。