/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, 1, 0,	//0
			3, 1, 0,	//1
            2, 0, 0,	//2
			0, 0, 0,    //3
			
			1, 1, 0,	//4
			3, 1, 0,	//5
            2, 0, 0,	//6
            0, 0, 0,    //7
		];

		this.indices = [
			//Counter-clockwise reference of vertices
            3, 2, 0,
			0, 2, 1,
			//Clockwise reference of vertices
            4, 6, 7,
            5, 6, 4 
		];

		this.texCoords = [
			0.5, 1.0,
			1.0, 1.0, 
			0.75, 0.75,
			0.25, 0.75,

			0.5, 1.0,
			1.0, 1.0, 
			0.75, 0.75,
			0.25, 0.75,
		];
		var parallelogramVertices = 4;
		this.normals = [];
		for (var i = 0; i < parallelogramVertices; i += 1) {
			this.normals.push(0, 0, -1);
		}
		for (var i = 0; i < parallelogramVertices; i += 1) {
			this.normals.push(0, 0, 1);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
} 