
class MyTerrain extends CGFobject{
	constructor(scene, nrDivs) {
		super(scene);
		this.plane = new MyPlane(scene, nrDivs);

		this.terrainTexture = new CGFtexture(scene, "textures/terrain.jpg");
		this.terrainMap = new CGFtexture(scene,"textures/heightmap.jpg");
        //------ Shaders
        this.terrainShader = new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ uSampler3: 1 });
        this.terrainShader.setUniformsValues({ uSampler4: 2 });
	}

	display(){
		this.scene.setActiveShader(this.terrainShader);
		
		this.terrainTexture.bind(1);
		this.terrainMap.bind(2);
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.scale(50, 50, 8);
		this.plane.display();
		this.scene.popMatrix();

		this.scene.setActiveShader(this.scene.defaultShader);
		this.scene.DefaultMaterial.apply();
	}
}