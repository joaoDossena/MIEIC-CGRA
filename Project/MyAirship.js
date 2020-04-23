class MyAirship extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.gondola = new MyGondola(scene, 16, 8);
		this.ellipsoid = new MyEllipsoid(scene, 16, 8);
	}


	display()
	{
		this.ellipsoid.display();

		this.scene.pushMatrix();
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.translate(0, -0.5, 0);
		this.gondola.display();
		this.scene.popMatrix();
	}
}