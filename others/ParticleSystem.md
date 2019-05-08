# 粒子系统

 >  https://www.cnblogs.com/wanbo/p/6869175.html
 >
 >  https://blog.csdn.net/birdflyto206/article/details/52414326
 >  https://blog.csdn.net/Newpidian/article/details/51235948
 >  https://blog.csdn.net/ALLENJIAO/article/details/79564008

## 什么是粒子系统

粒子系统指的是，通过创建很多细小的物体，用来模拟雪花或者雨滴的系统。

## 如何实现粒子系统

两种方式：

- 使用[THREE.Points](https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js)实现 【[示例](https://threejs.org/examples/webgl_buffergeometry_custom_attributes_particles.html)】
- 使用THREE.PointCloud实现 【[示例](../../example/ParticleSystem/PointCloud.html)】
- 自带的粒子系统需要[GPUParticleSystem.js](https://threejs.org/examples/js/GPUParticleSystem.js) 【[示例](https://threejs.org/examples/webgl_gpu_particle_system.html)】- 优选
- 使用[THREE.Sprite](https://github.com/mrdoob/three.js/blob/dev/src/objects/Sprite.js)实现，材质[SpriteMaterial](<https://github.com/mrdoob/three.js/blob/dev/src/materials/SpriteMaterial.js>) 【[示例](<https://threejs.org/examples/webgl_points_sprites.html>) [示例2](<https://threejs.org/examples/webgl_sprites.html>) [示例3](<https://threejs.org/examples/webgl_sprites_nodes.html>) [示例4](<https://threejs.org/examples/css3d_sprites.html>)】



原文：<https://blog.csdn.net/birdflyto206/article/details/52414326>



### THREE.Points

### THREE.PointCloud

### THREE.Particle

``` js
function createParticles(){

    var meaterial = new THREE.ParticleBasicMaterial();
    for(var x = -5 ; x < 5 ; x ++){
        for(var y = -5 ; y < 5 ; y ++){
        //手动创建一个粒子，只需传递一个材质即可。还材质可以是 ParticleBasicMaterial 或者 ParticleProgramMaterial材质
        var particle = new THREE.Particle(material);
            particle.position.set(x*10,y*10,0);
            scene.add(particle);            
        }
    }
}
```

如果在创建粒子的时候没有指定任何属性，那么粒子就会被渲染成二维的白色小方块。

和THREE.Mesh一样，THREE.Particle 也是对THREE.Object3D对象的扩展。也就说THREE.Mesh的大部分属性也可以用在THREE.Particle对象上。

这里，我们使用THREE.Particle创建粒子，必须使用CanvasRenderer才能渲染出来。

### THREE.ParticleSystem

如果使用WebGLRenderer渲染器，我们需要首先创建一个THREE.ParticleSystem对象，然后通过这个对象来创建粒子。

``` js
function createParticles(){

    var geo = new THREE.Geometry();
    var material = new THREE.ParticleBasicMaterial({size:4,vertexColors:true,color:0xffffff});

    for(var x = -5;x<5;x++){
        for(var y= -5;y<5;y++){
            //为每一个粒子创建一个顶点，并添加到一个几何体中
            var particle = new THREE.Vector3(x*10,y*10,0);
            geo.geometry.push(particle);

            geo.colors.push(new THREE.Color(Math.random()*0x00ffff));

        }
    }

    var system = new THREE.ParticleSystem(geo,material);
    scene.add(system);

}
```



``` js
function createParticles(size,transparent,opacity,vertexColors,sizeAttenuation,color){

    var geom = new THREE.Geometry();
    var material = new THREE.ParticleBasicMaterial({
        size:size,
        transparent:transparent,
        opacity:opacity,
        vertexColors:vertexColors;
        sizeAttenuation:sizeAttenuation,
        color:color
    });

    var range = 500;

    for(var i = 0;i<15000;i++){
        var particle = new THREE.Vector3(
            Math.random() * range - range / 2,
            Math.random() * range - range / 2,
            Math.random() * range - range / 2,
        );

        geom.vertices.push(particle);
        var color = new THREE.Color(0x00ff00);
        color.setHSL(color.getHSL().h,color.getHSL().s,Math.random()*color.getHSL()*l);

        //geom.colors 数组只有在 vertexColors设置为true的时候才会有用，这样每个顶点可以着不同的颜色。
        geom.colors.push(color);
    }

    system = new THREE.ParticleSystem(geom,material);
    scene.add(system);
}
```

`ParticleBasicMaterial`对象的属性：

- color：ParticleSystem对象所有粒子的颜色。如果vertexColors属性为true，而且也指定了几何体的colors属性，则该属性会被忽略。默认是0xffffff 
- map：可以在粒子上应用某种材质。 
- size：指定粒子的大小。默认为1. 
- sizeAttenuation：设置为false，则所有的粒子拥有相同的大小，无论距离相机的远近。如果设置为true，则根据距离相机的不同距离拥有不同的大小。默认为true。 
- vertexColors：通常ParticleSystem中的粒子具有相同的颜色，如果该属性为true，且几何体也设置了colors属性，那就使用该颜色数组中的值为粒子着色。默认为false。 
- opacity：同transparent一起使用。设置粒子的透明度。默认为1（不透明）
- transparent：设置为true，则粒子在渲染时根据opacity设置的值进行渲染。默认为false。 
- blending：渲染时粒子的融合模式。 
- fog：粒子是否受场景中的雾化效果的影响。默认为true。

目前，我们渲染的粒子都是正方形的。我们可以使用下面两种方法来格式化粒子。 
1.应用ParticleCanvasMaterial对象，将HTML5画布上绘制的内容作为粒子的纹理。 
2.使用ParticleBasicMaterial的map(贴图)属性。



#### 使用HTML5画布格式化粒子

**1.如果你使用的是CanvasRenderer渲染器，则可以在ParticleCanvasMaterial对象中直接引用HTML5画布。**

`ParticleCanvasMaterial` 该材质是专门为`CanvasRenderer`创建的，而且只能用于这种渲染器。

该材质的属性：

- color：粒子的颜色。根据特定的融合模式，可以影响画布的颜色。 
- program：以画布上下文为参数的函数。该函数在粒子渲染时调用。调用该函数将在画布上下文中产生一个属性，该输出将会以粒子的形态显示出来。 
- opacity：默认1，不透明。 
- transparent：粒子是否透明，同opacity一起使用 。 
- blending：渲染时粒子的融合模式。

``` js
function createParticles(){

    var material = new THREE.ParticleCanvasMaterial({
        program:draw,
        color:0xffffff
    });

    var range = 500;

    for(var i = 0 ;i<1000;i++){
        //由于使用的是CanvasRenderer，所以可以直接使用THREE.Particle创建粒子。
        var particle = new THREE.Particle(material);
        particle.position.set(
            Math.random() * range -range /2,
            Math.random() * range -range /2,
            Math.random() * range -range /2
        );

        particle.scale = 0.1;
        particle.rotation.z = Math.PI;
        scene.add(particle);
    }
}

//在该函数中绘制的结果将作为粒子的外形
var draw = function(ctx){

    ctx.fillStyle = 'orange';

    ...

    ctx.beginPath();
    ctx.fill();
}
```

**2.如果你使用的WebGLRenderer渲染器，则需要采取额外的一些步骤，才能在格式化粒子时使用HTML5画布。**

ParticleCanvasMaterial在WebGLRenderer中是不能使用的，只能使用ParticleBasicMaterial来达到相同的目的（将HTML5画布上的画的内容作为粒子的外形）。

ParticleBasicMaterial的map属性可以为粒子加载纹理，该纹理在Three.js中也可以是HTML5画布的输出。

``` js
var getTexture = function(){

    var canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;

    var ctx = canvas.getContext('2d');

    //draw the ghost
    ...

    ctx.fill()l
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    return texture;
}


function createParticles(size,transparent,opacity,sizeAttenuation,color){

    var geom = new THREE.Geometry();

    var material =  new THREE.ParticleBasicMaterial({
        size:size,
        transparent:transparent,
        opacity:opacity,
        map:getTexture(),
        sizeAttenuation:sizeAttenuation,
        color:color
    });

    var range = 500;

    for(var i = 0 ;i <5000;i++){
        var particle = new THREE.Vector3(
            Math.random()*range - range/2,
            Math.random()*range - range/2,
            Math.random()*range - range/2
        );

        geom.vertices.push(particle);
    }

    system = new THREE.ParticleSystem(geom,material);
    //确保粒子在渲染前按照z轴排好序。纠正渲染错误用的。
    system.sortParticles = true;
    system.name = 'particles';
    scene.add(system);
}
```



ParticleSystem的一个属性是叫做 ParticleSystem.FrustrumCulled属性，如果该属性设置为true，则落在相机可见范围之外的粒子将不会被绘制。必要时，使用该项设置可以提高效率和帧频。

使用纹理格式化粒子：

``` js
var texture = THREE.ImageUtils.loadTexture("../assets/textures/particles/raindrop-2.png");

var material = new THREE.ParticleBasicMaterial({
    size:3,
    transparent:true,
    opacity:true,
    map:texture,
    blending：THREE.AdditiveBlending,//画新像素的时候，背景像素的颜色会被添加到新像素上。因为雨滴的背景色是黑色的，这样就不会显示出来。另一种方式，是将纹理中的黑色定义成透明的，但是这种组合在粒子和WebGL中不起作用。
    sizeAttenuation:true,
    color:0xffffff
});
```

创建粒子，前面我们是让整个粒子系统旋转，这次我们让每个粒子运动起来。

``` js
var range = 40;
for(var i=0;i<1500;i++){
    var particle = new THREE.Vector3(
        Math.random() * range - range / 2,
        Math.random() * range * 1.5,
        Math.random() * range - range / 2
    );

    //为粒子添加两个属性
    particle.velocityY = 0.1 + Math.random() / 5;//粒子以多快的速度横向移动
    particle.velocityX = (Math.random() - 0.5) / 3;//粒子以多快的速度下降

    geom2.vertices.push(particle);
}
```

帧循环中改变粒子的位置:

``` js
var vertices = system2.geometry.vertices;
vertices.forEach(function(v){

    v.y = v.y - (v.velocityY);
    v.x = v.x - (v.velocityX);

    //让粒子在指定的区域运动
    if(v.y <= 0 ) 
        v.y = 60;

    if(v.x <= -20 || v.x >=20)
        v.velocityX = v.velocityX * (-1);

});
```

使用五种不同的图片。

**ParticleSystem只能有一种材质， 如果要用多个材质，则只能使用多个粒子系统。**

``` js
function createParticles(size,transparent,opacity,sizeAttenuation,color){

    var texture1 = THREE.ImageUtils.loadTexture('../assets/textures/particles/snowflake1.png');
    var texture2 = THREE.ImageUtils.loadTexture('../assets/textures/particles/snowflake2.png');
    var texture3 = THREE.ImageUtils.loadTexture('../assets/textures/particles/snowflake3.png');
    var texture4 = THREE.ImageUtils.loadTexture('../assets/textures/particles/snowflake4.png');

    scene.add(createSystem('system1',texture1,size,transparent,opacity,sizeAttenuation,color));
    scene.add(createSystem('system2',texture2,size,transparent,opacity,sizeAttenuation,color));
    scene.add(createSystem('system3',texture3,size,transparent,opacity,sizeAttenuation,color));
    scene.add(createSystem('system4',texture4,size,transparent,opacity,sizeAttenuation,color));

}

function createSystem(name,texture,size,transparent,opacity,sizeAttenuation,color){

    var geom = new THREE.Geometry();

    var color = new THREE.Color(color);
    color.setHSL(color.getHSL().h,color.getHSL().s,color.getHSL().l*(Math.random()));

    var material = new THREE.ParticleBasicMaterial({
        size:size,
        transparent:transparent,
        opacity:opacity,
        map:texture,
        blending：THREE.AdditiveBlending,
        depthWrite:false,//决定当前对象是否影响深度缓存。为false，保证各个粒子系统之间互补影响。
        sizeAttenuation:sizeAttenuation,
        color:color
    });

    var range = 40;
    for(var i = 0 ;i<50;i++){
        var particle = new THREE.Vector3(
            Math.random() * range - range / 2,
            Math.random() * range * 1.5 ,
            Math.random() * range - range / 2
        );

        particle.velocityY = 0.1 + Math.random() / 5;
        particle.velocityX = (Math.random() - 0.5) / 3;
        particle.velocityZ = (Math.random() - 0.5) / 3;

        geom.vertices.push(particle);
    }

    var system = new THREE.ParticleSystem(geom,material);
    system.name = name;
    system.sortParticles = true;//在渲染之前沿着z轴排好序

    return system;
}
```

帧循环：

``` js
scene.children.forEach(function(child){

    if(child instanceof THREE.ParticleSystem){
        var vertices = child.geometry.vertices;

        vertices.forEach(function(v){
            v.y = v.y - (v.velocityY);
            v.x = v.x - (v.velocityX);
            v.z = v.z - (v.velocityZ);
        });

        if(v.y <= 0)v.y = 60;

        if(v.x<=-20 || v.x >=20)
            v.velocityX = v.velocityX * (-1);

        if(v.z <= -10 || v.z >=20)
            v.velocityZ = v.velocityZ * (-1);
    }
});
```

该方法的限制：如果我们要的纹理种类越多，即需要创建和管理更多的粒子系统。

THREE.Particle 不能和WebGLRenderer一起使用。

CanvasRenderer 渲染器有性能的问题。

#### THREE.Sprite 精灵类

作用： 
- 1.创建一个基于屏幕坐标移动、定位和缩放的对象。你可以用它来创建一个平视显示器(HUD)，就像在三维场景上蒙了一层。 
- 2.创建一个类似粒子的、可以在三维空间移动的对象，类似使用CanvasRenderer的THREE.Particle。三维场景中的精灵有时候也称为广告牌。

``` js
function getTexture(){
    //加载包含5张不同颜色的精灵图片
    var texture = new THREE.ImageUtils.loadTexture('../assets/textures/particles/sprite-sheet.png');

    return texture;
}

function createSprite(size,transparent,opacity,color,spriteNumber){

    var spriteMaterial = new THREE.SpriteMaterial({
        opacity:opacity,
        color:color,
        transparent:transparent,
        useScreenCoordinates:true,
        map:getTexture()
    });

    //uvOffset、uvScale 正确选择要显示的精灵图形
    spriteMaterial.uvOffset.set(1/5 * spriteNumber ,0);//决定纹理在x轴和y轴的偏移量，我们这里只有一行图片，所以，y偏移量为0

    //这里如果我们显示第三个图形，则x轴偏移量为0.4。如果我们只设置偏移量，那么会将第三、四、五个图形压缩在一起。所以，要想只显示第三个，则需要放大。

    //我们将uvScale的u值设置为0.2，这意味着放大(沿x轴)纹理，只显示其中的20%，也就是一个精灵。
    spriteMaterial.uvScale.set(1/5,1);//缩放比例，取值范围0-1

    spriteMaterial.alignmnet = THREE.SpriteAlignmnet.bottomCenter;
    spriteMaterial.scaleByViewport = true;
    spriteMaterial.blending = THREE.AdditiveBlending;

    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(size,size,size);
    sprite.position.set(200,window.innderHeight - 2,0);
    sprite.velocityX = 5;

    scene.add(sprite);
}
```

THREE.SpriteMaterial 材质属性：

- Color：粒子的颜色 
- Map：精灵使用的纹理 
- sizeAttenuation：若为false，则距离镜头的远近不会影响精灵的大小。默认为true。 
- opacity：设置精灵的透明度。默认1，不透明。 
- blending：渲染精灵时所以的融合模式。 
- fog：精灵是否受创建雾化效果的影响。 
- useScreenCoordinates：若设置为true，则精灵的位置相对于窗口左上角的x和y来定位，创建中的相机就会被完全忽略。 
- scaleByViewport：精灵的大小取决于视图窗口的尺寸。如果设置为true，则精灵的尺寸 = 图片宽度 / 视图窗口高度。若为false，则精灵的尺寸 = 图片宽度 / 1.0. 
- alignmnet：当精灵被压缩时(使用scale属性)，该属性指定精灵从哪里开始缩放。如果该属性设置为THREE.SpriteAlignmnet.topLeft，则当增加或减少精灵的缩放比例的时候，精灵的左上角保持不动。
- uvOffset：结合nvScale选择精灵所用的纹理。 
- uvScale：结合uvOffset选择精灵所用的纹理。

**在三维空间中定位粒子**

如果将useScreenCoordinates设置为false，那么精灵的行为就会跟前面所讨论的粒子一样，使用的是相机坐标。

``` js
function createSprite(size,transparent,opacity,color,spriteNumber){

    var spriteMaterial = new THREE.SpriteMaterial({
        opacity:opacity,
        color:color,
        transparent:transparent,
        useScreenCoordinates:false,
        sizeAttenuation:true,
        map:getTexture()
    });

    spriteMaterial.uvOffset.set(1/5*spriteNumber,0);
    spriteMaterial.uvScale.set(1/5,1);

    spriteMaterial.alignmnet = THREE.SpriteAlignmnet.bottomCenter;
    spriteMaterial.blending = THREE.AdditiveBlending;

    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(size,size,size);
    sprite.position = new THREE.Vector3(
        Math.random() * range  -range /2 ,
        Math.random() * range  -range /2 ,
        Math.random() * range  -range /2 
    );

    sprite.velocityX = 5;

    return sprite;
}

group.rotation.x += 0.1;
```

**从高级几何体中创建粒子系统**

**从环面扭结创建粒子系统。**

``` js
function generateSprite(){

    var canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    var context = canvas.getContext('2d');
    var gradient = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2,
        0,
        canvas.width / 2,canvas.height /2,
        canvas.width / 2
    );

    gradient.addColorStop(0,'rgba(255,255,255,1)');
    gradient.addColorStop(0.2,'rgba(0,255,255,1)');
    gradient.addColorStop(0.4,'rgba(0,0,64,1)');
    gradient.addColorStop(1,'rgba(0,0,0,1)');

    context.fillStyle  = gradient;

    context.fillRect(0,0,canvas.width,canvas.height);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    return texture;
}


function createParticleSystem(geom){

    var material = new THREE.ParticleBasicMaterial({

        color:0xffffff,
        size:3,
        transparent.true,
        blending:THREE.AdditiveBlending,
        map:getTexture()
    });

    var system = new THREE.ParticleSystem(geom,material);
    system.sortParticles = true;

    return system;
}

var geom = new THREE.TorusknotGeometry(...);
var knot = createParticleSystem(gemo);
```

如果你想创建大量的粒子，并共享同一个材质，那么你应该使用THREE.ParticleSystem对象。这样几何体中的每个顶点都会被渲染成粒子，并使用指定的材质。



