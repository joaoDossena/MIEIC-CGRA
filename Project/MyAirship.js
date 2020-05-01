class MyAirship extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.gondola = new MyGondola(scene, slices, stacks);
		this.balloon = new MyEllipsoid(scene, slices, stacks);

		this.leftTurbine = new MyTurbine(scene, slices/2, stacks/2);
		this.rightTurbine = new MyTurbine(scene, slices/2, stacks/2);

		this.topWing = new MySquare(scene);
		this.leftWing = new MySquare(scene);
		this.bottomWing = new MySquare(scene);
		this.rightWing = new MySquare(scene);

		this.rudderAngle = 0;
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
		this.scene.translate(0.25, -1, -0.9);
		this.scene.scale(0.1, 0.1, 0.1);
		this.leftTurbine.display();
		this.scene.popMatrix();

		//Right Turbine
		this.scene.pushMatrix();
		this.scene.translate(-0.25, -1, -0.9);
		this.scene.scale(0.1, 0.1, 0.1);
		this.rightTurbine.display();
		this.scene.popMatrix();

		//Top Wing
		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, -1.5);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.scene.rotate(Math.PI * this.rudderAngle/180, 0, 1, 0);
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
		this.scene.rotate(Math.PI * this.rudderAngle/180, 0, 1, 0);
		this.bottomWing.display();
		this.scene.popMatrix();


		//Right Wing
		this.scene.pushMatrix();
		this.scene.translate(-0.5, 0, -1.5);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.scale(0.7, 0.7, 0.7);
		this.rightWing.display();
		this.scene.popMatrix();

		//Puts rudder back in position
		this.rudderAngle *= 0.9;
	}

}
