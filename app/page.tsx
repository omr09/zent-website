import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Zap, Target, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "zent-home",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/zent-logo.png"
                alt="Zent Logo"
                width={120}
                height={48}
                className="h-12 w-auto filter invert"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/zent-logo.png"
                alt="Zent Logo"
                width={200}
                height={80}
                className="h-20 w-auto mx-auto mb-4 filter invert"
              />
            </div>
            <Badge variant="outline" className="mb-6 border-gray-600 text-gray-300">
              Innovative AI Startup
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Intelligent AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zent is a cutting-edge AI startup delivering innovative artificial intelligence solutions that automate
              processes, enhance decision-making, and drive growth for businesses ready to embrace the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-800 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-700 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI services designed to revolutionize your operations and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Machine Learning</CardTitle>
                <CardDescription className="text-gray-300">
                  Custom ML models that learn from your data to predict trends, automate decisions, and optimize
                  performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Pattern Recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Automated Decision Making
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Process Automation</CardTitle>
                <CardDescription className="text-gray-300">
                  Intelligent automation solutions that streamline workflows and eliminate repetitive tasks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Workflow Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Document Processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Quality Assurance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-white">Data Analytics</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced analytics platforms that transform raw data into actionable business insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Real-time Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Performance Metrics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">2024</div>
              <div className="text-gray-300">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">8</div>
              <div className="text-gray-300">AI Specialists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Innovation Focus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose Zent?</h2>
              <p className="text-lg text-gray-300 mb-8">
                As a fresh AI startup, we bring innovation, agility, and cutting-edge technology to every project. We're
                not bound by legacy systems or outdated approaches – we're building the future of AI solutions from the
                ground up.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-gray-300">
                      Our dedicated team of AI specialists and data scientists brings fresh perspectives and deep
                      technical expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Target className="h-6 w-6 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Cutting-Edge Innovation</h3>
                    <p className="text-gray-300">
                      As a startup, we leverage the latest AI technologies and methodologies without legacy constraints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Agile & Responsive</h3>
                    <p className="text-gray-300">
                      Our startup agility means faster decision-making, rapid prototyping, and quick adaptation to
                      emerging technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Model Development</span>
                  <span className="font-semibold text-white">Advanced</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Innovation Speed</span>
                  <span className="font-semibold text-white">Rapid</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Technology Stack</span>
                  <span className="font-semibold text-white">Latest</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We envision a future where AI seamlessly integrates into every business process, making organizations more
            efficient, intelligent, and competitive. Our mission is to democratize AI technology and make it accessible
            to businesses of all sizes.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">
                We prioritize breakthrough technologies and novel approaches to solve complex problems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Results Driven</h3>
              <p className="text-gray-300">
                Every solution we build is designed to deliver measurable impact and tangible business value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Future Ready</h3>
              <p className="text-gray-300">
                We build scalable solutions that evolve with your business and adapt to future challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/zent-logo.png"
              alt="Zent Logo"
              width={150}
              height={60}
              className="h-15 w-auto mx-auto mb-6 filter invert"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI revolution with a startup that's building tomorrow's solutions today. Let's discuss how our
            innovative approach can help you achieve your goals with cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to start your AI journey? Our experts are here to help you explore the possibilities and discuss
                how we can bring your vision to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">📧</div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">contact@zent.digital</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">📞</div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-300">+201557512120</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">📍</div>
                  <div>
                    <div className="font-semibold text-white">Office</div>
                    <div className="text-gray-300">37 Street 9, Maadi, Cairo, Egypt</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-300">We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/zent-logo.png"
                alt="Zent Logo"
                width={120}
                height={48}
                className="h-12 w-auto mb-4 filter invert"
              />
              <p className="text-gray-400">
                An innovative AI startup founded in 2024 with a mission to transform businesses through intelligent
                automation and cutting-edge AI solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Machine Learning</li>
                <li>Process Automation</li>
                <li>Data Analytics</li>
                <li>AI Consulting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Vision</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@zent.digital</li>
                <li>+201557512120</li>
                <li>37 Street 9, Maadi, Cairo, Egypt</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
