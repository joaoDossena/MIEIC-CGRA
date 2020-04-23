class MyAirship extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.gondola = new MyGondola(scene, 16, 8);
		this.balloon = new MyEllipsoid(scene, 16, 8);

		this.leftTurbine = new MyEllipsoid(scene, 8, 4);
		this.rightTurbine = new MyEllipsoid(scene, 8, 4);

		this.topWingTriangle = new MyTriangle(scene);
		this.topWingSquare = new MyQuad(scene);

		this.leftWingTriangle = new MyTriangle(scene);
		this.leftWingSquare = new MyQuad(scene);

		this.bottomWingTriangle = new MyTriangle(scene);
		this.bottomWingSquare = new MyQuad(scene);

		this.rightWingTriangle  = new MyTriangle(scene);
		this.rightWingSquare = new MyQuad(scene);


	}


	display()
	{
		//Balloon
		this.balloon.display();

		//Gondola
		this.scene.pushMatrix();
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.translate(0, -0.5, 0);
		this.gondola.display();
		this.scene.popMatrix();

		//Left Turbine
		this.scene.pushMatrix();
		this.scene.translate(0.25, -1, -0.75);
		this.scene.scale(0.1, 0.1, 0.1);
		this.leftTurbine.display();
		this.scene.popMatrix();

		//Right Turbine
		this.scene.pushMatrix();
		this.scene.translate(-0.25, -1, -0.75);
		this.scene.scale(0.1, 0.1, 0.1);
		this.rightTurbine.display();
		this.scene.popMatrix();

		//Top Wing

		//Left Wing

		//Bottom Wing

		//Right Wing
	}
}