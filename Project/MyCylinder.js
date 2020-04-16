class MyCylinder extends CGFobject {
	constructor(scene, slices){
    	super(scene);
    	this.longDivs = slices;

    	this.initBuffers();
  	}

  	initBuffers(){
  		this.vertices = [];
  		this.indices = [];
    	this.normals = [];
    	this.texCoords = [];

    	var theta = 0;
    	var thetaInc = (2 * Math.PI) / this.longDivs;

    	for (let longitude = 0; longitude <= this.longDivs; longitude++) {
        //--- Vertices coordinates
        	var x = Math.cos(theta);
        	var y = 1;
        	var z = Math.sin(-theta);
        	this.vertices.push(x, y, z);
			this.normals.push(x, y, z);
			theta += thetaInc;
    	}

        this.primitiveType = this.scene.gl.TRIANGLES;
    	this.initGLBuffers();
  	}

  	

}