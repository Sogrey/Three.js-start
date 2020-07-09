# <a id="top"></a>光照-阴影



## <a id="LightShadow"></a>光照阴影 LightShadow

这在 [PointLight](../lights/README.md#PointLight) 内部用于计算阴影，也可用作其他阴影类的基类。

[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js)

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

沿着光照距离的衰减量
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

此对象的摄像机被设置为 fov 为90度，aspect为1 ,近裁剪面 near 为0，远裁剪面far 为500的透视摄像机 PerspectiveCamera。

### 方法（Methods）
公共方法请查看基类 [Light](top)。

- .copy ( source : PointLight ) : PointLight

将所有属性的值从源 source 复制到此点光源对象。
## <a id="DirectionalLightShadow"></a>平行光阴影 DirectionalLightShadow
这是用于在[平行光 DirectionalLight](../lights/README.md#DirectionalLight)内部计算阴影

与其他阴影类不同，它是使用[正交相机 OrthographicCamera](../cameras/README.md#OrthographicCamera)来计算阴影，而不是[透视相机(PerspectiveCamera)](../cameras/README.md#PerspectiveCamera)。这是因为来自[平行光(DirectionalLight)](../lights/README.md#DirectionalLight)的光线是平行的。

[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js)

### 例子
``` javascript
//Create a WebGLRenderer and turn on shadows in the renderer
var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a DirectionalLight and turn on shadows for the light
var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 ); 			//default; light shining from top
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;    // default
light.shadow.camera.far = 500;     // default

//Create a sphere that cast shadows (but does not receive them)
var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add( sphere );

//Create a plane that receives shadows (but does not cast them)
var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//Create a helper for the shadow camera (optional)
var helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );
```
### 构造函数
**DirectionalLightShadow( )**
创建一个新的DirectionalLightShadow，不能直接调用-它是在DirectionalLights内部调用使用

### 属性
参阅[LightShadow](#top)类来了解常用的基本属性

- .camera : Camera

在光的世界里。这用于生成场景的深度图;从光的角度来看，其他物体背后的物体将处于阴影中。

### 方法
有关常用方法，请参阅基础[LightShadow](#top)类。

## <a id="SpotLightShadow"></a>聚光灯影 SpotLightShadow
这在[SpotLight](../lights/README.md#SpotLight)内部用于计算阴影。

[源码](https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLightShadow.js)
### 例子
``` javascript
//Create a WebGLRenderer and turn on shadows in the renderer
var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a SpotLight and turn on shadows for the light
var light = new THREE.SpotLight( 0xffffff );
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;       // default
light.shadow.camera.far = 500      // default

//Create a sphere that cast shadows (but does not receive them)
var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add( sphere );

//Create a plane that receives shadows (but does not cast them)
var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//Create a helper for the shadow camera (optional)
var helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );
```
### 构造函数
构造函数创建一个 [PerspectiveCamera](../cameras/README.md#PerspectiveCamera) 来管理阴影的世界视图
### 属性
有关常用属性，请参阅基础[LightShadow](#top)类。

- .camera : Camera

在光的世界里。这用于生成场景的深度图;从光的角度来看，其他物体背后的物体将处于阴影中。

默认值为[PerspectiveCamera](../cameras/README.md#PerspectiveCamera) ，近剪裁平面为0.5。 fov将通过更新方法跟踪拥有[SpotLight](../lights/README.md#SpotLight)的角度属性。同样，aspect属性将跟踪mapSize的方面。如果设置了灯光的距离属性，则远剪裁平面将跟踪该值，否则默认为500。

- .isSpotLightShadow : Boolean

用于检查此类或派生类是否为聚光灯阴影。默认为true。

您不应该更改它，因为它在内部用于优化。

### 方法
有关常用方法，请参阅基础LightShadow类。

- .update ( light : SpotLight ) : SpotLightShadow

根据传入的light更新内部透视camera。