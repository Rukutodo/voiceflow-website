import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const AnimatedWaveform = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 h-12">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-indigo-400 rounded-full"
          animate={{
            height: ["16%", "100%", "16%"],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          style={{ height: "16%" }}
        />
      ))}
    </div>
  );
};

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
    <div className="relative w-full min-h-screen bg-[#030303] text-[#ededed] font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden antialiased">
      
      {/* Rich Animated Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
        {/* Deep background mesh */}
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_yq1m2v.svg')] opacity-[0.06] mix-blend-overlay" />
        
        {/* Floating Orb 1 - Indigo */}
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.5, 0.3]
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-indigo-600/30 blur-[140px]" 
        />
        
        {/* Floating Orb 2 - Blue */}
        <motion.div 
          animate={{ 
            x: [0, -150, 100, 0], 
            y: [0, 150, -50, 0],
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.2, 0.4, 0.2]
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] rounded-full bg-blue-600/20 blur-[150px]" 
        />

        {/* Floating Orb 3 - Purple center */}
        <motion.div 
          animate={{ 
            x: [-50, 50, -50], 
            y: [-50, 50, -50],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.4, 0.2]
          }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[20%] w-[50vw] h-[50vh] rounded-full bg-purple-600/20 blur-[130px]" 
        />
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-20 h-full overflow-y-auto overflow-x-hidden">
        {/* Top Nav */}
        <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-5 bg-[#030303]/40 backdrop-blur-2xl border-b border-white/10 z-50">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.div 
              whileHover={{ rotate: 180 }} transition={{ duration: 0.4, ease: "backOut" }}
              className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </motion.div>
            <span className="font-semibold tracking-wide text-lg text-white">Voxa</span>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            href="https://github.com/Rukutodo/Voxa" target="_blank" rel="noreferrer" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </motion.a>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center w-full pt-32 pb-20">
          
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center w-full px-6 py-20 text-center max-w-4xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mb-8 p-1 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 shadow-2xl backdrop-blur-md"
            >
              <div className="bg-[#0a0a0a]/80 rounded-[14px] p-6 flex items-center justify-center min-w-[100px] h-[80px]">
                <AnimatedWaveform />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-md"
            >
              Local-first voice typing. <br/> Built for Windows.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-medium leading-relaxed drop-shadow-sm"
            >
              The ultimate Rust-powered AI desktop assistant. Speak naturally and process everything entirely on your machine.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
                <motion.a 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href="https://github.com/Rukutodo/Voxa/releases/latest" 
                  className="group px-7 py-3.5 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-sm transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                >
                  Download v1.0.0
                  <motion.svg 
                    className="w-4 h-4 text-black/70 group-hover:text-black" 
                    initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </motion.svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.95 }}
                  href="#about" 
                  className="px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-sm transition-colors flex items-center justify-center shadow-lg"
                >
                  Explore Features
                </motion.a>
            </motion.div>
          </section>

          {/* Feature Cards Section */}
          <section className="py-20 px-6 w-full max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="group p-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent hover:from-indigo-500/50 transition-all duration-300 shadow-xl">
                    <div className="bg-[#050505]/80 backdrop-blur-xl h-full p-8 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[50px] group-hover:bg-indigo-500/30 transition-all duration-500" />
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                        <span className="text-indigo-400 text-lg">⚡</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white relative z-10">Instant Response</h3>
                      <p className="text-gray-300 leading-relaxed text-sm relative z-10">By running inference locally via our optimized Rust pipeline, the time from speaking to action is nearly instantaneous.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="group p-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent hover:from-blue-500/50 transition-all duration-300 shadow-xl">
                    <div className="bg-[#050505]/80 backdrop-blur-xl h-full p-8 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/30 transition-all duration-500" />
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <span className="text-blue-400 text-lg">🎨</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white relative z-10">Sleek Overlay UI</h3>
                      <p className="text-gray-300 leading-relaxed text-sm relative z-10">A beautiful, non-intrusive UI that hovers over your desktop. Press a global hotkey, speak your mind, and get back to work.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="group p-px rounded-2xl bg-gradient-to-b from-white/20 to-transparent hover:from-purple-500/50 transition-all duration-300 shadow-xl">
                    <div className="bg-[#050505]/80 backdrop-blur-xl h-full p-8 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] group-hover:bg-purple-500/30 transition-all duration-500" />
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <span className="text-purple-400 text-lg">🔒</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white relative z-10">100% Privacy</h3>
                      <p className="text-gray-300 leading-relaxed text-sm relative z-10">Zero data sent to external servers. Your voice never leaves your machine. Fully open-source and auditable.</p>
                    </div>
                  </motion.div>
              </motion.div>
          </section>

          {/* Deep Dive Section */}
          <section id="about" className="py-24 px-6 w-full max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-3xl bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-10 group shadow-2xl">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" 
                      />
                      <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">Powered by Qwen TTS</h3>
                      <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                          Integrating state-of-the-art audio models, Voxa understands context, nuance, and natural speech patterns better than traditional assistants. 
                          Model inference happens locally via a Python sidecar.
                      </p>
                      <ul className="space-y-4 text-sm font-medium text-white relative z-10">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" /> Ultra-low latency voice synthesis
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" /> Highly accurate real-time transcription
                          </li>
                      </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-3xl bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-10 group shadow-2xl">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[-20%] left-[-20%] w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" 
                      />
                      <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">Built with Tauri & Rust</h3>
                      <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                          Electron is heavy. Voxa uses Tauri, leveraging your system's native webview wrapped in an incredibly fast Rust backend. This means it uses a fraction of the RAM while maintaining a fluid web UI.
                      </p>
                      <ul className="space-y-4 text-sm font-medium text-white relative z-10">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Minimal memory footprint
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Deep OS integration & hotkeys
                          </li>
                      </ul>
                  </motion.div>

              </motion.div>
          </section>

          {/* Installation Guide */}
          <section className="py-24 px-6 w-full max-w-4xl mx-auto relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16 relative z-10">
                  <h2 className="text-3xl font-semibold mb-4 text-white">Installation Guide</h2>
                  <p className="text-gray-300">Everything you need to get Voxa running locally.</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6 relative z-10">
                  
                  <motion.div variants={fadeInUp} className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300 shadow-2xl">
                      <h3 className="text-lg font-medium mb-6 text-white border-b border-white/10 pb-4">1. Required Dependencies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                              <h4 className="text-sm font-semibold text-indigo-300 mb-3 uppercase tracking-wider">Hardware</h4>
                              <ul className="space-y-2 text-gray-300 text-sm">
                                  <li><strong className="text-white">Minimum:</strong> 16GB RAM, Multi-core CPU</li>
                                  <li><strong className="text-white">Recommended:</strong> RTX 3060+ (8GB+ VRAM)</li>
                                  <li><strong className="text-white">Storage:</strong> ~10GB of free space</li>
                              </ul>
                          </div>
                          <div>
                              <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wider">Software</h4>
                              <ul className="space-y-2 text-gray-300 text-sm">
                                  <li><strong className="text-white">Windows 10 or 11</strong></li>
                                  <li><strong className="text-white">Python 3.10+</strong> (Added to PATH)</li>
                                  <li><strong className="text-white">FFmpeg</strong> (Added to PATH)</li>
                              </ul>
                          </div>
                      </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300 shadow-2xl">
                      <h3 className="text-lg font-medium mb-6 text-white border-b border-white/10 pb-4">2. Setup Models</h3>
                      <div className="flex flex-col gap-4">
                          <p className="text-sm text-gray-300">Download the model weights directly using the HuggingFace CLI.</p>
                          <motion.div whileHover={{ scale: 1.01 }} className="relative group">
                            <code className="block bg-black/80 text-green-400 px-4 py-3 rounded-lg text-sm font-mono border border-white/20 overflow-x-auto select-all whitespace-nowrap shadow-inner">
                              huggingface-cli download Qwen/Qwen-Audio --local-dir ./models
                            </code>
                          </motion.div>
                          <p className="text-sm text-gray-300 mt-2">Move these downloaded models into <code className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded font-mono text-white">%APPDATA%\Voxa\models</code>.</p>
                      </div>
                  </motion.div>
                  
              </motion.div>
          </section>

          {/* Footer */}
          <footer className="w-full max-w-5xl mx-auto pt-12 pb-8 px-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center border border-white/20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                </div>
                <span className="font-semibold text-white">Voxa</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">Crafted by Rukutodo</p>
          </footer>

        </div>
      </div>
    </div>
  );
}
