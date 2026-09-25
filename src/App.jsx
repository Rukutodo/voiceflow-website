import React from 'react';
import { motion } from 'framer-motion';
import GhostFibers from './components/GhostFibers';
import './index.css';

export default function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500 overflow-x-hidden">
      
      {/* Ghost Fibers Global Background */}
      <div className="fixed inset-0 z-0">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          lightMode={false}
          dpr={1}
          fps={60}
          paused={false}
        />
        <div className="absolute inset-0 bg-gray-950/70 z-10 pointer-events-none"></div>
      </div>

      {/* Scrolling Content Container */}
      <div className="relative z-20 flex flex-col items-center w-full">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center w-full min-h-screen p-6 text-center">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 p-5 rounded-full bg-indigo-900/30 border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.3)] backdrop-blur-md"
          >
              <svg className="w-20 h-20 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mb-6 tracking-tighter drop-shadow-2xl"
          >
            Voxa
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 max-w-3xl mb-12 font-light drop-shadow-md leading-relaxed"
          >
            The ultimate Rust-powered AI desktop assistant. <br/><span className="text-indigo-400 font-semibold">Speak naturally. Process locally.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
              <a href="https://github.com/Rukutodo/Voxa/releases/latest" className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <svg className="w-7 h-7 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download for Windows
              </a>
              <a href="#about" className="px-10 py-5 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-2xl font-bold text-xl backdrop-blur-md transition-all flex items-center justify-center gap-3">
                Learn More
              </a>
          </motion.div>
        </section>

        {/* How it Works Section */}
        <section className="py-32 px-6 w-full max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">How Voxa Works</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">A seamless loop from your microphone to local AI processing, right back to your speakers.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl text-center relative shadow-2xl">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-gray-950">1</div>
                    <h3 className="text-2xl font-bold mb-4 mt-4 text-indigo-300">Trigger</h3>
                    <p className="text-gray-300">Press your custom global hotkey from anywhere in Windows to instantly summon the Voxa overlay.</p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl text-center relative shadow-2xl">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-gray-950">2</div>
                    <h3 className="text-2xl font-bold mb-4 mt-4 text-purple-300">Speak</h3>
                    <p className="text-gray-300">Speak your request. Your audio is transcribed entirely on-device using OpenAI's whisper model via the Python sidecar.</p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl text-center relative shadow-2xl">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-gray-950">3</div>
                    <h3 className="text-2xl font-bold mb-4 mt-4 text-cyan-300">Respond</h3>
                    <p className="text-gray-300">The local AI processes your intent, and the Qwen TTS engine generates an ultra-realistic voice response instantly.</p>
                </motion.div>
            </motion.div>
        </section>

        {/* About / Under the Hood Section */}
        <section id="about" className="py-20 px-6 w-full max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
                <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-lg">Under the Hood</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow">Voxa isn't just another API wrapper. It is a completely native, bare-metal application.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl hover:border-indigo-500/50 transition-colors duration-500 shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4 text-white">Powered by Qwen TTS</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Integrating state-of-the-art audio models, Voxa understands context, nuance, and natural speech patterns better than traditional assistants. 
                        Model inference happens locally via a Python sidecar—no cloud latency, no privacy risks.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="text-indigo-400 text-xl">✓</span> Ultra-low latency voice synthesis</li>
                        <li className="flex items-center gap-3"><span className="text-indigo-400 text-xl">✓</span> Highly accurate real-time transcription</li>
                        <li className="flex items-center gap-3"><span className="text-indigo-400 text-xl">✓</span> Zero data sent to external servers</li>
                    </ul>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4 text-white">Built with Tauri & Rust 🦀</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Electron is heavy. Voxa uses Tauri, leveraging your system's native webview wrapped in an incredibly fast Rust backend. This means it uses a fraction of the RAM while maintaining a fluid web UI.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">✓</span> Minimal memory footprint</li>
                        <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">✓</span> Lightning-fast startup times</li>
                        <li className="flex items-center gap-3"><span className="text-cyan-400 text-xl">✓</span> Deep OS integration & hotkeys</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="relative py-32 flex flex-col items-center justify-center p-6 text-center w-full max-w-6xl">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl font-bold mb-16 text-white drop-shadow-xl">Why Voxa?</motion.h2>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl text-left shadow-xl">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-2xl font-bold mb-2">Instant Response</h4>
                    <p className="text-gray-400">By running inference locally via our optimized Rust pipeline, the time from speaking to action is nearly instantaneous.</p>
                </motion.div>
                <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl text-left shadow-xl">
                    <div className="text-4xl mb-4">🎨</div>
                    <h4 className="text-2xl font-bold mb-2">Sleek Overlay UI</h4>
                    <p className="text-gray-400">A beautiful, non-intrusive UI that hovers over your desktop. Press a global hotkey, speak your mind, and get back to work.</p>
                </motion.div>
                <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl text-left shadow-xl">
                    <div className="text-4xl mb-4">🔌</div>
                    <h4 className="text-2xl font-bold mb-2">Fully Open Source</h4>
                    <p className="text-gray-400">Don't like a feature? Change it. Voxa is 100% open-source and hackable. Check out the code and contribute!</p>
                </motion.div>
            </motion.div>
        </section>

        {/* Getting Started / Installation Guide */}
        <section className="py-20 px-6 w-full max-w-4xl text-left mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">Getting Started</h2>
                <p className="text-xl text-gray-400">Everything you need to get Voxa running locally on your machine.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
                
                {/* Hardware & Software Requirements */}
                <motion.div variants={fadeInUp} className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3"><span className="text-blue-400">📋</span> System Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-indigo-300 mb-2 border-b border-gray-800 pb-2">Hardware</h4>
                            <ul className="space-y-2 text-gray-300 list-disc ml-4 marker:text-indigo-500 text-sm">
                                <li><strong>Minimum:</strong> 16GB RAM, Modern Multi-core CPU. <i>(TTS will work but generation may take a few seconds).</i></li>
                                <li><strong>Recommended:</strong> NVIDIA GPU with 8GB+ VRAM (e.g., RTX 3060/4060 or better) for near-instantaneous voice generation without locking up your system.</li>
                                <li><strong>Storage:</strong> ~10GB of free space.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-300 mb-2 border-b border-gray-800 pb-2">Software</h4>
                            <ul className="space-y-2 text-gray-300 list-disc ml-4 marker:text-cyan-500 text-sm">
                                <li><strong>Windows 10 or 11</strong></li>
                                <li><strong>Python 3.10+</strong> (Must be added to system PATH).</li>
                                <li><strong>FFmpeg</strong> (Required for Whisper audio decoding, added to PATH).</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Downloads */}
                <motion.div variants={fadeInUp} className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3"><span className="text-purple-400">📦</span> Required Downloads</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-950/70 p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-indigo-300 mb-1">1. Voxa Executable</h4>
                                <p className="text-sm text-gray-400 mb-4">The main compiled binary and user interface.</p>
                            </div>
                            <a href="https://github.com/Rukutodo/Voxa/releases/latest" className="text-sm px-4 py-2 text-center bg-indigo-600 hover:bg-indigo-500 rounded font-semibold text-white inline-block transition-colors">Download v1.0.0</a>
                        </div>
                        <div className="bg-gray-950/70 p-5 rounded-xl border border-gray-800 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-purple-300 mb-1">2. Qwen TTS Models</h4>
                                <p className="text-sm text-gray-400 mb-3">Download the Qwen-Audio model weights directly from Hugging Face using the CLI.</p>
                                <code className="block bg-black text-pink-400 px-3 py-2 rounded text-xs font-mono border border-gray-700 mb-4 overflow-x-auto select-all whitespace-nowrap">huggingface-cli download Qwen/Qwen-Audio --local-dir ./models</code>
                            </div>
                            <a href="https://huggingface.co/Qwen" target="_blank" rel="noreferrer" className="text-sm px-4 py-2 text-center bg-gray-700 hover:bg-gray-600 rounded font-semibold text-white inline-block transition-colors">View on Hugging Face</a>
                        </div>
                    </div>
                </motion.div>

                {/* Setup Steps */}
                <motion.div variants={fadeInUp} className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3"><span className="text-cyan-400">⚙️</span> Installation Steps</h3>
                    <div className="space-y-8 text-gray-300">
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">1</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Verify Dependencies</h4>
                                <p className="text-sm text-gray-400">Open a terminal and run <code className="bg-gray-950 text-pink-400 px-2 py-0.5 rounded text-xs font-mono border border-gray-800">python --version</code> and <code className="bg-gray-950 text-pink-400 px-2 py-0.5 rounded text-xs font-mono border border-gray-800">ffmpeg -version</code> to ensure they are accessible globally.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">2</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">First Launch</h4>
                                <p className="text-sm text-gray-400">Run <code className="bg-gray-950 text-pink-400 px-2 py-0.5 rounded text-xs font-mono border border-gray-800">Voxa.exe</code>. On its first launch, it will unpack the Python sidecar and prepare your local <code>AppData</code> environment.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">3</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Configure Models</h4>
                                <p className="text-sm text-gray-400">Move your downloaded Qwen TTS models into the <code className="bg-gray-950 text-green-400 px-2 py-0.5 rounded text-xs font-mono border border-gray-800">%APPDATA%\Voxa\models</code> directory.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/50 border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">4</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Start Talking!</h4>
                                <p className="text-sm text-gray-400">Use the global hotkey (default: <kbd className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-700 text-gray-300">Ctrl + Space</kbd>) to instantly bring up the Voxa interface.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
            </motion.div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-950/90 backdrop-blur-md py-12 text-center border-t border-gray-800/80 mt-12 z-20">
            <p className="text-gray-500 mb-4 font-medium">Crafted with ❤️ and 🦀 by Rukutodo</p>
            <a href="https://github.com/Rukutodo/Voxa" target="_blank" className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">
                View Repository on GitHub
            </a>
        </footer>

      </div>
    </div>
  );
}
