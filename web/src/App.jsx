import React from 'react';
import hero from "./assets/HERO.jpg";
import papeleria from "./assets/papeleria.png";
import utils from "./assets/utils.png";
import cuadernos from "./assets/cuadernos.png";
import logo from "./assets/logo.png";

const App = () => {
  const whatsappNumber = "+50558517405"; // You can change this to the real number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=Hola!%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n`;

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-pink-50/30 font-sans text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center">
          <img src={logo} alt="Logo Mini Librería" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        <div className="hidden lg:flex gap-8">
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#precios">Precios</NavLink>
          <NavLink href="#productos">Productos</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-400 hover:bg-pink-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm sm:text-base shrink-0"
        >
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span className="hidden sm:inline">Escríbenos</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="container mx-auto px-4 sm:px-6 py-10 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block bg-pink-100 text-pink-500 px-4 py-1.5 rounded-full text-sm font-medium">
            Tu idea, nosotros la hacemos realidad 💖
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Mini Librería e <br className="hidden md:block" />
            <span className="text-pink-400"> Impresiones</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Todo lo que necesitas en un solo lugar. Calidad, buen precio y atención personalizada para estudiantes y público en general.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#servicios" className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-medium transition-all shadow-md text-center">
              Ver Servicios
            </a>
            <a href="#productos" className="border-2 border-pink-200 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full font-medium transition-all text-center">
              Ver Productos
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 pt-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="text-sm text-gray-600 font-medium text-left">Calidad<br className="hidden sm:block"/>Garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-sm text-gray-600 font-medium text-left">Entrega<br className="hidden sm:block"/>Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">😊</span>
              <span className="text-sm text-gray-600 font-medium text-left">Atención<br className="hidden sm:block"/>Personalizada</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative px-4 md:px-0">
          <div className="bg-pink-200 w-full aspect-square rounded-full absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl"></div>
          <img 
            src={hero}
            alt="Impresora y papelería" 
            className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-video md:aspect-[4/3] mx-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">¿Qué hacemos por ti?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Nuestros <span className="text-pink-400">Servicios</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              { icon: '🖨️', title: 'Impresiones', desc: 'Alta calidad a color y blanco y negro.' },
              { icon: '📄', title: 'Copias', desc: 'Copias nítidas en todos los tamaños.' },
              { icon: '✏️', title: 'Documentos Word', desc: 'Todo lo necesario para estudiar y crear.' },
              { icon: '📝', title: 'Creación de CV', desc: 'Diseñamos tu currículum profesional.' },
              { icon: '📊', title: 'Presentaciones', desc: 'Diseños creativos.' },
              { icon: '✂️', title: 'Otros Servicios', desc: 'Manualidades.' },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-pink-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-4 group-hover:bg-pink-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices & Promotions Section */}
      <section id="precios" className="py-16 md:py-24 bg-pink-50/30 border-y border-pink-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">Nuestras Tarifas</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Precios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Left Column: Promociones 
             <div className="bg-white p-6 md:p-8 rounded-3xl border border-pink-100 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span></span> Promociones por Volumen
              </h3>
              <div className="space-y-4">
                <div className="bg-pink-50/50 p-4 rounded-xl">
                  <h4 className="font-bold text-pink-500 text-lg">+ de 20 páginas</h4>
                  <p className="text-gray-600 mt-1">Impresión B/N: C$ 2.50 c/u</p>
                  <p className="text-gray-600">Impresión Color: C$ 8.00 c/u</p>
                </div>
                <div className="bg-pink-50/50 p-4 rounded-xl">
                  <h4 className="font-bold text-pink-500 text-lg">+ de 50 páginas</h4>
                  <p className="text-gray-600 mt-1">Impresión B/N: C$ 2.00 c/u</p>
                  <p className="text-gray-600">Impresión Color: C$ 7.00 c/u</p>
                </div>
                <div className="bg-pink-50/50 p-4 rounded-xl">
                  <h4 className="font-bold text-pink-500 text-lg">+ de 100 páginas</h4>
                  <p className="text-gray-600 mt-1">¡Súper descuento! Consúltanos por chat para darte el mejor precio.</p>
                </div>
              </div>
            </div>
             */}
           
            {/* Right Column: Precios Base */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-pink-100 shadow-sm">
             
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Impresión B/N Tamaño carta  </span>
                  <span className="font-bold text-gray-800">C$ 4.00</span>
                </li>
                 <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Impresión B/N Tamaño Legal  </span>
                  <span className="font-bold text-gray-800">C$ 5.00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Impresión Color tamaño carta</span>
                  <span className="font-bold text-gray-800">C$ 8.00</span>
                </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Impresión Color tamaño Legal</span>
                  <span className="font-bold text-gray-800">C$ 10.00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Copia B/N tamaño carta</span>
                  <span className="font-bold text-gray-800">C$ 2.00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Copia B/N tamaño Legal</span>
                  <span className="font-bold text-gray-800">C$ 3.00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700">Escaneo de documentos</span>
                  <span className="font-bold text-gray-800">C$ 2.00 / pág</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section id="productos" className="py-16 md:py-24 bg-pink-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">Mini librería</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Nuestros <span className="text-pink-400">Productos</span></h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Útiles Escolares', img: utils },
              { name: 'Cuadernos', img: cuadernos },
              { name: 'Papelería', img: papeleria },
            ].map((product, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="aspect-square rounded-full overflow-hidden mb-3 md:mb-4 border-4 border-white shadow-md">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-medium text-gray-800 text-sm md:text-base">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer / Contact */}
      <footer id="contacto" className="bg-white border-t border-pink-100">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 pb-28 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <ul className="space-y-4 max-w-xs mx-auto md:mx-0 text-left">
                {[
                  'Precios accesibles',
                  'Calidad en cada trabajo',
                  'Atención rápida y amable',
                  'Comprometidos con tus ideas'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-pink-400 shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">Visítanos</h3>
              <div className="space-y-4 text-gray-700 text-sm md:text-base">
                <p className="flex items-start gap-3">
                  <span className="mt-1 shrink-0">📍</span>
                  <span>Oficinas Claro 1 cuadra al sur, Cuadra 1/2 cuadra al oeste</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="shrink-0">📞</span>
                  <span>+505 58517405</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-xl hover:bg-[#20ba59] hover:-translate-y-1 transition-all z-50 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}

export default App;
