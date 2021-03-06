/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
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

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        this.Cube = new MyUnitCube(this);
        this.Tangram = new MyTangram(this);
        
        //Transformation methods

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayDiamond = true;
        this.displayTriangle = true;
        this.displayParallelogram = true;

        this.displayUnitCube = true;
        this.displayTangram = true;
        this.scaleFactor = 1;
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
    setGreen() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0, 1, 0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    setRed() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1.0, 0.078, 0.078, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    setPink() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1.0, 0.612, 0.824, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    setOrange() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1, 0.549, 0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    setBlue() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.0, 0.612, 1.0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    setYellow(){
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    setPurple(){
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.667, 0.31, 0.761, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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
        //this.translate(x, y, z)
        // Draw axis
        if (this.displayAxis)
        this.axis.display();
        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);
        
        // ---- BEGIN Primitive drawing section


        this.rotate(Math.PI*-90/180,1,0,0);
        

        

        if(this.displayUnitCube)
        {
            this.pushMatrix();
            this.translate(3.5, -3.5, 3.5);
            this.scale(7, 7, 7);
            this.Cube.display();
            this.popMatrix();
        }
        
        if(this.displayTangram)
        {
            this.translate(3.5, -3.5, 7)
            this.Tangram.display();

        }

        
        // ---- END Primitive drawing section
    }
}