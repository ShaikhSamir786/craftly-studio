export default function FinalCta() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-bg-inverse rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Ready to outpace your competition?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">Stop settling for a website that just sits there. Let&apos;s build a tool that actually grows your business.</p>
            <button className="bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-accent/20 cursor-pointer">
              Book Your Free Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
