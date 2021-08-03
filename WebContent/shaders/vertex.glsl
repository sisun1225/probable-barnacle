void main() 
{
  gl_Position = projectionMatirx * modelViewMatrix * vec4(position, 1.0);
}

 