#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 vVertexPosition;

uniform int suppliesDelivered;		

void main() {
    float progressPosition = (1.2/5.0) * float(suppliesDelivered) -0.6;
    vec4 color;

    if(vVertexPosition.x > progressPosition){
        color = vec4(0.0,0.0,0.0,1.0);
    } 
    else{
        color = vec4(1.0 - float(suppliesDelivered)/5.0, 0.0 +  float(suppliesDelivered)/5.0, 0.0, 1.0);
    }

	gl_FragColor = color;
}