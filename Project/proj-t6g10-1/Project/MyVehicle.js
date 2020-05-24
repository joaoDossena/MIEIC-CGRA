/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyVehicle extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		this.airship = new MyAirship(scene, slices, stacks);
		this.angle = 0;
		this.speed = 0;
		this.position = [0, 10, 0];
		this.autopilot = false;
		this.hasCenter = false;
		this.center = [0, 10, 0];
	}
	update(timePassed){
		this.position[0] += this.speed*Math.sin(this.angle*Math.PI/180.0);
		this.position[2] += this.speed*Math.cos(this.angle*Math.PI/180.0);
		this.airship.update(timePassed,this.speed);
	}
	turn(val){
		this.angle += val;
		this.airship.rudderAngle = val*5;
	}
	accelerate(val){
		this.speed += val;
		//------	Speed Limit
		if(this.speed >2){this.speed=2;}
		if(this.speed <0){this.speed=0;}

	}
	switchPilot() {
		if(this.autopilot) {
			this.autopilot = false;
			this.hasCenter = false;
		}
		else
			this.autopilot = true;
	}
	autopilotUpdate(){
		var radius = 5;
		this.turn(3);
		if(this.angle == 360)
			this.angle = 0
		this.position[0] = this.center[0] - radius * Math.cos(this.angle * Math.PI / 180); 
		this.position[2] = this.center[2] + radius * Math.sin(this.angle * Math.PI / 180);
	}
	getCenter() {
        var radius = 5;

        var x = Math.cos(this.angle);
        var z = Math.sin(this.angle);

        var aux = Math.sqrt(z*z + x*x);
        z /= aux;
        x /= aux;

        // Calcular centro
        this.center[0] = this.position[0] + radius * x;
        this.center[2] = this.position[2] + radius * z;
        this.hasCenter = true;
	}
	reset(){
        this.autopilot = false;
		this.angle = 0;
		this.speed = 0;
		this.position = [0, 10, 0];
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -Math.sqrt(2)/2);
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
		this.scene.popMatrix();
	}
	display(){
		this.scene.pushMatrix();
		//--update position
		this.scene.translate(this.position[0], this.position[1], this.position[2]);
		this.scene.rotate(Math.PI *this.angle/180.0, 0, 1, 0);
		//-----
		/*this.scene.translate(0, 0, -Math.sqrt(2)/2);
		this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
		this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
		*/
		this.airship.display();
		this.scene.popMatrix();
	}

} 