import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { manager } from "../config/global";

type Callback = (error:any, data:any, loader:string)=> void

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
      // object.scene.position.y = -200;
      object.scene.position.y = -100;
       object.scene.scale.set(15,15,15)
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
