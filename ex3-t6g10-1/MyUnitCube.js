class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        
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
            
            //repetition for normal line
            -0.5, 0.5, -0.5,	//0
			0.5, 0.5, -0.5,	    //1
			-0.5, -0.5, -0.5,	//2
            0.5, -0.5, -0.5,	//3
            -0.5, 0.5, 0.5,	    //4
            0.5, 0.5, 0.5,	    //5
            -0.5, -0.5, 0.5,	//6
            0.5, -0.5, 0.5,	    //7
            
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
            4, 6, 5,        //Front Side
            6, 7, 5,        //Front Side
            1, 3, 0,        //Back Side
            3, 2, 0,        //Back Side
            5, 7, 1,        //Right Side
            7, 3, 1,        //Right Side
            0, 2, 4,        //Left Side
            2, 6, 4,        //Left Side
            0, 4, 1,        //Upper Side
            4, 5, 1,        //Upper Side
            2, 7, 6,        //Down Side
            2, 3, 7,        //Down Side
        ];
        var cubeVertices = 8;
        this.normals = [
            -1,0,0,	
            1,0,0,
            -1,0,0,
            1,0,0,
            -1,0,0,
            1,0,0,
            -1,0,0,
            1,0,0,

            0,1,0,
            0,1,0,
            0,-1,0,
            0,-1,0,
            0,1,0,
            0,1,0,
            0,-1,0,
            0,-1,0,

            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,

        ];
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}