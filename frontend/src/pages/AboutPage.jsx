import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Award, Users, Globe, Heart, Target, Eye } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on the quality of our equipment and services"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Every solution is tailored to meet our clients' specific needs"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously advancing with the latest laboratory technologies"
    },
    {
      icon: Globe,
      title: "Reliability",
      description: "Dependable equipment and support you can count on"
    }
  ];

  const team = [
    {
      name: "Dr. James Mwangi",
      role: "Managing Director",
      description: "15+ years in medical equipment industry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Sarah Kimani",
      role: "Technical Director", 
      description: "Expert in sterilization technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300&h=300&fit=crop"
    },
    {
      name: "Michael Ochieng",
      role: "Sales Manager",
      description: "Specialized in healthcare solutions", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Biotec Lab established in Nairobi" },
    { year: "2013", event: "First Major Contract", description: "Kenyatta National Hospital partnership" },
    { year: "2017", event: "Expansion", description: "Opened regional service centers" },
    { year: "2020", event: "Digital Transformation", description: "Launched online platform and remote support" },
    { year: "2025", event: "Market Leader", description: "Serving 500+ healthcare facilities" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-100 text-red-800 mb-6">About Biotec Laboratories</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We are here to make a difference
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, Biotec Laboratories (K) Ltd has been at the forefront of providing 
              cutting-edge laboratory and medical equipment solutions to healthcare facilities across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide reliable, high-quality laboratory and medical equipment that enables healthcare 
                  professionals to deliver exceptional patient care while maintaining the highest standards 
                  of safety and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading provider of laboratory equipment in East Africa, known for innovation, 
                  reliability, and exceptional customer service that transforms healthcare delivery 
                  across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.event}</h3>
                        <Badge variant="secondary">{milestone.year}</Badge>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;