'use client'
import { useState } from "react";

export default function Home() {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);

  const slides1 = ["/pic.jpg", "/proyecto1-2.jpg", "/proyecto1-3.jpg"];
  const slides2 = ["/proyecto2-1.jpg", "/proyecto2-2.jpg", "/proyecto2-3.jpg"];
  const slides3 = ["/proyecto3-1.jpg", "/proyecto3-2.jpg", "/proyecto3-3.jpg"];

  // Función para ir al siguiente slide
  const nextSlide = (currentSlide, setCurrentSlide, slides) => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Regresar al primer slide si estamos en el último
    }
  };

  // Función para ir al slide anterior
  const prevSlide = (currentSlide, setCurrentSlide, slides) => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slides.length - 1); // Regresar al último slide si estamos en el primero
    }
  };

  return (
    <main className="flex flex-col items-center text-center bg-darkTeal text-textWhite min-h-screen">
      {/* Sección 1 - Introducción */}
      <section className="relative w-full min-h-[400px] bg-lightBlue flex flex-col justify-center items-center overflow-hidden">
        <img src="/esp.webp" alt="Espiral 1" className="absolute top-10 left-10 w-40 h-40" />
        <img src="/des.webp" alt="Espiral 2" className="absolute top-10 right-10 w-40 h-50" />
        <h1 className="absolute top-20 z-10 left-1/2 transform -translate-x-1/2 text-5xl font-extrabold font-serif text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-400 from-pink-300">Hola! </span>Soy America</h1>
        <p className="absolute font-serif mt-[-20]">Desarrolladora web</p>
        <div className="absolute flex gap-6 mt-20 top-60">
          <a href="#proyectos" className="bg-gradient-to-br from-[#0097b2] to-[#acd3db] font-medium text-textWhite px-6 py-2 rounded-full transition-transform hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-gray-500/40 ">Proyectos</a>
          <a href="#contacto" className="bg-gradient-to-br from-[#0097b2] to-[#acd3db] font-medium text-textWhite px-6 py-2 rounded-full transition-transform hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-gray-500/40">Contacto</a>
        </div>
      </section>
      <section className="relative w-full min-h-[0px] bg-lightBlue flex flex-col justify-center items-center overflow-hidden">
      <div className="bottom-0 left-0 w-full h-50">
          <svg viewBox="0 0 1440 200" className="w-full">
            <rect width="1440" height="100" y="101" fill="#0097b2"></rect>
            <path fill="#b4dee6" d="M0,100 C480,200 960,200 1440,100"></path>
          </svg>
        </div>
      </section>

      {/* Sección 2 - Sobre mí */}
      <section className="relative w-full min-h-[500px] bg-darkTeal flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-3xl font-serif absolute top-1 left-1/2 transform -translate-x-1/2 text-textWhite">Sobre Mí</h2>
        <img src="/pic.jpg" alt="Perfil" className="mt-[-200px] w-40 h-40 p-1 rounded-full ring-2 ring-[#b4dee6] ml-[-500px]" />
        <p className="w-1/2 font-serif mt-[-100px] mr-[-200px]">Hola, soy America, una desarrolladora web con pasión por crear soluciones tecnológicas. 
          Me encanta aprender y crear aplicaciones modernas. ¡Estoy emocionada de compartir mis proyectos contigo!</p>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 299" className="w-full">
            <path fill="#b4dee6" d="M0,300 C480,200 960,200 1440,300"></path>
          </svg>
        </div>
      </section>

      {/* Sección 3 - Proyectos */}
      <section id="proyectos" className="relative w-full min-h-screen bg-lightBlue flex flex-col justify-center items-center">
        <h2 className="text-3xl font-serif absolute top-0 left-1/2 transform -translate-x-1/2 font-bold">Proyectos</h2>

        {/* Carrusel 1 */}
        <div className="w-full h-64 mt-10 flex gap-10 items-start">
          <div className="w-1/2 ml-10 text-center text-darkTeal">
            <h3 className="text-2xl font-serif mb-4">Dodge the slime!</h3>
            <p className="text-justify">Un juego móvil desarrollado en Godot en el que el jugador debe esquivar slimes que aparecen aleatoriamente en la pantalla. 
              El objetivo es sobrevivir el mayor tiempo posible mientras la dificultad aunmenta progresivamente.</p>
            <p>Tecnologias usadas: Godot Engine, GDScript.</p>
            <div className="felx items-center">
              <a href="https://github.com/Amerikg/SimulacionPorComputadora/tree/445bb88fd17851077c5949d1fc27da89cd8b1ed9/Juego2D" className="inline-flex items-center justify-center h-10 p-5 mt-5 text-base font-medium text-lightBlue rounded-lg bg-darkTeal hover:text-purple-100 hover:bg-purple-500">
                  <svg aria-hidden="true" className="w-11 h-5 me-3" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4151_63004)">
                      <image href="/github.png" className="w-8 h-8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4151_63004 ">
                        <rect width="22" height="30.1244" fill="#b4dee6" transform="translate(0 -0.000244141)"/>
                      </clipPath>
                    </defs>
                  </svg>                                              
                  <span className="w-full">Ver repositorio</span>
                  <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a> 
              {/*<a href="https://github.com/Amerikg/Mi-portafolio" className="ml-2 underline hover:decoration-pink-500">Github</a>*/}
            </div>
          </div>
          <div className="w-1/2 relative mt-10 mr-10">
            <img
              src={slides1[currentSlide1]}
              alt="Proyecto 1 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide1, setCurrentSlide1, slides1)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide1, setCurrentSlide1, slides1)}>
              &#10095;
            </div>
          </div>
        </div>

        {/* Carrusel 2 */}
        <div className="w-full h-64 mt-10 flex gap-10 items-center bg-whiteBlue">
          <div className="w-1/2 relative">
            <img
              src={slides2[currentSlide2]}
              alt="Proyecto 2 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide2, setCurrentSlide2, slides2)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide2, setCurrentSlide2, slides2)}>
              &#10095;
            </div>
          </div>
          <div className="w-1/2 text-left">
            <h3 className="text-2xl font-serif mb-4">Aplicacion Movil de Aprendizaje Didactico</h3>
            <p>
            </p>
            <p>Tecnologias usadas:</p>
            <p>Github</p>
          </div>
        </div>

        {/* Carrusel 3 */}
        <div className="w-full h-64 mt-10 flex gap-10 items-start mb-10">
          <div className="w-1/2 text-left">
            <h3 className="text-2xl font-serif mb-4">Aplicacion Movil del Clima</h3>
            <p>Una aplicacion desarrollada con React.js y Android Studio que muestra información meteorológica en tiempo real utilizando ua API de clima.
              Permite a los usuarios consultar la temperatura, humedad y condiciones climáticas de cualquier ciudad.
            </p>
            <p>Tecnologias usadas: React.js, Android Studio.</p>
            <p>Github</p>
          </div>
          <div className="w-1/2 relative">
            <img
              src={slides3[currentSlide3]}
              alt="Proyecto 3 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide3, setCurrentSlide3, slides3)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide3, setCurrentSlide3, slides3)}>
              &#10095;
            </div>
          </div>
        </div>

       {/* Carrusel 4 */}
        <div className="w-full h-[350px] mt-50 flex gap-10 items-center bg-whiteBlue mb-5">
          <div className="w-1/2 relative">
            <img
              src={slides2[currentSlide2]}
              alt="Proyecto 2 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide2, setCurrentSlide2, slides2)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide2, setCurrentSlide2, slides2)}>
              &#10095;
            </div>
          </div>
          <div className="w-1/2 text-left">
            <h3 className="text-2xl font-serif mb-3 mt-[-40]">Deteccion de Vehiculos en Tiempo Real</h3>
            <p>Un modelo de visión por computadora desarrollado en MATLAB que utiliza Faster R-CNN para detectar y rastrear vehiculos en tiempo real.
              Implementa técnicas de procesamiento de imágenes y aprendizaje profundo para mejorar la precision de detección.
            </p>
            <p>Tecnologias usadas: MATLAB, Faster R-CNN, Deep Laerning Toolbox.</p>
            <p>Github</p>
          </div>
        </div>
        {/* Carrusel 5 */}
        <div className="w-full h-64 mt-10 flex gap-10 items-center mb-10">
          <div className="w-1/2 text-left">
            <h3 className="text-2xl font-serif mb-4">Analizador de Código</h3>
            <p>Un analizador de código desarrollado en Python que procesa un flujo de caracteres de entrada y realiza análisis léxico, sintáctico y semántico. 
              Permite la lectura de texto manualmente o desde archivos .txt, y cuenta con una interfaz gráfica que muestra los resultados del análisi de manera clara e intuitiva.
            </p>
            <p>Tecnologias usadas: Python, TKinter.</p>
            <p>Github</p>
          </div>
          <div className="w-1/2 relative">
            <img
              src={slides3[currentSlide3]}
              alt="Proyecto 3 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide3, setCurrentSlide3, slides3)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide3, setCurrentSlide3, slides3)}>
              &#10095;
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 180" className="w-full">
            <rect width="1440" height="100" y="101" fill="#0097b2"></rect>
            <path fill="#b4dee6" d="M0,100 C480,200 960,200 1440,100"></path>
          </svg>
        </div>
      </section>

      {/* Footer - Contacto */}
      <footer id="contacto" className="w-full h-[50px] bg-darkTeal flex justify-center gap-[40px] items-center">
        <div className="flex items-center">
            <img src="/circulo-sobre.png" alt="Email" className="w-6 h-6" />
            <a href= "mailto:amelizruiz@gmail.com" className="ml-2" > amelizruiz@gmail.com </a>
        </div>
        <div className="flex items-center">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            <a href="https://www.linkedin.com/in/america-ruiz-gutierrez-42462113a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="ml-2">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
