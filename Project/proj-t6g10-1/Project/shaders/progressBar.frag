#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 vVertexPosition;

uniform int suppliesDelivered;		
uniform float progressPosition;

void main() {
    
    vec4 color;

    if(vVertexPosition.x > progressPosition){
        color = vec4(0.0,0.0,0.0,1.0);
    } 
    else{
        color = vec4(1.0 - vTextureCoord.s, 0.0 +  vTextureCoord.s, 0.0, 1.0);
    }

	gl_FragColor = color;
}