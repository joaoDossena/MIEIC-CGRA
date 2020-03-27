/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 1, 0,	//0
			-1, -1, 0,	//1
			1, -1, 0,	//2

			-1, 1, 0,	//4
			-1, -1, 0,	//5
			1, -1, 0,	//6
		];

	
		this.indices = [
			//Counter-clockwise reference of vertices
			0, 1, 2,
			//Clockwise reference of vertices
			5, 4, 3,
		];
		var triangleVertices = 3;
		this.normals = [];
		for (var i = 0; i < triangleVertices; i += 1) {
			this.normals.push(0, 0, 1);
		}
		for (var i = 0; i < triangleVertices; i += 1) {
			this.normals.push(0, 0, -1);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
} 