import { GUI } from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import random from "../utils/random";
import { colors } from "./theme";


const manager = new THREE.LoadingManager();

// scene
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(colors[random(colors.length)], 0.1, 200 );

// cameraa
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.z = 170;


// gui
const gui = new GUI()


// renderer
const renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


// lights


const lightFolder = gui.addFolder("Lighting");

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffee, 3);

lightFolder.add(directionalLight.position,"x").max(100).min(-100)
lightFolder.add(directionalLight.position,"y").max(100).min(-100)
lightFolder.add(directionalLight.position,"z").max(100).min(-100)


directionalLight.position.x = -4;
directionalLight.position.y = 13.4;
directionalLight.position.z = 22.2;
directionalLight.castShadow = true

const dl = new THREE.DirectionalLightHelper(directionalLight)
scene.add(dl)
scene.add( directionalLight );





//   controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
// controls.autoRotate = true


  function animate(fun?:any) {
    if (controls.autoRotate) {
      controls.update();
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // fun && fun();
  }

export {manager,scene,camera, gui, renderer,animate,controls}