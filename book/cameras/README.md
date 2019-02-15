# <a id="top"></a>相机（Camera）

相机的抽象基类。当我们构建新类型的相机时总是应该继承这个类。 

学习Camera之前我们先了解一下THREE.js中使用的坐标系。THREE.js使用的是右手坐标系，想象一下右手握空心拳，手指完全的方向就是从x轴到y轴的方向，而z轴则垂直于手指弯曲的方向从  拳头中心穿过。 

![](http://static.oschina.net/uploads/space/2014/1219/150629_NFJt_1443646.jpg)



查看**[源码](https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js)**

### 构造器（Constructor）

**Camera()**

构造器将初始化如下属性：matrixWorldInverse 和 projectionMatrix.

### 属性（Properties）

- .matrixWorldInverse：Matrix4

  这是matrixWorld的逆矩阵。MatrixWorld包含相机的世界变换矩阵。

- .projectionMatrix：Matrix4

  投影变换矩阵。

- .projectionMatrixInverse ：Matrix4
  projectionMatrix的反转。

- .isCamera : Boolean
  用于检查此类或派生类是否为摄像机。默认为true。

  您不应该更改此内容，因为渲染器在内部使用它进行优化。

- .layers : Layers
  相机 所属的图层。这是Object3D的继承属性。

  在渲染相机的视点时，对象必须与相机共享至少一个图层。

  


### 方法（Methods）

- .getWorldDirection ( vector )：Vector3
  > - vector — (可选)

该方法返回代表相机方向的一个在世界空间中的矢量。
- .lookAt ( vector )
  > - vector — 观察点

该函数设定相机在全局空间中的位置。
- .clone ( camera )：Vector3
  > - camera — 要克隆的相机

返回一个相机的克隆。
- .copy（source：Camera，recursive：Boolean）：Camera
  将源摄像头中的属性复制到此摄像头中。



three.js中相机分为[立方体相机(CubeCamera)](#CubeCamera)、[正交相机(OrthographicCamera)](#OrthographicCamera)和[透视相机(PerspectiveCamera)](#PerspectiveCamera)

![](http://www.daimami.com/img/2016/04/30/180835237.jpg)

![](http://www.daimami.com/img/2016/04/30/180835238.jpg)

我们先从上面的两种图来理解正交投影与透视投影，我觉得我们可以把正交投影理解为到面的投影，投影线垂直于投影面进行投影，因此物体投影之后的比例是保持不变的。而对于透视  投影我们可以理解为到点的投影，所有的投影线最后都将汇聚于一点，透视投影的特点就是近大远小。 



## <a id="CubeCamera"></a>立方体相机(CubeCamera)

创建6个摄像机，并将它们所拍摄的场景渲染到[WebGL渲染器立方体目标(WebGLRenderTargetCube)](../renderers/README.md#WebGLRenderTargetCube)上。

查看[**源码**](https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js)

``` javascript
// Create cube camera
var cubeCamera = new THREE.CubeCamera( 1, 100000, 128 );
scene.add( cubeCamera );

// Create car
var chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeCamera.renderTarget } );
var car = new Mesh( carGeometry, chromeMaterial );
scene.add( car );

// Update the render target cube
car.setVisible( false );
cubeCamera.position.copy( car.position );
cubeCamera.update( renderer, scene );

// Render the scene
car.setVisible( true );
renderer.render( scene, camera );
```

### 构造器（Constructor）

**CubeCamera( near : Number, far : Number, cubeResolution : Number )**

- near -- 远剪切面的距离
- far -- 近剪切面的距离
- cubeResolution -- 设置立方体边缘的长度

构造一个包含6个[PerspectiveCameras（透视摄像机）](PerspectiveCameras)的立方摄像机，并将其拍摄的场景渲染到一个[WebGLRenderTargetCube](../renderers/README.md#WebGLRenderTargetCube)上。
### 属性（Properties）
请参阅其基类Object3D来查看共有属性。

- .renderTarget : WebGLRenderTargetCube

  生成的立方体纹理，生成的立方体纹理保存在其中的.texture对象中，可作为贴图赋值给其他材质
### 方法（Methods）
请参阅其基类Object3D来查看其共有方法。

- .update ( renderer : WebGLRenderer, scene : Scene ) : null
> - renderer -- 当前的WebGL渲染器
> - scene -- 当前的场景

这个方法用来更新renderTarget（渲染目标对象）。

- .clear ( renderer : WebGLRenderer, color : Boolean, depth : Boolean, stencil : Boolean ) : null

  这个方法用来来清除renderTarget的颜色、深度和/或模板缓冲区。 颜色缓冲区设置为渲染器当前的“清除”色。参数默认值均为true。

## <a id="OrthographicCamera"></a>正交相机(OrthographicCamera)

这一摄像机使用[orthographic projection](https://en.wikipedia.org/wiki/Orthographic_projection)（正交投影）来进行投影。 

查看**[源码](https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js)**

 在这种投影模式下，无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变。   

这对于渲染2D场景或者UI元素是非常有用的。 

在上面正交投影的图中，我们想象一样，相机所在的地方有个平面，而相机所在的地点默认是平面的中心点。  那么：left就是视锥左侧面，right就是视锥右侧面，top就是视锥上侧面，而bottom就是视锥下侧面。  near是到距离相机较近的那一面的距离，far是离距离相机较远的那一面的距离，这六个投影面围成的区域就是相机投影的可见区域。  三维空间内，只有在这个区域内的物体才会被相机看到。 

首先我们实例化一个相机正交相机对象，相机的默认坐标是原点，和立方体重叠无法看到立方体，这里我们设置一下相机的坐标(x,y,z)=(0,0,5)。  

[示例](https://sogrey.github.io/Three.js-start/example/camera/OrthographicCamera.html)

采用正交投影的时候，我们发现立方体的前端完全被后端遮盖了，这就是正交投影和透视投影的区别，如果使用透视投影，那么根据近大远小的原则，靠近摄像机的一端的投影面积小于远离相机一端的投影面积。 

但是这里有一个很奇怪的问题，命名创建的是一个长度为1的正方体，为啥投影是长方体？这里canvas面板的长宽比是2:1，但是相机的（right-left）/(top-bottom)比例是4：3，因此 
垂直方向上面被压缩了，所以显示的是一个长方体。

将（right-left）/(top-bottom)的比例同样调整为2:1

``` html
<div id="box" style="width: 400px;height: 200px;"></div>
```

``` javascript
 camera = new THREE.OrthographicCamera(-2, 2, 1, -1, 1, 10)
```

这样就显示为正方体了。



``` javascript
var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 ); 
scene.add( camera ); 
```

### 构造器

**OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )**

- left — 摄像机视锥体左侧面。
- right — 摄像机视锥体右侧面。
- top — 摄像机视锥体上侧面。
- bottom — 摄像机视锥体下侧面。
- near — 摄像机视锥体近端面。
- far — 摄像机视锥体远端面。

这些参数一起定义了摄像机的[viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum)（视锥体）。

### 属性

请参阅其基类[Camera](#top)来查看其共有属性。 
请注意，在大多数属性发生改变之后，你将需要调用.updateProjectionMatrix来使得这些改变生效。

- .bottom : Float

摄像机视锥体下侧面。

- .far : Float

摄像机视锥体远端面，其默认值为**2000**。
其值的有效范围介于near（摄像机视锥体近端面）和无穷大之间。

- .isOrthographicCamera : Boolean

用于测试这个类或者派生类是否为OrthographicCameras，默认为**true**。
你不应当对这个属性进行改变,因为它在内部由渲染器使用，以用于优化。

- .left : Float

摄像机视锥体左侧面。

- .near : Float

摄像机视锥体近端面。其默认值为**0.1**.
其值的有效范围介于0和far（摄像机视锥体远端面）之间。 
请注意，和PerspectiveCamera不同，**0**对于OrthographicCamera的近端面来说是一个有效值。

- .right : Float

摄像机视锥体右侧面。

- .top : Float

摄像机视锥体上侧面。

- .view : Object

这个值是由setViewOffset来设置的，其默认值为**null**。

- .zoom : number

获取或者设置摄像机的缩放倍数，其默认值为**1**。

## 方法

请参阅其基类[Camera](#top)来查看其共有方法。

- .setViewOffset ( fullWidth : Float, fullHeight : Float, x : Float, y : Float, width : Float, height : Float ) : null

fullWidth — 多视图的全宽设置
fullHeight — 多视图的全高设置
x — 副摄像机的水平偏移
y — 副摄像机的垂直偏移
width — 副摄像机的宽度
height — 副摄像机的高度
在较大的[viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum)（视锥体）中设置偏移量，对于多窗口或者多显示器的设置是很有用的。 对于如何使用它，请查看PerspectiveCamera中的示例。

- .clearViewOffset () : null

清除任何由.setViewOffset设置的偏移量。

- .updateProjectionMatrix () : null

更新摄像机投影矩阵。在任何参数被改变以后必须被调用。

- .toJSON () : JSON

使用JSON格式来返回摄像机数据。

## <a id="PerspectiveCamera"></a>透视相机(PerspectiveCamera)

这一摄像机使用[perspective projection](https://en.wikipedia.org/wiki/Perspective_(graphical))（透视投影）来进行投影。  这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式。 

查看**[源码](https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js)**

``` javascript
var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );
```

### 构造器

**PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )**

> - fov — 摄像机视锥体垂直视野角度
> - aspect — 摄像机视锥体长宽比
> - near — 摄像机视锥体近端面
> - far — 摄像机视锥体远端面

这些参数一起定义了摄像机的[viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum)（视锥体）。

## 属性

请参阅其基类 [Camera](#top) 来查看共有属性。
请注意，在大多数属性发生改变之后，你将需要调用[.updateProjectionMatrix](#updateProjectionMatrix2)来使得这些改变生效。

- .aspect : Float

摄像机视锥体的长宽比，通常是使用画布的宽/画布的高。默认值是**1**（正方形画布）。

- .far : Float

摄像机的远端面，默认值是**2000**。 
其有效值范围是在当前摄像机near plane（近端面）的值到无穷远之间。

- .filmGauge : Float

胶片尺寸，其默认值为35（毫米）。 这个参数不会影响摄像机的投影矩阵，除非.filmOffset被设置为了一个非零的值。

- .filmOffset : Float

水平偏离中心偏移量，和.filmGauge单位相同。默认值为**0**。

- .focus : Float

用于立体视觉和景深效果的物体的距离。 这个参数不会影响摄像机的投影矩阵，除非使用了StereoCamera。 默认值是**10**。

- .fov : Float

摄像机视锥体垂直视野角度，从视图的底部到顶部，以角度来表示。默认值是**50**。

- .isPerspectiveCamera : Boolean

用于测试这个类或者派生类是否为PerspectiveCameras，默认为true。 

你不应当对这个属性进行改变,因为它在内部由渲染器使用，以用于优化。

- .near : Float

摄像机的近端面，默认值是**0.1**。

其有效值范围是0到当前摄像机far plane（远端面）的值之间。 

请注意，和OrthographicCamera不同，**0**对于PerspectiveCamera的近端面来说*不是*一个有效值。

- .view : Object

Frustum window specification or null. 这个值使用[.setViewOffset](#setViewOffset2)方法来进行设置，使用.clearViewOffset方法来进行清除。

- .zoom : number

获取或者设置摄像机的缩放倍数，其默认值为**1**。

## 方法

请参阅其基类[Camera](#top)来查看共有属性。

- .clearViewOffset () : null

清除任何由.setViewOffset设置的偏移量。

- .getEffectiveFOV () : Float

结合.zoom（缩放倍数），以角度返回当前垂直视野角度。

- .getFilmHeight () : Float

返回当前胶片上图像的高，如果.aspect小于或等于1（肖像格式、纵向构图），则结果等于.filmGauge。

- .getFilmWidth () : Float

返回当前胶片上图像的宽，如果.aspect大于或等于1（景观格式、横向构图），则结果等于.filmGauge。

- .getFocalLength () : Float

返回当前.fov（视野角度）相对于.filmGauge（胶片尺寸）的焦距。

- .setFocalLength ( focalLength : Float ) : null

通过相对于当前.filmGauge的焦距，设置FOV。 
默认情况下，焦距是为35mm（全画幅）摄像机而指定的。

- <a id="setViewOffset2"></a>.setViewOffset ( fullWidth : Float, fullHeight : Float, x : Float, y : Float, width : Float, height : Float ) : null

  > - fullWidth — 多视图的全宽设置
  > - fullHeight — 多视图的全高设置
  > - x — 副摄像机的水平偏移
  > - y — 副摄像机的垂直偏移
  > - width — 副摄像机的宽度
  > - height — 副摄像机的高度

在较大的viewing frustum（视锥体）中设置偏移量，对于多窗口或者多显示器的设置是很有用的。

例如，如果你有一个3x2的显示器阵列，每个显示器分辨率都是1920x1080，且这些显示器排列成像这样的网格：

```
+---+---+---+
| A | B | C |
+---+---+---+
| D | E | F |
+---+---+---+
```

那对于每个显示器，你可以这样来设置、调用：

 

```
var w = 1920;
var h = 1080;
var fullWidth = w * 3;
var fullHeight = h * 2;

// A
camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
// B
camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
// C
camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
// D
camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
// E
camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
// F
camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
```

请注意，显示器的不必具有相同的大小，或者不必在网格中。

- <a id="updateProjectionMatrix2"></a>.updateProjectionMatrix () : null

更新摄像机投影矩阵。在任何参数被改变以后必须被调用。

- .toJSON () : JSON

使用JSON格式来返回摄像机数据。

## <a id="StereoCamera"></a>立体相机（StereoCamera）
双透视摄像机（立体相机）常被用于创建3D Anaglyph（3D立体影像）或者Parallax Barrier（视差效果）。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js)

### 构造器
**StereoCamera( )**
### 属性
-  .aspect : Float
默认值是1.

-  .eyeSep : Float
默认值是0.064.

-  .cameraL : PerspectiveCamera
左摄像机，它被加入到了layer 1中 —— 需要被左摄像机渲染的物体也应当要加入到这一层中。

-  .cameraR : PerspectiveCamera
右摄像机，它被加入到了layer 2中 —— 需要被右摄像机渲染的物体也应当要加入到这一层中。

### 方法
-  .update ( camera : PerspectiveCamera ) : null
基于摄像机通过场景，更新立体摄像机。

## <a id="ArrayCamera"></a>摄像机阵列（ArrayCamera）

ArrayCamera 用于更加高效地使用一组已经预定义的摄像机来渲染一个场景。这将能够更好地提升VR场景的渲染性能。

一个 ArrayCamera 的实例中总是包含着一组子摄像机，应当为每一个子摄像机定义bound(边界)这个属性，这一属性决定了由该子摄像机所渲染的视口区域的大小。

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js)

### 构造函数
**ArrayCamera( array : Array )**
一个包含多个摄像机的数组。

### 属性
请参阅基类[PerspectiveCamera](#PerspectiveCamera)的公共属性。

-  .cameras : Array
摄像机数组。

### 方法
请参阅基类[PerspectiveCamera](#PerspectiveCamera)的公共方法。