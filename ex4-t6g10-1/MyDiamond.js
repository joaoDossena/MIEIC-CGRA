/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
*/
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			-1, 0, 0,	// 0
			0, -1, 0,	// 1
			0, 1, 0,	// 2
			1, 0, 0,	// 3
			
			-1, 0, 0,	// 4
			0, -1, 0,	// 5
			0, 1, 0, 	// 6
			1, 0, 0		// 7
		];

		
		this.indices = [
			// Counter-clockwise reference of vertices
			0, 1, 2,
			1, 3, 2,

			//Clockwise reference of vertices
			6, 5, 4,
			6, 7, 5,
		];

		this.texCoords = [
			0, 0.5,
			0.25, 0.75,
			0.25, 0.25,
			0.5, 0.5,

			0, 0.5,
			0.25, 0.75,
			0.25, 0.25,
			0.5, 0.5,
		];

		var diamondVertices = 4;
		this.normals = [];
		for (var i = 0; i < diamondVertices; i += 1) {
			this.normals.push(0, 0, 1);
		}
		
		for (var i = 0; i < diamondVertices; i += 1) {
			this.normals.push(0, 0, -1);
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

