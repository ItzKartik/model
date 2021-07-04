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

    var hemiLight = new THREE.HemisphereLight();
    scene.add(hemiLight);

    loader = new THREE.GLTFLoader();
    loader.crossOrigin = true;

    load_obj();
    // change_tex('5.jpeg', 'interior');
    // change_tex('5.jpeg', 'exterior');
    // change_tex('5.jpeg', 'floor');
    // change_tex('5.jpeg', 'normal');

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

function load_obj() {
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('tex/5.jpeg');
    texture.flipY = false;

    for (var i = 0; i < mdls.length; i++) {
        if (mdls[i].includes('interior')){
            console.log('interior');
            size = 8;
        } else {
            size = 8;
        } 
        vars[i] = new THREE.GLTFLoader();
        vars[i].load('objs/'+mdls[i], (gltf) => {
            var model = gltf.scene;
            model.scale.set(size,size,size);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.normalMap = texture;
                }
            });
            scene.add(model);
        });
    }
}

export function change_tex(tex, type) {
    console.log(type, tex);
    var textureLoader = new THREE.TextureLoader();
    textureLoader.encoding = THREE.sRGBEncoding;
    var texture = textureLoader.load("tex/" + tex);
    if (type == 'interior') {
        interior = null;
        interior = new THREE.GLTFLoader();
        interior.load('objs/'+type+'.glb', function (gltf) {
            var model = gltf.scene;
            model.scale.set(size,size,size);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = null;
                    o.material.needsUpdate = true;
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
            model.scale.set(size,size,size);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = null;
                    o.material.needsUpdate = true;
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
            model.scale.set(size,size,size);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = null;
                    o.material.needsUpdate = true;
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
                model.scale.set(size,size,size);
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
    } else if (type == 'normal') {
        normal = null;
        normal = new THREE.GLTFLoader();
        normal.load('objs/'+type+'.glb', function (gltf) {
            var model = gltf.scene;
            model.scale.set(size,size,size);
            model.traverse((o) => {
                if (o.isMesh) {
                    o.material.map = null;
                    o.material.needsUpdate = true;
                    o.material.map = texture;
                }
            });
            scene.add(model);
        });
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