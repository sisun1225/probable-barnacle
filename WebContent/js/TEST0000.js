const scene = new THREE.Scene()

// 
/*const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color:'red'})
const mesh = new THREE.Mesh(geometry, material)*/
//mesh.position.x = 0.7 
//mesh.position.y = - 0.6
//mesh.position.z = 1 

//mesh.position.set(0.7, -0.6, 1)

//scene.add(mesh)


//
const group = new THREE.Group()
group.position.y=1
group.scale.y=2
group.rotation.y=1
scene.add(group)

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)
	
const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube2.position.x = -2
group.add(cube2)
	
const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.x = 2
group.add(cube3)

//
//mesh.scale.x = 0.5
//mesh.scale.y = 2
//mesh.scale.z = 0.5
//mesh.scale.set(2, 0.5, 0.5)


//
//mesh.rotation.reorder('YXZ')
//mesh.rotation.x = Math.PI * 0.25
//mesh.rotation.y = Math.PI * 0.25

//
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


//
const sizes = {
	width:800,
	height:600
	
}
//
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3

scene.add(camera)

//카메라 위치에서 어딜 볼것인가
//camera.lookAt(mesh.position)



//
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
	canvas:canvas
	
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)