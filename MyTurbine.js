class MyTurbine extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.motor = new MyEllipsoid(scene, slices, stacks);
		this.helix = new MySquare(scene);
		this.angle = 0;
	}

	rotateHelix(val)
	{
		this.angle += val;
	}


	display()
	{
		this.scene.pushMatrix();
		this.motor.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI * this.angle/180.0, 0, 0, 1);
		this.scene.translate(0, 0, -2);
		this.scene.scale(0.2, 3, 1);
		this.helix.display();
		this.scene.popMatrix();

		this.rotateHelix(30);
	}
}