import * as THREE from 'three'; //imports 3js
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'; //load fonts
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'; //load text geometry
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'; //CSS2D text import
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import $ from 'jquery';

//
////Initialization
//

//Scene setup
const scene = new THREE.Scene();

let spoken_color = "-999";


let frames = 0, prevTime = performance.now();

//Speech recognition colors list
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "black",
  "white",
  "gray"
  // …
];

//Create all wall materials
let wall_material_list = [];
for (let i = 0; i< colors.length; i++) {
  wall_material_list.push(new THREE.MeshBasicMaterial( { color: colors[i], name: colors[i] } ) );
}

const color_materials = new Map([
  ['red', wall_material_list[0]],
  ['orange', wall_material_list[1]],
  ['yellow', wall_material_list[2]],
  ['green', wall_material_list[3]],
  ['blue', wall_material_list[4]],
  ['purple', wall_material_list[5]],
  ['pink', wall_material_list[6]],
  ['black', wall_material_list[7]],
  ['white', wall_material_list[8]],
  ['gray', wall_material_list[9]]
]);



//wallTypeArray = ["LLL_Wall","LL_Wall","L_Wall","Wall","R_Wall","RR_Wall","RRR_Wall"];
const wallMap = new Map([
  ['LLL_Wall', -6],
  ['LL_Wall', -4],
  ['L_Wall', -2],
  ['Wall', 0],
  ['R_Wall', 2],
  ['RR_Wall', 4],
  ['RRR_Wall', 6]
]);



const gltf_loader = new GLTFLoader(); //3D mesh loader

//Create all models
//var models;
const model_urls = Array.from(wallMap.keys());
const total_models = model_urls.length;
const all_walls = [];
let the_wall_model;

for (let i = 0; i<total_models; i++) {

  gltf_loader.load( 'objs/' + model_urls[i] + '.glb', function ( gltf ) {
      the_wall_model = gltf.scene.children[0]; 
      the_wall_model.position.set(0,1,-10);
      //randomWallColor (wall_model);
      //scene.add( the_wall_model);
      all_walls.push(the_wall_model);
    }
    , undefined, function ( error ) {
      console.log("fail!");
      console.error( error );
      console.log('objs/' + wall_type + '.glb');

    } );

}

console.log("all walls array:");
console.log(all_walls);




////Create wall class

// class Wall {
//   constructor(name, safe, color) {

//     const selectWall = getRandomMapElement(wallMap);
//     const [key, value] = selectWall;
//     wall_type = `${key}`;
//     wall_safe = `${value}`;



//     this.name = wall_type;
//     this.safe = wall_safe;
//     this.color = wall_mat;
//   }

//   bark() {
//     console.log("Woof!");
//   }
// }




////Background: png
const texture_loader = new THREE.TextureLoader();
let background_texture = texture_loader.load( 'textures/pixel sky.jpg' );
background_texture.colorSpace = THREE.SRGBColorSpace;
scene.background = background_texture;



//Camera setups
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, .01, 1000 );
camera.position.x = 0;
camera.position.y = 6.6;
camera.position.z = 23;
camera.rotation.x = -16;
camera.rotation.x = 0;
camera.rotation.x = 0;



//Render setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//Orbit controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();


//
////Creating 3D objects
//

//Create player plane
const G_grass_plane = new THREE.PlaneGeometry( 16, 30 );
const M_grass_plane = new THREE.MeshBasicMaterial( {color: "#B6FE80", side: THREE.DoubleSide} );
const SM_grass_plane = new THREE.Mesh( G_grass_plane, M_grass_plane );
SM_grass_plane.rotation.x = -1.5708;
scene.add( SM_grass_plane );



//Create player
//let objColor = "pink"
const g_player = new THREE.BoxGeometry( 1, 1, 1 );
let m_red = color_materials.get("red");//new THREE.MeshBasicMaterial( { color: "red", name: "red" } );
m_red.name = "red";
//console.log("m_red");
//console.log(color_materials["red"]);
let sm_player =  new THREE.Mesh( g_player, m_red );
sm_player.position.set(0,.5,10);
scene.add( sm_player );







