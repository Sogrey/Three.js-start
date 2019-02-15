# <a id="top"></a>渲染器(Renderer)

> 渲染器（Renderer）用来绘制场景，渲染器分为Canvas渲染器（CanvasRenderer）和WebGL渲染器（WebGLRenderer）。

## <a id="CanvasRenderer"></a>Canvas渲染器（CanvasRenderer）

WebGLRenderer 和 CanvasRenderer 都是使用HTML5的 `<canvas>` 直接内嵌在网页中。Canvas渲染器使用相对较慢的Canvas 2D Context API来绘制场景。

``` javascript
   //判断是否支持WebGL
   function webglAvailable() {
		try {
			var canvas = document.createElement( 'canvas' );
			return !!( window.WebGLRenderingContext && (
				canvas.getContext( 'webgl' ) ||
				canvas.getContext( 'experimental-webgl' ) )
			);
		} catch ( e ) {
			return false;
		}
	}
    //支持webGL使用WebGLRenderer,不支持回退使用CanvasRenderer
	if ( webglAvailable() ) {
		renderer = new THREE.WebGLRenderer();
	} else {
		renderer = new THREE.CanvasRenderer();
	}
```

### 构造器（Constructor）

**CanvasRenderer(parameters)**

- parameters是一个用来定义渲染器行为的可选对象。当没有设置该参数时，将使用默认值
  
- canvas — 一个用来绘制输出的 Canvas 对象。

> three.js已经将CanvasRenderer移除了。
>
> ``` javascript
> 	function CanvasRenderer() {
> 
> 		console.error( 'THREE.CanvasRenderer has been removed' );
> 
> 	}
> ```



## <a id="WebGLRenderer"></a>WebGL渲染器(WebGLRenderer)

WebGL渲染器使用WebGL来绘制您的场景，如果您的设备支持的话。使用WebGL将能够利用GPU硬件加速从而提高渲染性能。 

