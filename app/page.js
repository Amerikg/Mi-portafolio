'use client'
import { useState } from "react";

export default function Home() {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const [currentSlide5, setCurrentSlide5] = useState(0);

  const slides1 = ["/Img/P1/DTS1.webp", "/Img/P1/DTS2.webp"];
  const slides2 = ["/proyecto2-1.jpg", "/proyecto2-2.jpg", "/proyecto2-3.jpg"];
  const slides3 = ["/proyecto3-1.jpg", "/proyecto3-2.jpg", "/proyecto3-3.jpg"];
  const slides4 = ["/proyecto4-1.jpg", "/proyecto4-2.jpg", "/proyecto4-3.jpg"];
  const slides5 = ["/Img/P5/AC1.webp", "/Img/P5/AC2.webp", "/Img/P5/AC3.webp"];

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
  function zoomImage(src) {
    const overlay = document.getElementById('overlay');
    const zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.src = src;
    overlay.style.display = 'flex';
  } 
  function closeZoom() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }

  return (
    <main className="flex flex-col items-center text-center bg-darkTeal text-textWhite min-h-screen">
      {/* Sección 1 - Introducción */}
      <section className="relative w-full min-h-[400px] bg-lightBlue flex flex-col justify-center items-center overflow-hidden">
        <img src="/Img/H/esp.webp" alt="Espiral 1" className="absolute top-10 left-10 w-40 h-40" />
        <img src="/Img/H/des.webp" alt="Espiral 2" className="absolute top-10 right-10 w-40 h-50" />
        <h1 className="absolute top-20 z-10 left-1/2 transform -translate-x-1/2 text-5xl font-extrabold font-serif text-violet-50"><span class="text-transparent bg-clip-text bg-gradient-to-r to-violet-400 from-rose-400">Hola! </span>Soy America</h1>
        <p className="absolute font-serif mt-[-20]">Desarrolladora web</p>
        <div className="absolute flex gap-6 mt-20 top-60">
          <a href="#proyectos" className="bg-gradient-to-br from-[#0097b2] to-violet-400 font-medium text-indigo-100 px-6 py-2 rounded-full transition-transform hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-gray-500/40 ">Proyectos</a>
          <a href="#contacto" className="bg-gradient-to-br from-[#0097b2] to-violet-400 font-medium text-indigo-100 px-6 py-2 rounded-full transition-transform hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-gray-500/40">Contacto</a>
        </div>
      </section>
      <section className="relative w-full min-h-[0px] bg-lightBlue flex flex-col justify-center items-center overflow-hidden">
      <div className="bottom-0 left-0 w-full h-50">
          <svg viewBox="0 0 1440 200" className="w-full">
            <defs>
              <filter id="shadow" x="-50%" y="0" width="200%" height="200%">
                <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.5"/>
              </filter>
            </defs>
            <rect width="1440" height="100" y="101" fill="#0097b2"></rect>
            <path fill="#b4dee6" d="M0,100 C480,200 960,200 1440,100" filter="url(#shadow)"></path>
          </svg>
        </div>
      </section>

      {/* Sección 2 - Sobre mí */}
      <section className="relative w-full min-h-[400px] bg-darkTeal flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-3xl font-serif absolute top-1 left-1/2 transform -translate-x-1/2 text-textWhite mt-5">Sobre Mí</h2>
        <div className="w-full h-64 mt-10 flex gap-10 items-start ml-2 justify-center">
          <img src="/pic.jpg" alt="Perfil" className="w-40 h-40 p-1 rounded-full ring-2 ring-[#b4dee6]" />
          <p className="w-1/2 font-serif mt-5 text-justify">Hola, soy America, una desarrolladora web con pasión por crear soluciones tecnológicas. 
            Me encanta aprender y crear aplicaciones modernas. ¡Estoy emocionada de compartir mis proyectos contigo!</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 299" className="w-full">
            <defs>
              <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="-5" stdDeviation="5" floodColor="#000000" floodOpacity="0.5"/>
              </filter>
            </defs>
            <path fill="#b4dee6" d="M0,300 C480,200 960,200 1440,300" filter="url(#shadow2)"></path>
          </svg>
        </div>
      </section>

      {/* Sección 3 - Proyectos */}
      <section id="proyectos" className="relative w-full min-h-screen bg-lightBlue flex flex-col justify-center items-center">
        <h2 className="text-3xl font-serif absolute top-0 left-1/2 transform -translate-x-1/2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-fuchsia-500 drop-shadow-lg">Proyectos</h2>

        {/* Carrusel 1 */}
        <div className="w-full mt-10 flex gap-10 items-start">
          <div className="w-1/2 ml-10 text-center text-darkTeal">
            <h3 className="text-2xl font-serif mb-2 text-violet-500">Dodge the slime!</h3>
            <p className="text-justify text-violet-950">Un juego móvil desarrollado en Godot en el que el jugador debe esquivar slimes que aparecen aleatoriamente en la pantalla. 
              El objetivo es sobrevivir el mayor tiempo posible mientras la dificultad aunmenta progresivamente.</p>
            <p className="text-violet-950">Tecnologias usadas: Godot Engine, GDScript.</p>
            <div className="felx items-center mb-5">
              <a href="https://github.com/Amerikg/SimulacionPorComputadora/tree/445bb88fd17851077c5949d1fc27da89cd8b1ed9/Juego2D" className="inline-flex items-center justify-center h-10 p-5 mt-3 text-base font-medium text-violet-200 rounded-lg bg-violet-400 shadow-lg shadow-gray-500/40 hover:text-purple-100 hover:bg-purple-500">
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
            </div>
          </div>
          <div className="w-1/2 relative mt-10 mr-10 mb-5">
            <img
              src={slides1[currentSlide1]}
              alt="Proyecto 1 Imagen"
              className="object-cover w-[200px] h-[300px] rounded-lg mx-auto shadow-lg shadow-gray-500/40 cursor-pointer" onClick={() => zoomImage(slides1[currentSlide1])}
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide1, setCurrentSlide1, slides1)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide1, setCurrentSlide1, slides1)}>
              &#10095;
            </div>
          </div>
          <div id="overlay" className="overlay" onClick={closeZoom}>
              <img id="zoomedImage" className="zoomed-image" />
          </div>
        </div>

        {/* Carrusel 2 */}
        <div className="w-full flex gap-10 items-start bg-whiteBlue">
          <div className="w-1/2 relative mt-10 ml-10">
            <img
              src={slides2[currentSlide2]}
              alt="Proyecto 2 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto shadow-lg shadow-gray-500/40"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide2, setCurrentSlide2, slides2)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide2, setCurrentSlide2, slides2)}>
              &#10095;
            </div>
          </div>
          <div className="w-1/2 mr-10 mt-5 text-center">
            <h3 className="text-2xl font-serif mt-5 mb-4 text-violet-400">Aplicacion Movil de Aprendizaje Didactico</h3>
            <p className="text-violet-900 text-justify"> Aplicacion movil desarrollada en React Native y Android Studio, diseñada para niños de 7 a 14 años.
              La app consta de un juego de memoria donde los jugadores deben emparejar palabras en inglés con sus espectivas imagenes o traducciones.
              A medida que vanzan, el nivel de dificultad aumenta, ayudándolos a expandir su vocabulario de manera interactiva y divertida.
            </p>
            <p className="text-violet-900">Tecnologias usadas:React Native, Android Studio, JavaScript.</p>
            <div className="felx items-center mb-5">
              <a href="https://github.com/Amerikg/Aplicacion-Movil-de-Aprendizaje-Didactico" className="inline-flex items-center justify-center h-10 p-5 mt-5 text-base font-medium text-violet-200 rounded-lg bg-violet-400 shadow-lg shadow-gray-500/40 hover:text-purple-100 hover:bg-purple-500">
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
            </div>
          </div>
        </div>

        {/* Carrusel 3 */}
        <div className="w-full flex gap-10 items-start">
          <div className="w-1/2 ml-10 mt-10">
            <h3 className="text-2xl font-serif mb-4 text-center text-violet-500">Aplicacion Movil del Clima</h3>
            <p className="text-justify text-violet-950">Una aplicacion desarrollada con React.js y Android Studio que muestra información meteorológica en tiempo real utilizando ua API de clima.
              Permite a los usuarios consultar la temperatura, humedad y condiciones climáticas de cualquier ciudad.
            </p>
            <p className="text-center text-violet-950">Tecnologias usadas: React.js, Android Studio.</p>
            <div className="felx items-center mb-5">
              <a href="https://github.com/Amerikg/Aplicacion-Movil-del-Clima" className="inline-flex items-center justify-center h-10 p-5 mt-3 text-base font-medium text-violet-200 rounded-lg bg-violet-400 shadow-lg shadow-gray-500/40 hover:text-purple-100 hover:bg-purple-500">
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
            </div>
          </div>
          <div className="w-1/2 relative mt-10 mr-10">
            <img
              src={slides3[currentSlide3]}
              alt="Proyecto 3 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto shadow-lg shadow-gray-500/40"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide3, setCurrentSlide3, slides3)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide3, setCurrentSlide3, slides3)}>
              &#10095;
            </div>
          </div>
        </div>

       {/* Carrusel 4 */}
        <div className="w-full flex gap-10 items-start bg-whiteBlue">
          <div className="w-1/2 relative mt-10 ml-10">
            <img
              src={slides4[currentSlide4]}
              alt="Proyecto 4 Imagen"
              className="object-cover w-[200px] h-[200px] rounded-lg mx-auto shadow-lg shadow-gray-500/40"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide4, setCurrentSlide4, slides4)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide4, setCurrentSlide4, slides4)}>
              &#10095;
            </div>
          </div>
          <div className="w-1/2 mt-5 mr-10">
            <h3 className="text-2xl font-serif mb-3 text-center text-violet-500">Deteccion de Vehiculos en Tiempo Real</h3>
            <p className="text-justify text-violet-950">Un modelo de visión por computadora desarrollado en MATLAB que utiliza Faster R-CNN para detectar y rastrear vehiculos en tiempo real.
              Implementa técnicas de procesamiento de imágenes y aprendizaje profundo para mejorar la precision de detección.
            </p>
            <p className="twxt-center text-violet-950">Tecnologias usadas: MATLAB, Faster R-CNN, Deep Laerning Toolbox.</p>
            <div className="felx items-center mb-5">
              <a href="https://github.com/Amerikg/Deteccion-de-Vehiculos-en-Tiempo-Real" className="inline-flex items-center justify-center h-10 p-5 mt-5 text-base font-medium text-violet-200 rounded-lg bg-violet-400 shadow-lg shadow-gray-500/40 hover:text-purple-100 hover:bg-purple-500">
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
            </div>
          </div>
        </div>

        {/* Carrusel 5 */}
        <div className="w-full flex gap-10 items-start mb-7">
          <div className="w-1/2 ml-10 mt-5">
            <h3 className="text-2xl font-serif mb-3 text-center text-violet-500">Analizador de Código</h3>
            <p className="text-justify text-violet-950">Un analizador de código desarrollado en Python que procesa un flujo de caracteres de entrada y realiza análisis léxico, sintáctico y semántico. 
              Permite la lectura de texto manualmente o desde archivos .txt, y cuenta con una interfaz gráfica que muestra los resultados del análisi de manera clara e intuitiva.
            </p>
            <p className="text-center text-violet-950">Tecnologias usadas: Python, TKinter.</p>
            <div className="felx items-center">
              <a href="https://github.com/Amerikg/Analizador-de-Codigo" className="inline-flex items-center justify-center h-10 p-5 mt-5 text-base font-medium text-violet-200 rounded-lg bg-violet-400 shadow-lg shadow-gray-500/40 hover:text-purple-100 hover:bg-purple-500">
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
            </div>
          </div>
          <div className="w-1/2 relative mt-10 mr-10">
            <img
              src={slides5[currentSlide5]}
              alt="Proyecto 5 Imagen"
              className="object-cover w-[300px] h-[200px] rounded-lg mx-auto shadow-lg shadow-gray-500/40 cursor-pointer" onClick={()=> zoomImage(slides5[currentSlide5])}
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => prevSlide(currentSlide5, setCurrentSlide5, slides5)}>
              &#10094;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-sky-400/50 text-4xl cursor-pointer" onClick={() => nextSlide(currentSlide5, setCurrentSlide5, slides5)}>
              &#10095;
            </div>
          </div>
          <div id="overlay" className="overlay" onClick={closeZoom}>
              <img id="zoomedImage" className="zoomed-image" />
          </div>
        </div>

        <div className="relative bottom-0 left-0 w-full">
          <svg viewBox="0 70 1440 120" className="w-full">
            <rect width="1440" height="100" y="100" fill="#0097b2"></rect>
            <path fill="#b4dee6" d="M0,100 C480,200 960,200 1440,100" filter="url(#shadow)"></path>
          </svg>
        </div>
      </section>

      {/* Footer - Contacto */}
      <footer id="contacto" className="w-full h-12 bg-darkTeal flex justify-center gap-[40px] items-center">
        <div className="relative flex items-center">
            <img src="/Img/F/circulo-sobre.webp" alt="Email" className="w-6 h-6" />
            <a href= "mailto:amelizruiz@gmail.com" className="ml-2" > amelizruiz@gmail.com </a>
        </div>
        <div className="flex items-center">
            <img src="/Img/F/linkedin.webp" alt="LinkedIn" className="w-6 h-6" />
            <a href="https://www.linkedin.com/in/america-ruiz-gutierrez-42462113a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="ml-2">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