//helper function
function getRandomElem(arr) {
  
  if (arr.length === 0) {
    return undefined;
  }
  
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
  
}





function getRandomMapElement(map) {
  if (!map || map.size === 0) {
    return undefined; // Return undefined if the map is empty or invalid
  }

  const randomIndex = Math.floor(Math.random() * map.size);
  let currentIndex = 0;

  for (const entry of map) {
    if (currentIndex === randomIndex) {
      return entry; // Return the key-value pair as an array [key, value]
    }
    currentIndex++;
  }
}




////Create Wall
let wallArray = []; //use this for scene removal
//let wall_to_add = "";

function spawnWall() {


  let wall_model;
  wall_model = getRandomElem(all_walls);
  wall_model.position.set(0,1,-10);
  wall_model.material = getRandomElem(wall_material_list);
  scene.add( wall_model);
  wallArray.push(wall_model);
  console.log("Spawned wall: " + wall_model.name);


}


function wallCollision(wall) {
  let safe_position;

  if (wall.name == "LLL_Wall") {
    safe_position = -6;
  }
  else if (wall.name == "LL_Wall") {
    safe_position = -4;
  }
  else if (wall.name == "L_Wall") {
    safe_position = -2;
  }
  else if (wall.name == "Wall") {
    safe_position = 0;
  }
  else if (wall.name == "R_Wall") {
    safe_position = 2;
  }
  else if (wall.name == "RR_Wall") {
    safe_position = 4;
  } else if (wall.name == "RRR_Wall") {
    safe_position = 6;
  }

  return safe_position;

}




//
////Animation controls
//
// loop that runs every frame to render scene and camera
let gameOver = false;
const clock = new THREE.Clock();
let time = 0; //in game time
let delta = 0;
let off = false;
let wall_checkpoint = 6;
let wall_spawn_rate = .15; // higher # makes next wall spawn earlier
let wall_timer = 6;
let total_walls = 0;
let score = 0;
let wall_speed = .03;
let current_safe_position;
let position_decision = true;




