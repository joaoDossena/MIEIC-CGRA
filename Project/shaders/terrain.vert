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
	waveAmplitude = aVertexNormal*waveMap.b*0.06;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + waveAmplitude, 1.0);

}
