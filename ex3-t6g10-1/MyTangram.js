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
    }

    display(){
        this.scene.pushMatrix();
        var trans_Green_diamond = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,-1,0,1
        ];
        //      Green Diamond       
        this.scene.multMatrix(trans_Green_diamond);
        this.scene.setGreen();
        this.Green_diamond.display();
        this.scene.popMatrix();
        
        
        //      Red Triangle
        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.scene.rotate(Math.PI*135/180, 0, 0, 1);   
        this.scene.scale(Math.sqrt(2)/2,Math.sqrt(2)/2,Math.sqrt(2)/2);
        this.scene.setRed();
        this.Red_triangle.display();
        this.scene.popMatrix();
        
        //      Orange Triangle
        this.scene.pushMatrix();   
        this.scene.rotate(Math.PI*45/180, 0, 0, 1);
        this.scene.translate(2/Math.sqrt(2),0,0)
        this.scene.scale(Math.sqrt(2),Math.sqrt(2),Math.sqrt(2));
        this.scene.setOrange();
        this.Orange_triangle.display();
        this.scene.popMatrix();
        
        //      Pink Triangle       
        this.scene.pushMatrix();
        this.scene.translate(-2,0, 0);
        this.scene.rotate(Math.PI*180/180, 0, 0, 1);
        this.scene.setPink();
        this.Pink_triangle.display();
        this.scene.popMatrix();
        
        //      Blue Triangle    
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.scene.rotate(Math.PI*225/180, 0, 0, 1);
        this.scene.scale(Math.sqrt(2),Math.sqrt(2),Math.sqrt(2));
        this.scene.setBlue();
        this.Blue_triangle.display();
        this.scene.popMatrix();
        
        //      Yellow Parallelogram    
        this.scene.pushMatrix();
        this.scene.translate(0,2,0);
        this.scene.scale(1,-1,1);
        this.scene.setYellow();
        this.Yellow_parallelogram.display();
        this.scene.popMatrix();

        //      Purple Triangle
        this.scene.pushMatrix();
        this.scene.translate(1,2,0);
        this.scene.rotate(Math.PI*225/180, 0, 0, 1);
        this.scene.scale(Math.sqrt(2)/2,Math.sqrt(2)/2,Math.sqrt(2)/2);
        this.scene.setPurple();
        this.Purple_triangle.display();
        this.scene.popMatrix();
    }   
    
}