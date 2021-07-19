

const cursor ={
	x:0,
	y:0
}
window.addEventListener('mousemove', (event) =>{
	//0.5를 넣으면 포지션 마이너스 확인가능
	cursor.x = event.clientX / sizes.width - 0.5
	cursor.y = -(event.clientY / sizes.height - 0.5)
}) 


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
//const camera = new THREE.OrthographicCamera(-1, 1, 1, -1)
//camera.position.x = 2
//camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

const controls = new THREE.OrbitControls(camera, canvas)
controls.enableDamping = true
//controls.target.y = 1
//controls.update()


const renderer = new THREE.WebGLRenderer({
	canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

//elapsedTime deltatime currenttime
//애니메이션
//틱이란 일정간격에 한번코드 또는 스크립트를 실행
const tick = () =>
{
	const elapsedTime = clock.getElapsedTime()
	
	//mesh.rotation.y = elapsedTime;
	
	//camera.position.x = Math.sin(cursor.x * Math.PI *2) * 3
	//camera.position.z = Math.cos(cursor.x * Math.PI *2) * 3
	//camera.position.y = cursor.y * 5
	//camera.lookAt(mesh.position)
	
	controls.update()
	
	renderer.render(scene, camera)
	
	window.requestAnimationFrame(tick)
}

tick()