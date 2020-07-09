"use strict";
var camera, scene, renderer, controls;

function buildScene() {
    scene = new THREE.Scene();
}

function addFog() {
    scene.fog = new THREE.Fog(0x22292d, 0.015, 3000);
}

function createRenderer() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setClearColor(0x22292d);
    renderer.setSize(500, 500);
    document.getElementById('scene').appendChild(renderer.domElement);
}

function createCamera() {
    let minDrawDistance = 50;
    let maxDrawDistance = 10000;
    camera = new THREE.PerspectiveCamera(75, 1, minDrawDistance, maxDrawDistance);
    camera.position.set(0, 0, 200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function addLight() {
    let light = new THREE.PointLight(0xffffff);
    light.position.x = camera.position.x;
    light.position.y = camera.position.y;
    light.position.z = camera.position.z;
    scene.add(light);
}

function createSphere() {
    let material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xFF0000),
        transparent: true,
        opacity: 0.9,
        fog: true
    });

    let geometry = new THREE.SphereGeometry(100, 25, 25);
    let mesh = new THREE.Mesh(geometry, material);
    let glowMaterial = createGlowMaterial();

    let glow = new THREE.Mesh(geometry.clone(), glowMaterial);
    glow.scale.multiplyScalar(3);
    mesh.add(glow);

    scene.add(mesh);
}

function createGlowMaterial() {
    return new THREE.ShaderMaterial({
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        fog: true,

        uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib["fog"], {
                "c": {
                    type: "f",
                    value: 0
                },
                "p": {
                    type: "f",
                    value: 4.5
                },
                glowColor: {
                    type: "c",
                    value: new THREE.Color(0x0061c2)
                },
                viewVector: {
                    type: "v3",
                    value: {
                        x: 0,
                        y: 0,
                        z: 400
                    }
                },
                fog: true
            },
        ]),

        fragmentShader: [
            'uniform vec3 glowColor;',
            'varying float intensity;',
            THREE.ShaderChunk["common"],
            THREE.ShaderChunk["fog_pars_fragment"],
            'void main()',
            '{',
            'vec3 outgoingLight = vec3( 0.0 );',
            'vec3 glow = glowColor * intensity;',
            THREE.ShaderChunk["fog_fragment"],
            'gl_FragColor = vec4(glow, 1.0 );',
            '}'
        ].join('\n'),

        vertexShader: [
            'uniform vec3 viewVector;',
            'uniform float c;',
            'uniform float p;',
            'varying float intensity;',
            'void main()',
            '{',
            'vec3 vNormal = normalize( normalMatrix * normal );',
            'vec3 vNormel = normalize( normalMatrix * viewVector );',
            'intensity = pow( c - dot(vNormal, vNormel), p );',
            'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '}'
        ].join("\n")
    });
}

var zoomDirection = 1;

function render() {
    requestAnimationFrame(() => render());
    camera.position.z += 20 * zoomDirection;
    if (camera.position.z > 3000) {
        zoomDirection *= -1;
    }
    if (camera.position.z < 200) {
        zoomDirection *= -1;
    }
    renderer.render(scene, camera);
}

buildScene();
addFog();
createCamera();
addLight();
createRenderer();
createSphere();
render();