# <a id="top"></a>材质(Material)

## 材质（Material）  -  基类

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/Material.js)

材质的抽象基类。

材质描述了对象objects的外观。它们的定义方式与渲染器无关， 因此，如果您决定使用不同的渲染器，不必重写材质。

所有其他材质类型都继承了以下属性和方法（尽管它们可能具有不同的默认值）。

### 构造函数(Constructor)

**Material()**

该方法创建一个通用材质。

### 属性(Properties)

- .alphaTest : Float

设置运行alphaTest时要使用的alpha值。如果不透明度低于此值，则不会渲染材质。默认值为**0**。

- .blendDst : Integer

混合目标。默认值为OneMinusSrcAlphaFactor。 目标因子所有可能的取值请参阅constants。 必须将材质的blending设置为CustomBlending才能生效。

- .blendDstAlpha : Integer

.blendDst的透明度。 默认值为 **null**.

- .blendEquation : Integer

使用混合时所采用的混合方程式。默认值为AddEquation。 混合方程式所有可能的取值请参阅constants。 必须将材质的blending设置为CustomBlending才能生效。

- .blendEquationAlpha : Integer

.blendEquation 的透明度. 默认值为 **null**.

- .blending : Blending

在使用此材质显示对象时要使用何种混合。
必须将其设置为CustomBlending才能使用自定义blendSrc, blendDst 或者 [page:Constant blendEquation]。 混合模式所有可能的取值请参阅constants。默认值为NormalBlending。

- .blendSrc : Integer

混合源。默认值为SrcAlphaFactor。 源因子所有可能的取值请参阅constants。
必须将材质的blending设置为CustomBlending才能生效。

- .blendSrcAlpha : Integer

.blendSrc的透明度。 默认值为 **null**.

- .clipIntersection : Boolean

更改剪裁平面的行为，以便仅剪切其交叉点，而不是它们的并集。默认值为 **false**。

- .clippingPlanes : Array

