
const scene = new THREE.Scene()

//어디에 보여줄것인가?
const canvas = document.querySelector('.webgl')

//오브젝트생성
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color:'red'})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)



//피봇 생성
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


//캔버스 크기
const sizes = {
	width:800,
	height:600	
}

//카메라 생성
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)



const renderer = new THREE.WebGLRenderer({
	canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)

//const clock = new THREE.Clock()

gsap.to(mesh.position, { duration : 1, delay:1, x:2})
gsap.to(mesh.position, { duration : 1, delay:2, x:0})


//elapsedTime deltatime currenttime
//애니메이션
const tick = () =>
{
//const elapsedTime = clock.getElapsedTime()

//camera.position.y = Math.sin(elapsedTime)
//camera.position.x = Math.cos(elapsedTime)
//camera.lookAt(mesh.position)

renderer.render(scene, camera)

window.requestAnimationFrame(tick)
}

tick()