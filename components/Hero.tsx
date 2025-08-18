import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, ExternalLink } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">Hello, I'm</p>
              <h1 className="text-4xl lg:text-5xl">
                Alex Chen
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Professional iOS & Flutter Developer
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              I'm a passionate mobile developer specializing in iOS and Flutter applications with expertise in Swift, SwiftUI, Flutter, React Native, and FlutterFlow. With 7+ years of professional experience, I've delivered numerous successful mobile projects for clients worldwide.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available for new opportunities
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Open to remote work
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Professional iOS & Flutter Developer"
                className="w-80 h-80 rounded-2xl object-cover border-4 border-accent shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">7+ Years Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}