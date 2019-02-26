# DragControls.js

  查看拖拽控件DragControls.js的源代码你会发现通过构造函数THREE.Raycaster()创建了一个射线发射器对象，这就说明拖拽控件具有选择对象的作用。 通过源码可以查看该控件的使用方法，构造函数的参数是什么，参数的默认值是什么，该控件对象有哪些方法和属性。在实际开发的时候， 也可以根据项目的需要参考控件的源码重新封装一个拖拽控件。

##  构造函数格式

**THREE.DragControls(_objects,_camera,_domElement )**

- `_objects`：对象数组。
-  `_camera`：相机 
- `_domElement`：渲染器 

  _objects表示对象组成的数组，比如所有网格模型对象组成一个数组， 比如scene.children表示的三维场景中的所有光源、网格模型、Object3D对象；_camera表示相机对象，_domElement表示显示三维场景渲染结果的canvas画布对象。 不同版本的拖拽控件DragControls.js使用的时候可能略有不同，比如_objects和_camera对象的顺序是颠倒的，在学习这些知识的时候不用记忆，团队协作的时候， 不同的工程师写的同一功能控件在语法结构基本类似，但是语法细节上可能会略有不同，比如刚刚谈到的参数顺序不同，所以实际开发的时候可以通过文档说明书写程序， 如果没有文档说明书，控件的源代码就是最好的说明书，直接控件源代码及其注释即可。

## **可以添加的事件** 

**dragControls.addEventListener()**

`hoveron` – 鼠标划中
`hoveroff` – 鼠标划过
`dragstart` – 开始拖拽
`dragend` – 拖拽结束

``` javascript
        // 初始化拖拽控件
        var dragControls = new THREE.DragControls(objects, camera, renderer.domElement);

        // 鼠标略过事件
        dragControls.addEventListener('hoveron', function (event) {
            // 让变换控件对象和选中的对象绑定
            transformControls.attach(event.object);
        });
        // 开始拖拽
        dragControls.addEventListener('dragstart', function (event) {
            controls.enabled = false;
        });
        // 拖拽结束
        dragControls.addEventListener('dragend', function (event) {
            controls.enabled = true;
        });
```

https://ithanmang.gitee.io/threejs/home/201807/20180703/03-raycaster-dragControls.html