#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 waveAmplitude;

uniform sampler2D uSampler3; //Water texture
uniform sampler2D uSampler4; //Water Map
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler3, vec2(timeFactor, timeFactor)+vTextureCoord);
	
	vec4 filter = texture2D(uSampler4, vec2(timeFactor, timeFactor)+vTextureCoord);
	
	if (filter.b > 0.5)
		color.rgb = color.rgb / (1.175+waveAmplitude.y);
	
	gl_FragColor = color;
}