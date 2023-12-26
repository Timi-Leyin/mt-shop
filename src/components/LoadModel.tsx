import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { manager } from "../config/global";

type Callback = (error:unknown, data:unknown, loader:string)=> void

const LoadModel = (path:string, cb:Callback) => {
  const loader = new GLTFLoader(manager);
  const dracoLoader = new DRACOLoader(manager);
  let model;
  dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
  loader.setDRACOLoader(dracoLoader);
  // load a resource
  loader.load(path,
    function (object) {
      object.scene.receiveShadow = true;
      object.scene.castShadow = true;
      // object.scene.position.y = -500;
      // object.scene.position.y = -100;
      const scale = .2;
       object.scene.scale.set(scale, scale,scale)
      // object.scene.scale.set(0.2, 0.2, 0.2);
      model = object.scene;
      console.log(model)
      cb(undefined, model, "100%");
    },
    // called when loading is in progresses
    function (xhr) {
      const l = ((xhr.loaded / xhr.total) * 100 + "%");
      cb(undefined, undefined, l);
    },
  
    function (error) {
        cb(error, undefined, "0%");
    }
  );
};

export default LoadModel
