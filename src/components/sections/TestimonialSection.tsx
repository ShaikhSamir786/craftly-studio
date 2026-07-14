import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto">
          <span className="material-symbols-outlined text-accent text-5xl mb-8">format_quote</span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold leading-relaxed mb-10 italic text-balance">
            &quot;Craftly Studio transformed our digital presence. We saw more leads in the first month than we did the entire previous year. Their technical depth is unmatched.&quot;
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 mb-4 overflow-hidden relative">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPhecCwmsxbNV5t8XbdjEtkqtI2nMb_CFO5XTNEQt0soXWKJH3zxNx68FwiGEEEfB1Lmmh-mfRMeJSjuD5rq147vx2gmLw-PeGVCBfAFAQZDcccYGqO_YlXmlbLv6jDXTDcVH4vNQBTg9yI_eK7LS9P40BPTjOA-jUMyXttvAZ2TaI9b2BorYubLAeKSJ3yRsoyZNi02EEzimgZ3tGpexieafAghws8_-bkCQfzKt6rfqd5eIdm6Xf" alt="Client" fill className="object-cover" />
            </div>
            <p className="font-bold text-on-surface">Rajesh Mehta</p>
            <p className="text-sm text-on-surface-variant">CEO, Vapi Industrial Group</p>
          </div>
        </div>
      </div>
    </section>
  );
}
