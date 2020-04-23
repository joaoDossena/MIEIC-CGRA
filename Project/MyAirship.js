class MyAirship extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.gondola = new MyGondola(scene, slices, stacks);
		this.balloon = new MyEllipsoid(scene, slices, stacks);

		this.leftTurbine = new MyEllipsoid(scene, slices/2, stacks/2);
		this.rightTurbine = new MyEllipsoid(scene, slices/2, stacks/2);

		this.topWing = new MyQuad(scene);
		this.leftWing = new MyQuad(scene);
		this.bottomWing = new MyQuad(scene);
		this.rightWing = new MyQuad(scene);

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
		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, -1.5);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.topWing.display();
		this.scene.popMatrix();

		//Left Wing
		this.scene.pushMatrix();
		this.scene.translate(0.5, 0, -1.5);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.leftWing.display();
		this.scene.popMatrix();

		//Bottom Wing
		this.scene.pushMatrix();
		this.scene.translate(0, -0.5, -1.5);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.bottomWing.display();
		this.scene.popMatrix();


		//Right Wing
		this.scene.pushMatrix();
		this.scene.translate(-0.5, 0, -1.5);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.rightWing.display();
		this.scene.popMatrix();
	}

}
