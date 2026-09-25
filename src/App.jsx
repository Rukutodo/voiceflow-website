import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-indigo-500/30 selection:text-white overflow-x-hidden antialiased">
      
      {/* Premium Background: Subtle Radial Glow + Dot Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_yq1m2v.svg')] opacity-[0.03]" />
      </div>

      {/* Top Nav */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-5 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
          </div>
          <span className="font-semibold tracking-wide text-lg text-white">Voxa</span>
        </div>
        <a href="https://github.com/Rukutodo/Voxa" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">GitHub</a>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center w-full pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center w-full px-6 py-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"
          >
            <div className="bg-[#0a0a0a] rounded-2xl p-4 shadow-2xl">
              <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6"
          >
            Local-first voice typing. <br/> Built for Windows.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            The ultimate Rust-powered AI desktop assistant. Speak naturally and process everything entirely on your machine.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
              <a href="https://github.com/Rukutodo/Voxa/releases/latest" className="group px-7 py-3.5 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
                Download v1.0.0
                <svg className="w-4 h-4 text-black/70 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="#about" className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium text-sm transition-all flex items-center justify-center">
                Explore Features
              </a>
          </motion.div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-20 px-6 w-full max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={fadeInUp} className="group p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/30 transition-all duration-500">
                  <div className="bg-[#0a0a0a] h-full p-8 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                      <span className="text-indigo-400 text-lg">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Instant Response</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">By running inference locally via our optimized Rust pipeline, the time from speaking to action is nearly instantaneous.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="group p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/30 transition-all duration-500">
                  <div className="bg-[#0a0a0a] h-full p-8 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                      <span className="text-blue-400 text-lg">🎨</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Sleek Overlay UI</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">A beautiful, non-intrusive UI that hovers over your desktop. Press a global hotkey, speak your mind, and get back to work.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="group p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/30 transition-all duration-500">
                  <div className="bg-[#0a0a0a] h-full p-8 rounded-2xl">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                      <span className="text-purple-400 text-lg">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">100% Privacy</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">Zero data sent to external servers. Your voice never leaves your machine. Fully open-source and auditable.</p>
                  </div>
                </motion.div>
            </motion.div>
        </section>

        {/* Deep Dive Section */}
        <section id="about" className="py-24 px-6 w-full max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                    <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">Powered by Qwen TTS</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
                        Integrating state-of-the-art audio models, Voxa understands context, nuance, and natural speech patterns better than traditional assistants. 
                        Model inference happens locally via a Python sidecar.
                    </p>
                    <ul className="space-y-4 text-sm font-medium text-gray-300 relative z-10">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Ultra-low latency voice synthesis
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Highly accurate real-time transcription
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                    <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">Built with Tauri & Rust</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
                        Electron is heavy. Voxa uses Tauri, leveraging your system's native webview wrapped in an incredibly fast Rust backend. This means it uses a fraction of the RAM while maintaining a fluid web UI.
                    </p>
                    <ul className="space-y-4 text-sm font-medium text-gray-300 relative z-10">
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Minimal memory footprint
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Deep OS integration & hotkeys
                        </li>
                    </ul>
                </motion.div>

            </motion.div>
        </section>

        {/* Installation Guide */}
        <section className="py-24 px-6 w-full max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-white">Installation Guide</h2>
                <p className="text-gray-400">Everything you need to get Voxa running locally.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
                
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                    <h3 className="text-lg font-medium mb-6 text-white border-b border-white/5 pb-4">1. Required Dependencies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Hardware</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><strong className="text-white">Minimum:</strong> 16GB RAM, Multi-core CPU</li>
                                <li><strong className="text-white">Recommended:</strong> RTX 3060+ (8GB+ VRAM)</li>
                                <li><strong className="text-white">Storage:</strong> ~10GB of free space</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Software</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><strong className="text-white">Windows 10 or 11</strong></li>
                                <li><strong className="text-white">Python 3.10+</strong> (Added to PATH)</li>
                                <li><strong className="text-white">FFmpeg</strong> (Added to PATH)</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                    <h3 className="text-lg font-medium mb-6 text-white border-b border-white/5 pb-4">2. Setup Models</h3>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400">Download the model weights directly using the HuggingFace CLI.</p>
                        <div className="relative group">
                          <code className="block bg-black text-gray-300 px-4 py-3 rounded-lg text-sm font-mono border border-white/10 overflow-x-auto select-all whitespace-nowrap">
                            huggingface-cli download Qwen/Qwen-Audio --local-dir ./models
                          </code>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Move these downloaded models into <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-white">%APPDATA%\Voxa\models</code>.</p>
                    </div>
                </motion.div>
                
            </motion.div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-5xl mx-auto pt-12 pb-8 px-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              </div>
              <span className="font-semibold text-white">Voxa</span>
            </div>
            <p className="text-gray-500 text-sm">Crafted by Rukutodo</p>
        </footer>

      </div>
    </div>
  );
}
