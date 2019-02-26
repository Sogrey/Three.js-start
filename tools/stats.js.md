# stats.js

JavaScript性能监控器，可以测试webgl代码的渲染性能。 

## 构造函数

```javascript
var myStats=new Stats();
```

## 界面输出控制

使用构造函数Stats创建对象时，构造函数中的Javascript代码默认创建一个id是stats的div元素，默认位置页面左上角，如果想设置界面的显示效果，可以修改stats源码

//把stats创建的div元素插入页面，domElement是对象的属性，属性值就是stats创建的div元素

```javascript
document.getElementById("body").appendChild(myStats.domElement);
```

## 方法

- setMode(mode)

可以已通过setMode()方法的参数mode的数值设置首次打开页面，测试结果的显示模式，鼠标单击可以更换不同的显示模式

setMode参数mode默认值为0

设置测试结果显示模式为MS

``` javascript
myStats.setMode（1）;
```

| 参数mode | 模式 | 意义                   |
| -------- | ---- | ---------------------- |
| 0        | FPS  | 刷新频率,一秒渲染次数  |
| 1        | MS   | 刷新周期，渲染一次时间 |



- update()

刷新

```javascript
//requestAnimationFrame循环调用的函数中调用方法update()，来刷新时间
myStats.update();
```