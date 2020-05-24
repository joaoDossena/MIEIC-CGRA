
const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.currentPosition = [0, 9, 0];
        this.state = SupplyStates.INACTIVE;
        this.supply = new MyUnitCubeQuad(scene);
        this.initMaterials();
        
    }
    initMaterials(){
        this.crateMaterial = new CGFappearance(this.scene);
        this.crateMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.crateMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.crateMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.crateMaterial.setEmission( 0.7, 0.7, 0.7, 1 );
        this.crateMaterial.setShininess(10.0);
        this.crateMaterial.loadTexture('images/crate1.png');
        this.crateMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setEmission( 0.7, 0.7, 0.7, 1 );
        this.diamondMaterial.setShininess(10.0);
        this.diamondMaterial.loadTexture('images/diamond.png');
        this.diamondMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    update(elapseTime) {
        if (this.state == SupplyStates.FALLING) {
            this.currentPosition[1] -= (9.0/5)*elapseTime/1000;
            if (this.currentPosition[1] <= 0)
                this.land();

        }

    }
    reset(){
        this.currentPosition = [0, 9, 0];
        this.state = SupplyStates.INACTIVE;
    }

    drop(dropPosition) {
        this.currentPosition = [dropPosition[0], 9, dropPosition[2]];
        this.state = SupplyStates.FALLING;

        //começar a animação de queda a partir da dropPosition (posição atual do dirígivel)
    }
    land() {
        this.state = SupplyStates.LANDED;
    }

    display() {
        
        if(this.state == SupplyStates.FALLING){
            this.crateMaterial.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.currentPosition[0],this.currentPosition[1],this.currentPosition[2]);
            this.supply.display();
            this.scene.popMatrix();
        }
        else if(this.state == SupplyStates.LANDED){
            this.diamondMaterial.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.currentPosition[0],this.currentPosition[1],this.currentPosition[2]);
            this.supply.display();
            this.scene.popMatrix();
        }
        this.scene.DefaultMaterial.apply();
    }
}