这个渲染器比 [Canvas渲染器(CanvasRenderer)](#CanvasRenderer)) 有更好的性能。 

查看**[源码](https://github.com/mrdoob/three.js/blob/dev/src/renderers/WebGLRenderer.js)**

### 构造器（Constructor）

**WebGLRenderer( parameters)**

- parameters 是一个可选对象，包含用来定义渲染器行为的属性。当没有设置该参数时，将使用默认值。
  - canvas — 一个用来绘制输出的 Canvas 对象。
  - context — 所用的 渲染上下文(RenderingContext) 对象。
  - precision — 着色器的精度。可以是"highp", "mediump" 或 "lowp". 默认为"highp"，如果设备支持的话。
  - alpha — Boolean, 透明，默认为 false.
  - premultipliedAlpha — Boolean, 默认为 true.
  - antialias — Boolean,抗锯齿, 默认为 false.
  - stencil — Boolean, 默认为 true.
  - preserveDrawingBuffer — Boolean, 默认为 false.
  - depth — Boolean, 默认为 true.
  - logarithmicDepthBuffer — Boolean, 默认为 false.

``` javascript
var renderer = new THREE.WebGLRenderer({
    antialias: true  //抗锯齿
}); /*生成渲染器对象（属性：抗锯齿效果为设置有效）*/
```

### 属性（Properties）

- .domElement
  一个用来绘制输出的 Canvas 对象。
  该对象通过构造函数中的渲染器所自动创建（如果没有提供的话）；你只需要将其添加到您的网页中。
- .context
  从HTML5 canvas中获取的用来绘图的WebGL渲染上下文。
- .autoClear
  定义渲染器是否应该在渲染之前自动清除其输出。
- .autoClearColor
  如果autoClear为true，该属性用来定义渲染器是否需要清除颜色缓存。默认为 true.
- .autoClearDepth
  如果autoClear为true，该属性用来定义渲染器是否需要清除深度缓存。默认为 true.
- .autoClearStencil
  如果autoClear为true，该属性用来定义渲染器是否需要清除模板缓存。默认为 true。
- .sortObjects
  定义渲染器是否需要对对象排序。默认为 true。

  > 注：排序是用来试图正确地渲染具有一定程度透明度的对象。根据定义，排序对象可能在所有情况下都不工作。 根据应用程序的需要，我们可能需要关闭该排序功能，而使用其他方法处理透明渲染，比如手动确定物体的绘制顺序。

- .clippingPlanes
  一个用户定义的在世界空间中的裁剪平面对象。这些平面是全局范围可用的。空间中的点和该平面的点积为负的将被裁剪掉。默认为 [].
- .localClippingEnabled
  定义渲染器是否考虑对象级别的裁剪平面。默认为 false.
- .gammaInput
  默认为 false. 如果设置了该参数，表示所有纹理和颜色应当使用预乘的gamma值来输入。
- .gammaOutput
  默认为 false. 如果设置了该参数，表示所有纹理和颜色应当使用预乘的gamma值来输出。
- .shadowMap
  实现阴影贴图（或阴影映射）的组件的引用。
- .shadowMap.enabled
  默认为 false. 如果设置了该参数，则启用在场景中的阴影贴图。
- .shadowMap.type
  阴影贴图类型定义 (未经过滤，百分比接近过滤，带着色器双线性过滤的百分比接近过滤)
  可选取值有： THREE.BasicShadowMap, THREE.PCFShadowMap, THREE.PCFSoftShadowMap. 默认为 THREE.PCFShadowMap.
- .shadowMap.renderReverseSided
  默认为 true。该属性表示是否将材质所指定的反面渲染到阴影贴图中。如果禁用，必须在表面光源上设置适当的shadow.bias，可以同时投射和接收阴影以正确渲染。
- .shadowMap.renderSingleSided
  默认为 true. 是否将指定的材料视为双面，而在渲染阴影贴图时使用正面（front-side）。如果禁用，必须在表面光源上设置适当的shadow.bias，可以同时投射和接收阴影以正确渲染。
- .maxMorphTargets
  默认为 8. 着色器中允许的最大MorphTargets数量。记住，标准材料只允许8个MorphTargets。
- .maxMorphNormals
  默认为 4. 着色器中允许的最大MorphNormals数量。记住，标准材料只允许8个MorphNormals。
- .info
  一个关于显卡内存和渲染过程统计信息的对象。便于调试和分析。该对象包含如下字段：

  > - memory:
  >   - geometries
  >   - textures
  > - render:
  >   - calls
  >   - vertices
  >   - faces
  >   - points
  > - programs



### 方法（Methods）

- .getContext ()
  返回WebGL渲染上下文。

- .getContextAttributes ()
  返回一个描述WebGL上下文创建时所设置属性的对象。

- .supportsVertexTextures ()
  返回一个 Boolean，如果该上下文支持顶点纹理，则为true。

- .getPixelRatio ()
  返回当前设备的像素比。

- .setPixelRatio ( value )
  设置设备像素比。通常用于HiDPI设备防止模糊输出canvas。

- .getSize ()
  返回一个包含渲染器输出canvas宽高的对象，以像素为单位。

- .setSize ( width, height, updateStyle )
  调整输出canvas尺寸（宽度，高度），要考虑设备像素比，并且设置视口（viewport）以匹配该尺寸。如果设置 updateStyle 为true，则显式添加像素到输出canvas的样式中。

- .setViewport ( x, y, width, height )
  设置视口，从 (x, y) 到 (x + width, y + height)。

- .setScissor ( x, y, width, height )
  设置裁剪区域，从 (x, y) 到 (x + width, y + height).

  > 注：以上两种方法中点（x,y）是该区域的左下角。 该区域被定义从左到右的宽度，以及从底部到顶部的高度。该垂直方向的定义和HTML canvas元素的填充方向相反。

- .setScissorTest ( boolean )
  启用或禁用裁剪测试。当被激活时，只有裁剪区域内的像素会被进一步的渲染行为所影响。

- .setClearColor ( color, alpha )
  设置清除的颜色和透明度。

  ``` javascript
  // 创建一个具有红色背景的渲染器
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( 200, 100 );
  renderer.setClearColor( 0xff0000 );
  ```

- .getClearColor ()
  返回一个使用当前清除颜色的 THREE.Color 实例。

- .getClearAlpha ()
  返回一个使用当前清除透明度的 float。范围从0到1。

- .clear ( color, depth, stencil )
  告诉渲染器来清除其颜色、深度和模板绘制缓冲。该方法初始化颜色缓冲区为当前清除颜色值。
  参数缺省为true。

- .renderBufferImmediate ( object, program, shading )

  > - object — 一个 3D对象(Object3D) 实例
  > - program — 一个着色器程序（shaderProgram）实例
  > - shading — 一个材料（Material）实例。

  渲染一个即时缓冲区。被renderImmediateObject所调用。

- .renderBufferDirect ( camera, lights, fog, material, geometryGroup, object )
  使用相机和正确的材料渲染缓冲模型组。

- .renderBuffer ( camera, lights, fog, material, geometryGroup, object )
  使用相机和正确的材料渲染模型组。

- .render ( scene, camera, renderTarget, forceClear )
  使用相机渲染一个场景。
  如果指定了renderTarget，则渲染到上面，否则渲染到通常的canvas上。
  如果forceClear为true, 颜色、深度和模板绘制缓冲将在渲染前被清除，即使渲染器的autoClear属性为false。
  即使forceClear被设置为true，我们仍然可以通过设置.autoClearColor, .autoClearStencil 或 .autoClearDepth 属性为false来阻止特定的缓存被清除。

- .readRenderTargetPixels ( renderTarget, x, y, width, height, buffer )
  从渲染目标中读取像素数据到你给定的缓冲区中。缓存应该是一个Javascript Uint8Array对象，通过new Uint8Array( renderTargetWidth * renderTargetWidth * 4 )来实例化，考虑大小和颜色信息。这是gl.readPixels的封装。

- .renderImmediateObject ( camera, lights, fog, material, object )
  使用相机渲染一个即时对象。

- .setFaceCulling ( cullFace, frontFace )

  > - cullFace —- "back", "front", "front_and_back", 或 false.
  > - frontFace —- "ccw" 或 "cw

  用于设定GPU中gl的fontFace和cullFace状态，从而启用/禁用渲染时的面剔除。
  If cullFace is false, culling will be disabled.

- .setTexture ( texture, slot )

  > - texture -- 需要设置的 texture。
  > - slot -- 纹理所要使用的槽（slot）编号。

  此方法设置正确的纹理为wegl着色器的正确插槽。槽数可以被发现作为一个值的均匀的采样。

- .setRenderTarget ( renderTarget )
  renderTarget -- 需要设置的 renderTarget（可选）。
  该方法设置当前渲染目标。如果参数被忽略，则设置要绘制的canvas为当前渲染目标。

- .supportsCompressedTextureS3TC ()
  此方法返回true，如果WebGL支持S3TC格式的纹理压缩。

- .getMaxAnisotropy ()
  返回的纹理的各向异性水平。

- .getPrecision ()
  获取着色器所用精度。返回 "highp","mediump" 或 "lowp"。

- .setMaterialFaces (material)

  > - material -- 不该被剔除的面的 material。

  该方法设置在WebGL渲染器中需要被剔除的面。

- .supportsStandardDerivatives ()
  此方法返回true，如果设备WebGL的实现支持标准的衍生物。

- .supportsFloatTextures ()
  此方法返回true，如果设备WebGL的实现支持浮点纹理。

- .clearTarget (renderTarget, color, depth, stencil)

  > - renderTarget -- 需要被清除的 renderTarget。
  > - color -- 如果设置，则颜色被清除。
  > - depth -- 如果设置，则深度被清除。
  > - stencil -- 如果设置，则模板被清除。

  这个方法可以清除渲染目标。为此，它首先需要激活该渲染目标。

## <a id="WebGLRenderTarget"></a>WebGL渲染器目标(WebGLRenderTarget)

一个渲染目标是一个缓冲区，显卡在该缓冲区中为一个后台渲染的场景绘制像素。它被用于多种效果。 

查看**[源码](https://github.com/mrdoob/three.js/blob/dev/src/renderers/WebGLRenderTarget.js)**

### 构造器（Constructor）

**WebGLRenderTarget(width, height, options)**

- width -- 渲染目标对象的宽度。 
- height -- 渲染目标对象的高度。
- options是可选的对象，保存一个自动生成的目标纹理的纹理参数以及depthBuffer / stencilBuffer布尔值。 关于纹理参数请参考阅读 Texture。



- wrapS — Number default is THREE.ClampToEdgeWrapping. 
- wrapT — Number default is THREE.ClampToEdgeWrapping. 
- magFilter — Number, default is THREE.LinearFilter. 
- minFilter — Number, default is THREE.LinearFilter. 
- format — Number, default is THREE.RGBAFormat. 
- type — Number, default is THREE.UnsignedByteType. 
- anisotropy — Number, default is 1. 
- encoding — Number, default is THREE.LinearEncoding. 
- depthBuffer — Boolean, default is true. Set this to false if you don't need it. 
- stencilBuffer — Boolean, default is true. Set this to false if you don't need it.
  创建一个新的具有一定宽度和高度的渲染目标。

### 属性（Properties）

- .uuid
  这个渲染目标实例的一个唯一标识。
- .width
  渲染目标的宽度。
- .height
  渲染目标的高度。
- .scissor
  在渲染目标视口内部的一个矩形区域。在该区域以外的片段将被遗弃。
- .scissorTest
  指示裁剪测试是否激活。
- .viewport
  该渲染目标的视口。
- .texture
  该纹理实例保存所要渲染的像素。使用它作为进一步处理的输入。
- .depthBuffer
  渲染到深度缓冲区。默认是true。
- .stencilBuffer
  渲染到模板缓冲区。默认是true。
- .depthTexture
  如果设置了该参数，则场景深度将被渲染到这个纹理。默认为null。

### 方法（Methods）

- .setSize ( width, height )
  设置渲染目标的大小。
- .clone ()
  克隆该渲染目标。
- .copy ( source )
  拷贝给定渲染目标的设置。
- .dispose ()
  分发一个dispose事件。

> 该类适用 EventDispatcher 方法。

## <a id="WebGLRenderTargetCube"></a>WebGL渲染器立方体目标(WebGLRenderTargetCube)

立方体相机(CubeCamera)使用该对象来作为WebGL渲染器目标(WebGLRenderTarget)

查看**[源码](https://github.com/mrdoob/three.js/blob/dev/src/renderers/WebGLRenderTargetCube.js)**

### 构造器（Constructor）

**WebGLRenderTargetCube(width, height, options)**

- width -- 渲染目标的宽度。
- height -- 渲染目标的高度。
- options -- 用来设置渲染目标属性的选项。

### 属性（Properties）

- .activeCubeFace
  activeCubeFace 属性对应于立方体的一个面 (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) 并且被 立方体相机(CubeCamera) 在内部使用和设置。
> See WebGL渲染器目标(WebGLRenderTarget) for inherited properties

### 方法（Methods）

> 继承的方法请查阅基类 [WebGL渲染器目标(WebGLRenderTarget)](#WebGLRenderTarget)

