# <a id="top"></a>常量(Constants)


查看[源码](https://github.com/mrdoob/three.js/blob/master/src/constants.js)

## <a id="Animation"></a>动画(Animation)

### 循环模式
- THREE.LoopOnce  仅播放一次
- THREE.LoopRepeat  循环播放
- THREE.LoopPingPong 往复循环
### 插值模式
- THREE.InterpolateDiscrete  离散插值
- THREE.InterpolateLinear 线性插值
- THREE.InterpolateSmooth 平滑插值
### 结束模式
- THREE.ZeroCurvatureEnding 零曲率结束
- THREE.ZeroSlopeEnding 零斜率结束
- THREE.WrapAroundEnding 环绕结尾

## <a id="Core"></a>核心(Core)
### 修订版本号
- THREE.REV 当前three.js的修订版本号（ revision number）。
### 鼠标按钮
- THREE.MOUSE.LEFT 鼠标左键
- THREE.MOUSE.MIDDLE 鼠标滚轮
- THREE.MOUSE.RIGHT 鼠标右键

## <a id="CustomBlendingEquation"></a>自定义混合公式(CustomBlendingEquation)
这里定义的一些常量，用于混合（blend）效果的处理。

> 所谓混合就是在绘制时，不是直接把新的颜色覆盖在原来旧的颜色上，而是将新的颜色与旧的颜色经过一定的运算，获得最终的混合颜色。
>
> 其中新的颜色被称为源颜色，旧的颜色称为目标颜色。传统意义上的混合，是将源颜色乘以源因子，目标颜色乘以目标因子，然后相加。
>
> 源因子和目标因子设置的不同直接导致混合结果的不同。
>
> 下面用数学公式来表达一下这个运算方式。假设源颜色的四个分量（指红色，绿色，蓝色，alpha值）是(Rs, Gs, Bs, As)，目标颜色的四个分量是(Rd, Gd, Bd, Ad)，
> 又设源因子为(Sr, Sg, Sb, Sa)，目标因子为(Dr, Dg, Db, Da)。则混合产生的新颜色可以表示为：
>
> ``` javascript
> (RsSr+RdDr, GsSg+GdDg, BsSb+BdDb, AsSa+AdDa)
> ```
> 如果颜色的某一分量超过了1.0，则它会被自动截取为1.0，不应出现越界。

### 用法
这个常量可以用于所有的材质类型。首先将材质的混合模式设置为THREE.CustomBlending，然后设置所需要的混合方程、源因子和目标因子。
``` javascript
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
material.blending = THREE.CustomBlending;
material.blendEquation = THREE.AddEquation; //default
material.blendSrc = THREE.SrcAlphaFactor; //default
material.blendDst = THREE.OneMinusSrcAlphaFactor; //default
```
### 方程（Equations）
这个用于指定在处理混合（blend）效果时使用何种类型的方程式。

- 加法方程（THREE.AddEquation）
- 减法方程（THREE.SubtractEquation）
- 反向减法方程（THREE.ReverseSubtractEquation）
- 最小方程（THREE.MinEquation）
- 最大方程（THREE.MaxEquation）

上述这些常量对应于源代码中的枚举值，要理解其具体含义，我们得了解GL混合方程式定义：

``` javascript
glBlendEquation(GLenum mode);
```

其中GLenum mode可取值见下表：

|  |值|
| ------------------------ |: -------------------- :|
| GL_FUNC_ADD              | Cf = (Cs * S)+(Cd * D) |
| GL_FUNC_SUBTRACT         | Cf = (Cs * S)-(Cd * D) |
| GL_FUNC_RESERSE_SUBTRACT | Cf = (Cd * D)-(Cs * S) |
| GL_MIN                   | Cf = min(Cs,Cd)        |
| GL_MAX                   | Cf = max(Cs,Cd)        |

其中：

> - Cf表示混合后显示的颜色
> - Cd混合前颜色缓冲中已经有的颜色值
> - Cs将要绘制的颜色
> - S为glBlendFunc函数设置时的第一个参数,源颜色因子
> - D为glBlendFunc函数设置时的第二个参数,目标颜色因子

### 目标因子（Destination Factors）
自定义混合模式目标颜色因子

- THREE.ZeroFactor：对应于GL_ZERO，表示使用0.0作为因子，实际上相当于不使用这种颜色参与混合运算
- THREE.OneFactor：GL_ONE，表示使用1.0作为因子，实际上相当于完全的使用了这种颜色参与混合运算
- THREE.SrcColorFactor：GL_SRC_COLOR，表示使用源颜色的四个分量分别作为因子的四个分量
- THREE.OneMinusSrcColorFactor：GL_ONE_MINUS_SRC_COLOR，表示使用1.0减去源颜色的四个分量分别作为因子的四个分量
- THREE.SrcAlphaFactor：GL_SRC_ALPHA，表示使用源颜色的alpha值来作为因子。
- THREE.OneMinusSrcAlphaFactor：GL_ONE_MINUS_SRC_ALPHA，表示用1.0减去源颜色的alpha值来作为因子。
- THREE.DstAlphaFactor：GL_DST_ALPHA，表示使用目标颜色的alpha值来作为因子。
- THREE.OneMinusDstAlphaFactor：GL_ONE_MINUS_DST_ALPHA，表示用1.0减去目标颜色的alpha值来作为因子。
### 源因子（Source Factors）
- THREE.DstColorFactor：对应于GL_DST_COLOR，表示使用目标颜色的四个分量分别作为因子的四个分量。
- THREE.OneMinusDstColorFactor：GL_ONE_MINUS_DST_COLOR 表示使用1.0减去目标颜色的四个分量分别作为因子的四个分量。
- THREE.SrcAlphaSaturateFactor：GL_SRC_ALPHA_SATURATE 表示源颜色的alpha 值和RGB值采用不同的混合因子。

源因子和目标因子是可以通过glBlendFunc函数来进行设置的。glBlendFunc有两个参数，前者表示源因子，后者表示目标因子。

举例而言，如果设置了：
``` javascript
glBlendFunc(GL_ONE, GL_ZERO);
```
，则表示完全使用源颜色，完全不使用目标颜色，因此画面效果和不使用混合的时候一致。

如果设置了：
``` javascript
glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
```
，则表示源颜色乘以自身的alpha 值，目标颜色乘以1.0减去源颜色的alpha值，
这样一来，源颜色的alpha值越大，则产生的新颜色中源颜色所占比例就越大，而目标颜色所占比例则减小。

这种情况下，我们可以简单的将源颜色的alpha值理解为“不透明度”。这也是混合时最常用的方式。

## <a id="DrawModes"></a>绘制模式(DrawModes)
这些是Mesh.drawMode的有效值，控制着顶点列表一旦被发送到GPU中将如何被解释。 请注意，只有当Mesh.geometry是一个BufferGeometry的时候，这些值才会生效。当Mesh.geometry是一个 Geometry的时候，改变这个值不会有任何效果。 

### 绘图模式
- THREE.TrianglesDrawMode


这是默认值，这将使得每三个连续顶点(v0, v1, v2)，(v2, v3, v5)，……被解释为一个单独的三角形。 
如果顶点的数量不是3的倍数，那么将会忽略多余的顶点。

- THREE.TriangleStripDrawMode


这将使得一系列的三角形（由(v0, v1, v2)，(v2, v1, v3)，(v2, v3, v4)，……给定）一个一个地连在一起，每一个连续的三角形将和前一个三角形共享两个顶点。

- THREE.TriangleFanDrawMode


这将会使得一个序列中的每一个三角形（由(v0, v1, v2)，(v0, v2, v3)，(v0, v3, v4)，……给定）共享它们的第一个顶点（就像风扇一样）。

> 注意：截至DirectX10这个模式还没有被支持。 由于Chorme和Firefox在Windows上是使用ANGLE来渲染WebGL的，所以这种模式将会在内部转换为受支持的模式， 但可能会导致这些浏览器在性能上降低一些。

### 用法
``` javascript
var geometry = new THREE.Geometry();

geometry.vertices.push(
	new THREE.Vector3( -10,  10, 0 ),
	new THREE.Vector3( -10, -10, 0 ),
	new THREE.Vector3(  10, -10, 0 ),
	...
);
geometry.faces.push( new THREE.Face3( 0, 1, 2 ), ... );

var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

var mesh = new THREE.Mesh( geometry, material );
mesh.drawMode = THREE.TrianglesDrawMode; //default

scene.add( mesh );
```
## <a id="Materials"></a>材质(Materials)
由这些常量定义的属性对所有的材质类型都生效，除了Texture Combine Operations只应用于 MeshBasicMaterial，MeshLambertMaterial和MeshPhongMaterial。
### 面（Side）
- THREE.FrontSide  - 前面 
- THREE.BackSide - 后面
- THREE.DoubleSide - 双面（即内外两面都应用该材料）。 

定义了哪一边的面将会被渲染 —— 正面，或是反面，还是两个面都渲染。 默认值是FrontSide（只渲染正面）。

## 着色方式（Shading）

着色是给骨架（线框轮廓）添加皮肤（色彩）的过程。

- THREE.FlatShading：平面着色，也称之为“恒量着色”，平面着色是最简单也是最快速的着色方法，每个多边形都会被指定一个单一且没有变化的颜色。
    这种方法虽然会产生出不真实的效果，不过它非常适用于快速成像及其它速度要求高于细致度的场合，如：生成预览动画。

- THREE.SmoothShading：平滑着色，用多种颜色进行绘制，每个顶点都是单独进行处理的，各顶点和各图元之间采用均匀插值。

### 颜色(Color)
- THREE.NoColors  - NoColors 是默认值，且会将材质的颜色应用到所有面。
- THREE.FaceColors - FaceColors 根据每个Face3的Color值来对面进行着色。
- THREE.VertexColors - VertexColors 根据每个 Face3的vertexColors（顶点颜色）值来对面进行着色。 这是一个包含有三个Color的数组，数组中每一项都对应着面中的每一个顶点。

[示例 geometry / colors](https://threejs.org/examples/#webgl_geometry_colors)


### 混合模式(Blending)
- THREE.NoBlending
- THREE.NormalBlending
- THREE.AdditiveBlending
- THREE.SubtractiveBlending
- THREE.MultiplyBlending
- THREE.CustomBlending


这些值控制着源和目标材质中，被发送到WebGLRenderer，来给WebGL使用的包含有RGB和Alpha数据的混合方程。

默认值是NormalBlending。

请注意，CustomBlending必须被设置为自定义混合方程（Custom Blending Equations）常量中的值。

[示例 materials / blending](https://threejs.org/examples/#webgl_materials_blending)

### 深度模式(Depth)
- THREE.NeverDepth - 永远不返回true。
- THREE.AlwaysDepth - 总是返回true。
- THREE.LessDepth - 当输入像素Z-depth小于当前缓冲器Z-depth时，返回true。
- THREE.LessEqualDepth - 为默认值，当输入像素Z-depth小于或等于当前缓冲器Z-depth时，返回true。
- THREE.GreaterEqualDepth - 当输入像素Z-depth大于或等于当前缓冲器Z-depth时，返回true。 
- THREE.GreaterDepth - 当输入像素Z-depth大于当前缓冲器Z-depth时，返回true。
- THREE.NotEqualDepth - 当输入像素Z-depth不等于当前缓冲器Z-depth时，返回true。


材质使用这些深度函数来比较输入像素和缓冲器中Z-depth的值。 如果比较的结果为true，则将绘制像素。
### 纹理结合操作(Operation)
- THREE.MultiplyOperation - 是默认值，它将环境贴图和物体表面颜色进行相乘。
- THREE.MixOperation - 用反射率来混和两种颜色。
- THREE.AddOperation - 用于对两种颜色进行相加。


这些常量定义了物体表面颜色与环境贴图（如果存在的话）相结合的结果， 用在MeshBasicMaterial、MeshLambertMaterial和MeshPhongMaterial当中。

## <a id="Renderer"></a>渲染器(Renderer)
关于面剔除模式和正面方向，这里定义的常量用来指定多边形正反面是否可以被剔除。背面一般是不可见的，进行剔除后，可以提高渲染效率。 

## 剔除面（Cull Face）

- THREE.CullFaceNone - 禁用面剔除。
- THREE.CullFaceBack - 为默认值，剔除背面。
- THREE.CullFaceFront - 剔除正面。
- THREE.CullFaceFrontBack - 剔除正面和背面。

## 正面方向（Front Face Direction）

- THREE.FrontFaceDirectionCW - 将多边形的缠绕顺序设置为顺时针方向。顺时针为0（CW=Clockwise）。 
- THREE.FrontFaceDirectionCCW - 为默认值，将多边形的缠绕顺序设置为逆时针方向。逆时针为1（CCW=Count Clockwise） 

### 阴影类型

阴影映射也称之为阴影贴图，这些常量用来确定阴影效果的处理方式。 

![](http://wow.techbrood.com/uploads/160601/pcf.gif)

如上图所示，如果利用点采样或者线性采样得到一个深度值，然后在于即将渲染的像素的深度进行比较的话，最终结果是二值化的（0或1）。
就是说即将渲染的像素只有两种情况，在阴影内部或者外部。这种二值化的特性直接导致阴影映射没有半影现象了，
当其被放大观察的时候，会导致阴影边缘出现严重的锯齿现象。当然优点是计算简单，速度最快。
而PCF则不仅考虑到该点的情况，还通盘考虑周围区域，通过把周边区域的比较值做平均，得到介于0到1之间的浮点型数值。
换个角度理解，就是说这种采样的结果可以描述当前像素被阴影覆盖的程度，而不是简单的是否被阴影覆盖。这样就使得阴影在边缘处有一个更为真实的平滑过渡。

在把目标点换到目标区域之后，我们需要确定都读取哪些像素。最简单的办法就是就近均匀读取，不过这种办法可能会产生一些规律性，
所以用泊松分布来读取周围的采样点更自然一些。按照常识，半影的情况应该和物体距离光源的远近有关，越是远的物体阴影越清晰，也就是说半影区域越小。
我们引入一个采样点范围值用来动态控制半影的大小，半影越大，需要的采样点也越多一些，否则依然会有走样问题。

如果**PCF**能够动态适应半影的大小，就演变成了**PCSS(Percentage-Closer Soft Shadows)**方式。

- THREE.BasicShadowMap - 能够给出没有经过过滤的阴影映射 —— 速度最快，但质量最差。
- THREE.PCFShadowMap - 为默认值，使用Percentage-Closer Filtering (PCF)算法来过滤阴影映射。
- THREE.PCFSoftShadowMap - 使用Percentage-Closer Soft Shadows (PCSS) 算法来过滤阴影映射。

这些常量定义了WebGLRenderer中shadowMap.type的属性。

### 色调映射
- THREE.NoToneMapping - 禁用色调映射。
- THREE.LinearToneMapping - 为默认值，线性色调映射。
- THREE.ReinhardToneMapping
- THREE.Uncharted2ToneMapping
- THREE.CineonToneMapping


这些常量定义了WebGLRenderer中toneMapping的属性。 这个属性用于在普通计算机显示器或者移动设备屏幕等低动态范围介质上，模拟、逼近高动态范围（HDR）效果。

[示例：WebGL / tonemapping](https://threejs.org/examples/#webgl_tonemapping)

## <a id="Textures"></a>纹理(Textures)

### 映射模式
- THREE.UVMapping：最常用的平展映射 
- THREE.CubeReflectionMapping：立方体反射映射 
- THREE.CubeRefractionMapping：立方体折射映射 
- HREE.EquirectangularReflectionMapping：圆柱反射映射 
- THREE.EquirectangularRefractionMapping：圆柱折射映射 
- THREE.SphericalReflectionMapping：球面反射映射 
- THREE.CubeUVReflectionMapping
- THREE.CubeUVRefractionMapping


这些常量定义了纹理贴图的映射模式。
UVMapping是默认值，纹理使用网格的坐标来进行映射。

其它的值定义了环境映射的类型。

CubeReflectionMapping 和 CubeRefractionMapping 用于 CubeTexture —— 由6个纹理组合而成，每个纹理都是立方体的一个面。 对于CubeTexture来说，CubeReflectionMapping是其默认值。

EquirectangularReflectionMapping 和 EquirectangularRefractionMapping 用于等距圆柱投影的环境贴图，也被叫做经纬线映射贴图。等距圆柱投影贴图表示沿着其水平中线360°的视角，以及沿着其垂直轴向180°的视角。贴图顶部和底部的边缘分别对应于它所映射的球体的北极和南极。 

SphericalReflectionMapping 用球形反射贴图，例如它可以通过剪裁镜面球的照片来获得。 无论摄像机相对于立方贴图对象或者表面的位置时怎样的，球形贴图被渲染时将会“面朝”摄像机。

[示例：materials / envmaps](https://threejs.org/examples/#webgl_materials_envmaps)

### 包裹模式
- THREE.RepeatWrapping - 纹理将简单地重复到无穷大。
- THREE.ClampToEdgeWrapping - 是默认值，纹理中的最后一个像素将延伸到网格的边缘。
- THREE.MirroredRepeatWrapping - 纹理将重复到无穷大，在每次重复时将进行镜像。


这些常量定义了纹理贴图的 wrapS 和 wrapT 属性，定义了水平和垂直方向上纹理的包裹方式。

### 放大滤镜 Magnification Filters 
- THREE.NearestFilter - 返回与指定纹理坐标（在曼哈顿距离之内）最接近的纹理元素的值。
- THREE.LinearFilter - 是默认值，返回距离指定的纹理坐标最近的四个纹理元素的加权平均值， 并且可以包含纹理的其他部分中，被包裹或者被重复的项目，具体取决于 wrapS 和 wrapT 的值，and on the exact mapping。


这些常量用于纹理的magFilter属性，它们定义了当被纹理化的像素映射到小于或者等于1纹理元素（texel）的区域时，将要使用的纹理放大函数。

### 缩小滤镜 Minification Filters
- THREE.NearestFilter
- THREE.NearestMipMapNearestFilter - 选择与被纹理化像素的尺寸最匹配的mipmap，并以[page:constant NearestFilter]（最靠近像素中心的纹理元素）为标准来生成纹理值。
- THREE.NearestMipMapLinearFilter - 选择与被纹理化像素的尺寸最接近的两个mipmap，并以[page:constant NearestFilter]为标准来从每个mipmap中生成纹理值。最终的纹理值是这两个值的加权平均值。 
- THREE.LinearFilter
- THREE.LinearMipMapNearestFilter - 选择与被纹理化像素的尺寸最匹配的mipmap，并以[page:constant LinearFilter]（最靠近像素中心的四个纹理元素的加权平均值）为标准来生成纹理值。 
- THREE.LinearMipMapLinearFilter - 是默认值，它选择与被纹理化像素的尺寸最接近的两个mipmap，并以[page:constant LinearFilter]为标准来从每个mipmap中生成纹理值。最终的纹理值是这两个值的加权平均值。


这些常量用于纹理的minFilter属性，它们定义了当被纹理化的像素映射到大于1纹理元素（texel）的区域时，将要使用的纹理缩小函数。

[示例：materials / texture / filters](https://threejs.org/examples/#webgl_materials_texture_filters)

### 类型
- THREE.UnsignedByteType - 是默认值。无符号8位整形值(1个字节) 
- THREE.ByteType - 带符号8位整形值(1个字节) 
- THREE.ShortType - 带符号16位整形值(2个字节) 
- THREE.UnsignedShortType - 无符号16未整形值(2个字节) 
- THREE.IntType - 带符号32位整形值(4个字节) 
- THREE.UnsignedIntType - 无符号32位整形值(4个字节) 
- THREE.FloatType - 单精度浮点型(4个字节) 
- THREE.HalfFloatType - 半浮点型 

### 像素类型（Pixel Types）

- THREE.UnsignedShort4444Type -压缩到不带符号16位整形:R4,G4,B4,A4 
- THREE.UnsignedShort5551Type - 压缩到不带符号16位整形：R5,G5,B5,A1 
- THREE.UnsignedShort565Type - 压缩到不带符号16位整形：R5,G6,B5 
- THREE.UnsignedInt248Type


这些常量用于纹理的type属性，这些属性必须与正确的格式相对应。详情请查看下方。

### 格式
- THREE.AlphaFormat - 丢弃红、绿、蓝分量，仅读取Alpha分量。
- THREE.RGBFormat - 丢弃Alpha分量，仅读取红、绿、蓝分量。
- THREE.RGBAFormat - 是默认值，它将读取红、绿、蓝和Alpha分量。
- THREE.LuminanceFormat - 将每个元素作为单独的亮度分量来读取。 将其转换为范围限制在[0,1]区间的浮点数，然后通过将亮度值放入红、绿、蓝通道，并将1.0赋给Alpha通道，来组装成一个RGBA元素。
- THREE.LuminanceAlphaFormat - 将每个元素同时作为亮度分量和Alpha分量来读取。 和上面LuminanceFormat的处理过程是一致的，除了Alpha分量具有除了1.0以外的值。
- THREE.RGBEFormat - 与 RGBAFormat 是相同的。
- THREE.DepthFormat - 将每个元素作为单独的深度值来读取，将其转换为范围限制在[0,1]区间的浮点数。 它是DepthTexture的默认值。
- THREE.DepthStencilFormat - 将每个元素同时作为一对深度值和模板值来读取。


这些常量用于纹理的format属性，它们定义了shader（着色器）将如何读取的2D纹理或者texels（纹理元素）的元素。.

其中的深度分量解释为DepthFormat。 模板分量基于深度+模板的内部格式来进行解释。 

请注意，纹理必须具有正确的type设置，正如上一节所描述的那样。 请参阅[WebGLRenderingContext.texImage2D](https://developer.mozilla.org/en/docs/Web/API/WebGLRenderingContext/texImage2D )来获得有关详细信息。

### DDS / ST3C 压缩纹理格式
- THREE.RGB_S3TC_DXT1_Format - RGB图像格式的DXT1压缩图像。 
- THREE.RGBA_S3TC_DXT1_Format - RGB图像格式的DXT1压缩图像，Alpha仅具有是/否透明两个值。
- THREE.RGBA_S3TC_DXT3_Format - RGBA图像格式的DXT3压缩图像，和32位RGBA纹理贴图相比，它提供了4:1的压缩比。
- THREE.RGBA_S3TC_DXT5_Format - RGBA图像格式的DXT5压缩图像，它也提供了4:1的压缩比，但与DX3格式的不同之处在于其Alpha是如何被压缩的。


要使用CompressedTexture中的[page:Texture.format format]属性，需要获得[WEBGL_compressed_texture_s3tc](https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/ )扩展的支持。
### PVRTC 压缩纹理格式 PVRTC Compressed Texture Formats
- THREE.RGB_PVRTC_4BPPV1_Format - 4位模式下的RGB压缩，每4x4像素一个块。
- THREE.RGB_PVRTC_2BPPV1_Format - 2位模式下的RGB压缩，每8x4像素一个块。
- THREE.RGBA_PVRTC_4BPPV1_Format - 4位模式下的RGBA压缩，每4x4像素一个块。
- THREE.RGBA_PVRTC_2BPPV1_Format -  2位模式下的RGB压缩，每8x4像素一个块。


要使用CompressedTexture中的format属性，需要获得 [WEBGL_compressed_texture_pvrtc](https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/)扩展的支持。
PVRTC通常只在具有PowerVR芯片的移动设备上可用，这些设备主要是苹果设备。

### ETC 压缩纹理格式
-  THREE.RGB_ETC1_Format


要使用CompressedTexture中的format属性，需要获得[WEBGL_compressed_texture_etc1](https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc1/ )扩展的支持。

### 编码
- THREE.LinearEncoding - 是默认值。 除此之外的其他值仅在材质的贴图、envMap和emissiveMap中有效。
- THREE.sRGBEncoding
- THREE.GammaEncoding
- THREE.RGBEEncoding
- THREE.LogLuvEncoding
- THREE.RGBM7Encoding
- THREE.RGBM16Encoding
- THREE.RGBDEncoding
- THREE.BasicDepthPacking
- THREE.RGBADepthPacking


这些常量用于纹理的encoding属性。

如果编码类型在纹理已被一个材质使用之后发生了改变， 你需要来设置Material.needsUpdate为true来使得材质重新编译。