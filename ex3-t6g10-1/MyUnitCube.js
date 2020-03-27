class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        
    }
    initBuffers() {
		this.vertices = [
            //Every vertice will be shared by 3 faces
            
            //0
            -0.5, 0.5, -0.5,	//0c
            -0.5, 0.5, -0.5,	//1d
            -0.5, 0.5, -0.5,	//2f
            
            //1
            0.5, 0.5, -0.5,	    //3b
			0.5, 0.5, -0.5,	    //4d
            0.5, 0.5, -0.5,	    //5f
            //2
            -0.5, -0.5, -0.5,	//6c
            -0.5, -0.5, -0.5,	//7e
            -0.5, -0.5, -0.5,	//8f
            //3
            0.5, -0.5, -0.5,	//9b
            0.5, -0.5, -0.5,	//10e
            0.5, -0.5, -0.5,	//11f
            //4
            -0.5, 0.5, 0.5,	    //12a
            -0.5, 0.5, 0.5,	    //13c
            -0.5, 0.5, 0.5,	    //14d
            //5
            0.5, 0.5, 0.5,	    //15a
            0.5, 0.5, 0.5,	    //16b
            0.5, 0.5, 0.5,	    //17d
            //6
            -0.5, -0.5, 0.5,	//18a
            -0.5, -0.5, 0.5,	//19c
            -0.5, -0.5, 0.5,	//20e
            //7
            0.5, -0.5, 0.5,	    //21a
            0.5, -0.5, 0.5,	    //22b
            0.5, -0.5, 0.5,	    //23e
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            /*Front face    (a)*/
            12, 18, 15,
            15, 18, 21, 

            /*Right face    (b)*/
            16, 22, 3, 
            3, 22, 9,

            /*Left face     (c)*/
            0, 6, 13,
            13, 6, 19,

            /*Top face      (d)*/
            1, 14, 4,
            4, 14, 17,

            /*Bottom face   (e)*/
            20, 7, 23,
            23, 7, 10,

            /*Back face     (f)*/
            5, 11, 2,
            2, 11, 8

        ];

        this.normals = [
            0, 0, -1,
            0, 1, 0,
            -1, 0, 0,

            0, 0, -1,
            0, 1, 0,
            1, 0, 0,

            0, 0, -1,
            0, -1, 0,
            -1, 0, 0,
            
            0, 0, -1,
            0, -1, 0,
            1, 0, 0,

            0, 0, 1,
            0, 1, 0,
            -1, 0, 0,

            0, 0, 1,  
            0, 1, 0,
            1, 0, 0,

            0, 0, 1,
            0, -1, 0,
            -1, 0, 0,

            0, 0, 1,
            0, -1, 0,
            1, 0, 0,
        ];
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}