"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext("webgl");
    if (!gl) return;
    
    function resize() {
      if (canvas) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    }
    
    window.addEventListener("resize", resize);
    resize();
    
    const vs = `attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }`;
    const fs = `precision highp float; uniform float t; uniform vec2 r; void main() { vec2 uv = gl_FragCoord.xy / r; vec3 col = 0.5 + 0.5*cos(t+uv.xyx+vec3(0,2,4)); gl_FragColor = vec4(col * 0.1, 1.0); }`;
    
    const s = (t: number, c: string) => {
      const shader = gl.createShader(t);
      if (!shader) return null;
      gl.shaderSource(shader, c);
      gl.compileShader(shader);
      return shader;
    };
    
    const vertexShader = s(gl.VERTEX_SHADER, vs);
    const fragmentShader = s(gl.FRAGMENT_SHADER, fs);
    
    if (!vertexShader || !fragmentShader) return;
    
    const p = gl.createProgram();
    if (!p) return;
    
    gl.attachShader(p, vertexShader);
    gl.attachShader(p, fragmentShader);
    gl.linkProgram(p);
    gl.useProgram(p);
    
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    
    const a = gl.getAttribLocation(p, "p");
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    
    const ut = gl.getUniformLocation(p, "t");
    const ur = gl.getUniformLocation(p, "r");
    
    let animationFrameId: number;
    
    function render(time: number) {
      if (canvas && gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform1f(ut, time * 0.001);
        gl.uniform2f(ur, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      animationFrameId = requestAnimationFrame(render);
    }
    
    render(0);
    
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative bg-bg-inverse pt-48 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 shader-overlay pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block"></canvas>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h1 className="font-display text-4xl md:text-7xl font-extrabold text-white leading-[1.1] text-balance mb-8">
          Not another template website. A digital <span className="text-accent">experience</span> crafted for your business.
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          We design and develop custom websites that help businesses build trust, attract customers, and grow online. Engineered for high performance and higher conversion.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/20 cursor-pointer">
            Get Free Website Audit
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all cursor-pointer">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
