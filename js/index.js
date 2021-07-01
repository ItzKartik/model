import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

mdls = ['interior.glb', 'exterior.glb', 'normal.glb', 'floor.glb'];
vars = [interior, exterior, normal, floor];

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 10, 1800);
    camera.position.z = 100;
    camera.position.y = 50;
    camera.position.x = -50;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 2;

    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    var hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 2);
    scene.add(hemiLight);
    // light = new THREE.SpotLight(0xffa95c, 0.2);
    // light.position.set(-50, 50, 50);
    // light.castShadow = true;
    // scene.add(light);

    loader = new THREE.GLTFLoader();
    loader.crossOrigin = true;

    load_obj();

    render();

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
}

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvasPixelWidth = canvas.width / window.devicePixelRatio;
    var canvasPixelHeight = canvas.height / window.devicePixelRatio;

    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

export function load_obj() {
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('tex/9.jpeg');
    texture.flipY = false;

    for (var i = 0; i < mdls.length; i++) {
        vars[i] = new THREE.GLTFLoader();
        vars[i].load('objs/'+mdls[i], (gltf) => {
            var model = gltf.scene;
            model.scale.set(6,6,6);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = texture;
                }
            });
            scene.add(model);
        });
    }
}

export function change_tex(tex, type) {
    textureLoader = new THREE.TextureLoader();
    textureLoader.encoding = THREE.sRGBEncoding;
    texture = textureLoader.load("tex/" + tex);
    if (type == 'interior') {
        interior = null;
        interior = new THREE.GLTFLoader();
        interior.load('objs/'+type+'.glb', function (gltf) {
            var model = gltf.scene;
            model.scale.set(6,6,6);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = texture;
                }
            });
            scene.add(model);
        });
    } else if (type == 'exterior') {
        exterior = null;
        exterior = new THREE.GLTFLoader();
        exterior.load('objs/'+type+'.glb', function (gltf) {
            var model = gltf.scene;
            model.scale.set(6,6,6);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = texture;
                }
            });
            scene.add(model);
        });
    } else if (type == 'floor') {
        exterior = null;
        exterior = new THREE.GLTFLoader();
        exterior.load('objs/'+type+'.glb', function (gltf) {
            var model = gltf.scene;
            model.scale.set(6,6,6);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = texture;
                }
            });
            scene.add(model);
        });
    } else if (type == 'color') {
        for (var i = 0; i < mdls.length; i++) {
            vars[i] = null;
            vars[i] = new THREE.GLTFLoader();
            vars[i].load('objs/'+mdls[i], (gltf) => {
                var model = gltf.scene;
                model.scale.set(6,6,6);
                model.traverse((o) => {
                    if (o.isMesh) {
                        o.material.map = null;
                        o.material.needsUpdate = true;
                        o.material.color.setHex(tex);
                    }
                });
                scene.add(model);
            });
        }
    } else {
        alert("No Function");
    }
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
}
init();