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
      description: "Swift & Objective-C"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building exceptional iOS experiences that connect people and solve real-world problems
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
              I'm a Senior iOS Developer with over 8 years of experience building 
              innovative mobile applications that have reached millions of users worldwide. 
              My journey began with Objective-C and evolved with Swift, and I've been 
              passionate about iOS development ever since the first iPhone was released.
            </p>
            <p>
              Throughout my career, I've worked with startups and Fortune 500 companies, 
              leading development teams and architecting scalable iOS solutions. I specialize 
              in SwiftUI, Combine, Core Data, and modern iOS patterns like MVVM and Clean Architecture.
            </p>
            <p>
              I'm particularly passionate about performance optimization, accessibility, 
              and creating delightful user experiences that make complex tasks feel simple 
              and intuitive.
            </p>
            
            <div className="space-y-3">
              <h4>Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">SwiftUI 6.0</Badge>
                <Badge variant="outline">iOS 18 APIs</Badge>
                <Badge variant="outline">Vision Pro Development</Badge>
                <Badge variant="outline">Swift Concurrency</Badge>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">iOS App Development</h3>
                <p className="text-muted-foreground">
                  Expertise in Swift, SwiftUI, UIKit, and the complete iOS development 
                  ecosystem from concept to App Store deployment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Architecture & Design Patterns</h3>
                <p className="text-muted-foreground">
                  Proficient in MVVM, Clean Architecture, Coordinator Pattern, and 
                  building maintainable, testable iOS applications.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Team Leadership</h3>
                <p className="text-muted-foreground">
                  Experience leading iOS development teams, mentoring junior developers, 
                  and establishing best practices for code quality and collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}