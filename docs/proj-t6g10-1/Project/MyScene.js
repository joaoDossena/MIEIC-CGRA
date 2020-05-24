/**
* MyScene
* @constructor
*/

class MyScene extends CGFscene {
    constructor() {
        super();
        this.lastTime = 0;
        this.lastTimeSupply = -1000;
        this.lastTimeAutoPilot = -1000;
    }
    // Check for key codes e.g. in https://keycode.info/
    checkKeys(t) {
        var text = "Keys pressed: ";
        var keysPressed = false;
        if(this.vehicle.autopilot == false) {
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
        }

        else {
            if(this.vehicle.hasCenter == false)
                this.vehicle.getCenter();
            
            this.vehicle.autopilotUpdate();
        }

        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            if((t - this.lastTimeAutoPilot) > 500){
                this.vehicle.switchPilot();
                this.lastTimeAutoPilot = t;
            }
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.resetSupplies();
            this.vehicle.reset();
            this.billboard.reset();
            keysPressed = true;
        }
        
        
        if  (this.gui.isKeyPressed("KeyL")){
            text += " L ";
            if(this.selectedSupply < 5 && (t - this.lastTimeSupply) > 500){
                this.supplies[this.selectedSupply].drop(this.vehicle.position);
                this.selectedSupply ++;
                this.lastTimeSupply = t;
            }
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
        this.vehicle = new MyVehicle(this, 64, 32);
        this.cubeMap = new MyCubeMap(this);
        this.terrain = new MyTerrain(this, 20);
        this.billboard = new MyBillboard(this);

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

        //------ Background Material
        this.backgroundMaterial = new CGFappearance(this);
        this.backgroundMaterial.setAmbient(0.8, 0.8, 0.8, 1);
        this.backgroundMaterial.setDiffuse(0, 0, 0, 1);
        this.backgroundMaterial.setSpecular(0, 0, 0, 1);
        this.backgroundMaterial.setEmission( 1, 1, 1, 1 );
        this.backgroundMaterial.setShininess(10.0);
        this.backgroundMaterial.loadTexture('images/skybox1.png');
        this.backgroundMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //----- Backgrounds
        this.background1 = new CGFtexture(this, 'images/skybox1.png');
        this.background2 = new CGFtexture(this, 'images/skybox2.png');
        this.background3 = new CGFtexture(this, 'images/spaceMap.png');

        //-------
        this.backgrounds = [this.background1, this.background2, this.background3];
        this.backgroundIDs = {
            'Desert': 0,
            'GrassLand': 1,
            'Space': 2,
        };
        //------
        this.textures = [this.texture1];

        this.textureIds = {
            'Earth': 0,
        };

        this.supplies = [new MySupply(this),new MySupply(this),new MySupply(this),new MySupply(this),new MySupply(this)];
        //Objects connected to MyInterface
        this.selectedBackground = 1;
        this.selectedTexture = 0;
        this.selectedSupply = 0;
        this.wireframe = false;
        this.displayAxis = false;
        this.displayNormals = false;
        this.displayBackground = true;
        this.displayVehicle = true;
        this.displayTerrain = true;
        this.displayBillboard = true;
        this.displayEarth = false;
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
    initDefaultMaterial(){
        this.DefaultMaterial = new CGFappearance(this);
        this.DefaultMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.DefaultMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.DefaultMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.DefaultMaterial.setEmission( 0.3, 0.3, 0.3, 1 );
        this.DefaultMaterial.setShininess(10.0);
        this.DefaultMaterial.loadTexture('images/default.jpg');
        this.DefaultMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }
    onWireframeChanged(option) {
        if (option){
            if(this.displayBillBoard)
                this.billboard.setLineMode();
            if(this.displayVehicle)
                this.vehicle.setLineMode();
            if(this.displayTerrain)
                this.terrain.setLineMode();
        }
        else{
            if(this.displayBillBoard)
                this.billboard.setFillMode();
            if(this.displayVehicle)
                this.vehicle.setFillMode();
            if(this.displayTerrain)
                this.terrain.setFillMode();
        }
    }
    // Show/hide shader code

    // called periodically (as per setUpdatePeriod() in init())
    update(t) { //t is in ms
        if(this.lastTime == 0){
            this.lastTime = t;
        }
        this.elapseTime = t-this.lastTime;
        this.lastTime = t;
        this.checkKeys(t);
        this.vehicle.update(this.elapseTime);
        this.billboard.update(this.selectedSupply);
        for(var i = 0; i < this.selectedSupply; i++){
            this.supplies[i].update(this.elapseTime);
        }
    }
    resetSupplies(){
        for(var i = 0; i < this.selectedSupply; i++){
            this.supplies[i].reset();
        }
        this.selectedSupply = 0;
    }
    //Function that updates texture to nearest interpolation
    nearestFiltering(){
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    }
    //Function that updates texture to linear interpolation
    linearFiltering(){
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
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



        if(this.displayVehicle){
            this.vehicle.display();
            for(var i = 0; i < 5; i++){
                this.supplies[i].display();
            }
        }
        if(this.displayTerrain){
            this.terrain.display();
        }
        if(this.displayBillboard){
            this.pushMatrix()
            this.translate(0, 7.5, 20);
            this.billboard.display();
            this.popMatrix();
        }
        if(this.displayEarth){
            this.Material.setTexture(this.texture1);
            this.Material.apply();
            this.sphere.display();
            this.DefaultMaterial.apply();
        }

        this.setActiveShader(this.defaultShader);
    
        // ---- END Primitive drawing section
    }
}