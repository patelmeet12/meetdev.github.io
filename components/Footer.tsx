import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Apple, Smartphone, Code, Award } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickStats = [
    { icon: <Apple className="w-4 h-4" />, label: "iOS Apps", value: "15+" },
    { icon: <Smartphone className="w-4 h-4" />, label: "Active Users", value: "2M+" },
    { icon: <Code className="w-4 h-4" />, label: "Years Experience", value: "8+" },
    { icon: <Award className="w-4 h-4" />, label: "App Store Rating", value: "4.8" }
  ];

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <div className="text-lg">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="mb-4">Alex Chen</h3>
            <p className="text-muted-foreground mb-4">
              Senior iOS Developer specializing in Swift, SwiftUI, and building 
              exceptional mobile experiences that delight users and drive business success.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Available for Projects</Badge>
              <Badge variant="outline">Remote Friendly</Badge>
              <Badge variant="outline">8+ Years Experience</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Navigation</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  About
                </button>
              </div>
              <div>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  Apps & Projects
                </button>
              </div>
              <div>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  Skills & Expertise
                </button>
              </div>
              <div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  Contact & Hire
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>iOS App Development</div>
              <div>SwiftUI Migration</div>
              <div>App Store Optimization</div>
              <div>Code Review & Consulting</div>
              <div>Team Mentoring</div>
              <div>Performance Optimization</div>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {currentYear} Alex Chen. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Apple className="w-4 h-4" />
              <span className="text-sm">Built with passion for iOS</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-foreground transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-foreground transition-colors">
              alex.chen.ios@email.com
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}