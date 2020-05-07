#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D flagTexture;

uniform float timeFactor;		
uniform float speed;


void main() {
    vTextureCoord = aTextureCoord;

    vec3 movement=vec3(0.0,0.0,0.0);
    
    movement.z = 0.03 * sin(aVertexPosition.x * 30.0) * sin( (speed*7.0+0.5) * (timeFactor * 0.003));


    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + movement, 1.0);

}