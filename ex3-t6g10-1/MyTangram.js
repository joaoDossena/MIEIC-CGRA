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

        //this.initMaterials();
    }
    /*
    initMaterials() {
        this.Green_diamondMat = new CGFappearance(this.scene);
        this.Green_diamondMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Green_diamondMat.setDiffuse(0, 1, 0, 1.0);
        this.Green_diamondMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Green_diamondMat.setShininess(10.0);
        
        this.Red_triangleMat = new CGFappearance(this.scene);
        this.Red_triangleMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Red_triangleMat.setDiffuse(1.0, 0.078, 0.078, 1.0);
        this.Red_triangleMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Red_triangleMat.setShininess(10.0);

        this.Pink_triangleMat = new CGFappearance(this.scene);
        this.Pink_triangleMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Pink_triangleMat.setDiffuse(1.0, 0.612, 0.824, 1.0);
        this.Pink_triangleMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Pink_triangleMat.setShininess(10.0);
    
        this.Orange_triangleMat = new CGFappearance(this.scene);
        this.Orange_triangleMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Orange_triangleMat.setDiffuse(1, 0.549, 0, 1.0);
        this.Orange_triangleMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Orange_triangleMat.setShininess(10.0);
        
        this.Blue_triangleMat = new CGFappearance(this.scene);
        this.Blue_triangleMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Blue_triangleMat.setDiffuse(0.0, 0.612, 1.0, 1.0);
        this.Blue_triangleMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Blue_triangleMat.setShininess(10.0);

        this.Yellow_parallelogramMat =new CGFappearance(this.scene);
        this.Yellow_parallelogramMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Yellow_parallelogramMat.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.Yellow_parallelogramMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Yellow_parallelogramMat.setShininess(10.0);
        
        this.Purple_triangleMat = new CGFappearance(this.scene);
        this.Purple_triangleMat.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.Purple_triangleMat.setDiffuse(0.667, 0.31, 0.761, 1.0);
        this.Purple_triangleMat.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.Purple_triangleMat.setShininess(10.0);
        
    }*/
    setGreen() {
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(0, 1, 0, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }
    setRed() {
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(1.0, 0.078, 0.078, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }
    setPink() {
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(1.0, 0.612, 0.824, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }
    setOrange() {
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(1, 0.549, 0, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }
    setBlue() {
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(0.0, 0.612, 1.0, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }
    setYellow(){
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(1.0, 1.0, 0.0, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }
    setPurple(){
        this.scene.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(0.667, 0.31, 0.761, 1.0);
        this.scene.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.scene.setShininess(10.0);
    }

    display(){
        //      Green Diamond
        this.scene.pushMatrix();
        var trans_Green_diamond = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,-1,0,1
        ];       
        this.scene.translate(0,-1,0);
        this.setGreen();
        //this.Green_diamondMat.apply()
        this.Green_diamond.display();
        this.scene.popMatrix();
        
        
        //      Red Triangle
        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.scene.rotate(Math.PI*135/180, 0, 0, 1);   
        this.scene.scale(Math.sqrt(2)/2,Math.sqrt(2)/2,Math.sqrt(2)/2);
        this.setRed();
        this.Red_triangle.display();
        this.scene.popMatrix();
        
        //      Orange Triangle
        this.scene.pushMatrix();   
        this.scene.rotate(Math.PI*45/180, 0, 0, 1);
        this.scene.translate(2/Math.sqrt(2),0,0)
        this.scene.scale(Math.sqrt(2),Math.sqrt(2),Math.sqrt(2));
        this.setOrange();
        this.Orange_triangle.display();
        this.scene.popMatrix();
        
        //      Pink Triangle       
        this.scene.pushMatrix();
        this.scene.translate(-2,0, 0);
        this.scene.rotate(Math.PI*180/180, 0, 0, 1);
        this.setPink();
        this.Pink_triangle.display();
        this.scene.popMatrix();
        
        //      Blue Triangle    
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.scene.rotate(Math.PI*225/180, 0, 0, 1);
        this.scene.scale(Math.sqrt(2),Math.sqrt(2),Math.sqrt(2));
        this.setBlue();
        this.Blue_triangle.display();
        this.scene.popMatrix();
        
        //      Yellow Parallelogram    
        this.scene.pushMatrix();
        this.scene.translate(0,2,0);
        this.scene.scale(1,-1,1);
        this.setYellow();
        this.Yellow_parallelogram.display();
        this.scene.popMatrix();

        //      Purple Triangle
        this.scene.pushMatrix();
        this.scene.translate(1,2,0);
        this.scene.rotate(Math.PI*225/180, 0, 0, 1);
        this.scene.scale(Math.sqrt(2)/2,Math.sqrt(2)/2,Math.sqrt(2)/2);
        this.setPurple();
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