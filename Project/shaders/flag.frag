
#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 waveAmplitude;

uniform sampler2D flagTexture; //flag texture
uniform float timeFactor;

void main() {
    vec4 color = texture2D(flagTexture, vTextureCoord);
    gl_FragColor = color;
}