用户定义的剪裁平面，在世界空间中指定为THREE.Plane对象。这些平面适用于所有使用此材质的对象。空间中与平面的有符号距离为负的点被剪裁（未渲染）。 这需要WebGLRenderer.localClippingEnabled为**true**。 示例请参阅[WebGL / clipping /intersection](https://threejs.org/examples/#webgl_clipping_intersection)。默认值为 **null**。

- .clipShadows : Boolean

定义是否根据此材质上指定的剪裁平面剪切阴影。默认值为 **false**。

- .colorWrite : Boolean

是否渲染材质的颜色。 这可以与网格的renderOrder属性结合使用，以创建遮挡其他对象的不可见对象。默认值为**true**。

- .defines : Object

注入shader的自定义对象。 以键值对形式的对象传递，{ MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }。 这些键值对在顶点和片元着色器中定义。默认值为**undefined**。

- .depthFunc : Integer

使用何种深度函数。默认为LessEqualDepth。 深度模式所有可能的取值请查阅constants。

- .depthTest : Boolean

是否在渲染此材质时启用深度测试。默认为 **true**。

- .depthWrite : Boolean

渲染此材质是否对深度缓冲区有任何影响。默认为**true**。
在绘制2D叠加时，将多个事物分层在一起而不创建z-index时，禁用深度写入会很有用。

- .flatShading : Boolean

定义材质是否使用平面着色进行渲染。默认值为false。

- .fog : Boolean

材质是否受雾影响。默认为**true**。

- .id : Integer

此材质实例的唯一编号。

- .isMaterial : Boolean

用于检查此类或派生类是否为材质。默认值为 **true**。
因为其通常用在内部优化，所以不应该更改该属性值。

- .lights : Boolean

材质是否受到光照的影响。默认为**true**。

- .name : String

对象的可选名称（不必是唯一的）。默认值为空字符串。

- .needsUpdate : Boolean

指定需要重新编译材质。
实例化新材质时，此属性自动设置为true。

- .opacity : Float

在0.0 - 1.0的范围内的浮点数，表明材质的透明度。值**0.0**表示完全透明，**1.0**表示完全不透明。
如果材质的transparent属性未设置为**true**，则材质将保持完全不透明，此值仅影响其颜色。 默认值为**1.0**。 

- .polygonOffset : Boolean

是否使用多边形偏移。默认值为**false**。这对应于WebGL的**GL_POLYGON_OFFSET_FILL**功能。

- .polygonOffsetFactor : Integer

设置多边形偏移系数。默认值为**0**。

- .polygonOffsetUnits : Integer

设置多边形偏移单位。默认值为**0**。

- .precision : String

重写此材质渲染器的默认精度。可以是"**highp**", "**mediump**" 或 "**lowp**"。默认值为**null**。

- .premultipliedAlpha : Boolean

是否预乘alpha（透明度）值。有关差异的示例，请参阅[WebGL / Materials / Transparency](https://threejs.org/examples/#webgl_materials_transparency)。 默认值为**false**。

- .dithering : Boolean

是否对颜色应用抖动以消除条带的外观。默认值为 **false**。

- .shadowSide : Integer

定义投影的面。设置时，可以是THREE.FrontSide, THREE.BackSide, 或Materials。默认值为 **null**。 
如果为**null**， 则面投射阴影确定如下： 

| Material.side    | Side casting shadows |
| ---------------- | -------------------- |
| THREE.FrontSide  | 背面                 |
| THREE.BackSide   | 前面                 |
| THREE.DoubleSide | 双面                 |

- .side : Integer

定义将要渲染哪一面 - 正面，背面或两者。 默认为THREE.FrontSide。其他选项有THREE.BackSide和THREE.DoubleSide。

- .transparent : Boolean

定义此材质是否透明。这对渲染有影响，因为透明对象需要特殊处理，并在非透明对象之后渲染。 
设置为true时，通过设置材质的opacity属性来控制材质透明的程度。
默认值为**false**。

- .type : String

值是字符串'Material'。不应该被更改，并且可以用于在场景中查找此类型的所有对象。

- .uuid : String

此材质实例的[UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier)，会自动分配，不应该被更改。

- .vertexColors : Integer

是否使用顶点着色。默认值为THREE.NoColors。 其他选项有THREE.VertexColors 和 THREE.FaceColors。

- .visible : Boolean

此材质是否可见。默认为**true**。

- .userData : object

一个对象，可用于存储有关Material的自定义数据。它不应该包含对函数的引用，因为这些函数不会被克隆。

### 方法(Methods)

> EventDispatcher 方法在此类中可用。

- .clone ( ) : Material

返回与此材质具有相同参数的新材质。

- .copy ( material : material ) : Material

将被传入材质中的参数复制到此材质中。

- .dispose () : null

处理材质。材质的纹理不会被处理。需要通过Texture处理。

- .onBeforeCompile ( shader : Object, renderer : WebGLRenderer ) : null

在编译shader程序之前立即执行的可选回调。此函数使用shader源码作为参数。用于修改内置材质。

- .setValues ( values : object ) : null

values -- 具有参数的容器。 根据**values**设置属性。

- .toJSON ( meta : object ) : null

> - meta -- 包含元素，例如材质的纹理或图像。 将材质转换为three.js JSON格式。

## <a id="LineBasicMaterial"></a>基础线条材料(LineBasicMaterial)

查看[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/LineBasicMaterial.js)

一种用于绘制线框样式几何体的材质。 

### 构造函数(Constructor)

``` javascript
var material = new THREE.LineBasicMaterial( {
	color: 0xffffff,
	linewidth: 1,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} );
```

### LineBasicMaterial( parameters : Object )

parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
属性color例外，其可以作为十六进制字符串传递，默认情况下为 **0xffffff**（白色），内部调用Color.set(color)。

- color — 线条的十六进制颜色。缺省值为 0xffffff。
-  linewidth — 线条的宽度。缺省为 1。
-  linecap — 定义线条端点的外观。缺省为 'round'（即圆形线头）。 
- linejoin — 定义线条接口处的外观。缺省为 'round'。
-  vertexColors — 定义顶点如何着色。缺省是 THREE.NoColors。
-  fog — 定义材质颜色是否受全局雾设置的影响。默认是false。 

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .color : Color

材质的颜色(Color)，默认值为白色 (0xffffff)。

- .isLineBasicMaterial : Boolean

用于检查此类或派生类是否为基础线条材质。默认值为 **true**。
因为其通常用在内部优化，所以不应该更改该属性值。

- .lights : Boolean

材质是否受到光照的影响。默认值为 **false**。

- .linewidth : Float

控制线宽。默认值为 **1**。
由于[OpenGL Core Profile](https://www.khronos.org/registry/OpenGL/specs/gl/glspec46.core.pdf)与 大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。

- .linecap : String

定义线两端的样式。可选值为 'butt', 'round' 和 'square'。默认值为 'round'。
该属性对应[2D Canvas lineCap](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)属性， 并且会被WebGL渲染器忽略。

- .linejoin : String

定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。
该属性对应[2D Canvas lineJoin](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineJoin)属性， 并且会被WebGL渲染器忽略。



### 方法(Methods)

常用方法请参见基类[Material](#top)。

## <a id="LineDashedMaterial"></a>虚线材料(LineDashedMaterial)

[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/LineDashedMaterial.js)

一种用于绘制虚线样式几何体的材质。 

### 构造函数(Constructor)

``` javascript
var material = new THREE.LineDashedMaterial( {
	color: 0xffffff,
	linewidth: 1,
	scale: 1,
	dashSize: 3,
	gapSize: 1,
} );
```

**LineDashedMaterial( parameters : Object )**

- parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
  属性color例外，其可以作为十六进制字符串传递，默认情况下为 **0xffffff**（白色），内部调用Color.set(color)。



- color — 线条的十六进制颜色。缺省值为 0xffffff。
-  linewidth — 线条的宽度。缺省为 1。
-  scale — 线条中虚线部分的占比，缺省为1. 
- dashSize — 破折号（-）的大小。默认为3。
-  gapSize - 间隙的大小。默认为1。
-  vertexColors — 定义顶点如何着色。缺省是 THREE.NoColors。
-  fog — 定义材质颜色是否受全局雾设置的影响。默认是false。 

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .color : Color

材质的颜色(Color)，默认值为白色 (0xffffff)。

- .dashSize : number

虚线的大小，是指破折号和间隙之和。默认值为 **3**。

- .gapSize : number

间隙的大小，默认值为 **1**。

- .isLineDashedMaterial : Boolean

用于检查此类或派生类是否为虚线材质。默认值为 **true**。
因为其通常用在内部优化，所以不应该更改该属性值。

- .lights : Boolean

材质是否受到光照的影响。默认值为 **false**。

- .linewidth : Float

控制线宽。默认值为 **1**。
由于[OpenGL Core Profile](https://www.khronos.org/registry/OpenGL/specs/gl/glspec46.core.pdf)与 大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。

- .scale : number

线条中虚线部分的占比。默认值为 **1**。

### 方法(Methods)

常用方法请参见基类[Material](#top)。

## <a id="MeshBasicMaterial"></a>基础网孔材料(MeshBasicMaterial)

[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshBasicMaterial.js)

一个以简单着色（平面或线框）方式来绘制几何体的材质。

这种材质不受光照的影响。

[示例](https://threejs.org/docs/scenes/material-browser.html#MeshBasicMaterial)

### 构造函数(Constructor)
**MeshBasicMaterial( parameters : Object )**

- parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
  属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)。



- color — 线条的十六进制颜色。缺省值为 0xffffff。
-  map — 设置纹理贴图。缺省为null。
-  aoMap — 设置环境遮挡贴图（ao = ambient occlusion）。缺省为null。 
- aoMapIntensity — 设置环境遮挡贴图强度。缺省为1。
-  specularMap — 设置高光贴图。默认为null。
-  alphaMap — 设置阿尔法贴图。默认为null。
-  envMap — 设置环境贴图。默认为null。
-  combine — 设置组合操作。默认值是THREE.MultiplyOperation. 
- reflectivity — 设置反射率。默认值是 1. 
- refractionRatio — 设置折射率。默认值是 0.98.
-  fog — 定义材质颜色是否受全局雾设置的影响。默认是true。
-  shading — 定义着色类型。缺省为 THREE.SmoothShading。
-  wireframe — 渲染模型为线框。默认是false。
-  wireframeLinewidth — 线框线宽。默认是1。
-  wireframeLinecap — 定义线端的外观。默认值是 'round'.
-  wireframeLinejoin — 定义线连接节点的外观。默认值是 'round'. 
- vertexColors — 定义顶点如何着色。默认值是 THREE.NoColors. 
- skinning — 定义材料是否使用皮肤。默认值是false. 
- morphTargets — 定义材料是否使用 morphTargets。默认值是 false。 

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .alphaMap : Texture

alpha贴图是一种灰度纹理，用于控制整个表面的不透明度（黑色：完全透明;白色：完全不透明）。默认值为null。

仅使用纹理的颜色，忽略alpha通道（如果存在）。对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。Luminance-only以及luminance/alpha纹理也仍然有效。

- .aoMap : Texture

该纹理的红色通道用作环境遮挡贴图。默认值为null。aoMap需要第二组UVs，因此将忽略repeat和offset属性。

- .aoMapIntensity : Float

环境遮挡效果的强度。默认值为1。零是不遮挡效果。

- .color : Color

材质的颜色(Color)，默认值为白色 (0xffffff)。

- .combine : Integer

如何将表面颜色的结果与环境贴图（如果有）结合起来。

选项为THREE.Multiply（默认值），THREE.MixOperation， THREE.AddOperation。如果选择多个，则使用.reflectivity在两种颜色之间进行混合。

- .isMeshBasicMaterial : Boolean

用于检查此类或派生类是否为网格基础材质。默认值为 true。

因为其通常用在内部优化，所以不应该更改该属性值。

- .envMap : TextureCube

环境贴图。默认值为null。

- .lightMap : Texture

光照贴图。默认值为null。lightMap需要第二组UVs，因此将忽略repeat和offset纹理属性。

- .lightMapIntensity : Float

烘焙光的强度。默认值为1。

- .lights : Boolean

材质是否受到光照的影响。默认值为 false。

- .map : Texture

颜色贴图。默认为null。

- .morphTargets : Boolean

材质是否使用morphTargets。默认值为false。

- .reflectivity : Float

环境贴图对表面的影响程度; 见.combine。默认值为1，有效范围介于0（无反射）和1（完全反射）之间。

- .refractionRatio : Float

空气的折射率（IOR）（约为1）除以材质的折射率。它与环境映射模式THREE.CubeRefractionMapping 和THREE.EquirectangularRefractionMapping一起使用。 折射率不应超过1。默认值为0.98。

- .skinning : Boolean

材质是否使用蒙皮。默认值为false。

- .specularMap : Texture

材质使用的高光贴图。默认值为null。

- .wireframe : Boolean

将几何体渲染为线框。默认值为false（即渲染为平面多边形）。

- .wireframeLinecap : String

定义线两端的外观。可选值为 'butt'，'round' 和 'square'。默认为'round'。

该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。

- .wireframeLinejoin : String

定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。

该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。

- .wireframeLinewidth : Float

控制线框宽度。默认值为1。

由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制， 无论如何设置该值，线宽始终为1。

### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="MeshDepthMaterial"></a>深度网孔材料(MeshDepthMaterial)

一种按深度绘制几何体的材质。深度基于相机远近平面。白色最近，黑色最远。 

[示例](https://threejs.org/docs/scenes/material-browser.html#MeshDepthMaterial)

### 构造函数(Constructor)

**MeshDepthMaterial( parameters : Object )**

- parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。



- morphTargets -- 定义材料是否使用 morphTargets。默认值是 false。
-  wireframe -- 渲染模型为线框图。默认是false。（也就是通过平滑着色渲染）。 
- wireframeLinewidth -- 控制线框图的线宽。默认为1。 

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .alphaMap : Texture
alpha贴图是一种灰度纹理，用于控制整个表面的不透明度（黑色：完全透明;白色：完全不透明）。默认值为null。

仅使用纹理的颜色，忽略alpha通道（如果存在）。对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。Luminance-only以及luminance/alpha纹理也仍然有效。

- .depthPacking : Constant

depth packing的编码。默认为BasicDepthPacking。

- .displacementMap : Texture

位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象，以及充当真实的几何体。 位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。

- .displacementScale : Float

位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为1。

- .displacementBias : Float

位移贴图在网格顶点上的偏移量。如果没有设置位移贴图，则不会应用此值。默认值为0。

- .fog : Boolean

材质是否受雾影响。默认值为false。

- .isMeshDepthMaterial : Boolean

用于检查此类或派生类是否为深度网格材质。默认值为 true。

因为其通常用在内部优化，所以不应该更改该属性值。

- .lights : Boolean

材质是否受到光照的影响。默认值为 false。

- .map : Texture

颜色贴图。默认为null。

- .morphTargets : boolean

材质是否使用morphTargets。默认值为false。

- .skinning : Boolean

材质是否使用蒙皮。默认值为false。

- .wireframe : boolean

将几何体渲染为线框。默认值为false（即渲染为平滑着色）。

- .wireframeLinewidth : Float

控制线框宽度。默认值为1。

由于OpenGL Core Profile 与大多数平台上WebGL渲染器限制，无论如何设置该值，线宽始终为1。

### 方法(Methods)

常用方法请参见基类[Material](#top)。


## <a id="MeshLambertMaterial"></a>兰伯特网孔材料(MeshLambertMaterial)

一种非发光材料（兰伯特）的表面，计算每个顶点。 

[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshLambertMaterial.js)

### 构造器（Constructor）

**MeshLambertMaterial( [parameters](javascript:window.parent.goTo('Object')) )**

参数是一个使用一个或多个属性定义材料外观的对象。

- color — 线条的十六进制颜色。缺省值为 0xffffff。
- map — 设置纹理贴图。缺省为null。
- lightMap — 设置光照贴图。缺省为null。
- lightMapIntensity — 设置光照贴图强度。缺省值为1。
- aoMap — 设置环境遮挡贴图（ao = ambient occlusion）。缺省为null。
- aoMapIntensity — 设置环境遮挡贴图强度。缺省为1。
- emissive - 设置放射光颜色。默认是0x000000.
- emissiveMap — 设置放射光贴图。缺省为null。
- emissiveIntensity — 设置放射光贴图强度。缺省值为1。
- specularMap — 设置高光贴图。默认为null。
- alphaMap — 设置阿尔法贴图。默认为null。
- envMap — 设置环境贴图。默认为null。
- combine — 设置组合操作。默认值是THREE.MultiplyOperation.
- reflectivity — 设置反射率。默认值是 1.
- refractionRatio — 设置折射率。默认值是 0.98.
- fog — 定义材质颜色是否受全局雾设置的影响。默认是true。
- shading — 定义着色类型。缺省为 THREE.SmoothShading。
- wireframe — 渲染模型为线框。默认是false。
- wireframeLinewidth — 线框线宽。默认是1。
- wireframeLinecap — 定义线端的外观。默认值是 'round'.
- wireframeLinejoin — 定义线连接节点的外观。默认值是 'round'.
- vertexColors — 定义顶点如何着色。默认值是 THREE.NoColors.
- skinning — 定义材料是否使用皮肤。默认值是false.
- morphTargets — 定义材料是否使用 morphTargets。默认值是 false。
- morphNormals — 定义材料是否使用morphNormals。默认是false。

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .[color](javascript:window.parent.goTo('Color'))

材料的扩散色。默认是白色。

- [#](javascript:window.parent.goTo('MeshLambertMaterial.map')).[map](javascript:window.parent.goTo('Texture'))

设置颜色纹理贴图。默认为空。

- .lightMap

设置光照贴图。默认为空。lightMap需要第二组UVs。

- .lightMapIntensity

设置光照贴图强度。

- .aoMap

设置环境遮挡贴图。默认为空。aoMap需要第二套UV。

- .aoMapIntensity

设置环境遮挡贴图强度。

- .emissive

放射（光）材料的颜色，基本上是一个不受其他光照影响的固有颜色。默认是黑色。

- .emissiveMap

设置放射（发光）贴图。默认为空。放射贴图颜色使用放射颜色和强度所调节。如果你有一个放射贴图，确保设置放射颜色不是黑色的。

- .emissiveIntensity

放射光强度。调节发光颜色。默认为1。

- .emissiveIntensity

由于这种材料没有一个specular组件，specular值只影响环境贴图影响表面的程度。默认为空。

- .alphaMap

阿尔法贴图是一个灰度纹理，控制整个表面的不透明度（黑色：完全透明；白色：完全不透明）。默认为空。

只有该纹理的颜色被使用，忽略透明度。 对于 RGB 和 RGBA 纹理，[WebGL](javascript:window.parent.goTo('WebGL%E6%B8%B2%E6%9F%93%E5%99%A8(WebGLRenderer)')) 在纹理采样时将使用绿色通道，这是因为在DXT压缩和非压缩RGB 565种格式中的绿色提供了额外的精度位。纯亮度（Luminance-only）和 亮度/透明度（luminance/alpha）纹理也如预期正常工作。

- .envMap

设置环境贴图。默认为null。

- .combine

如何组合表面颜色结果与环境贴图，如果有的话。

可选项有：

> - THREE.Multiply (default)
> - THREE.MixOperation
> - THREE.AddOperation

如果选择混合（mix），则将反射率用于两种颜色之间的混合。


- .reflectivity

设置反射率。默认值是 1

- .refractionRatio

使用 THREE.CubeRefractionMapping环境贴图的折射率，缺省为 **0.98**.

- .fog

定义材质颜色是否受全局雾设置的影响。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被Canvas所忽略，但是对 WebGL有效。

- .shading

定义着色类型。缺省为 THREE.SmoothShading。

- .wireframe

渲染模型为线框。默认是false（也就是，渲染为平面多边形）。

- .wireframeLinewidth

控制线框图的线宽。缺省为1.

由于 [角度层（ANGLE layer）](https://code.google.com/p/angleproject/)的限制，在Windows平台上使用WebGL，线宽将总是为1而不管设置的值。

- .wireframeLinecap

定义线的两端的样式，可用值为 "butt", "round" 和 "square"。缺省为 'round'。可参考：[Canvas Linecap](http://techbrood.com/en/tagsref?p=canvas-linecap)中的定义和演示。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被WebGL所忽略，但是对Canvas有效。

- .wireframeLinejoin

定义线连接点的外观。可选值为 "round", "bevel" 和 "miter". 缺省是 'round'。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被WebGL所忽略，但是对Canvas有效。

- .vertexColors

定义顶点如何着色。可用值为 THREE.NoColors, THREE.FaceColors 和 THREE.VertexColors。缺省值为 THREE.NoColors.

当使用一些特定渲染器时，此设置可能没有任何效果。

- .skinning

定义材料是否使用皮肤。默认值是false.

- .morphTargets

定义材料是否使用 morphTargets。默认值是 false。

- .morphNormals

定义材料是否使用 morphNormals。设置为true，将从 几何模型(Geometry) 传递morphNormal属性给着色器。默认值是 **false**.

### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="MeshNormalMaterial"></a>法向量网孔材料(MeshNormalMaterial)

[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshNormalMaterial.js)

一种把法向量映射到RGB颜色的材料。 

### 构造器（Constructor）

**MeshNormalMaterial( [parameters](javascript:window.parent.goTo('Object')) )**

参数是一个使用一个或多个属性定义材料外观的对象。

- morphTargets -- 定义材料是否使用 morphTargets。默认值是 false。
- wireframe -- 渲染模型为线框图。默认是false。（也就是通过平滑着色渲染）。
- wireframeLinewidth -- 控制线框图的线宽。默认为1。

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

 .wireframe

渲染模型为线框图。默认是false。（也就是通过平滑着色渲染）。

- .wireframeLinewidth

控制线框图的线宽。默认为1。
由于 [角度层（ANGLE layer）](https://code.google.com/p/angleproject/)的限制，在Windows平台上线宽将总是为1而不管设置的值。

- .morphTargets

定义材料是否使用 morphTargets。默认值是 false。

### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="MeshPhongMaterial"></a>Phong网孔材料(MeshPhongMaterial)

用于表面有光泽的材料，计算每个像素。

### 构造器（Constructor）

**MeshPhongMaterial( parameters )**
参数是一个使用一个或多个属性定义材料外观的对象。

- color — 线条的十六进制颜色。缺省值为 0xffffff。
- specular — 设置高亮颜色，缺省为 0x111111 .
- shininess — 设置亮度，缺省为 30.
- map — 设置纹理贴图。缺省为null。
- lightMap — 设置光照贴图。缺省为null。
- lightMapIntensity — 设置光照贴图强度。缺省值为1。
- aoMap — 设置环境遮挡贴图（ao = ambient occlusion）。缺省为null。
- aoMapIntensity — 设置环境遮挡贴图强度。缺省为1。
- emissive - 设置放射光颜色。默认是0x000000.
- emissiveMap — 设置放射光贴图。缺省为null。
- emissiveIntensity — 设置放射光贴图强度。缺省值为1。
- bumpMap — 设置凸凹贴图，缺省为null。
- bumpScale — 设置凸凹贴图比例，缺省为1。
- normalMap — 设置法线贴图，缺省为null。
- normalScale — 设置法线贴图比例，缺省为 (1, 1)。
- displacementMap — 设置置换贴图。缺省为null。
- displacementScale — 设置置换比例。缺省为1.
- displacementBias — 设置置换偏移。缺省为0.
- specularMap — 设置镜面贴图（也称高光贴图）。缺省为null。
- alphaMap — 设置阿尔法贴图。默认为null。
- envMap — 设置环境贴图。默认为null。
- combine — 设置组合操作。默认值是THREE.MultiplyOperation.
- reflectivity — 设置反射率。默认值是 1.
- refractionRatio — 设置折射率。默认值是 0.98.
- fog — 定义材质颜色是否受全局雾设置的影响。默认是true。
- shading — 定义着色类型。缺省为 THREE.SmoothShading。
- wireframe — 渲染模型为线框。默认是false。
- wireframeLinewidth — 线框线宽。默认是1。
- wireframeLinecap — 定义线端的外观。默认值是 'round'.
- wireframeLinejoin — 定义线连接节点的外观。默认值是 'round'.
- vertexColors — 定义顶点如何着色。默认值是 THREE.NoColors.
- skinning — 定义材料是否使用皮肤。默认值是false.
- morphTargets — 定义材料是否使用 morphTargets。默认值是 false。
- morphNormals — 定义材料是否使用morphNormals。默认是false。

例子：
``` javascript
materials.push( new THREE.MeshPhongMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ) );
```
### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .color

材料的扩散色。默认是白色。

- .specular

材料的高亮色，也就是说，物质是多么的有光泽，它的光泽的颜色。
如果设置为和扩散值相同的颜色，则会使材料更具有金属感；而设置为灰色则使得材料看起来更像塑料。缺省为一个深灰色。

- .shininess

高亮的程度，越高的值越闪亮，缺省为**30**。

- .map

设置颜色纹理贴图。默认为空。

- .lightMap

设置光照贴图。默认为空。lightMap需要第二组UVs。

- .lightMapIntensity

设置光照贴图强度。

- .aoMap

设置环境遮挡贴图。默认为空。aoMap需要第二套UV。

- .aoMapIntensity

设置环境遮挡贴图强度。

- .emissive

放射（光）材料的颜色，基本上是一个不受其他光照影响的固有颜色。默认是黑色。

- .emissiveMap

设置放射（发光）贴图。默认为空。放射贴图颜色使用放射颜色和强度所调节。如果你有一个放射贴图，确保设置放射颜色不是黑色的。

- .emissiveIntensity

放射光强度。调节发光颜色。默认为1。

- .bumpMap

用来创建一个凹凸贴图的纹理。黑色和白色的值映射到和光照相关的能感知到的深度。凹凸图并不会影响物体的几何形状，只影响光照。如果定义了一个法线贴图，则该属性被忽略。

- .bumpScale

凹凸贴图对材料有多大影响。典型的范围是0-1。默认为1。

- .normalMap

用来创建一个法线贴图的纹理。RGB值影响每个像素片段的表面法线，并改变颜色照亮的方式。法线贴图不改变表面的实际形状，只影响光照。

- .normalScale

法线贴图对材料有多大影响。典型的范围是0-1。默认为1。

- .displacementMap

置换贴图影响网孔顶点的位置。和其他贴图只影响光照和着色不同，置换顶点可能会产生投影，阻挡其他对象，亦或是作为真实的几何模型。 置换纹理是一个图像，每个像素值对应到网孔模型的顶点，并被重新定位。

- .displacementScale

定义置换贴图对网孔模型的影响度（黑色不发生替换，白色为最大替换）。如果没有设置置换贴图，该值无效。缺省为1.

- .displacementBias

网格顶点上的置换贴图的值的偏移量。如果没有设置置换贴图，该值无效。缺省为0.

- .specularMap

由于这种材料没有一个specular组件，specular值只影响环境贴图影响表面的程度。默认为空。

- .alphaMap

阿尔法贴图是一个灰度纹理，控制整个表面的不透明度（黑色：完全透明；白色：完全不透明）。默认为空。

只有该纹理的颜色被使用，忽略透明度。 对于 RGB 和 RGBA 纹理，WebGL 在纹理采样时将使用绿色通道，这是因为在DXT压缩和非压缩RGB 565种格式中的绿色提供了额外的精度位。纯亮度（Luminance-only）和 亮度/透明度（luminance/alpha）纹理也如预期正常工作。

- .envMap

设置环境贴图。默认为null。

- .combine

如何组合表面颜色结果与环境贴图，如果有的话。

可选项有：

> - THREE.Multiply    (default), 
> - THREE.MixOperation
> - THREE.AddOperation

如果选择混合（mix），则将反射率用于两种颜色之间的混合。

- .reflectivity

设置反射率。默认值是 1

- .refractionRatio

使用`THREE.CubeRefractionMapping` 环境贴图的折射率，缺省为 **0.98**.

- .fog

定义材质颜色是否受全局雾设置的影响。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被 Canvas所忽略，但是对 WebGL有效。

- .shading

定义着色类型。缺省为 THREE.SmoothShading。

- .wireframe

渲染模型为线框。默认是false（也就是，渲染为平面多边形）。

- .wireframeLinewidth

控制线框图的线宽。缺省为1.

由于 [角度层（ANGLE layer）](https://code.google.com/p/angleproject/)的限制，在Windows平台上使用 WebGL，线宽将总是为1而不管设置的值。

- .wireframeLinecap

定义线的两端的样式，可用值为 "butt", "round" 和 "square"。缺省为 'round'。可参考：[Canvas Linecap](http://techbrood.com/en/tagsref?p=canvas-linecap)中的定义和演示。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被 WebGL所忽略，但是对 Canvas 有效。

- .wireframeLinejoin

定义线连接点的外观。可选值为 "round", "bevel" 和 "miter". 缺省是 'round'。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被 WebGL所忽略，但是对 Canvas 有效。


- .vertexColors

定义顶点如何着色。可用值为 `THREE.NoColors`, `THREE.FaceColors` 和 `THREE.VertexColors`。缺省值为 `THREE.NoColors`.

当使用一些特定渲染器时，此设置可能没有任何效果。

- .skinning

定义材料是否使用皮肤。默认值是false.

- .morphTargets

定义材料是否使用 morphTargets。默认值是 false。

- .morphNormals

定义材料是否使用 morphNormals。设置为true，将从 几何模型(Geometry)传递morphNormal属性给着色器。默认值是 **false**.

### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="MeshStandardMaterial"></a>标准网孔材料(MeshStandardMaterial)

[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshStandardMaterial.js)

一种基于物理的标准材质，使用Metallic-Roughness工作流程。
基于物理的渲染（PBR）最近已成为许多3D应用程序的标准，例如[Unity](https://blogs.unity3d.com/2014/10/29/physically-based-shading-in-unity-5-a-primer/)， [Unreal](https://docs.unrealengine.com/latest/INT/Engine/Rendering/Materials/PhysicallyBased/)和 [3D Studio Max](http://area.autodesk.com/blogs/the-3ds-max-blog/what039s-new-for-rendering-in-3ds-max-2017)。
这种方法与旧方法的不同之处在于，不使用近似值来表示光与表面的相互作用，而是使用物理上正确的模型。 我们的想法是，不是在特定照明下调整材质以使其看起来很好，而是可以创建一种材质，能够“正确”地应对所有光照场景。
在实践中，该材质提供了比MeshLambertMaterial 或MeshPhongMaterial 更精确和逼真的结果，代价是计算成本更高。
计算着色的方式与MeshPhongMaterial相同，都使用[Phong](https://en.wikipedia.org/wiki/Phong_shading)着色模型， 这会计算每个像素的阴影（即在[fragment shader](https://en.wikipedia.org/wiki/Shader#Pixel_shaders)， AKA pixel shader中）， 与MeshLambertMaterial使用的Gouraud模型相比，该模型的结果更准确，但代价是牺牲一些性能。
请注意，为获得最佳效果，您在使用此材质时应始终指定environment map。
有关PBR概念的非技术性介绍以及如何设置PBR材质，请查看[marmoset](https://www.marmoset.co/)成员的这些文章：

- [Basic Theory of Physically Based Rendering](https://www.marmoset.co/posts/basic-theory-of-physically-based-rendering/)
- [Physically Based Rendering and You Can Too](https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/)

在 three.js（以及其他大多数PBR系统）中使用方法的技术细节， 可以在Brent Burley撰写的[paper from Disney](https://disney-animation.s3.amazonaws.com/library/s2012_pbs_disney_brdf_notes_v2.pdf)(pdf) 中查看。



## 构造函数(Constructor)

**MeshStandardMaterial( parameters : Object )**

parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
属性color例外，其可以作为十六进制字符串传递，默认情况下为 **0xffffff**（白色），内部调用Color.set(color)。

- color — 线条的十六进制颜色。缺省值为 0xffffff。
- roughness — Set roughness. Default is 0.5.
- metalness — Set metalness. Default is 0.5.
- map — 设置纹理贴图。缺省为null。
- lightMap — 设置光照贴图。缺省为null。
- lightMapIntensity — 设置光照贴图强度。缺省值为1。
- aoMap — 设置环境遮挡贴图（ao = ambient occlusion）。缺省为null。
- aoMapIntensity — 设置环境遮挡贴图强度。缺省为1。
- emissive - 设置放射光颜色。默认是0x000000.
- emissiveMap — 设置放射光贴图。缺省为null。
- emissiveIntensity — 设置放射光贴图强度。缺省值为1。
- bumpMap — 设置凸凹贴图，缺省为null。
- bumpScale — 设置凸凹贴图比例，缺省为1。
- normalMap — 设置法线贴图，缺省为null。
- normalScale — 设置法线贴图比例，缺省为 (1, 1)。
- displacementMap — 设置置换贴图。缺省为null。
- displacementScale — 设置置换比例。缺省为1.
- displacementBias — 设置置换偏移。缺省为0.
- roughnessMap - Set roughness map. Default is null.
- metalnessMap - Set metalness map. Default is null.
- alphaMap — 设置阿尔法贴图。默认为null。
- envMap — 设置环境贴图。默认为null。
- combine — 设置组合操作。默认值是THREE.MultiplyOperation.
- reflectivity — 设置反射率。默认值是 1.
- refractionRatio — 设置折射率。默认值是 0.98.
- fog — 定义材质颜色是否受全局雾设置的影响。默认是true。
- shading — 定义着色类型。缺省为 THREE.SmoothShading。
- wireframe — 渲染模型为线框。默认是false。
- wireframeLinewidth — 线框线宽。默认是1。
- wireframeLinecap — 定义线端的外观。默认值是 'round'.
- wireframeLinejoin — 定义线连接节点的外观。默认值是 'round'.
- vertexColors — 定义顶点如何着色。默认值是 THREE.NoColors.
- skinning — 定义材料是否使用皮肤。默认值是false.
- morphTargets — 定义材料是否使用 morphTargets。默认值是 false。
- morphNormals — 定义材料是否使用morphNormals。默认是false。

例子：
``` javascript
materials.push( new THREE.MeshStandardMaterial( { color: 0x550000, envMap: reflectionCube, roughness: 0.1, metalness: 1.0 } ) );
```
### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .color

材料的扩散色。默认是白色。

- .roughness

材料粗糙程度。

- .metalness

材料金属感。

- .map

设置颜色纹理贴图。默认为空。

- .lightMap

设置光照贴图。默认为空。lightMap需要第二组UVs。

- .lightMapIntensity

设置光照贴图强度。

- .aoMap

设置环境遮挡贴图。默认为空。aoMap需要第二套UV。

- .aoMapIntensity

TODO

- .emissive

放射（光）材料的颜色，基本上是一个不受其他光照影响的固有颜色。默认是黑色。

- .emissiveMap

设置放射（发光）贴图。默认为空。放射贴图颜色使用放射颜色和强度所调节。如果你有一个放射贴图，确保设置放射颜色不是黑色的。

- .emissiveIntensity

放射光强度。调节发光颜色。默认为1。

- .bumpMap

用来创建一个凹凸贴图的纹理。黑色和白色的值映射到和光照相关的能感知到的深度。凹凸图并不会影响物体的几何形状，只影响光照。如果定义了一个法线贴图，则该属性被忽略。

- .bumpScale

凹凸贴图对材料有多大影响。典型的范围是0-1。默认为1。

- .normalMap

用来创建一个法线贴图的纹理。RGB值影响每个像素片段的表面法线，并改变颜色照亮的方式。法线贴图不改变表面的实际形状，只影响光照。

- .normalScale

法线贴图对材料有多大影响。典型的范围是0-1。默认为1。

- .displacementMap

置换贴图影响网孔顶点的位置。和其他贴图只影响光照和着色不同，置换顶点可能会产生投影，阻挡其他对象，亦或是作为真实的几何模型。 置换纹理是一个图像，每个像素值对应到网孔模型的顶点，并被重新定位。

- .displacementScale

定义置换贴图对网孔模型的影响度（黑色不发生替换，白色为最大替换）。如果没有设置置换贴图，该值无效。缺省为1.

- .displacementBias

网格顶点上的置换贴图的值的偏移量。如果没有设置置换贴图，该值无效。缺省为0.

- .roughnessMap

TODO.

- .metalnessMap

TODO.

- .alphaMap

阿尔法贴图是一个灰度纹理，控制整个表面的不透明度（黑色：完全透明；白色：完全不透明）。默认为空。

只有该纹理的颜色被使用，忽略透明度。 对于 RGB 和 RGBA 纹理，WebGL在纹理采样时将使用绿色通道，这是因为在DXT压缩和非压缩RGB 565种格式中的绿色提供了额外的精度位。纯亮度（Luminance-only）和 亮度/透明度（luminance/alpha）纹理也如预期正常工作。

- .envMap

设置环境贴图。默认为null。

- .combine

如何组合表面颜色结果与环境贴图，如果有的话。

可选项有：

> - THREE.Multipl  (default)
> - THREE.MixOperation
> - THREE.AddOperation

如果选择混合（mix），则将反射率用于两种颜色之间的混合。

- .reflectivity

设置反射率。默认值是 1

- .refractionRatio

使用 THREE.CubeRefractionMapping 环境贴图的折射率，缺省为 **0.98**.

- .fog

定义材质颜色是否受全局雾设置的影响。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被 Canvas所忽略，但是对 WebGL 有效。

- .shading

定义着色类型。缺省为 THREE.SmoothShading。

- .wireframe

渲染模型为线框。默认是false（也就是，渲染为平面多边形）。

- .wireframeLinewidth

控制线框图的线宽。缺省为1.

由于 [角度层（ANGLE layer）](https://code.google.com/p/angleproject/)的限制，在Windows平台上使用 WebGL，线宽将总是为1而不管设置的值。

- .wireframeLinecap

定义线的两端的样式，可用值为 "butt", "round" 和 "square"。缺省为 'round'。可参考：[Canvas Linecap](http://techbrood.com/en/tagsref?p=canvas-linecap)中的定义和演示。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被 WebGL所忽略，但是对 Canvas 有效。

- .wireframeLinejoin

定义线连接点的外观。可选值为 "round", "bevel" 和 "miter". 缺省是 'round'。

当使用一些特定渲染器时，此设置可能没有任何效果。比如，该属性被 WebGL所忽略，但是对 Canvas 有效。

- .vertexColors

定义顶点如何着色。可用值为 `THREE.NoColors`, `THREE.FaceColors` 和 `THREE.VertexColors`。缺省值为 `THREE.NoColors`.

当使用一些特定渲染器时，此设置可能没有任何效果。

- .skinning

定义材料是否使用皮肤。默认值是false.

- .morphTargets

定义材料是否使用 morphTargets。默认值是 false。

- .morphNormals

定义材料是否使用 morphNormals。设置为true，将从 几何模型(Geometry)传递morphNormal属性给着色器。默认值是 **false**.

### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="MeshPhysicalMaterial"></a>物理网格材质(MeshPhysicalMaterial)

[源码](https://github.com/mrdoob/three.js/blob/master/src/materials/MeshPhysicalMaterial.js)

[MeshStandardMaterial](#MeshStandardMaterial)的扩展，能够更好地控制反射率。

请注意，为了获得最佳效果，您在使用此材质时应始终指定环境贴图。

### 构造函数(Constructor)

**MeshPhysicalMaterial( parameters : Object )**

parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)

属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)。

### 属性(Properties)

常用属性请参见基类[Material](#top)。 

- .clearCoat : Float

ClearCoat级别，从0.0到1.0。默认值为0.0。

- .clearCoatRoughness : Float

clearCoat看起来的粗糙程度，从0.0到1.0。默认值为0.0。

- .isMeshPhysicalMaterial : Boolean

用于检查此类或派生类是否为Lambert网格材质。默认值为 true。

因为其通常用在内部优化，所以不应该更改该属性值。

- .defines : Object

如下形式的对象:
``` json
{ 'PHYSICAL': '' };
```
WebGLRenderer使用它来选择shaders。

- .reflectivity : Float

反射度，从0.0到1.0。默认值为0.5。
这模拟了非金属材质的反射率。当MeshStandardMaterial为1.0时，此属性无效。

### 方法(Methods)

常用方法请参见基类[Material](#top) 和[MeshStandardMaterial](#MeshStandardMaterial)。



## <a id="MeshToonMaterial"></a>卡通网格材质(MeshToonMaterial)



### 属性(Properties)

常用属性请参见基类[Material](#top)。 



### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="PointsMaterial"></a>点材料(PointsMaterial)



### 属性(Properties)

常用属性请参见基类[Material](#top)。 



### 方法(Methods)

常用方法请参见基类[Material](#top)。




## <a id="RawShaderMaterial"></a>原始着色器材料(RawShaderMaterial)



### 属性(Properties)

常用属性请参见基类[Material](#top)。 



### 方法(Methods)

常用方法请参见基类[Material](#top)。




## <a id="ShaderMaterial"></a>着色器材料(ShaderMaterial)



### 属性(Properties)

常用属性请参见基类[Material](#top)。 



### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="ShadowMaterial"></a>阴影材质(ShadowMaterial)



### 属性(Properties)

常用属性请参见基类[Material](#top)。 



### 方法(Methods)

常用方法请参见基类[Material](#top)。



## <a id="SpriteMaterial"></a>精灵材料(SpriteMaterial)



### 属性(Properties)

常用属性请参见基类[Material](#top)。 





### 方法(Methods)

常用方法请参见基类[Material](#top)。

