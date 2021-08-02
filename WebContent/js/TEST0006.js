
//텍스쳐
/*
const image = new Image()
const texture = new THREE.Texture(image)
image.onload =()=>{
	texture.needsUpdate = true
	console.log(texture)
}
image.src = 'img/woodbox.jpg'
*/

//텍스쳐 불러오기 두줄로 끝남
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = () =>{
	console.log('onLoaded')
}

loadingManager.onLoaded = () =>{
	console.log('onLoaded')
}

loadingManager.onProgress = () =>{
	console.log('onProgress')
}

loadingManager.onError = () =>{
	console.log('onError')
}

const textureLoader = new THREE.TextureLoader(loadingManager)
const colortexture = textureLoader.load('img/woodbox.jpg')
const alphatexture = textureLoader.load('img/woodbox.jpg')
const heighttexture = textureLoader.load('img/woodbox.jpg')
const normaltexture = textureLoader.load('img/woodbox.jpg')
const aotexture = textureLoader.load('img/woodbox.jpg')
const roughtexture = textureLoader.load('img/woodbox.jpg')
 
/*
//텍스쳐반복
colortexture.repeat.x =2
colortexture.repeat.y =2
//위에것만 하면 늘어지듯 보이지 않는다.. 아래것 추가해줘야 반복됨...
colortexture.wrapS = THREE.RepeatWrapping
colortexture.wrapT = THREE.RepeatWrapping

//offset
colortexture.offset.x = 0.5

//rotation
//반바퀴 파이, 45도 파이 곱하기0.25 (/4 로 해도됨)
colortexture.rotation = Math.PI /4
//로테이션 중심점 0.5면 반틈이동 
colortexture.center.x = 0.5 
colortexture.center.y = 0.5 
*/

colortexture.generateMipmaps =false
colortexture.minFilter = THREE.NearestFilter
colortexture.magFilter = THREE.NearestFilter

const scene = new THREE.Scene()

//어디에 보여줄것인가?
const canvas = document.querySelector('.webgl')

//오브젝트생성
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ map : colortexture})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) 


//캔버스 크기
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight	
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