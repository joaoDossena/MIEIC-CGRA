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
		this.scene.translate(0, -3, 3);
		this.frontSphere.display();
		this.scene.popMatrix();


		//Cylinder:
		this.scene.pushMatrix();
		this.scene.translate(0, -1.5, -1.5);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.scale(0.5, 3, 0.5);
		this.cylinder.display();
		this.scene.popMatrix();		


		//Back Sphere:
		this.scene.pushMatrix();
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.translate(0, -3, -3);
		this.backSphere.display();
		this.scene.popMatrix();


	}

}