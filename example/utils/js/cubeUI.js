//折叠收缩立方体UI
$(document).ready(function(){
    $(".btn").click(function(){
        $(".panel").slideToggle("slow");
        return false;
    });
});
 
var objUI = [];
 
//存储立方体参数ui中的组件id
var cubeUiParameters = {
    depth_slider: "cube-depth-slider",
    width_slider: "cube-width-slider",
    height_slider: "cube-height-slider",
     
    depth_input: "cube-depth-input",
    width_input: "cube-width-input",
    height_input: "cube-height-input",
};
 
//立方体的相关变量
var cubeParameters = {
    depth: 0,
    width: 0,
    height: 0,
};
 
//通过改变input中的值，改变模型
$("#"+cubeUiParameters.depth_input+",#"+cubeUiParameters.width_input+",#"+cubeUiParameters.height_input).change(function(){
    //取到input中的值
    cubeParameters.depth = document.getElementById(cubeUiParameters.depth_input).value;
    cubeParameters.width = document.getElementById(cubeUiParameters.width_input).value;
    cubeParameters.height = document.getElementById(cubeUiParameters.height_input).value;
    //将取到的值赋给滑动条
    $("#"+cubeUiParameters.depth_slider).slider("value",cubeParameters.depth);
    $("#"+cubeUiParameters.width_slider).slider("value",cubeParameters.width);
    $("#"+cubeUiParameters.height_slider).slider("value",cubeParameters.height);
    //更新模型
    updateCube(cubeParameters.width,cubeParameters.height,cubeParameters.depth);
});
 
 
//初始化滑动条的输入框的值
function cube_ui(cube){
    objUI = [];
    objUI.push(cube);
    //取得立方体的长、宽、高
    document.getElementById(cubeUiParameters.depth_input).value = cube.geometry.parameters.depth;
    document.getElementById(cubeUiParameters.width_input).value = cube.geometry.parameters.width;
    document.getElementById(cubeUiParameters.height_input).value = cube.geometry.parameters.height;
    cubeParameters.depth = cube.geometry.parameters.depth;
    cubeParameters.width = cube.geometry.parameters.width;
    cubeParameters.height = cube.geometry.parameters.height;
     
    //生成滑动条
    $("#"+cubeUiParameters.depth_slider+",#"+cubeUiParameters.width_slider+",#"+cubeUiParameters.height_slider).slider({
        min:0,
        max:500,
        step:1,
        value:0,
        slide:function(event,ui){
            $(this).slider("value",ui.value);
            cube_value();
        }
    });
 
    //给滑动条赋值
    $("#"+cubeUiParameters.depth_slider).slider("value",cubeParameters.depth);
    $("#"+cubeUiParameters.width_slider).slider("value",cubeParameters.width);
    $("#"+cubeUiParameters.height_slider).slider("value",cubeParameters.height);
 
}
 
//取到滑条的值赋给input框并更新立方体
function cube_value(){
    cubeParameters.depth =  $("#"+cubeUiParameters.depth_slider).slider("value");
    cubeParameters.width =  $("#"+cubeUiParameters.width_slider).slider("value");
    cubeParameters.height =  $("#"+cubeUiParameters.height_slider).slider("value");
    document.getElementById(cubeUiParameters.depth_input).value = cubeParameters.depth;
    document.getElementById(cubeUiParameters.width_input).value = cubeParameters.width;
    document.getElementById(cubeUiParameters.height_input).value = cubeParameters.height;
    updateCube(cubeParameters.width,cubeParameters.height,cubeParameters.depth);
}
 
//创建改变参数的立方体
function updateCube(width,height,depth){
    //删除改变前模型
    objUI[0].geometry.dispose();
    scene.remove(objUI[0]);
    objUI = [];
     
    var cube = createMesh(new THREE.CubeGeometry(width, height, depth));
     
    cube.position.set(0,0,0);
    objUI.push(cube);
    scene.add(cube);
    render();
}