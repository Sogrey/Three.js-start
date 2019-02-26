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
    //可视化变换控件对象
    transformControl = new THREE.TransformControls( camera,renderer.domElement );
    scene.add( transformControl );//控件对象添加到场景对象

//需引入拖拽控件DragControls.js
    //拖拽控件对象
    var dragcontrols = new THREE.DragControls(scene.children,camera,renderer.domElement );
    //拖拽控件对象设置鼠标事件
    dragcontrols.addEventListener( 'hoveron', function ( event )     {
        //控件对象transformControl与选中的对象object绑定
        transformControl.attach( event.object );
    } );
```

控件对象TransformControls的作用是可视化操作，默认显示一个三维坐标轴，该控件对象就是一个三维模型，所以需要执行语句scene.add( transformControl )，把该控件添加到三维场景中。 控件对象[DragControls](DragControls.js.md)主要作用是当你通过鼠标事件选中一个三维模型对象，就会显示该模型对应的三维坐标轴。

  addEventListener方法的参数'hoveron'表示鼠标平移到三维模型事件，当鼠标平移到一个三维模型上的时候，会弹出该模型对应的一个三维坐标轴。

  代码transformControl.attach( event.object )的作用是实现两个控件对象的绑定，如果拖拽控件对象DragControls不绑定变换控件对象TransformControls， 'hoveron'鼠标事件执行的时候，就不会弹出一个三维坐标轴，变换控件对象TransformControls本质上就是一个网格模型对象，执行方法attach()绑定的时候， 本质上就相当于把一个三维模型的position属性与三维坐标轴的position属性进行了关联，只要坐标轴平移，坐标轴对应的三维模型就会平移。

可以在上面代码的基础上增加一个OrbitControls控件对象，该控件在第一章课程中就讲解过。 通过上面的控件对象可以实现一个三维模型的可视化操作，通过OrbitControls控件可以通过操作相机对象来实现三维场景中所有网格模型的旋转、平移和缩放变换。 

``` javascript
    //轨道控件对象(相机对象旋转、平移、缩放)
controls = new THREE.OrbitControls( camera,renderer.domElement);
```



关闭物体控件

``` javascript
transformControls.detach();
trackballControls.enabled = true;
scene.remove(transformControls);
```

https://sogrey.github.io/Three.js-start/example/controls/transformControls.html

## 属性

- object

控制的对象

- visible -[boolean] true of false,default false  

是否启用控制

- translationSnap


- rotationSnap


- space


- size


- axis



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