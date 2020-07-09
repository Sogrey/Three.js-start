# ThreeJS中的点击与交互——Raycaster的用法

## 基础概念

- 坐标系（[参考](../coordinate-system/README.md)）

- Raycaster([参考](../cores/README.md#Raycaster))

## 找到点击物体的大致思路

![](https://image-static.segmentfault.com/172/167/1721675832-5981d7265c8f2_articlex)

鼠标在屏幕上点击的时候，得到二维坐标p(x, y),再加上深度坐标的范围(0, 1), 就可以形成两个三位坐标A(x1, y1, 0), B(x2, y, 1), 由于它们的Z轴坐标是0和1，则转变到投影坐标系的话，一定分别是前剪切平面上的点和后剪切平面上的点，也就是说，在投影坐标系中，A点一定在能看见的所有模型的最前面，B点一定在能看见的所有的模型的最后边，将AB点连成线，AB线穿过的物体就是被点击的物体。而 Three.js提供一个射线类Raycasting来拾取场景里面的物体。更方便的使用鼠标来操作3D场景。（不过在实际代码中我们组成射线的两个点是摄像机所在视点与屏幕上点击的点连接而成的射线） 

## 代码实现

``` javascript
function onDocumentMouseDown(e) {
    e.preventDefault();
    
    //将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    //新建一个三维单位向量 假设z方向就是0.5
    //根据照相机，把这个向量转换到视点坐标系
      var vector = new THREE.Vector3(mouse.x, mouse.y,0.5).unproject(camera);

    //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    //射线和模型求交，选中一系列直线
    var intersects = raycaster.intersectObjects(objects);
    console.log('imtersrcts=' + intersects)

    if (intersects.length > 0) {
        //选中第一个射线相交的物体
        SELECTED = intersects[0].object;
        var intersected = intersects[0].object;
        console.log(intersects[0].object)
    }
}
```

## 代码释义

![](https://image-static.segmentfault.com/309/116/3091167779-5982d816c8bb2_articlex)

```  javascript
 //得到
 mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
 mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
```

 推导过程：
 设A点为点击点(x1,y1),x1=e.clintX, y1=e.clientY
 设A点在世界坐标中的坐标值为B(x2,y2);

 由于A点的坐标值的原点是以屏幕左上角为(0,0);
 我们可以计算可得以屏幕中心为原点的B'值
 x2' = x1 - innerWidth/2
 y2' = innerHeight/2 - y1
 又由于在世界坐标的范围是[-1,1],要得到正确的B值我们必须要将坐标标准化
 x2 = (x1 -innerWidth/2)/(innerwidth/2) = (x1/innerWidth)*2-1
 同理得 y2 = -(y1/innerHeight)*2 +1



## 参考

- https://segmentfault.com/a/1190000010490845
- [Three.js中的拾取](http://www.cnblogs.com/lizhengjin/p/5914216.html) 
- [threejs对象拾取](https://blog.csdn.net/ruangong1203/article/details/60476621)

