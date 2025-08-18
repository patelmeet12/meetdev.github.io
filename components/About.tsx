import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Smartphone, Code } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      number: "15+",
      label: "Apps Published",
      description: "Published on App Store"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "2M+",
      label: "Active Users",
      description: "Across my applications"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "4.8",
      label: "Average Rating",
      description: "User satisfaction"
    },
    {
      icon: <Code className="w-6 h-6" />,
      number: "50K+",
      label: "Lines of Code",
      description: "Swift, Dart & JS"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building exceptional mobile experiences across iOS and Flutter platforms that connect people and solve real-world problems
          </p>
        </div>
        
        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-primary">
                  {achievement.icon}
                </div>
                <div className="text-2xl mb-1">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p>
              I'm a Professional iOS & Flutter Developer with over 7 years of experience building 
              innovative mobile applications that have reached millions of users worldwide. 
              My expertise spans native iOS development with Swift and SwiftUI, as well as 
              cross-platform solutions using Flutter and React Native.
            </p>
            <p>
              Throughout my career, I've worked with startups and established companies, 
              delivering scalable mobile solutions that are not only visually appealing but also 
              performant and user-friendly. I leverage FlutterFlow to accelerate development while 
              maintaining customization and scalability.
            </p>
            <p>
              I focus on creating apps that are performant, scalable, and user-friendly. When I'm not coding, 
              you can find me contributing to open-source projects or exploring new technologies in the mobile development space.
            </p>
            
            <div className="space-y-3">
              <h4>Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">SwiftUI 6.0</Badge>
                <Badge variant="outline">Flutter 3.27</Badge>
                <Badge variant="outline">React Native 0.75</Badge>
                <Badge variant="outline">FlutterFlow AI</Badge>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">iOS Development</h3>
                <p className="text-muted-foreground">
                  Expertise in Swift, SwiftUI, UIKit, and the complete iOS development 
                  ecosystem from concept to App Store deployment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Flutter & Cross-Platform</h3>
                <p className="text-muted-foreground">
                  Building beautiful, natively compiled applications for mobile from a single 
                  codebase using Flutter, React Native, and FlutterFlow.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Mobile Architecture</h3>
                <p className="text-muted-foreground">
                  Proficient in MVVM, Clean Architecture, BLoC pattern, and 
                  building maintainable, testable mobile applications across platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}