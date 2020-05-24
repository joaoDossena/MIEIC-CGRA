/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }
    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui = this;
        // disable the processKeyboard function
        this.processKeyboard = function (){};
        // create a named array to store which keys are being pressed
        this.activeKeys = {};
    }
    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code] = true;
    };
    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code] = false;
    };
    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'selectedBackground', this.scene.backgroundIDs).name('SEL Background');
        //this.gui.add(this.scene, 'displayNormals').name("Display Normals");
        this.gui.add(this.scene, 'displayBackground').name("Background");
        //this.gui.add(this.scene, 'wireframe').onChange(this.scene.onWireframeChanged.bind(this.scene)).name('Enable Wire Frame');
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3.0, 0.1).name('Scale Factor');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3.0, 0.1).name('Speed Factor');
        this.gui.add(this.scene, 'displayVehicle').name('Display Vehicle');
        this.gui.add(this.scene, 'displayTerrain').name('Display Terrain');
        this.gui.add(this.scene, 'displayBillboard').name('Display Billboard');
        this.gui.add(this.scene, 'displayEarth').name('Display Earth');
        this.initKeys();
        return true;
    }
}