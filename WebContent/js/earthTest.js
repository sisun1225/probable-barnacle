console.log(THREE)
		import fragmentShader from './shaders/fragment.glsl'
		import vertexShader from './shaders/vertex.glsl'
		
console.log(fragmentShader)

		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
		
		const renderer = new THREE.WebGLRenderer({canvas})
		renderer.setSize( window.innerWidth, window.innerHeight)
		renderer.setPixelRatio(window.devicePixelRatio)
		document.body.appendChild( renderer.domElement )
		
		//스피어 생성
		const sphere = new THREE.Mesh(
				new THREE.SphereGeometry(5, 50, 50),
				new THREE.ShaderMaterial({
					vertexShader,
					fragmentShader
		}))
		


		scene.add(sphere)
		
		camera.position.z = 10
		
		function animate(){
			requestAnimationFrame(animate)
			renderer.render(scene, camera)
		}
		animate()
	

