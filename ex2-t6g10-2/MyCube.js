class MyCube extends CGFObject {
	constructor(scene) {
		super(scene);
        this.topDiamond = new MyDiamond(scene);
        this.bottomDiamond = new MyDiamond(scene);
        this.side1Diamond = new MyDiamond(scene);
        this.side2Diamond = new MyDiamond(scene);
        this.side3Diamond = new MyDiamond(scene);
        this.side4Diamond = new MyDiamond(scene);
	}
	display() {
		this.scene.pushMatrix();
		this.scene.topDiamond.display();
	}
}