import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, MapPin, Star } from "lucide-react";

interface Province {
  id: string;
  name: string;
  stories: Story[];
  color: string;
  x: number;
  y: number;
}

interface Story {
  id: string;
  title: string;
  description: string;
  difficulty: "SD" | "SMP";
  completed: boolean;
  rating: number;
}

const InteractiveMap = () => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);

  const provinces: Province[] = [
    {
      id: "jawa",
      name: "Jawa",
      x: 45,
      y: 65,
      color: "hsl(var(--primary))",
      stories: [
        {
          id: "jaka-tarub",
          title: "Jaka Tarub dan Nawang Wulan",
          description: "Kisah seorang pemuda yang menikahi bidadari dari kayangan",
          difficulty: "SMP",
          completed: false,
          rating: 4.8
        }
      ]
    },
    {
      id: "sumatera", 
      name: "Sumatera",
      x: 20,
      y: 40,
      color: "hsl(var(--secondary))",
      stories: [
        {
          id: "malin-kundang",
          title: "Malin Kundang",
          description: "Cerita tentang anak durhaka yang dikutuk menjadi batu",
          difficulty: "SMP", 
          completed: false,
          rating: 4.9
        }
      ]
    },
    {
      id: "kalimantan",
      name: "Kalimantan", 
      x: 55,
      y: 45,
      color: "hsl(var(--accent))",
      stories: [
        {
          id: "putri-karang-melenu",
          title: "Putri Karang Melenu",
          description: "Legenda putri cantik dari Kalimantan Selatan",
          difficulty: "SMP",
          completed: false,
          rating: 4.7
        }
      ]
    },
    {
      id: "bali",
      name: "Bali",
      x: 55,
      y: 70,
      color: "hsl(var(--earth))",
      stories: [
        {
          id: "calon-arang",
          title: "Calon Arang",
          description: "Cerita tentang janda sakti dari Girah",
          difficulty: "SMP",
          completed: false,
          rating: 4.6
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm p-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Peta <span className="text-primary">Nusantara</span> Interaktif
          </h1>
          <p className="text-muted-foreground text-lg">
            Klik provinsi untuk menjelajahi cerita rakyat dari berbagai daerah
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="relative w-full h-96 bg-gradient-island rounded-lg overflow-hidden">
                {/* SVG Map of Indonesia */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)" }}
                >
                  {provinces.map((province) => (
                    <g key={province.id}>
                      {/* Province Circle */}
                      <circle
                        cx={province.x}
                        cy={province.y}
                        r="8"
                        fill={province.color}
                        className="cursor-pointer transition-all duration-300 hover:r-10 animate-pulse-glow"
                        onClick={() => setSelectedProvince(province)}
                      />
                      
                      {/* Province Label */}
                      <text
                        x={province.x}
                        y={province.y - 12}
                        textAnchor="middle"
                        className="fill-foreground text-xs font-semibold cursor-pointer"
                        onClick={() => setSelectedProvince(province)}
                      >
                        {province.name}
                      </text>
                      
                      {/* Story Count Badge */}
                      <circle
                        cx={province.x + 6}
                        cy={province.y - 6}
                        r="3"
                        fill="hsl(var(--warning))"
                        className="cursor-pointer"
                      />
                      <text
                        x={province.x + 6}
                        y={province.y - 4}
                        textAnchor="middle"
                        className="fill-white text-xs font-bold cursor-pointer"
                      >
                        {province.stories.length}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              {/* Map Legend */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  Tersedia
                </Badge>
                <Badge variant="outline" className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-muted rounded-full" />
                  Segera Hadir
                </Badge>
              </div>
            </Card>
          </div>

          {/* Province Details */}
          <div>
            {selectedProvince ? (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {selectedProvince.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedProvince.stories.map((story) => (
                    <Card key={story.id} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{story.title}</h4>
                          <Badge variant={story.difficulty === "SMP" ? "default" : "secondary"}>
                            {story.difficulty}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {story.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-warning text-warning" />
                            <span className="text-sm">{story.rating}</span>
                          </div>
                          
                          <Button size="sm" className="bg-gradient-hero">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Baca Cerita
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Pilih Provinsi</h3>
                  <p className="text-muted-foreground">
                    Klik pada provinsi di peta untuk melihat cerita rakyat yang tersedia
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
