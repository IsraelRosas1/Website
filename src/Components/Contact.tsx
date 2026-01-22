import React from 'react'
import { Phone, Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react'

export default function Contact(){
  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to bring your app idea to life? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:2485648645" 
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">Phone</div>
                      <div className="font-semibold text-lg">248-564-8645</div>
                      <div className="text-sm text-white/50">Available Mon-Fri, 9am-6pm EST</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:israelrosassalinas@hotmail.com" 
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">Email</div>
                      <div className="font-semibold text-lg break-all">israelrosassalinas@hotmail.com</div>
                      <div className="text-sm text-white/50">I'll respond within 24 hours</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">Location</div>
                      <div className="font-semibold text-lg">Detroit, Michigan</div>
                      <div className="text-sm text-white/50">Available for remote & local projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="text-center space-y-6">
                <div className="p-4 rounded-full bg-accent/10 w-fit mx-auto">
                  <MessageSquare className="w-12 h-12 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
                  <p className="text-white/70">
                    Whether you have a detailed plan or just an idea, I'd love to hear about your project 
                    and discuss how I can help bring it to life.
                  </p>
                </div>

                <div className="space-y-3">
                  <a 
                    href="tel:2485648645" 
                    className="block w-full px-6 py-4 rounded-lg bg-accent hover:bg-accent/90 text-black font-semibold transition-all transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Now
                  </a>
                  <a 
                    href="mailto:israelrosassalinas@hotmail.com" 
                    className="block w-full px-6 py-4 rounded-lg border border-white/10 hover:bg-white/5 text-white font-semibold transition-all"
                  >
                    <Send className="w-5 h-5 inline mr-2" />
                    Send Email
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                    <Clock className="w-4 h-4" />
                    <span>Typically responds within 1 business day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
