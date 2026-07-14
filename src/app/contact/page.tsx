

export const metadata = {
  title: "Contact | Craftly Studio",
  description: "Get in touch with Craftly Studio to start your project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8">
              Let&apos;s build something <span className="text-accent">great</span>.
            </h1>
            <p className="text-xl text-on-surface-variant mb-12">
              Whether you need a complete digital transformation or targeted SEO improvements, we&apos;re here to help you dominate your market.
            </p>
            
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Email Us</h4>
                        <p className="text-on-surface-variant">hello@craftlystudio.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">phone</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Call Us</h4>
                        <p className="text-on-surface-variant">+91 98765 43210</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Visit Us</h4>
                        <p className="text-on-surface-variant">Vapi, Gujarat, India</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="bg-surface p-10 rounded-3xl border border-outline shadow-xl">
            <h3 className="font-display text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">First Name</label>
                        <input type="text" className="w-full bg-white border border-outline rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Last Name</label>
                        <input type="text" className="w-full bg-white border border-outline rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="Doe" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white border border-outline rounded-lg px-4 py-3 focus:outline-none focus:border-accent" placeholder="john@company.com" />
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">Project Details</label>
                    <textarea className="w-full bg-white border border-outline rounded-lg px-4 py-3 focus:outline-none focus:border-accent min-h-[150px]" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button type="button" className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 cursor-pointer">
                    Submit Inquiry
                </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
