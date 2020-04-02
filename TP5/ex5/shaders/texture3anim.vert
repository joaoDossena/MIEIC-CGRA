
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

void main() {
	vec3 offset=vec3(0, 0, 0);
	
	vTextureCoord = aTextureCoord;

	if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
		offset=aVertexNormal*normScale*0.1*sin(timeFactor);

	vec3 backForthMotion = vec3(normScale*sin(0.1*timeFactor)	//This is used to create a back forth sin motion, 0.1 is used to slow the motion
	+aVertexPosition.x + offset.x, aVertexPosition.y + offset.y, aVertexPosition.z + offset.z);

	gl_Position = uPMatrix * uMVMatrix * vec4(backForthMotion, 1.0);
}