//Animate function
function animate() {

  if (gameOver == false) {
  // FPS
  
  // frames ++;
  // const timeFPS = performance.now();

  //   if ( timeFPS >= prevTime + 1000 ) {
    
  //     console.log("fps:");
  //     console.log( Math.round( ( frames * 1000 ) / ( timeFPS - prevTime ) ) );
      
  //     frames = 0;
  //     prevTime = timeFPS;
      
  //   }



  //Track time
  delta = clock.getDelta();
  time += delta;
  

  //Create wall at specific time
  if (time > wall_timer) {
    wall_checkpoint -= wall_spawn_rate;
    wall_timer =  wall_timer + wall_checkpoint;
    spawnWall();
    if (position_decision == false) {
      position_decision = true;
    }
   }


  //if there is a wall spawned...
  if (wallArray.length > 0) {

    //break;
    total_walls++;
    wall_speed = wall_speed +.000005;

    //current_safe_position = wallCollision(wallArray[0]);
    // console.log(current_safe_position);
    if (position_decision == true) {
      current_safe_position = wallCollision(wallArray[0]);
      console.log(current_safe_position);
      position_decision = false;
    }

    //move all walls this rate
    for (let i = 0; i < wallArray.length; i++) {
      wallArray[i].position.z += wall_speed;
    }

    if (wallArray[0].position.z > 10 && wallArray[0].position.z < 11.5) {
      console.log("wall color" + wallArray[0].material.name);
      console.log("player color" + sm_player.material.name);

      //safe_position = wallCollision(wallArray[0]);
      if (sm_player.position.x != current_safe_position || sm_player.material.name != wallArray[0].material.name){
        game_over.style.backgroundColor = wallArray[0].material.name;
        if (playing_audio == true) 
        {
          death_sfx.play();
        } 
        $("#game_over").fadeIn("slow");
        //game_over.style.display = "block";
        game_over.innerHTML = "GAME OVER!";
        //game_over.style.color = sm_player.material.name;
        gameOver = true;
        game_over.innerHTML += `<p id="final_score"></p>`;
        final_score.innerHTML = "Final score: " + score;
        if (spoken_color != "-999") {
          game_over.innerHTML += `<p id="death_note"></p>`;
          death_note.innerHTML = spoken_color;
        }
        game_over.innerHTML += `<span id="replay" hidden>Play Again?</span>`;
        //replay.style.borderColor = sm_player.material.name;
        $("#replay").fadeIn("3000");
        replay.onclick = function() {
          window.location.reload();
        };

        // const loader = new THREE.TextureLoader();
        // const texture = loader.load( 'public/textures/mosaic.png' );
        // texture.colorSpace = THREE.SRGBColorSpace;
        // cube.material = new THREE.MeshBasicMaterial({
        //   map: texture
        // });
      }

    }


    if (wallArray[0].position.z > 12) {
      
      console.log("Wall array length is: ")
      console.log(wallArray.length);
      scene.remove(wallArray[0]);
      wallArray.shift();  
      score++;
      if (playing_audio == true) 
      {
        score_sfx.play();
      } 
      current_score.innerHTML = score;


      // console.log("Wall array length is: ")
      // console.log(wallArray.length);
    }

  
  }


  }

  //Dev mode printouts
  //console_text.innerHTML = sm_player.position.x;
  //console_text.innerHTML += " " + time;
  //console_text.innerHTML += " " + current_safe_position;
  current_score.innerHTML = score;


  renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );






function gameOverFunction() {
  // Pause the animation loop)
  clearInterval(gameLoopInterval); // Assuming you use setInterval
  // Display the game over screen
  showGameOverScreen();
}







// //old script
document.addEventListener("keyup", onDocumentKeyUp, false);
//let LLL_Wall = this.getObjectByName("LLL_Wall");
//let pill = this.getObjectByName("pill");



document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32 || event.key === " ") {
   if(["Space"].indexOf(event.code) > -1) {
        event.preventDefault();
    }
    recognition.start();
    console.log("Ready to receive a color command.");
    console.log('Spacebar pressed');
  }
});



// movement - please calibrate these values
const xSpeed = 1.0;


function onDocumentKeyUp(event) {
    if(["Space"].indexOf(event.code) > -1) {
        //console.log(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.code))
        event.preventDefault();
    }
    let keyCode = event.which;

    //a key
    if (keyCode == 65 && sm_player.position.x >= -6)
    {
      sm_player.position.x -= xSpeed;
    } 

    //d key
    else if (keyCode == 68 && sm_player.position.x <= 6) 
    {
      sm_player.position.x += xSpeed;
    }

};





//speech recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;



