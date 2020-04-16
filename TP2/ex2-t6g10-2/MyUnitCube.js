class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        //this.square = new MyDiamond(scene);
    }
    initBuffers() {
		this.vertices = [
			-0.5, 0.5, -0.5,	//0
			0.5, 0.5, -0.5,	    //1
			-0.5, -0.5, -0.5,	//2
            0.5, -0.5, -0.5,	//3
            -0.5, 0.5, 0.5,	    //4
            0.5, 0.5, 0.5,	    //5
            -0.5, -0.5, 0.5,	//6
            0.5, -0.5, 0.5,	    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            4, 6, 5,        //Front Cube
            6, 7, 5,        //Front Cube
            1, 3, 0,        //Back Cube
            3, 2, 0,        //Back Cube
            5, 7, 1,        //Right Side
            7, 3, 1,        //Right Side
            0, 2, 4,        //Left Side
            2, 6, 4,        //Left Side
            0, 4, 1,        //Upper Side
            4, 5, 1,        //Upper Side
            2, 7, 6,        //Down Side
            2, 3, 7,        //Down Side
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
    /* display(){

        this.scene.pushMatrix();
        
        this.scene.pushMatrix();  
        this.scene.rotate(Math.PI*45/180,0, 0,1);
        this.scene.translate(0,0,0.5);
        this.scene.scale(1/Math.sqrt(2),1/Math.sqrt(2),1/Math.sqrt(2));
        this.scene.setGreen();  
        this.square.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI*45/180,0, 0,1);
        this.scene.translate(0,0,-0.5);
        this.scene.scale(1/Math.sqrt(2),1/Math.sqrt(2),1/Math.sqrt(2));
        this.scene.setGreen();  
        this.square.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI*45/180,0, 1,0);
        this.scene.rotate(Math.PI*90/180,1, 0,0);
        this.scene.translate(0,0,-0.5);
        this.scene.scale(1/Math.sqrt(2),1/Math.sqrt(2),-1/Math.sqrt(2));
        this.scene.setGreen();  
        this.square.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI*45/180,0, 1,0);
        this.scene.rotate(Math.PI*90/180,1, 0,0);
        this.scene.translate(0,0,0.5);
        this.scene.scale(1/Math.sqrt(2),1/Math.sqrt(2),-1/Math.sqrt(2));
        this.scene.setGreen();  
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(Math.PI*45/180,1, 0,0);
        this.scene.rotate(Math.PI*90/180,0, 1,0);
        this.scene.scale(1/Math.sqrt(2),1/Math.sqrt(2),-1/Math.sqrt(2));
        this.scene.setGreen();  
        this.square.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI*45/180,1, 0,0);
        this.scene.rotate(Math.PI*90/180,0, 1,0);
        this.scene.scale(1/Math.sqrt(2),1/Math.sqrt(2),1/Math.sqrt(2));
        this.scene.setGreen();  
        this.square.display();
        this.scene.popMatrix();
    }   */
    
}