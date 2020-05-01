/**
* MyScene
* @constructor
*/

class MyScene extends CGFscene {
    constructor() {
        super();

    }
    // Check for key codes e.g. in https://keycode.info/
    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            this.vehicle.accelerate(0.1*this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            this.vehicle.accelerate(-0.1*this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            this.vehicle.turn(5);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            this.vehicle.turn(-5);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            if(!this.vehicle.autopilot)
            {
                this.vehicle.autopilot = true;
                this.vehicle.autopilot();
            }
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.vehicle.reset();
            this.vehicle.autopilot = false;
            keysPressed = true;
        }
        if (keysPressed)
            console.log(text);
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.sphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 16, 8);
        this.vehicle = new MyVehicle(this, 16, 8);
        this.cubeMap = new MyCubeMap(this);
        this.terrain = new MyTerrain(this, 20);
        this.gondola = new MyGondola(this, 16, 8);

        //------ Applied Material
        this.Material = new CGFappearance(this);
        this.Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.Material.setEmission( 0.3, 0.3, 0.3, 1 );
        this.Material.setShininess(10.0);
        this.Material.loadTexture('images/earth.jpg');
        this.Material.setTextureWrap('REPEAT', 'REPEAT');
        //------

        //------ Textures
        this.texture1 = new CGFtexture(this, 'images/earth.jpg');
        //-------

		this.terrainTexture = new CGFtexture(this, "textures/terrain.jpg");
		this.terrainMap = new CGFtexture(this,"textures/heightmap.jpg");
        //------ Shaders
        this.terrainShader = new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ uSampler3: 1 });
        this.terrainShader.setUniformsValues({ uSampler4: 2 });

        //-------

        //------ Background Material
        this.backgroundMaterial = new CGFappearance(this);
        this.backgroundMaterial.setAmbient(0.8, 0.8, 0.8, 1);
        this.backgroundMaterial.setDiffuse(0, 0, 0, 1);
        this.backgroundMaterial.setSpecular(0, 0, 0, 1);
        this.backgroundMaterial.setEmission( 1, 1, 1, 1 );
        this.backgroundMaterial.setShininess(10.0);
        this.backgroundMaterial.loadTexture('images/cubemap.png');
        this.backgroundMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //----- Backgrounds
        this.background1 = new CGFtexture(this, 'images/cubemap.png');
        this.background2 = new CGFtexture(this, 'images/forrestMap.png');
        this.background3 = new CGFtexture(this, 'images/spaceMap.png');

        //-------
        this.backgrounds = [this.background1, this.background2, this.background3];
        this.backgroundIDs = {
            'Sky': 0,
            'forrest': 1,
            'SpaceMap': 2,
        };
        //------
        this.objects = [this.sphere, this.cylinder, this.vehicle, this.terrain];
        this.textures = [this.texture1];
        this.objectIDs = {
            'Sphere': 0,
            'Cylinder': 1,
            'Vehicle': 2,
            'Terrain': 3,
        };
        this.textureIds = {
            'Earth': 0,
        };
        //Objects connected to MyInterface
        this.selectedBackground = 0;
        this.selectedTexture = 0;
        this.selectedObject = 0;
        this.wireframe = false;
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayBackground = true;
        this.scaleFactor = 1;
        this.speedFactor = 0.1;

        // shader code panels references
		this.shadersDiv = document.getElementById("shaders");
		this.vShaderDiv = document.getElementById("vshader");
		this.fShaderDiv = document.getElementById("fshader");

		// force initial setup of shader code panels

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    onWireframeChanged(option) {
        if (option)
            this.objects[this.selectedObject].setLineMode();
        else
            this.objects[this.selectedObject].setFillMode();
    }
    // Show/hide shader code

    // called periodically (as per setUpdatePeriod() in init())
    update(t) {
        this.checkKeys();
        this.vehicle.update();
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        this.lights[0].update();
        // Draw axis
        if (this.displayAxis)
            this.axis.display();
        if (this.displayBackground) {
            this.backgroundMaterial.setTexture(this.backgrounds[this.selectedBackground]);
            this.cubeMap.display();
        }
        
        this.setDefaultAppearance();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        // ---- BEGIN Primitive drawing section

        this.Material.setTexture(this.texture1);
        this.Material.apply();

        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else
            this.objects[this.selectedObject].disableNormalViz();
        
        if(this.selectedObject == 3){
            this.setActiveShader(this.terrainShader);
            this.pushMatrix();
            
            this.terrainTexture.bind(1);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
    
            this.terrainMap.bind(2);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
            this.popMatrix();

            this.pushMatrix();
			this.rotate(Math.PI * 270 / 180, 1, 0, 0);
            this.scale(50, 50, 50);
            
			this.objects[3].display();
			
			this.popMatrix();
        }
        else
            this.objects[this.selectedObject].display();

        this.setActiveShader(this.defaultShader);
    
        // ---- END Primitive drawing section
    }
}