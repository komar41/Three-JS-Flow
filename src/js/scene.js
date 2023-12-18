let flag = 0
let particlesMesh

// Canvas
const canvas = document.querySelector('canvas.scene');

// Scene
const scene = new THREE.Scene();

// Lights
const light = new THREE.DirectionalLight(0xffffff, 0.1);
light.position.set(0,2,20);
scene.add(light);

// Sizes
const sizes = {
    width: 700,
    height: 500
};


window.addEventListener('resize', () =>
{
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});


// Camera setup
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.set(0,2,20);
camera.lookAt(0,0,0);
scene.add(camera);
// const axesHelper = new THREE.AxesHelper(1);
// scene.add( axesHelper );


//  Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
// sets up the background color
renderer.setClearColor(0xeeeeee); //0xc3c3c3
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 5));

const controls = new THREE.OrbitControls(camera, renderer.domElement)

// Mouse
// var move = false
// document.addEventListener('mousemove', moveCamera)
// document.addEventListener('mousedown', startMove)
// document.addEventListener('mouseup', stopMove)
// document.addEventListener('wheel', zoomCamera)

// let mouseX = 0
// let mouseY = 0

// function startMove(event){
//     move = true
// }

// function moveCamera(event){
//     mouseX = event.clientX
//     mouseY = event.clientY

//     if(move){
//         particlesMesh.rotation.x = mouseX * (0.058)
//         particlesMesh.rotation.y = mouseY * (0.058)
//         // particlesMesh.rotation.z = -mouseX * (0.008)
//     }
// }

// function stopMove(event){
//     move = false
// }

// function zoomCamera(event){
//     camera.position.z +=event.deltaY/100;
// }

// Animate
const animate = () =>
{

    

    renderer.render(scene, camera);

    controls.update();

    // Call animate for each frame
    requestAnimationFrame( animate );
};

animate();