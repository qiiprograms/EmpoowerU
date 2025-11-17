export default function Hero() {
  return (
    <section className="relative mt-8 md:mt-16">
      <div className="bg-[#060a13] border border-[#0a1120] rounded-2xl overflow-hidden max-w-7xl mx-auto shadow-xl shadow-[#00e5ff]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-12">

          <div>
            <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight tracking-tight">
              Empowering the Next Generation to Lead the Disruption Era
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl text-sm md:text-base">
              Platform edukasi dan inovatif yang membantu anak muda membangun keterampilan masa depan.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="/programs" 
                className="bg-linear-to-r from-[#00e5ff] to-[#0099cc] text-black px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300"
              >
                Explore Programs
              </a>
              <a 
                href="/programs" 
                className="border border-[#00e5ff]/30 text-[#00e5ff] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#00e5ff]/10 transition-all duration-300"
              >
                Join the Movement
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-[#060a13] border border-[#0a1120] rounded-xl p-6 relative">
              <div className="h-56 md:h-72 w-full bg-[linear-gradient(135deg,rgba(0,229,255,0.06),rgba(168,85,247,0.04))] rounded-lg relative">

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <svg className="w-full h-full block" viewBox="0 0 600 400" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lg" x1="0" x2="1">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.04" />
                      </linearGradient>
                    </defs>

                    <rect x="10" y="20" width="180" height="40" rx="8" fill="url(#lg)" />
                    <rect x="220" y="40" width="320" height="16" rx="6" fill="url(#lg)" />
                    <rect x="30" y="90" width="240" height="100" rx="10" fill="url(#lg)" />
                    <rect x="300" y="110" width="180" height="80" rx="10" fill="url(#lg)" />
                  </svg>
                </div>

                <div className="h-72 md:h-72 w-full relative">
  <img
  src="Bg1.png"
  alt="EMPOWERU"
    className=" center h-73 w-120 object-cover rounded-lg"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00e5ff]/5 rounded-lg"></div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
