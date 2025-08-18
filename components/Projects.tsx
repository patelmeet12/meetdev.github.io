import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Download, Star } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "FitTracker Pro",
      description: "A comprehensive fitness tracking app with workout planning, progress analytics, and social features. Built with SwiftUI and HealthKit integration.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tags: ["SwiftUI", "HealthKit", "Core Data", "CloudKit"],
      platform: "iOS",
      appStoreUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { downloads: "50K+", rating: "4.9", reviews: "1.2K" }
    },
    {
      title: "EcoCommerce",
      description: "Cross-platform e-commerce app for sustainable products with Flutter. Features include real-time inventory, payment integration, and carbon footprint tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["Flutter", "Dart", "Firebase", "Stripe"],
      platform: "Cross-Platform",
      appStoreUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { downloads: "100K+", rating: "4.8", reviews: "3.5K" }
    },
    {
      title: "TaskMaster",
      description: "An intelligent task management app built with React Native. Features AI-powered scheduling, team collaboration, and cross-platform synchronization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React Native", "TypeScript", "Redux", "Expo"],
      platform: "Cross-Platform",
      appStoreUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { downloads: "85K+", rating: "4.7", reviews: "2.8K" }
    },
    {
      title: "WeatherWise",
      description: "Beautiful weather app with hyperlocal forecasts, severe weather alerts, and stunning visualizations. Featured by Apple.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["SwiftUI", "WeatherKit", "MapKit", "WidgetKit"],
      platform: "iOS",
      appStoreUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { downloads: "200K+", rating: "4.7", reviews: "8.1K" }
    },
    {
      title: "MindfulMoments",
      description: "Meditation and mindfulness app built with FlutterFlow. Features guided sessions, progress tracking, and community challenges.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      tags: ["FlutterFlow", "Firebase", "Stripe", "Push Notifications"],
      platform: "Cross-Platform",
      appStoreUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { downloads: "75K+", rating: "4.6", reviews: "2.1K" }
    },
    {
      title: "FoodieFinds",
      description: "Restaurant discovery app with AR menu scanning, social reviews, and personalized recommendations using machine learning.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      tags: ["SwiftUI", "ARKit", "Vision", "MapKit"],
      platform: "iOS",
      appStoreUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { downloads: "30K+", rating: "4.5", reviews: "900" }
    }
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile applications I've built across iOS, Flutter, and React Native platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-orange-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
                  <div className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{project.stats.rating}</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge variant="outline" className="text-xs">{project.platform}</Badge>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{project.stats.downloads} downloads</span>
                    <span>{project.stats.reviews} reviews</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      App Store
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}