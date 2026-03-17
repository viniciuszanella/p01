import React, { useState } from 'react';
import { CheckCircle2, Star, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Leaf, Heart, Droplets } from 'lucide-react';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-sand-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-serif font-medium text-lg text-sand-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-terracotta-500 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-terracotta-500 flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sand-800 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50 font-sans text-sand-900 selection:bg-sage-100 selection:text-sage-900">
      {/* Top Banner */}
      <div className="bg-terracotta-600 text-white text-center py-2 px-4 text-sm font-medium tracking-wide">
        ✨ OFERTA ESPECIAL: 50% DE DESCUENTO SOLO HOY ✨
      </div>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-current" />
                <span>Más de 3.100 alumnas felices</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-light leading-[1.1] mb-6 text-balance">
                Crea tu propia <span className="italic text-sage-700">cosmética natural</span> desde casa.
              </h1>
              <p className="text-lg text-sand-800 mb-8 leading-relaxed max-w-lg">
                Descubre 50 recetas probadas para cuidar tu piel y cabello con ingredientes puros, libres de tóxicos y respetuosos con el medio ambiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#comprar" className="inline-flex justify-center items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 shadow-lg shadow-terracotta-500/30">
                  Quiero el recetario ahora <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-sand-800 font-medium">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-sand-50" />
                  <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-8 h-8 rounded-full border-2 border-sand-50" />
                  <img src="https://i.pravatar.cc/100?img=9" alt="User" className="w-8 h-8 rounded-full border-2 border-sand-50" />
                </div>
                <span>Únete a nuestra comunidad</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-sage-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
              <img 
                src="/livro-principal.jpg" 
                alt="Ebook 50 Recetas de Cosmética Natural" 
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">¿Por qué elegir la cosmética natural?</h2>
            <p className="text-sand-800">Transforma tu rutina de cuidado personal con ingredientes que tu piel realmente necesita y reconoce.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-sage-50 rounded-full flex items-center justify-center mb-6 text-sage-600">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">100% Libre de Tóxicos</h3>
              <p className="text-sand-800 text-sm leading-relaxed">Dile adiós a los parabenos, sulfatos y fragancias artificiales que irritan tu piel y dañan tu salud a largo plazo.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-sage-50 rounded-full flex items-center justify-center mb-6 text-sage-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Nutrición Real</h3>
              <p className="text-sand-800 text-sm leading-relaxed">Aprovecha el poder de las plantas, aceites esenciales y mantecas naturales para una piel radiante y sana.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-sage-50 rounded-full flex items-center justify-center mb-6 text-sage-600">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Fácil y Económico</h3>
              <p className="text-sand-800 text-sm leading-relaxed">Aprende a crear tus propios productos con ingredientes accesibles, ahorrando dinero mientras te cuidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Lo que encontrarás en este recetario</h2>
              <p className="text-sand-800 mb-8">Un manual completo, paso a paso, diseñado tanto para principiantes como para quienes ya tienen experiencia en cosmética natural.</p>
              
              <ul className="space-y-4">
                {[
                  "Cremas hidratantes faciales y corporales",
                  "Sérums antienvejecimiento y contorno de ojos",
                  "Champús sólidos y mascarillas capilares",
                  "Desodorantes naturales efectivos",
                  "Bálsamos labiales y exfoliantes suaves",
                  "Guía de aceites esenciales y sus propiedades"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sage-600 flex-shrink-0" />
                    <span className="text-sand-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop" alt="Ingredientes naturales" className="rounded-2xl w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop" alt="Preparación de cosmética" className="rounded-2xl w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 flex-shrink-0">
              <img 
                src="/autora.png" 
                alt="Carla Mendoza" 
                className="w-full h-full object-cover rounded-full border-4 border-sage-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop';
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif mb-2">Hola, soy Carla Mendoza</h2>
              <p className="text-sage-700 font-medium mb-4">Cosmetóloga Natural & Formuladora</p>
              <p className="text-sand-800 leading-relaxed">
                Hace 5 años decidí dejar de aplicar químicos en mi piel y comencé a formular mis propios productos. El cambio fue tan radical que decidí compartir mis mejores recetas. Este libro es el resultado de años de prueba, error y perfeccionamiento para traerte fórmulas que realmente funcionan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Lo que dicen nuestras alumnas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "María G.", text: "Nunca pensé que hacer mi propia crema fuera tan fácil. Mi piel con rosácea ha mejorado muchísimo desde que uso la receta #12." },
              { name: "Laura P.", text: "El champú sólido me ha cambiado la vida. Mi pelo dura limpio más días y he dejado de usar envases de plástico. ¡Totalmente recomendado!" },
              { name: "Carmen S.", text: "Las explicaciones son súper claras. Ya he hecho regalos de Navidad con estas recetas y a toda mi familia le han encantado." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-4 text-terracotta-500">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sand-800 text-sm italic mb-4">"{t.text}"</p>
                <p className="font-serif font-medium">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Offer */}
      <section id="comprar" className="py-24 bg-sage-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Empieza a cuidarte de forma natural hoy</h2>
          <p className="text-sage-100 mb-10 text-lg">Acceso inmediato al Ebook en formato PDF + 2 Bonus Exclusivos.</p>
          
          <div className="bg-white text-sand-900 rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
            <div className="uppercase tracking-widest text-sm font-bold text-terracotta-600 mb-2">Oferta Especial</div>
            <div className="flex justify-center items-baseline gap-2 mb-6">
              <span className="text-3xl text-sand-400 line-through font-serif">$16.66</span>
              <span className="text-6xl font-serif font-medium text-sage-800">$8.33</span>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sage-600" /> Ebook 50 Recetas (PDF)</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sage-600" /> BONUS: Guía de Conservantes Naturales</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sage-600" /> BONUS: Etiquetas imprimibles</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sage-600" /> Acceso de por vida</li>
            </ul>

            <a href="https://pay.hotmart.com/G104938228E?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="block w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-terracotta-500/20 mb-4 text-center">
              Comprar Ahora por $8.33 USD
            </a>
            <div className="flex items-center justify-center gap-2 text-sm text-sand-500">
              <ShieldCheck className="w-4 h-4" /> Pago 100% seguro
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-2">
            <FaqItem 
              question="¿Necesito experiencia previa?" 
              answer="No, el libro está diseñado para que cualquier persona pueda empezar desde cero. Las instrucciones son claras y detalladas paso a paso." 
            />
            <FaqItem 
              question="¿Son caros los ingredientes?" 
              answer="La mayoría de los ingredientes son accesibles y muchos probablemente ya los tengas en tu cocina (como aceite de oliva, avena o miel). También incluimos una guía de dónde comprar ingredientes más específicos a buen precio." 
            />
            <FaqItem 
              question="¿En qué formato está el libro?" 
              answer="Es un libro digital (Ebook) en formato PDF. Podrás descargarlo inmediatamente después de la compra y leerlo en tu móvil, tablet u ordenador, o imprimirlo si lo prefieres." 
            />
            <FaqItem 
              question="¿Qué pasa si no me gusta?" 
              answer="Ofrecemos una garantía de devolución de 7 días. Si sientes que el contenido no es para ti, te devolvemos el 100% de tu dinero sin hacer preguntas." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sand-900 text-sand-200 py-12 text-center text-sm">
        <div className="max-w-5xl mx-auto px-6">
          <p className="mb-4">© {new Date().getFullYear()} Carla Mendoza Cosmética Natural. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
