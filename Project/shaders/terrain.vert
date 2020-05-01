attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler4; //Water Map
uniform float timeFactor;		
varying vec3 waveAmplitude;

void main() {

	vTextureCoord = aTextureCoord;
	vec4 waveMap = texture2D(uSampler4, vec2(timeFactor,timeFactor)+vTextureCoord);
	waveAmplitude = aVertexNormal*waveMap.b;	//Normal will have a constant value 1, waveMap has a maximum value of 1, for the maximum height to have 8 units, then the value 8/50 has to be used.

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + waveAmplitude, 1.0);

}
