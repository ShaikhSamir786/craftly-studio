"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

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
        gl.uniform1f(ut, time * 0.0005); // slower, more premium drift
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-[#050505] pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden min-h-screen flex items-center">
      {/* WebGL Canvas Background */}
      <div className="absolute inset-0 z-0 shader-overlay pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full block"></canvas>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#ff8c00]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Centered Content: Heading & CTAs */}
          <motion.div 
            className="max-w-4xl mx-auto flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-accent text-sm font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Web Design & SEO</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] text-balance mb-8 text-center"
            >
              Not another template. A digital <span className="text-accent relative inline-block">experience<span className="absolute bottom-1 left-0 w-full h-[4px] bg-accent/30 rounded-full" /></span> crafted for your growth.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="font-body text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed text-center"
            >
              We engineer custom, blazing-fast Next.js websites and AI-powered automation tailored for local businesses in Vapi, Gujarat. Turn web traffic into actual paying customers.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/contact"
                className="w-full sm:w-auto text-center bg-accent hover:bg-accent/90 text-white px-8 py-4.5 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                Book Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio"
                className="w-full sm:w-auto text-center bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2] px-8 py-4.5 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
              >
                View Selected Work
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
