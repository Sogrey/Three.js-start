# 射线拾取Raycaster

[three.js doc](https://threejs.org/docs/#api/zh/core/Raycaster) [源码](https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js)


## 简介

由于浏览器是一个2d视口，而在里面显示three.js的内容是3d场景，所以，现在有一个问题就是如何将2d视口的x和y坐标转换成three.js场景中的3d坐标。好在three.js已经有了解决相关问题的方案，那就是THREE.Raycaster射线，用于鼠标拾取（计算出鼠标移过的三维空间中的对象）等等。

这个类用于进行[raycasting](https://en.wikipedia.org/wiki/Ray_casting)（光线投射）。 光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）。

实例：

``` js
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	// 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {

	// 通过摄像机和鼠标位置更新射线
	raycaster.setFromCamera( mouse, camera );

	// 计算物体和射线的焦点
	var intersects = raycaster.intersectObjects( scene.children );

	for ( var i = 0; i < intersects.length; i++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}

	renderer.render( scene, camera );

}

window.addEventListener( 'mousemove', onMouseMove, false );

window.requestAnimationFrame(render);
```

## THREE.Raycaster构造函数和对象方法

``` js
Raycaster( origin : Vector3, direction : Vector3, near : Float, far : Float )
```

- origin — 光线投射的起点向量。 
- direction — 光线投射的方向向量，应该是被归一化的。 
- near — 投射近点，用来限定返回比near要远的结果。near不能为负数。缺省为0。 
- far — 投射远点，用来限定返回比far要近的结果。far不能比near要小。缺省为无穷大。

## 属性

**.far : float**
raycaster的远距离因数（投射远点）。这个值表明哪些对象可以基于该距离而被raycaster所丢弃。 这个值不应当为负，并且应当比near属性大。

**.linePrecision : float**
  raycaster与Line（线）物体相交时的精度因数。

**.near : float**
raycaster的近距离因数（投射近点）。这个值表明哪些对象可以基于该距离而被raycaster所丢弃。 这个值不应当为负，并且应当比near属性小。

**.params : Object**
具有以下属性的物体：

``` json
{
	Mesh: {},
	Line: {},
	LOD: {},
	Points: { threshold: 1 },
	Sprite: {}
}
```
**.ray : Ray**
用于进行光线投射的Ray（射线）。

## 方法
**set ( origin : Vector3, direction : Vector3 ) : null**

- `origin` —— 光线投射的原点向量。
- `direction` —— 为光线提供方向的标准化方向向量。

使用一个新的原点和方向来更新射线。



**.setFromCamera ( coords : Vector2, camera : Camera ) : null**

用一个新的原点和方向向量来更新射线（ray）。

- `coords` — 鼠标的二维坐标，在归一化的设备坐标(NDC)中，也就是X 和 Y 分量应该介于 -1 和 1 之间。 
- `camera` — 射线起点处的相机，即把射线起点设置在该相机位置处。

**.intersectObject ( object : Object3D, recursive : Boolean, optionalTarget : Array ) : Array**

检查射线和物体之间的所有交叉点（包含或不包含后代）。交叉点返回按距离排序，最接近的为第一个。 返回一个交叉点对象数组。

- `object` — 用来检测和射线相交的物体。 
- `recursive` — 如果为true，它还检查所有后代。否则只检查该对象本身。缺省值为false。
- `optionalTarget` — （可选）设置结果的目标数组。如果不设置这个值，则一个新的Array会被实例化；如果设置了这个值，则在每次调用之前必须清空这个数组（例如：array.length = 0;）。

检测所有在射线与物体之间，包括或不包括后代的相交部分。返回结果时，相交部分将按距离进行排序，最近的位于第一个）。
该方法返回一个包含有交叉部分的数组:

> [ { distance, point, face, faceIndex, indices, object }, ... ]
>
> 
>
> - `distance` – 射线的起点到相交点的距离 
> - `point` – 在世界坐标中的交叉点 
> - `face` – 相交的面 
> - `faceIndex` – 相交的面的索引 
> - `indices` – 组成相交面的顶点索引 
> - `object` – 相交的对象

当一个网孔(Mesh)对象和一个缓存几何模型(BufferGeometry)相交时，faceIndex 将是 undefined，并且 indices 将被设置； 而当一个网孔(Mesh)对象和一个几何模型(Geometry)相交时，indices 将是 undefined。

当计算这个对象是否和射线相交时，Raycaster 把传递的对象委托给 raycast 方法。 这允许 meshes 对于光线投射的响应可以不同于 lines 和 pointclouds。

注意，对于网格，面（faces）必须朝向射线原点，这样才能被检测到；通过背面的射线的交叉点将不被检测到。 为了光线投射一个对象的正反两面，你得设置 material 的 side 属性为 `THREE.DoubleSide`。

**.intersectObjects ( objects : Array, recursive : Boolean, optionalTarget : Array ) : Array**

- `objects` —— 检测和射线相交的一组物体。
- `recursive` —— 若为true，则同时也会检测所有物体的后代。否则将只会检测对象本身的相交部分。默认值为false。
- `optionalTarget` —— （可选）（可选）设置结果的目标数组。如果不设置这个值，则一个新的Array会被实例化；如果设置了这个值，则在每次调用之前必须清空这个数组（例如：array.length = 0;）。

检测所有在射线与这些物体之间，包括或不包括后代的相交部分。返回结果时，相交部分将按距离进行排序，最近的位于第一个），相交部分和`.intersectObject`所返回的格式是相同的。