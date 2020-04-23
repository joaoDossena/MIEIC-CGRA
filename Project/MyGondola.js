class MyGondola extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);
		this.frontSphere = new MySphere(scene, slices, stacks);
		this.cylinder = new MyCylinder(scene, slices, stacks);
		this.backSphere = new MySphere(scene, slices, stacks);
	}

	display()
	{
		//Front Sphere:
		this.scene.pushMatrix();
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.translate(0, -2, 2);
		this.frontSphere.display();
		this.scene.popMatrix();


		//Front Sphere:
		this.scene.pushMatrix();

		this.cylinder.display();
		this.scene.popMatrix();		


		//Front Sphere:
		this.scene.pushMatrix();
		this.scene.scale(1, 1, 0.5);
		this.scene.translate(0, -2, -2);
		this.backSphere.display();
		this.scene.popMatrix();
	}
}