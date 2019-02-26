# three.js 变换大小、角度、位移控件 TransformControls.js

[源码](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/TransformControls.js)

TransformControls.js：鼠标操控物体移动、缩放、旋转的控件（物体操作工具）

该控件可以实现可视化操作三维模型，通过选中一个三维模型，然后通过控件对象的方法attach()可以把选中的三维模型与控件TransformControls绑定， 你可以把控件对象TransformControls理解为一个特殊的三维模型，比如平移状态，控件对象TransformControls就是一个三维坐标轴，通过拖动坐标轴就可以移动与坐标轴绑定的三维模型。

``` javascript
import TransformControls from 'three/examples/js/controls/TransformControls';
```

通过该控件对象方法setMode的值可以实现三维模型的平移、旋转和缩放对应不同的可视化操作，比如平移是通过三维坐标轴实现，旋转通过一个三维圆弧线实现。

## 构造函数

**THREE.TransformControls(camera, renderer.domElement)**

举例：

``` javascript
var trackballControls = new THREE.TrackballControls(camera, renderer.domElement);
// 添加平移控件
var transformControls = new THREE.TransformControls(camera, renderer.domElement);
transformControls.addEventListener('dragging-changed', function (event) {
     trackballControls.enabled = !event.value
});
transformControls.attach(DeletsChildren);
transformControls.setMode('scale');
trackballControls.enabled = false;
scene.add(transformControls);
```

关闭物体控件

``` javascript
transformControls.detach();
trackballControls.enabled = true;
scene.remove(transformControls);
```

https://sogrey.github.io/Three.js-start/example/controls/transformControls.html

## 方法


- dispose() 

解绑所有事件

- attach() 

设置当前对象

- detach() 

解除对象

- setMode(mode)

切换操作模式；平移（translate ）、旋转（rotate ）、缩放（scale ）可选，默认是平移（translate ）。


```javascript
transformControl.setMode('translate');//平移 - 默认
transformControl.setMode('rotate');//旋转
transformControl.setMode('scale');//缩放
```

设置场景编辑模式 

- setTranslationSnap()


- setRotationSnap()


- setSize() 

设置大小。通过控件对象transformControl的方法setSize()可以设置三维坐标轴的几何尺寸，方法的参数范围[0.0,1.0] 

``` javascript
transformControl.setSize(0.4);// 设置三维坐标轴大小
```

- setSpace() 

设置局部 世界空间

- update() 

更新