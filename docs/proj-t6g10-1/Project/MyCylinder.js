class MyCylinder extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];
		var theta = 0;
		var thetaInc = (2 * Math.PI) / this.slices;
		var max = this.slices * 2;


		for (var i = 0; i < max; i += 2) {
			this.indices.push(i + 1, i, i + 2);
			this.indices.push(i + 2, i + 3, i + 1);
		}
		for (var i = 0; i <= this.slices; i++) {
			this.vertices.push(Math.cos(theta), 0, -Math.sin(theta));
			this.vertices.push(Math.cos(theta), 1, -Math.sin(theta));

			this.normals.push(Math.cos(theta), 0, -Math.sin(theta));
			this.normals.push(Math.cos(theta), 0, -Math.sin(theta));
			theta += thetaInc;
		}


		for(let i = 0; i<=this.stacks;i++){
            let t=(this.stacks-i)/this.stacks;
            for(let j = 0; j < this.slices;j++){
                let s=(this.slices-1-j)/(this.slices-1);
                this.texCoords.push(s*this.sr,t*this.tr);
            }
        }

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}