class MyEllipsoid extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.latDivs = stacks * 2;
    	this.longDivs = slices;
		this.initBuffers();
	}

	initBuffers()
	{
		this.vertices = [];
    	this.indices = [];
    	this.normals = [];
    	this.texCoords = [];

    	var phi = 0;
    	var theta = 0;
    	var phiInc = Math.PI / this.latDivs;
    	var thetaInc = (2 * Math.PI) / this.longDivs;
    	var latVertices = this.longDivs + 1;
    	var currentT = 0;         //Vertical
    	var currentS = 0;         //Horizontal
    	var incrementT = 1/this.latDivs;
    	var incrementS = 1/this.longDivs;
    	var a = 1;
    	var b = 1;
    	var c = 2;

	    // build an all-around stack at a time, starting on "north pole" and proceeding "south"
    	for (let latitude = 0; latitude <= this.latDivs; latitude++) {
      	var sinPhi = Math.sin(phi);
      	var cosPhi = Math.cos(phi);

      	// in each stack, build all the slices around, starting on longitude 0
      	theta = 0;
      	currentS = 0;
      	for (let longitude = 0; longitude <= this.longDivs; longitude++) {
        	//--- Vertices coordinates
        	var x = a * Math.cos(theta) * sinPhi;
        	var y = b * cosPhi;
        	var z = c * Math.sin(-theta) * sinPhi;
        	this.vertices.push(x, y, z);

        	//--- Indices
        	if (latitude < this.latDivs && longitude < this.longDivs) {
          	var current = latitude * latVertices + longitude;
          	var next = current + latVertices;
          	// pushing two triangles using indices from this round (current, current+1)
          	// and the ones directly south (next, next+1)
          	// (i.e. one full round of slices ahead)
	          
          	this.indices.push( current + 1, current, next);
          	this.indices.push( current + 1, next, next +1);
        	}
	        

	        //--- Normals
        	// at each vertex, the direction of the normal is equal to 
        	// the vector from the center of the sphere to the vertex.
        	// in a sphere of radius equal to one, the vector length is one.
	        // therefore, the value of the normal is equal to the position vectro
        	this.normals.push(x, y, z);
        	theta += thetaInc;

        	//--- Texture Coordinates
        	this.texCoords.push(currentS, currentT);
        	currentS += incrementS;
        	// May need some additional code also in the beginning of the function.
	        
	    }
      	currentT += incrementT;
      	phi += phiInc;
    	}

    	this.primitiveType = this.scene.gl.TRIANGLES;
    	this.initGLBuffers();
	}



}