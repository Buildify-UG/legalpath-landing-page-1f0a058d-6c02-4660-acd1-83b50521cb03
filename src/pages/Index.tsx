import { Button } from "@/components/ui/button";
import { BookOpen, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">LegalPath</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">Features</a>
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition">How it Works</a>
            <a href="#cta" className="text-foreground/70 hover:text-foreground transition">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
            ✨ Transforming Legal Education
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Master Law with <span className="text-primary">Practical Training</span> & Expert Guidance
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            LegalPath bridges the gap between textbooks and courtrooms. Get structured study resources, ace entrance tests, and learn from top legal experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="mt-12 bg-gradient-to-b from-secondary to-secondary/50 rounded-xl p-8 border border-border">
            <div className="aspect-video bg-foreground/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-foreground/50">Learning Platform Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-foreground/70">Comprehensive tools designed for aspiring legal professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Structured Study Resources</h3>
              <p className="text-foreground/70 mb-6">
                Curated curriculum covering constitutional law, contracts, criminal law, and more. Learn concepts the way legal professionals think.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Expert-written modules
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Case studies & examples
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Mock Entrance Tests</h3>
              <p className="text-foreground/70 mb-6">
                Practice with realistic entrance exams. Get instant feedback, detailed analytics, and targeted recommendations to improve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  AI-powered feedback
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Performance tracking
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Mentorship</h3>
              <p className="text-foreground/70 mb-6">
                Connect with top legal professionals. Get career guidance, interview prep, and insider insights into legal practice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  1-on-1 sessions
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Career roadmap
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Your Path to Legal Excellence</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Enroll", desc: "Join LegalPath and choose your track" },
              { step: 2, title: "Learn", desc: "Study structured modules at your pace" },
              { step: 3, title: "Practice", desc: "Master concepts with mock tests" },
              { step: 4, title: "Grow", desc: "Get mentored by legal experts" }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-primary-foreground/80">Students Learning</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-primary-foreground/80">Expert Mentors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-primary-foreground/80">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-secondary rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Legal Career?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands of law students and aspiring advocates already on LegalPath. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">LegalPath</div>
              <p className="text-sm text-foreground/60">Transforming legal education worldwide</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 LegalPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
