import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const VoiceOverlayWidget = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <motion.div 
        layout
        onClick={() => setIsActive(!isActive)}
        title="Click to toggle Idle / Active state"
        className="cursor-pointer select-none p-[4px] rounded-[24px] bg-[#22242b] border border-[#353842] shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-[#4a4e5c] transition-colors"
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        <motion.div 
          layout
          className="bg-[#121316] rounded-[20px] px-5 py-3.5 flex items-center justify-center gap-3.5 min-h-[58px]"
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        >
          {/* Microphone Icon */}
          <motion.div 
            layout
            animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={{ duration: 1.6, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <svg 
              className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-[#7d8cf7] drop-shadow-[0_0_10px_rgba(125,140,247,0.7)]' : 'text-zinc-500'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
          </motion.div>

          {/* Waveform Equalizer (Only visible in Active state) */}
          <AnimatePresence mode="popLayout">
            {isActive && (
              <motion.div 
                key="waveform"
                initial={{ opacity: 0, width: 0, scale: 0.8 }}
                animate={{ opacity: 1, width: "auto", scale: 1 }}
                exit={{ opacity: 0, width: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 360, damping: 26 }}
                className="flex items-center gap-[5px] h-7 overflow-hidden pl-1"
              >
                {[
                  { min: "28%", max: "100%", duration: 0.7, delay: 0.0 },
                  { min: "20%", max: "65%", duration: 0.85, delay: 0.15 },
                  { min: "35%", max: "95%", duration: 0.65, delay: 0.05 },
                  { min: "16%", max: "45%", duration: 0.85, delay: 0.2 },
                  { min: "16%", max: "45%", duration: 0.8, delay: 0.1 },
                  { min: "28%", max: "92%", duration: 0.75, delay: 0.25 },
                  { min: "16%", max: "40%", duration: 0.7, delay: 0.05 },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    className="w-[5px] bg-[#7d8cf7] rounded-full shadow-[0_0_10px_rgba(125,140,247,0.5)]"
                    animate={{
                      height: [bar.min, bar.max, bar.min],
                    }}
                    transition={{
                      duration: bar.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bar.delay,
                    }}
                    style={{ height: bar.min }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
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
    <div className="relative w-full min-h-screen bg-[#000000] text-[#ededed] font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden antialiased">
      
      {/* Rich Animated White & Grey Ethereal Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        {/* Deep background mesh */}
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_yq1m2v.svg')] opacity-25" />
        
        {/* Floating Orb 1 - Luminous Soft White */}
        <motion.div 
          animate={{ 
            x: [0, 90, -40, 0], 
            y: [0, -90, 40, 0],
            scale: [1, 1.25, 0.85, 1],
          }} 
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[65vw] h-[65vh] rounded-full bg-white/20 blur-[130px] mix-blend-screen" 
        />
        
        {/* Floating Orb 2 - Cool Slate Grey */}
        <motion.div 
          animate={{ 
            x: [0, -120, 80, 0], 
            y: [0, 120, -40, 0],
            scale: [1, 1.3, 0.9, 1],
          }} 
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] rounded-full bg-zinc-400/25 blur-[140px] mix-blend-screen" 
        />

        {/* Floating Orb 3 - Radiant Silver Center Mist */}
        <motion.div 
          animate={{ 
            x: [-60, 60, -60], 
            y: [-40, 40, -40],
            scale: [0.9, 1.3, 0.9],
          }} 
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[25%] w-[55vw] h-[55vh] rounded-full bg-gray-200/25 blur-[120px] mix-blend-screen" 
        />

        {/* Floating Orb 4 - Ambient Top Center Spotlight */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.15, 1],
          }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[20%] w-[60vw] h-[40vh] rounded-full bg-zinc-300/20 blur-[110px] mix-blend-screen" 
        />
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay" />
      </div>

      <div className="relative z-20 h-full overflow-y-auto overflow-x-hidden">
        {/* Top Nav */}
        <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-5 bg-black/40 backdrop-blur-2xl border-b border-white/10 z-50">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <motion.div 
              whileHover={{ rotate: 180 }} transition={{ duration: 0.4, ease: "backOut" }}
              className="w-6 h-6 rounded-none bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer"
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
              initial={{ opacity: 0, scale: 0.8, y: -10 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <VoiceOverlayWidget />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-md leading-[1.15]"
            >
              <span className="inline-block whitespace-nowrap">Local-first</span>{' '}
              <span className="inline-block whitespace-nowrap">voice typing.</span>{' '}
              <br className="hidden sm:inline" />
              <span className="inline-block whitespace-nowrap">Built for</span>{' '}
              <span className="inline-block whitespace-nowrap">Windows.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12 font-medium leading-relaxed drop-shadow-sm"
            >
              The local-first voice engine for Windows. Speak naturally. Type at the speed of thought.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
                <motion.a 
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  href="https://github.com/Rukutodo/Voxa/releases/latest" 
                  className="group px-7 py-3.5 bg-white text-black hover:bg-gray-100 rounded-none font-bold text-sm transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 border border-white"
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
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.97 }}
                  href="#about" 
                  className="px-7 py-3.5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-none font-medium text-sm transition-colors flex items-center justify-center shadow-lg"
                >
                  Explore Features
                </motion.a>
            </motion.div>
          </section>

          {/* Feature Cards Section */}
          <section className="py-20 px-6 w-full max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div variants={fadeInUp} whileHover={{ y: -6, transition: { duration: 0.2 } }} className="group p-px rounded-none bg-gradient-to-b from-white/20 to-transparent hover:from-indigo-500/50 transition-all duration-300 shadow-xl border border-white/10">
                    <div className="bg-[#050505]/60 backdrop-blur-2xl h-full p-8 rounded-none relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/30 blur-[50px] group-hover:bg-indigo-500/50 transition-all duration-500 mix-blend-screen" />
                      <div className="w-10 h-10 rounded-none bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                        <span className="text-indigo-400 text-lg drop-shadow-md">⚡</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white relative z-10">Instant Response</h3>
                      <p className="text-gray-200 leading-relaxed text-sm relative z-10">By running inference locally via our optimized Rust pipeline, the time from speaking to action is nearly instantaneous.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} whileHover={{ y: -6, transition: { duration: 0.2 } }} className="group p-px rounded-none bg-gradient-to-b from-white/20 to-transparent hover:from-blue-500/50 transition-all duration-300 shadow-xl border border-white/10">
                    <div className="bg-[#050505]/60 backdrop-blur-2xl h-full p-8 rounded-none relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[50px] group-hover:bg-blue-500/50 transition-all duration-500 mix-blend-screen" />
                      <div className="w-10 h-10 rounded-none bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        <span className="text-blue-400 text-lg drop-shadow-md">🎨</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white relative z-10">Sleek Overlay UI</h3>
                      <p className="text-gray-200 leading-relaxed text-sm relative z-10">A beautiful, non-intrusive UI that hovers over your desktop. Press a global hotkey, speak your mind, and get back to work.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} whileHover={{ y: -6, transition: { duration: 0.2 } }} className="group p-px rounded-none bg-gradient-to-b from-white/20 to-transparent hover:from-white/40 transition-all duration-300 shadow-xl border border-white/10">
                    <div className="bg-[#050505]/60 backdrop-blur-2xl h-full p-8 rounded-none relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/15 blur-[50px] group-hover:bg-white/25 transition-all duration-500 mix-blend-screen" />
                      <div className="w-10 h-10 rounded-none bg-white/10 border border-white/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        <span className="text-white text-lg drop-shadow-md">🔒</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white relative z-10">100% Privacy</h3>
                      <p className="text-gray-200 leading-relaxed text-sm relative z-10">Zero data sent to external servers. Your voice never leaves your machine. Fully open-source and auditable.</p>
                    </div>
                  </motion.div>
              </motion.div>
          </section>

          {/* Deep Dive Section */}
          <section id="about" className="py-24 px-6 w-full max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-none bg-[#050505]/40 backdrop-blur-2xl border border-white/20 p-10 group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" 
                      />
                      <h3 className="text-2xl font-bold mb-4 text-white relative z-10 drop-shadow-sm">Powered by Qwen TTS</h3>
                      <p className="text-gray-200 leading-relaxed mb-8 relative z-10 font-medium">
                          Integrating state-of-the-art audio models, Voxa understands context, nuance, and natural speech patterns better than traditional assistants. 
                          Model inference happens locally via a Python sidecar.
                      </p>
                      <ul className="space-y-4 text-sm font-bold text-white relative z-10">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-none bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,1)]" /> Ultra-low latency voice synthesis
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-none bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,1)]" /> Highly accurate real-time transcription
                          </li>
                      </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-none bg-[#050505]/40 backdrop-blur-2xl border border-white/20 p-10 group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[-20%] left-[-20%] w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" 
                      />
                      <h3 className="text-2xl font-bold mb-4 text-white relative z-10 drop-shadow-sm">Built with Tauri & Rust</h3>
                      <p className="text-gray-200 leading-relaxed mb-8 relative z-10 font-medium">
                          Electron is heavy. Voxa uses Tauri, leveraging your system's native webview wrapped in an incredibly fast Rust backend. This means it uses a fraction of the RAM while maintaining a fluid web UI.
                      </p>
                      <ul className="space-y-4 text-sm font-bold text-white relative z-10">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-none bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,1)]" /> Minimal memory footprint
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-none bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,1)]" /> Deep OS integration & hotkeys
                          </li>
                      </ul>
                  </motion.div>

              </motion.div>
          </section>

          {/* Installation Guide */}
          <section className="py-24 px-6 w-full max-w-4xl mx-auto relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16 relative z-10">
                  <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-sm">Installation Guide</h2>
                  <p className="text-gray-300 font-medium">Everything you need to get Voxa running locally.</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6 relative z-10">
                  
                  <motion.div variants={fadeInUp} className="bg-[#050505]/50 backdrop-blur-2xl border border-white/20 rounded-none p-8 hover:border-white/30 transition-colors duration-300 shadow-2xl">
                      <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-4">1. Required Dependencies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                              <h4 className="text-sm font-bold text-indigo-300 mb-3 uppercase tracking-widest">Hardware</h4>
                              <ul className="space-y-3 text-gray-200 text-sm">
                                  <li><strong className="text-white">Minimum:</strong> 16GB RAM, Multi-core CPU</li>
                                  <li><strong className="text-white">Recommended:</strong> RTX 3060+ (8GB+ VRAM)</li>
                                  <li><strong className="text-white">Storage:</strong> ~10GB of free space</li>
                              </ul>
                          </div>
                          <div>
                              <h4 className="text-sm font-bold text-blue-300 mb-3 uppercase tracking-widest">Software</h4>
                              <ul className="space-y-3 text-gray-200 text-sm">
                                  <li><strong className="text-white">Windows 10 or 11</strong></li>
                                  <li><strong className="text-white">Python 3.10+</strong> (Added to PATH)</li>
                                  <li><strong className="text-white">FFmpeg</strong> (Added to PATH)</li>
                              </ul>
                          </div>
                      </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="bg-[#050505]/50 backdrop-blur-2xl border border-white/20 rounded-none p-8 hover:border-white/30 transition-colors duration-300 shadow-2xl">
                      <h3 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-4">2. Setup Models</h3>
                      <div className="flex flex-col gap-4">
                          <p className="text-sm text-gray-200 font-medium">Download the model weights directly using the HuggingFace CLI.</p>
                          <motion.div whileHover={{ scale: 1.01 }} className="relative group mt-1">
                            <code className="block bg-black/90 text-green-400 px-5 py-4 rounded-none text-sm font-mono border border-white/20 overflow-x-auto select-all whitespace-nowrap shadow-inner">
                              huggingface-cli download Qwen/Qwen-Audio --local-dir ./models
                            </code>
                          </motion.div>
                          <p className="text-sm text-gray-300 mt-3 font-medium">Move these downloaded models into <code className="bg-white/10 border border-white/30 px-2 py-1 rounded-none font-mono text-white">%APPDATA%\Voxa\models</code>.</p>
                      </div>
                  </motion.div>
                  
              </motion.div>
          </section>

          {/* Footer */}
          <footer className="w-full max-w-5xl mx-auto pt-12 pb-8 px-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-none bg-white/20 flex items-center justify-center border border-white/30">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                </div>
                <span className="font-bold text-white">Voxa</span>
              </div>
              <p className="text-gray-400 text-sm font-bold tracking-wide">Crafted by Rukutodo</p>
          </footer>

        </div>
      </div>
    </div>
  );
}
