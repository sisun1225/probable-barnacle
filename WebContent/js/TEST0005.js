



const scene = new THREE.Scene()

//어디에 보여줄것인가?
const canvas = document.querySelector('.webgl')

//오브젝트생성
//const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)

//https://stackoverflow.com/questions/67566899/uncaught-typeerror-cannot-read-property-push-of-undefined-in-three-js
//https://stackoverflow.com/questions/68000359/three-geometry-is-not-a-constructor
//geometry는 지원중단125버전부터

//const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 2, 2, 2)

console.log(dat)

//어트리뷰트
const gui = new dat.GUI({closed : true, width : 400})
//closed :true  실행시 닫힌상태로 실행

function spin(){
	
}

const parameters ={
	color: 0xffff00,   //색상 초기값
	spin :() =>{
		console.log('spin')
		gsap.to(mesh.rotation, {duration : 1, y : mesh.rotation.y +10})
	}
}

gui
	.addColor(parameters, 'color')
	.onChange(()=>{
		console.log('tweak did change')
		material.color.set(parameters.color)
	})

gui
	.add(parameters, 'spin')




//h누르면 패널 사라짐 또는gui.hide()하면 초기는 사라져있다..h하면 나타난다.



//오브젝트생성
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: parameters.color})
const mesh = new THREE.Mesh(geometry, material)


scene.add(mesh) 



//어트리뷰트
/*
gui.add(mesh.position, 'y', -3, 3, 0.01) // 앞뒤로 3 범위.... 0.01자릿수로 조절가능
gui.add(mesh.position, 'x', -3, 3, 0.01) 
gui.add(mesh.position, 'z', -3, 3, 0.01) 
 */
gui
	.add(mesh.position, 'y')
	.min(-3)
	.max(3)
	.step(0.01)
	.name('elevation') //옵션명 변경

gui
	.add(mesh, 'visible')
	
gui
	.add(material, 'wireframe')
	

//피봇 생성
//const axesHelper = new THREE.AxesHelper()
//scene.add(axesHelper)


//캔버스 크기
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight	
}

const cursor ={
	x:0,
	y:0
}
window.addEventListener('mousemove', (event) =>{
	//0.5를 넣으면 포지션 마이너스 확인가능
	cursor.x = event.clientX / sizes.width - 0.5
	cursor.y = -(event.clientY / sizes.height - 0.5)
}) 


window.addEventListener('resize', () => {
	console.log('window has been resized')
	
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	
	camera.aspect = sizes.width/sizes.height
	camera.updateProjectionMatrix()
	
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
/*
window.addEventListener('dblclick', () =>{
	
	//더블클릭하면 전체화면 한번더 더블클릭하면 원래사이즈로
	if(!document.fullscreenElement)
	{
		canvas.requestFullscreen()
		console.log('go fullscrenn')
	}
	else
	{
		document.exitFullscreen()
		console.log('leave fullscreen')
	}
})
*/



//사파리 또는 파이어폭스 대비
window.addEventListener('dblclick', () =>{
	
	const fullscreenElement = document.fullscreenElement || document.webkitfullscreenElement
	
	//더블클릭하면 전체화면 한번더 더블클릭하면 원래사이즈로
	if(!fullscreenElement)
	{
		if(canvas.requestFullscreen){
			
			canvas.requestFullscreen()
			
		}else if(canvas.webkitRequestFullscreen){
			canvas.webkitRequestFullscreen()
		}
		
		
	}
	else
	{
		
		if(document.exitFullscreen){
			document.exitFullscreen()
		}else if(document.webketexitFullscreen)
		document.webketexitFullscreen()
	
	}
})


//카메라 생성
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
//const camera = new THREE.OrthographicCamera(-1, 1, 1, -1)
//camera.position.x = 2
//camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

const controls = new THREE.OrbitControls(camera, canvas)
//controls.enabled = false
controls.enableDamping = true
//controls.target.y = 1
//controls.update()


const renderer = new THREE.WebGLRenderer({
	canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 

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