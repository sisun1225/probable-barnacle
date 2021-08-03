


	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
		
	const renderer = new THREE.WebGLRenderer({
		//AA
		antialias:true
	} )
		
	renderer.setSize( innerWidth, innerHeight) 
	renderer.setPixelRatio(window.devicePixelRatio)  //나중에 확인
	document.body.appendChild( renderer.domElement )
		
	//스피어 생성

	const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(5, 50, 50),
		new THREE.ShaderMaterial({
			 vertexShader,
			 fragmentShader
		})
	)
	scene.add(sphere)
	
	camera.position.z = 15
		/*	
	function animate(){
		requestAnimationFrame(animate)
		renderer.render(scene, camera)
	}
	animate()
 */
