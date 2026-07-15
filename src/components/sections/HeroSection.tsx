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

          {/* Right Column: Interactive Glassmorphic Dashboard (Commented Out for now) */}
          {/*
          <motion.div 
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full max-w-[460px] rounded-[32px] border border-white/[0.08] bg-[#0c0c0c]/80 backdrop-blur-2xl p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[40px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-semibold text-white/40 font-mono ml-2">craftly_studio_metrics</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping mr-1" />
                  Live Sync
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-white/[0.03] p-1.5 rounded-2xl mb-8 border border-white/[0.05]">
                <button
                  onClick={() => setActiveTab("performance")}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "performance"
                      ? "bg-accent text-white shadow-md shadow-accent/20 font-bold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Performance
                </button>
                <button
                  onClick={() => setActiveTab("growth")}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === "growth"
                      ? "bg-accent text-white shadow-md shadow-accent/20 font-bold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  Growth Insights
                </button>
              </div>

              <div className="min-h-[240px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "performance" ? (
                    <motion.div
                      key="performance"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 w-full"
                    >
                      <div className="flex items-center gap-6 bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05]">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="34"
                              className="stroke-white/[0.06]"
                              strokeWidth="6"
                              fill="transparent"
                            />
                            <motion.circle
                              cx="40"
                              cy="40"
                              r="34"
                              className="stroke-accent"
                              strokeWidth="6"
                              fill="transparent"
                              strokeDasharray="213.6"
                              initial={{ strokeDashoffset: 213.6 }}
                              animate={{ strokeDashoffset: 2.13 }} 
                              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            />
                          </svg>
                          <span className="absolute text-xl font-extrabold text-white">99</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-0.5">Mobile Speed Score</p>
                          <h4 className="text-lg font-bold text-white mb-1">Blazing Fast Audits</h4>
                          <p className="text-xs text-gray-400 leading-normal">Optimized for Google Core Web Vitals to rank #1 locally.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl">
                          <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Time to Interactive</span>
                          <span className="text-xl font-extrabold text-white text-emerald-400">0.3s</span>
                          <span className="text-[10px] text-gray-400 block mt-1">Instant rendering</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl">
                          <span className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Clean Lighthouse</span>
                          <span className="text-xl font-extrabold text-white flex items-center gap-1.5">
                            4x 100%
                          </span>
                          <span className="text-[10px] text-gray-400 block mt-1">Zero issues flagged</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="growth"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 w-full"
                    >
                      <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-[#ff8c00] uppercase tracking-widest mb-1">Lead Conversion Rate</p>
                          <h4 className="text-3xl font-extrabold text-white">+240%</h4>
                          <p className="text-[11px] text-gray-400 mt-1">Average growth after custom overhaul.</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00]">
                          <Trophy className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl relative overflow-hidden h-[96px] flex flex-col justify-end">
                        <div className="absolute top-2 left-3 flex items-center gap-1">
                          <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
                          <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Inquiries Generated (Vapi/Gujarat)</span>
                        </div>
                        
                        <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ff6a3d" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#ff6a3d" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d="M 0,20 Q 20,15 40,16 T 80,4 T 100,1 L 100,20 L 0,20 Z"
                            fill="url(#chartGrad)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <motion.path
                            d="M 0,20 Q 20,15 40,16 T 80,4 T 100,1"
                            fill="none"
                            stroke="#ff6a3d"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">Ready to see your stats?</span>
                  <Link 
                    href="/contact"
                    className="text-white hover:text-accent font-semibold transition-colors flex items-center gap-1 group/btn cursor-pointer"
                  >
                    Request Free Audit
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
          */}

        </div>
      </div>
    </section>
  );
}
