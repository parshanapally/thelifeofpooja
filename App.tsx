import React from 'react';
import { ChevronDown, Sparkles, Moon, BookOpen, Heart, Pen, Calendar, Star, Mail, PenTool, Users, ArrowRight, Menu, X } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-serif text-2xl font-bold text-gray-100">
            Pooja <span className="text-teal-400">Arshanapally</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
            <a href="#book" className="text-gray-300 hover:text-teal-400 transition-colors">Book</a>
            <a href="#substack" className="text-gray-300 hover:text-teal-400 transition-colors">Substack</a>
          </nav>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-teal-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Moon className="w-4 h-4 text-teal-400" />
            <span className="font-sans text-sm text-gray-300">✦ Welcome to my realm ✦</span>
          </div>
        </div>

        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">The Life of</span>
          <br />
          <span className="text-gray-100">Pooja</span>
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Author, storyteller, and weaver of shadows where darkness meets beauty
        </p>
        
        <p className="font-sans text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          From haunting childhood tales to Gothic stories and verse that explore the depths of love, loss, and self-discovery
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-black px-8 py-4 rounded-full font-sans font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Discover My Story
          </button>
          <a 
            href="#book" 
            className="border-2 border-teal-500/50 text-gray-200 hover:bg-teal-500/10 hover:border-teal-400 hover:text-teal-200 px-8 py-4 rounded-full font-sans font-medium text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            View My Book
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-teal-400/70" />
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-teal-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="font-sans text-sm text-gray-300">About the Author</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Meet <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">Pooja Arshanapally</span>
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through words, emotions, and the spaces between light and shadow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Author Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border border-teal-500/20">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                  alt="Pooja Arshanapally" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Pen className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>

          {/* Author Story */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-lg text-gray-200 leading-relaxed mb-6">
                Pooja Arshanapally is an author whose work explores the intricate tapestry of human emotion—love, heartbreak, self-discovery, and the haunting beauty found in life's darker moments.
              </p>
              <p className="font-sans text-lg text-gray-200 leading-relaxed mb-8">
                Her literary journey began in childhood, captivated by the spine-tingling tales of Goosebumps. Those early encounters with the supernatural planted seeds that would later bloom into her own unique voice in Gothic storytelling.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-900/50 border border-gray-700/50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
                <BookOpen className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold text-gray-100 mb-2">Literary Foundation</h4>
                  <p className="font-sans text-gray-300">
                    Childhood fascination with Goosebumps stories shaped her understanding of how fear and wonder can coexist in storytelling.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-900/50 border border-gray-700/50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
                <Heart className="w-8 h-8 text-rose-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold text-gray-100 mb-2">Emotional Depth</h4>
                  <p className="font-sans text-gray-300">
                    Her writing navigates the complex landscape of human relationships, self-discovery, and the beauty found in vulnerability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-900/50 border border-gray-700/50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
                <Pen className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold text-gray-100 mb-2">Gothic Voice</h4>
                  <p className="font-sans text-gray-300">
                    Blending supernatural elements with intimate personal themes, creating a distinctive voice in contemporary Gothic literature.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700/50">
              <blockquote className="font-serif text-xl text-teal-200 italic mb-4">
                "Writing is where I make sense of the world—where shadows become light, and silence finds its voice."
              </blockquote>
              <p className="font-sans text-gray-400">— Pooja Arshanapally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Book Section Component
const BookSection = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "31 Haunting Poems",
      description: "One chilling poem for each night of October"
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Gothic Poetry",
      description: "Supernatural tales meet introspective horror"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Perfect for Halloween",
      description: "Midnight readings and solitary contemplation"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Emotional Journey",
      description: "Exploring love, heartbreak, and self-discovery"
    }
  ];

  return (
    <section id="book" className="py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-rose-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span className="font-sans text-sm text-gray-300">Featured Work</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            The <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">Haunted Wardrobe</span>
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Dare to open the door this Halloween with 31 chilling poems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-96 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center p-8 text-center border border-teal-500/20 backdrop-blur-sm">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-gray-100 mb-6">The Haunted Wardrobe</h3>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500/20 to-rose-500/20 rounded-full flex items-center justify-center border border-teal-500/30">
                    <Moon className="w-10 h-10 text-teal-300" />
                  </div>
                  <p className="font-sans text-teal-200 text-lg mb-2">31 Chilling Poems</p>
                  <p className="font-sans text-gray-400 text-sm">by Pooja Arshanapally</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Book Description */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="font-sans text-lg text-gray-200 leading-relaxed mb-6">
                Inside "The Haunted Wardrobe," you'll journey through haunted landscapes, from the eerie whispers of "The Coven's Whisper" to the mischievous terror of "The Pumpkin King."
              </p>
              <p className="font-sans text-lg text-gray-200 leading-relaxed mb-6">
                Each poem invites you to confront the phantoms that linger in the shadows—unspoken fears, buried secrets, and the ghosts of who we once were.
              </p>
              <p className="font-sans text-lg text-gray-200 leading-relaxed mb-8">
                Perfect for midnight readings, Halloween gatherings, or solitary contemplation, this collection speaks to lovers of Gothic poetry, supernatural tales, and introspective horror.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
                  <div className="text-teal-400 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-100 mb-1">{feature.title}</h4>
                    <p className="font-sans text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-700/50">
              <blockquote className="font-serif text-xl text-teal-200 italic mb-4">
                "Will you face what lurks within your own haunted spaces?"
              </blockquote>
              <p className="font-sans text-gray-300 mb-6">
                Open the door—the ghosts are waiting.
              </p>
              
              <button className="bg-gradient-to-
