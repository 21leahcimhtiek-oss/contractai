import Link from 'next/link'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link href="/" className="text-xl font-bold">ContractAI</Link>
        <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Get Started
        </Link>
      </nav>
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Simple pricing</h1>
        <p className="text-gray-400 mb-16">Start free. Upgrade when ready.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
            <div className="text-gray-400 text-sm font-medium mb-2">FREE</div>
            <div className="text-4xl font-bold mb-1">$0</div>
            <div className="text-gray-500 text-sm mb-8">Forever free</div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> 10 AI generations/day</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> Basic templates</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> Email support</li>
            </ul>
            <Link href="/dashboard" className="block text-center border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors">
              Start Free
            </Link>
          </div>

          <div className="bg-violet-600/10 border border-violet-500 rounded-2xl p-8 text-left relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs px-3 py-1 rounded-full">POPULAR</div>
            <div className="text-violet-400 text-sm font-medium mb-2">PRO</div>
            <div className="text-4xl font-bold mb-1">$19</div>
            <div className="text-gray-500 text-sm mb-8">per month</div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> Unlimited AI generations</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>AI contract drafting</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>Template library</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>Clause suggestions</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>E-signature ready</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>Version history</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>Risk analysis</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>Export to PDF/DOCX</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span>Team collaboration</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> Priority support</li>
            </ul>
            <Link href="/api/checkout?plan=pro_monthly" className="block text-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors">
              Upgrade to Pro
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
            <div className="text-gray-400 text-sm font-medium mb-2">PRO YEARLY</div>
            <div className="text-4xl font-bold mb-1">$159</div>
            <div className="text-gray-500 text-sm mb-8">per year (save 27%)</div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> Everything in Pro</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> 2 months free</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">+</span> Dedicated support</li>
            </ul>
            <Link href="/api/checkout?plan=pro_yearly" className="block text-center border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors">
              Get Yearly Plan
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
