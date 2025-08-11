import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Smartphone, Code, Database, Cloud, TestTube, Users } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "iOS Development",
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        { name: "Swift", level: 95 },
        { name: "SwiftUI", level: 92 },
        { name: "UIKit", level: 90 },
        { name: "Objective-C", level: 75 },
        { name: "Xcode", level: 95 },
        { name: "Interface Builder", level: 88 }
      ]
    },
    {
      title: "Architecture & Patterns",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "MVVM", level: 92 },
        { name: "Clean Architecture", level: 88 },
        { name: "Coordinator Pattern", level: 85 },
        { name: "Dependency Injection", level: 82 },
        { name: "Protocol-Oriented Programming", level: 90 },
        { name: "Combine Framework", level: 87 }
      ]
    },
    {
      title: "Apple Frameworks",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Core Data", level: 90 },
        { name: "CloudKit", level: 85 },
        { name: "HealthKit", level: 78 },
        { name: "ARKit", level: 72 },
        { name: "Core ML", level: 75 },
        { name: "WidgetKit", level: 88 }
      ]
    }
  ];

  const additionalSkills = [
    {
      category: "Testing & Quality",
      icon: <TestTube className="w-5 h-5" />,
      skills: ["XCTest", "UI Testing", "TDD", "Snapshot Testing", "Fastlane", "CI/CD"]
    },
    {
      category: "Tools & Services",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["Firebase", "GitHub Actions", "TestFlight", "App Store Connect", "Charles Proxy", "Instruments"]
    },
    {
      category: "Leadership & Collaboration",
      icon: <Users className="w-5 h-5" />,
      skills: ["Team Leadership", "Code Review", "Mentoring", "Agile/Scrum", "Technical Documentation", "App Store Optimization"]
    }
  ];

  const certifications = [
    "Apple Certified iOS Developer",
    "Swift Certified Developer",
    "AWS Mobile Developer",
    "Scrum Master Certified"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive iOS development skills built over 8+ years of professional experience
          </p>
        </div>

        {/* Core Skills with Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {additionalSkills.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl mb-6">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                {cert}
              </Badge>
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              "Experienced in building iOS applications from concept to App Store deployment, 
              with a focus on performance, user experience, and maintainable code architecture."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}