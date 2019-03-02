# <a id="top"></a>动画

## <a id="Animation"></a>动画(Animation)

此类基于层次结构为对象设置动画。此层次结构可以是Object3D或Bones。

[源码](https://github.com/mrdoob/three.js/blob/master/src/animation/Animation.js)

### 构造器（Constructor）

**Animation(root, name)**

- root -- The mesh to animate. 要设置动画的网格。
- name -- The name of the animation.动画的名称

Creates an animation for root. The animation data is gathered from AnimationHandler based on its name.

为网格对象创建动画。动画数据根据其名称从[AnimationHandler](#AnimationHandler)收集。

### 属性（Properties）

- .root
  The root object of the animation.
  动画的根网格对象
- .data
  The data containing the animation
  包含动画的数据
- .hierarchy
  The objects that are influenced by the animation.
  受动画影响的对象。
- .currentTime
  The time elapsed since the last start/restart of the animation.
  自上次启动/重新启动动画以来经过的时间。
- .timeScale
  How much to scale the speed of the animation. Defaults to 1.
  缩放动画的速度。默认值为1。
- .isPlaying
  Indicates whether the animation is playing. This shouldn't be adapted by user code.
  指示动画是否正在播放。这不应该被用户代码修改。
- .isPaused
  Indicates whether the animation is paused. This shouldn't be adapted by user code.
  指示动画是否暂停。这不应该被用户代码修改。
- .loop
  Set to make the animation restart when the animation ends.
  设置为使动画在动画结束时重新启动。是否循环执行动画。
- .interpolationType
  The type to indicate how to interpolate between 2 data points.
  指示如何在两个数据点之间插入的类型。

### 方法（Methods）
- .play (startTime)
  Starts the animation at the startTime (in seconds) of the animation.
  播放，在动画的开始时间（秒）启动动画。
- .stop ()
  Stops the animation.
  停止动画。
- .update (deltaTimeMS)
  - deltaTimeMS -- The time of the between the previous frame and this frame in miliseconds.前一帧和此帧之间的时间，单位为毫秒。
  Updates the animation in time. This shouldn't be called by user code. The animationHandler calls this method.
  及时更新动画。这不应该由用户代码调用。[AnimationHandler](#AnimationHandler)调用此方法。
- .interpolateCatmullRom (points, scale)
  - points -- The 4 control point to calculate CatMullRom 计算catmullrom的4个控制点
  - scale -- The scale between the previous key and the nex key.上一个键和下一个键之间的比例
  Interpolates the point based on the key. Is used in update.根据关键点插入点。在更新中使用。
- .getNextKeyWith (type, h, key)
  - type -- The animationtype for the key. Can be "pos", "rot" and "scl".键的动画类型。可以是“pos”、“rot”和“scl”。
  - h -- The object of the hierarchy that catins the key .定位键的层次结构的对象
  - key -- The index of the next possible key.下一个可能键的索引。
  Gets the next key. Is used in Update.获取下一个键。在更新中使用。
- .getPrevKeyWith (type, h, key)
  - type -- The animationtype for the key. Can be "pos", "rot" and "scl".键的动画类型。可以是“pos”、“rot”和“scl”。
  - h -- The object of the hierarchy that contains the key. 包含键的层次结构的对象。
  - key -- The index of the prev possible key.上一个可能键的索引。
  Gets the previous key. Is used in Update.获取上一个键。在更新中使用。

## <a id="AnimationHandler"></a>动画处理器(AnimationHandler)

The AnimationHandler handles the initialisation of the Animation data and the animations itself. It keeps track of every animation and if it's active or not. It also update all animations which are active if its method **update** is called.

AnimationHandler处理动画数据和动画本身的初始化。它跟踪每一个动画，不管它是否处于活动状态。如果调用了方法更新，它也会更新所有活动的动画。

[源码](https://github.com/mrdoob/three.js/blob/master/src/animation/AnimationHandler.js)



### 构造器（Constructor）

**AnimationHandler()**

The animationHandler can't be called as constructor.

### 属性（Properties）

- .CATMULLROM

Enum Value to indicate that the animation needs to be interpolated as CATMULLROM.枚举值，指示动画需要作为catmullrom插入。

-  .CATMULLROM_FORWARD

Enum Value to indicate that the animation needs to be interpolated as CATMULLROM_FORWARD.枚举值，指示动画需要作为catmullom_forward插入。

-  .LINEAR

Enum Value to indicate that the animation needs to be interpolated as LINEAR.枚举值以指示动画需要作为线性插值。

### 方法（Methods）

- .removeFromUpdate (animation)
  - animation -- The Animation to remove from the update.要从更新中删除的动画。

Removes the animation from the update cycle. This gets called when the animation stops. This shouldn't be called by usercode.

从更新周期中删除动画。当动画停止时调用此函数。这不应该由用户代码调用。

-  .get (name)
  -  name -- The name of the animationData。动画数据名称

Gets the animationData from its library.从其库中获取AnimationData。

- .update (deltaTimeMS)
  - deltaTimeMS -- Time elapsed since last update in milliseconds.自上次更新以来经过的时间（毫秒）。

Updates all active animations with deltaTime.用Deltatime更新所有活动动画。

- .parse (root)

  - root -- object
  Parses the object to get the hierachy.解析对象以获取层次结构。

- .add (data)

  - data -- The animationData
    Adds the animationData from its library.从其库中添加动画数据。
  
- .addToUpdate (animation)

  - animation -- The Animation to add from the update.要从更新中添加的动画。

Adds the animation from the update cycle. This gets called when the animation starts. This shouldn't be called by user code.

从更新周期添加动画。当动画开始时调用此函数。这不应该由用户代码调用。

## <a id="KeyFrameAnimation"></a>关键帧动画(KeyFrameAnimation)

Runs a keyframe animation as imported from the ColladaLoader.

运行从ColladalLoader导入的关键帧动画。

[源码](https://github.com/mrdoob/three.js/blob/master/src/animation/KeyFrameAnimation.js)

### 构造器（Constructor）

**KeyFrameAnimation(data)**

- data -- An individual animation object from a the [ColladaLoader](javascript:window.parent.goTo('ColladaLoader')), e.g. loadedColladaObj.animations[0] .
  来自colladaloader的单个动画对象,比如，`loadedColladaObj.animations[0]`

创建一个新的 keyframe animation 并且将其初始化为第一个关键帧。



### 属性（Properties）

- .root

The root object of the animation，动画作用对象

-  .data

The data containing the animation包含动画的数据

- .hierarchy

The objects that are influenced by the animation.受动画影响的对象。

- .currentTime

The time elapsed since the last start/restart of the animation.自上次启动/重新启动动画以来经过的时间。

- .timeScale

How much to scale the speed of the animation. Defaults to 1.缩放动画的速度。默认值为1。

- .isPlaying

Indicates whether the animation is playing. This shouldn't be adapted by user code.示意动画是平息的。这是一个由用户代码调整的

- .isPaused

Indicates whether the animation is paused. This shouldn't be adapted by user code.示意动画是不正确的。这是一个由用户代码调整的

- .loop

Set to make the animation restart when the animation ends.使其重新启动当动画。是否循环


### 方法（Methods）

- .play (startTime)

Starts the animation at the startTime (in seconds) of the animation.在动画的开始时间（秒）启动动画。

- .stop ()

Stops the animation.停止动画。

- .update (deltaTime)

  - deltaTime -- The change in time in seconds以秒为单位的时间变化

Updates the keyframe animation更新关键帧动画

- .getNextKeyWith (sid, h, key)

  - sid -- The string id 
  - h -- The index in the heirarchy to use继承关系中要使用的索引
  - key -- The index of which key to start from从哪个键开始的索引

Used internally to traverse the animation内部用于遍历动画

- .getPrevKeyWith (sid, h, key)

  - sid -- The string id 
  - h -- The index in the heirarchy to use继承关系中要使用的索引
  - key -- The index of which key to start from从哪个键开始的索引
  
Used internally to traverse the animation内部用于遍历动画