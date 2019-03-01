var scene,camera,webGLRenderer,spotLight;
  
 function init(){
    //场景
    scene = new THREE.Scene();
    //相机
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-20,30,40);
    camera.lookAt(new THREE.Vector3(10, 0, 0));
    //渲染器
    webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;
    document.getElementById("output").appendChild(webGLRenderer.domElement);
    //灯光
    spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    scene.add(spotLight);
    //创建一个立方体
    var cube = createMesh(new THREE.BoxGeometry(10, 10, 10));
    cube_ui(cube);
    scene.add(cube);
     
    render();
}
 
window.onload = init;
 
//渲染
function render(){
    webGLRenderer.render(scene, camera);
}
 
//给立方体附加材质
function createMesh(geom){
    var meshMaterial = new THREE.MeshNormalMaterial();
    meshMaterial.side = THREE.DoubleSide;
    var mesh = new THREE.Mesh(geom, meshMaterial);
    mesh.position.set(0,0,0);
    return mesh;
}