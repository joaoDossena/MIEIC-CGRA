class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.Green_diamond = new MyDiamond(scene);
        this.Blue_triangle = new MyTriangle(scene);
        this.Pink_triangle = new MyTriangle(scene);
        this.Orange_triangle = new MyTriangle(scene);
        this.Purple_triangle = new MyTriangle(scene);
        this.Red_triangle = new MyTriangle(scene);
        this.Yellow_parallelogram = new MyParallelogram(scene);

        this.initMaterial();

    }
    setGreen() {
        this.scene.setAmbient(0, 1, 0, 1.0);
        this.scene.setDiffuse(0, 1, 0, 1.0);
        this.scene.setSpecular(0, 1, 0, 1.0);
        this.scene.setShininess(10.0);
    }
    setRed() {
        this.scene.setAmbient(1.0, 0.078, 0.078, 1.0);
        this.scene.setDiffuse(1.0, 0.078, 0.078, 1.0);
        this.scene.setSpecular(1.0, 0.24, 0.24, 1.0);
        this.scene.setShininess(10.0);
    }
    setPink() {
        this.scene.setAmbient(1.0, 0.612, 0.824, 1.0);
        this.scene.setDiffuse(1.0, 0.612, 0.824, 1.0);
        this.scene.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.scene.setShininess(10.0);
    }
    setOrange() {
        this.scene.setAmbient(1, 0.549, 0, 1.0);
        this.scene.setDiffuse(1, 0.549, 0, 1.0);
        this.scene.setSpecular(1, 1, 0, 1.0);
        this.scene.setShininess(10.0);
    }
    setBlue() {
        this.scene.setAmbient(0.0, 0.612, 1.0, 1.0);
        this.scene.setDiffuse(0.0, 0.612, 1.0, 1.0);
        this.scene.setSpecular(0.0, 1, 1, 1.0);
        this.scene.setShininess(10.0);
    }
    setYellow(){
        this.scene.setAmbient(1.0, 1.0, 0.0, 1.0);
        this.scene.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.scene.setSpecular(1, 1, 0, 1.0);
        this.scene.setShininess(10.0);
    }
    setPurple(){
        this.scene.setAmbient(0.667, 0.31, 0.761, 1.0);
        this.scene.setDiffuse(0.667, 0.31, 0.761, 1.0);
        this.scene.setSpecular(1, 1, 1, 1.0);
        this.scene.setShininess(10.0);
    }
    initMaterial(){
            //------ Applied Material
            this.tangramMaterial = new CGFappearance(this.scene);
            this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
            this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
            this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
            this.tangramMaterial.setShininess(10.0);
            this.tangramMaterial.loadTexture('images/tangram.png');
            
            //Declaring triangle's texCoords
            this.Blue_triangle.texCoords =[
                0.0, 0.0,
                0.5, 0.5,
                1.0, 0.0,

                0.0, 0.0,
                0.5, 0.5,
                1.0, 0.0,
            ];
            this.Orange_triangle.texCoords = [
                1.0, 0.0,
                0.5, 0.5,
                1.0, 1.0,

                1.0, 0.0,
                0.5, 0.5,
                1.0, 1.0,
            ];
            this.Pink_triangle.texCoords = [
                0.0, 0.5,
                0.0, 1.0,
                0.5, 1.0,

                0.0, 0.5,
                0.0, 1.0,
                0.5, 1.0,
            ];
            this.Purple_triangle.texCoords = [
                0.0, 0.0,
                0.25, 0.25,
                0.0, 0.5,

                0.0, 0.0,
                0.25, 0.25,
                0.0, 0.5,
            ];
            this.Red_triangle.texCoords = [
                0.75, 0.75,
                0.5, 0.5,
                0.25, 0.75,

                0.75, 0.75,
                0.5, 0.5,
                0.25, 0.75,
            ];
            this.Blue_triangle.updateTexCoordsGLBuffers();
            this.Orange_triangle.updateTexCoordsGLBuffers();
            this.Pink_triangle.updateTexCoordsGLBuffers();
            this.Purple_triangle.updateTexCoordsGLBuffers();
            this.Red_triangle.updateTexCoordsGLBuffers();
    }
    
    display(){
        //      Green Diamond
        this.tangramMaterial.apply();
        this.scene.pushMatrix();
        var trans_Green_diamond = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,-1,0,1
        ];       
        this.scene.multMatrix(trans_Green_diamond);
        this.Green_diamond.display();
        this.scene.popMatrix();
        
        
        //      Red Triangle
        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.scene.rotate(Math.PI*135/180, 0, 0, 1);   
        this.scene.scale(Math.sqrt(2)/2,Math.sqrt(2)/2,Math.sqrt(2)/2);
        this.Red_triangle.display();
        this.scene.popMatrix();
        
        //      Orange Triangle
        this.scene.pushMatrix();   
        this.scene.rotate(Math.PI*45/180, 0, 0, 1);
        this.scene.translate(2/Math.sqrt(2),0,0)
        this.scene.scale(Math.sqrt(2),Math.sqrt(2),Math.sqrt(2));
        this.Orange_triangle.display();
        this.scene.popMatrix();
        
        //      Pink Triangle       
        this.scene.pushMatrix();
        this.scene.translate(-2,0, 0);
        this.scene.rotate(Math.PI*180/180, 0, 0, 1);
        this.Pink_triangle.display();
        this.scene.popMatrix();
        
        //      Blue Triangle    
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.scene.rotate(Math.PI*225/180, 0, 0, 1);
        this.scene.scale(Math.sqrt(2),Math.sqrt(2),Math.sqrt(2));
        this.Blue_triangle.display();
        this.scene.popMatrix();
        
        //      Yellow Parallelogram    
        this.scene.pushMatrix();
        this.scene.translate(0,2,0);
        this.scene.scale(1,-1,1);
        this.Yellow_parallelogram.display();
        this.scene.popMatrix();

        //      Purple Triangle
        this.scene.pushMatrix();
        this.scene.translate(1,2,0);
        this.scene.rotate(Math.PI*225/180, 0, 0, 1);
        this.scene.scale(Math.sqrt(2)/2,Math.sqrt(2)/2,Math.sqrt(2)/2);
        this.Purple_triangle.display();
        this.scene.popMatrix();
    }   
    enableNormalViz(){
        this.Green_diamond.enableNormalViz();
        this.Blue_triangle.enableNormalViz();
        this.Pink_triangle.enableNormalViz();
        this.Orange_triangle.enableNormalViz();
        this.Purple_triangle.enableNormalViz();
        this.Red_triangle.enableNormalViz();
        this.Yellow_parallelogram.enableNormalViz();
    }
    disableNormalViz(){
        this.Green_diamond.disableNormalViz();
        this.Blue_triangle.disableNormalViz()
        this.Pink_triangle.disableNormalViz()
        this.Orange_triangle.disableNormalViz()
        this.Purple_triangle.disableNormalViz()
        this.Red_triangle.disableNormalViz()
        this.Yellow_parallelogram.disableNormalViz()
    }
}