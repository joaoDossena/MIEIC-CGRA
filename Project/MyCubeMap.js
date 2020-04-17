class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.topFace = new MyQuad(scene);
        this.bottomFace = new MyQuad(scene);
        this.leftFace = new MyQuad(scene);
        this.rightFace = new MyQuad(scene);
        this.frontFace = new MyQuad(scene);
        this.backFace = new MyQuad(scene);
        this.initMaterials();
    }
    initMaterials() {
        this.frontFace.texCoords = [
            0.25, 0.666,
            0.50, 0.666,
            0.25, 0.333,
            0.50, 0.333,
        ];
        this.backFace.texCoords = [
            0.75, 0.666,
            1.00, 0.666,
            0.75, 0.333,
            1.00, 0.333,
        ];
        this.rightFace.texCoords = [
            0.50, 0.666,
            0.75, 0.666,
            0.50, 0.333,
            0.75, 0.333,
        ];
        this.leftFace.texCoords = [
            0.00, 0.666,
            0.25, 0.666,
            0.00, 0.333,
            0.25, 0.333,
        ];
        this.topFace.texCoords = [
            0.25, 0.333,
            0.50, 0.333,
            0.25, 0.000,
            0.50, 0.000,
        ];
        this.bottomFace.texCoords = [
            0.25, 1.000,
            0.50, 1.000,
            0.25, 0.666,
            0.50, 0.666,
        ];
        this.frontFace.updateTexCoordsGLBuffers();
        this.backFace.updateTexCoordsGLBuffers();
        this.leftFace.updateTexCoordsGLBuffers();
        this.rightFace.updateTexCoordsGLBuffers();
        this.topFace.updateTexCoordsGLBuffers();
        this.bottomFace.updateTexCoordsGLBuffers();

    }
    display() {
        /*Top Face*/
        this.scene.backgroundMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 25, 0);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
        this.scene.scale(50, 50, 50);
        this.topFace.display();
        this.scene.popMatrix();
        /*Bottom Face*/
        this.scene.pushMatrix();
        this.scene.translate(0, -25, 0);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
        this.scene.scale(50, 50, 50);
        this.bottomFace.display();
        this.scene.popMatrix();

        /*Front Face*/
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 25);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        this.scene.scale(50, 50, 50);
        this.frontFace.display();
        this.scene.popMatrix();


        /*Left Face*/
        this.scene.pushMatrix();
        this.scene.translate(25, 0, 0);
        this.scene.rotate(Math.PI * 270 / 180, 0, 1, 0);
        this.scene.scale(50, 50, 50);
        this.leftFace.display();
        this.scene.popMatrix();

        /*Right Face*/
        this.scene.pushMatrix();
        this.scene.translate(-25, 0, 0);
        this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
        this.scene.scale(50, 50, 50);
        this.rightFace.display();
        this.scene.popMatrix();

        /*Back Face*/
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -25);
        this.scene.rotate(Math.PI * 360 / 180, 0, 1, 0);
        this.scene.scale(50, 50, 50);
        this.backFace.display();
        this.scene.popMatrix();
    }
}