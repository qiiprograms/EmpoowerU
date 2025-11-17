import React from 'react';

export default function Contact() {
    return (
        <div className="py-12">
            <h2 className="text-white font-bold text-3xl md:text-4xl mb-2">Get in Touch</h2>
            <p className="text-slate-400 mb-8">Ready to start your journey? We'd love to hear from you.</p>

            <div className="bg-[#060a13] border border-[#0a1120] rounded-2xl p-8 shadow-xl shadow-[#00e5ff]/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
                        <p className="text-slate-400 mb-6">
                            For partnerships, programs or media inquiries reach out to:
                        </p>
                        <div className="space-y-3">
                            <div>
                                <span className="text-slate-500 text-sm">Email:</span>
                                <p className="text-white font-medium">hello@empoweru.example</p>
                            </div>
                            <div>
                                <span className="text-slate-500 text-sm">Support:</span>
                                <p className="text-white font-medium">support@empoweru.example</p>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="text-slate-400 text-sm mb-2 block">Your Name</label>
                            <input
                                className="w-full bg-[#060a13] border border-[#0a1120] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#00e5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/20 transition-all duration-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="text-slate-400 text-sm mb-2 block">Your Email</label>
                            <input
                                className="w-full bg-[#060a13] border border-[#0a1120] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#00e5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/20 transition-all duration-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="text-slate-400 text-sm mb-2 block">Message</label>
                            <textarea
                                className="w-full bg-[#060a13] border border-[#0a1120] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#00e5ff]/50 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]/20 transition-all duration-300 resize-none"
                                placeholder="Your message here..."
                                rows={5}
                            ></textarea>
                        </div>
                        <button className="bg-linear-to-r from-[#00e5ff] to-[#0099cc] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300 mt-4">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
