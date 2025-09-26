import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Trophy, MapPin } from "lucide-react";
import heroImage from "@/assets/indonesia-map-hero.jpg";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "student",
      title: "Murid",
      description: "Jelajahi cerita rakyat Indonesia dan kumpulkan XP!",
      icon: BookOpen,
      color: "bg-gradient-hero",
      features: ["Baca cerita rakyat", "Main kuis seru", "Kumpulkan stiker", "Naik level"]
    },
    {
      id: "teacher", 
      title: "Guru",
      description: "Kelola kelas dan pantau progress murid",
      icon: Users,
      color: "bg-gradient-island",
      features: ["Buat kelas", "Pantau progress", "Laporan lengkap", "Kelola murid"]
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Peta Nusantara Interaktif",
      description: "Jelajahi Indonesia dengan peta interaktif yang penuh cerita"
    },
    {
      icon: BookOpen,
      title: "Cerita Rakyat Asli", 
      description: "Baca dan dengar cerita rakyat dari berbagai daerah"
    },
    {
      icon: Trophy,
      title: "Gamifikasi Seru",
      description: "Kumpulkan XP, stiker, dan badge dari setiap petualangan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Cerita Nusantara Interaktif
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Jelajahi <span className="text-primary">Cerita Rakyat</span>
              <br />
              <span className="text-secondary">Indonesia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Platform edukasi interaktif untuk anak SMP yang memadukan cerita rakyat, 
              gamifikasi, dan teknologi untuk pembelajaran yang menyenangkan.
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card 
                  key={role.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                    selectedRole === role.id ? 'border-primary shadow-lg' : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full ${role.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
                    <p className="text-muted-foreground mb-6">{role.description}</p>
                    
                    <div className="space-y-2">
                      {role.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full mt-6 ${role.id === 'student' ? 'bg-gradient-hero' : 'bg-gradient-island'} hover:opacity-90`}
                      size="lg"
                    >
                      Masuk sebagai {role.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Fitur <span className="text-primary">Unggulan</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Mulai Petualangan Sekarang!
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa yang telah menjelajahi kekayaan cerita rakyat Indonesia
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Daftar Gratis
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