//uses color list
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
  " | ",
)};`;
console.log("grammar");
console.log(grammar);

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);


recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;


//const diagnostic = document.querySelector(".output");
//const bg = document.querySelector("html");
//const hints = document.querySelector(".hints");


//Generate color text as a helper
let colorHTML = "";
colors.forEach((color, i) => {
  console.log(color, i);
  if (i != (colors.length) -1){
    colorHTML += `<span style="font-size: 1em;"> ${colors[i]}, </span>`;
  } else {
    colorHTML += `<span style="font-size: 1em;"> ${colors[i]} </span>`;
  }
  
  console.log(colorHTML);
});
console_text.innerHTML = "Colors:" + colorHTML;

//hints.innerHTML = `Tap or click then say a color to change the background color of the app. Try ${colorHTML}.`;

// document.body.onclick = () => {
//   recognition.start();
//   console.log("Ready to receive a color command.");
// };


recognition.onresult = (event) => {
  const colorRaw = event.results[0][0].transcript;
  let color = colorRaw.toLowerCase();
  spoken_color = "🎙️ Your last words were: \"" + color + "\" ... 🪦";
  console.log("spoken color: " + color);
  //console.log(color);
  if (!colors.includes(color)) {
    console.log("I didn't recognize that color.");
    return;
  } else {
    sm_player.material = new THREE.MeshBasicMaterial( { color: color, name: color } );
  }
  


  //diagnostic.textContent = `Result received: ${color}.`;
  //bg.style.backgroundColor = color; //adjust background color
  //objColor = color;
  // if (color == "mosaic") {
  //   const loader = new THREE.TextureLoader();
  //   const texture = loader.load( 'public/textures/mosaic.png' );
  //   texture.colorSpace = THREE.SRGBColorSpace;
   
  //   cube.material = new THREE.MeshBasicMaterial({
  //     map: texture
  //   });
  // } else {
  //   sm_player.material = new THREE.MeshBasicMaterial( { color: color, name: color } );
  // }
  
  //new THREE.MeshBasicMaterial( { color: objColor } );
  console.log(`Confidence: ${event.results[0][0].confidence}`);
  console.log(color);
};



recognition.onspeechend = () => {
  recognition.stop();
};

recognition.onnomatch = (event) => {
  console.log("I didn't recognize that color.");
};



recognition.onerror = (event) => {
  console.log(`Error occurred in recognition: ${event.error}`);
};





//Audio config
const audio_listener = new THREE.AudioListener();
camera.add( audio_listener );

// create a global audio source
const sound = new THREE.Audio( audio_listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();



music_icon.addEventListener("mouseover", function() {
  music_icon.style.cursor = "pointer";
});

music_icon.addEventListener("mouseout", function() {
  music_icon.style.cursor = "default";
});





//Audio handler
let playing_audio = false;
let first_audio_click = false;
const score_sfx = new Audio('/audio/23. OK_Button_Variation.wav');
const death_sfx = new Audio('/audio/Reject Sound.wav');
music_icon.addEventListener('click', function() {

  if (playing_audio == false) 
  {
    music_icon.innerHTML = "🔊";
    autoplayer.muted = false;
    playing_audio = true;
  } 
  else if (playing_audio == true) 
  {
    music_icon.innerHTML = "🔇";
    autoplayer.muted = true;
    playing_audio = false;
  }


  
  if (first_audio_click == false) {
    first_audio_click = true;

    if (first_audio_click == true) {
      audioLoader.load( '/audio/You Know Me - Jeremy Black.mp3', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( true );
      sound.setVolume( 0.5 );
      sound.play();
    });
    }
  } 


  if (playing_audio == true) 
  {
    sound.setVolume(.5);
  } 
  else if (playing_audio == false) 
  {
    console.log("SET VOLUME: 0");
    sound.setVolume(0); 
  }


});




//
////GUI code
//

//score & console
//let score = 0;

// console_text.innerHTML = sm_player.position.x














//
////backups
//


////Background: Equirectangular
// const equirectangular = new THREE.TextureLoader().load('textures/pixel sky.jpg');
// equirectangular.mapping = THREE.EquirectangularReflectionMapping;
// equirectangular.colorSpace = THREE.SRGBColorSpace;
// scene.background = equirectangular;




//Load 3d model
// gltf_loader.load( 'objs/LLL_Wall.glb', function ( gltf ) {
//   console.log(gltf.scene.children);
//   scene.add( gltf.scene.children[0]);

// }, undefined, function ( error ) {

//   console.error( error );

// } );






// //orig AUDIO
// const stream = '/audio/lux_hotel.mp3'
// const audioLoader = new THREE.AudioLoader();
// const listener = new THREE.AudioListener();
// const audio = new THREE.Audio(listener);
// audioLoader.load(stream, function(buffer) {
//     audio.setBuffer(buffer);
//     audio.setLoop(true);
//     audio.play();
// });




