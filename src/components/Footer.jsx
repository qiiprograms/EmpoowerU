import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-16 py-12 px-6 md:px-12 lg:px-20">
            <div className="bg-[#060a13] border border-[#0a1120] rounded-2xl p-8 shadow-xl shadow-[#00e5ff]/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="text-white font-bold text-xl tracking-wider">
                            EMP<span className="text-[#00e5ff]">ower</span>U
                        </div>
                        <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                            Empowering Youth in the Era of Disruption — futuristic learning for meaningful impact.
                        </p>
                    </div>
                    <div className="text-sm">
                        <div className="text-white font-semibold mb-4">Quick Links</div>
                        <div className="space-y-3">
                            <Link
                                to="/"
                                className="block text-slate-400 hover:text-[#00e5ff] transition-all duration-300 hover:pl-2"
                            >
                                Home
                            </Link>
                            <Link
                                to="/programs"
                                className="block text-slate-400 hover:text-[#00e5ff] transition-all duration-300 hover:pl-2"
                            >
                                Programs
                            </Link>
                            <Link
                                to="/insights"
                                className="block text-slate-400 hover:text-[#00e5ff] transition-all duration-300 hover:pl-2"
                            >
                                Insights
                            </Link>
                            <Link
                                to="/stories"
                                className="block text-slate-400 hover:text-[#00e5ff] transition-all duration-300 hover:pl-2"
                            >
                                Inspiration
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="text-white font-semibold mb-4">Connect</div>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-12 h-12 bg-[#060a13] border border-[#0a1120] rounded-full flex items-center justify-center text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20"
                            >
                                IG
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-[#060a13] border border-[#0a1120] rounded-full flex items-center justify-center text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20"
                            >
                                TW
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-[#060a13] border border-[#0a1120] rounded-full flex items-center justify-center text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20"
                            >
                                LN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-slate-600 mt-6">
                © {new Date().getFullYear()} EmpowerU — Designed with hologram aesthetics.
            </div>
        </footer>
    );
}
