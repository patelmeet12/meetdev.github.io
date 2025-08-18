import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Linkedin, Github, Download, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to your backend
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', projectType: '', timeline: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your mobile app idea to life? Let's discuss your project and 
            explore how we can create exceptional mobile experiences together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span>alex.chen.ios@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span>+1 (555) 234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>San Francisco Bay Area, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-6">Connect & Resources</h3>
              <div className="flex space-x-4 mb-6">
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume & Portfolio PDF
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Available for Projects</CardTitle>
                <CardDescription>
                  Currently accepting new mobile development projects and consulting opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="text-green-600">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span>Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Start</span>
                    <span>2-4 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What I Can Help With</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• iOS app development with Swift & SwiftUI</li>
                  <li>• Cross-platform apps with Flutter & React Native</li>
                  <li>• FlutterFlow rapid prototyping & development</li>
                  <li>• Legacy app modernization & migration</li>
                  <li>• Performance optimization & debugging</li>
                  <li>• App Store & Play Store submission</li>
                  <li>• Code reviews & architecture consulting</li>
                  <li>• Team mentoring & technical leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Start Your Project</CardTitle>
              <CardDescription>
                Tell me about your mobile app idea and let's discuss how I can help bring it to life.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Project Type</Label>
                    <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-app">New Mobile App</SelectItem>
                        <SelectItem value="cross-platform">Cross-Platform Development</SelectItem>
                        <SelectItem value="ios-app">iOS App Development</SelectItem>
                        <SelectItem value="flutter-app">Flutter App Development</SelectItem>
                        <SelectItem value="react-native">React Native Development</SelectItem>
                        <SelectItem value="flutterflow">FlutterFlow Development</SelectItem>
                        <SelectItem value="existing-app">Improve Existing App</SelectItem>
                        <SelectItem value="migration">Platform Migration</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="team-augmentation">Team Augmentation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Project timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-months-plus">6+ months</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Budget Range</Label>
                  <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under $25K</SelectItem>
                      <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                      <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                      <SelectItem value="100k-plus">$100K+</SelectItem>
                      <SelectItem value="hourly">Hourly Rate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your mobile app idea, platform preferences, features, target audience, and any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Project Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}