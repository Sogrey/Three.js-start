

# <a id="top"></a>入门




## <a id="what-is-Threejs"></a>什么是Three.js

three就是3D的意思，js表示javascript，那么three.js简单理解就是使用javascript写3D程序，自然，这样的的应用需运行在浏览器上。

官方网址：[https://threejs.org/](https://threejs.org/)
文档：[https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
官方提供了大量实例：[https://threejs.org/examples/](https://threejs.org/examples/)
github：[https://github.com/mrdoob/three.js/](https://github.com/mrdoob/three.js/)
github上下载很慢，很容易失败，下面是我下载存在百度网盘链接，需要最新版请前往github。
下载：链接: https://pan.baidu.com/s/1Iqp8ibV7lBwXJiQodONv-w 提取码: wgdi


## <a id="how-to-use-Threejs"></a>如何使用Three.js

three.js是一个javascript库，其使用方法同一般js的引入。
``` javascript
<script type = "text/javascript" src = "three.js"></script>
```
也可以引入CDN资源：
``` javascript
 <script src="http://cdn.bootcss.com/three.js/r83/three.min.js"></script>
```
新建一个html文件并引入three.js

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset=utf-8>
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
		</style>
	</head>
	<body>
		<script src="js/three.js"></script>
		<script>
			// Our Javascript will go here.
		</script>
	</body>
</html>
```



## <a id="Threejs-3-part"></a> three.js的几个必要组成

一个典型的Three.js的程序至少包括渲染器（Renderer），场景（Scene），照相机（Camera）。

### <a id="Threejs-Renderer"></a> 渲染器（Renderer）
渲染器将与canvas元素进行绑定,如果html中定义了id为`viewer`的canvas元素，则
``` javascript
var width = document.getElementById('viewer').clientWidth;
var height = document.getElementById('viewer').clientHeight;
var renderer = new THREE.WebGLRenderer({
     canvas: document.getElementById('viewer')
});
renderer.setSize(width, height);//设置宽高
renderer.setClearColor(0xFFFFFF, 1.0);//设置背景色
```
如果想动态添加canvas到html的body中，则
``` javascript
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```
我选择在html添加一个id为`box`的div元素，然后动态添加canvas到`#box`中:

``` javascript
 var renderer;
 var width,height;
 function initThree(){
 width = document.getElementById("box").clientWidth;
 height = document.getElementById("box").clientHeight;
 renderer = new THREE.WebGLRenderer({
 antialias:true
 });/*生成渲染器对象（属性：抗锯齿效果为设置有效）*/
 renderer.setSize(width,height);
 document.getElementById("box").appendChild(renderer.domElement);
 /*设置canvas背景色(clearColor)和背景色透明度（clearAlpha） */
 renderer.setClearColor(0xFFFFFF,1.0);
 }
```

### <a id="Threejs-Scene"></a> 场景（Scene）

three.js添加的模型都添加到了场景中，其初始化很简单
``` javascript
 var scene;
 function initScene(){
   scene = new THREE.Scene();
 }
```

### <a id="Threejs-Camera"></a> 照相机（Camera）

相机就相当于视点，就是我们所看到的，默认的照相机与加载进来的模型都处于坐标原点，为了能够看到模型，需要将照相机位置偏移。相机分正交相机（OrthographicCamera）、透视相机（PerspectiveCamera）等，其区别后面再说。这里使用正交相机（OrthographicCamera）

``` javascript
 var camera;
 function initCamera(){
    camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
    //定义camera的位置
    camera.position.set(4, -3, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    //这里的lookAt函数是将视角指定为看原点
    //将camera添加到scene中
    scene.add(camera);
 }
```
###  <a id="Threejs-light"></a>光源（light）

``` javascrript
 var light;
 function initLight(){
 light = new THREE.DirectionalLight(0xFF0000, 1.0, 0); //平行光
 light.position.set(100, 100, 200); //设置光源位置
 scene.add(light); //将官员添加到场景
 }
```

最后，一个完整的示例

``` html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>立方体</title>
    <style type="text/css">
        html,
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        #box {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body onload="threeExcute();">
    <div id="box"></div>

    <script src="./js/threejs/three.js"></script>
    <script>
        var renderer, scene, camera, light;
        var width, height;

        //初始化渲染器
        function initRenderer() {
            width = document.getElementById("box").clientWidth;
            height = document.getElementById("box").clientHeight;
            renderer = new THREE.WebGLRenderer({
                antialias: true
            }); /*生成渲染器对象（属性：抗锯齿效果为设置有效）*/
            renderer.setSize(width, height);
            document.getElementById("box").appendChild(renderer.domElement);
            /*设置canvas背景色(clearColor)和背景色透明度（clearAlpha） */
            renderer.setClearColor(0xFFFFFF, 1.0);
        }
        //初始化场景
        function initScene() {
            scene = new THREE.Scene();
        }
        //初始化照相机
        function initCamera() {
            camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
            //定义camera的位置
            camera.position.set(4, -3, 5);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            //这里的lookAt函数是将视角指定为看原点
            //将camera添加到scene中
            scene.add(camera);
        }
        //初始化光源
        function initLight() {
            light = new THREE.DirectionalLight(0xFF0000, 1.0, 0); //平行光
            light.position.set(100, 100, 200); //设置光源位置
            scene.add(light); //将官员添加到场景
        }

        function threeExcute() {
            //初始化渲染器
            initRenderer();
            //初始化场景
            initScene();
            //初始化照相机
            initCamera();
            //初始化光源
            initLight();


            //这里是创建一个长方形
            var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
                new THREE.MeshBasicMaterial({
                    color: "green",
                    wireframe: true //这里指不使用实心材料，所以为true
                })
            );
            //这里要将这个长方形加入这个scene中
            scene.add(cube);


            renderer.render(scene, camera);
        }
    </script>
</body>

</html>
```

查看https://sogrey.github.io/Three.js-start/example/init.html