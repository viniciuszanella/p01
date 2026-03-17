import React, { useState } from 'react';

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
        {question} <span className="plus">{isOpen ? '−' : '+'}</span>
      </div>
      <div className={`faq-resp ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* BANNER */}
      <div className="banner">
        <span className="stars">★★★★★</span>&nbsp;&nbsp;
        Más de 3.100 mujeres ya fabrican sus propios cosméticos con estas fórmulas
      </div>

      {/* HERO */}
      <div className="hero">
        <div>
          <p className="hero-pre">aprende a crear</p>
          <div className="hero-num">50</div>
          <p className="hero-label">Recetas de Cosmética<br />Natural Artesanal</p>
          <h1 className="hero-headline">Cuida tu piel con lo que la naturaleza ya tiene</h1>
          <p className="hero-sub">sin experiencia previa, sin laboratorio, sin ingredientes caros —</p>
          <p className="hero-destaque">para tu uso personal o para empezar<br />tu propio negocio desde casa</p>
        </div>
        <div className="hero-img">
          <img src="/livro-principal.jpg" alt="Cosmética natural artesanal" />
        </div>
      </div>

      {/* CTA PRIMÁRIO */}
      <div className="cta-wrap">
        <a href="https://pay.hotmart.com/G104938228E?checkoutMode=10" className="btn" target="_blank" rel="noopener noreferrer">¡QUIERO MIS RECETAS!</a>
      </div>

      {/* GALERIA */}
      <div className="galeria">
        <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&q=80" alt="Cremas naturales" />
        <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&q=80" alt="Ingredientes" />
        <img src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?w=300&q=80" alt="Aceites" />
        <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80" alt="Productos" />
      </div>

      {/* IDEAL PARA TI */}
      <div className="sec">
        <h2 className="sec-titulo">ESTA GUÍA ES PARA TI <span>SI...</span></h2>
        <ul className="checks">
          <li>
            <span className="chk">✓</span>
            <span>Quieres <strong>saber exactamente qué pones en tu piel</strong> — sin leer etiquetas con 20 ingredientes que no reconoces.</span>
          </li>
          <li>
            <span className="chk">✓</span>
            <span>Buscas <strong>fabricar tus propios productos</strong> con ingredientes simples, accesibles y que realmente funcionan.</span>
          </li>
          <li>
            <span className="chk">✓</span>
            <span>Quieres <strong>generar ingresos extras</strong> vendiendo cosméticos naturales hechos por ti, sin inversión alta ni riesgo de stock.</span>
          </li>
          <li>
            <span className="chk">✓</span>
            <span>Estás <strong>cansada de gastar en productos industriales</strong> que prometen mucho y entregan resultados mediocres.</span>
          </li>
          <li>
            <span className="chk">✓</span>
            <span>Quieres aprender a preparar <strong>cremas, serums, champús, perfumes y desodorantes</strong> usando solo ingredientes de origen natural.</span>
          </li>
        </ul>
      </div>

      {/* PRODUCTO */}
      <div className="sec">
        <div className="prod-box">
          <p className="prod-titulo">50 Recetas de Cosmética Natural Artesanal</p>
          <div className="prod-desc">
            <p>Un recetario con <strong>50 fórmulas seleccionadas</strong> para que puedas fabricar cosméticos reales desde el primer día — con ingredientes que consigues en cualquier tienda naturista o farmacia.</p>
            <p>Aprenderás a preparar <strong>cremas hidratantes, serums, champús, desodorantes, bálsamos y perfumes</strong> usando solo ingredientes naturales, sin conservantes artificiales y sin necesidad de equipos especiales.</p>
            <p>No es solo un recetario: es un punto de partida. <strong>Cada fórmula incluye medidas exactas, instrucciones paso a paso y tips de conservación</strong> para que tus productos duren más y rindan mejor.</p>
            <p>Diseñado tanto para quien quiere <strong>cuidarse de forma natural y económica</strong> como para quien desea <strong>vender cosméticos artesanales</strong> sin grandes inversiones iniciales.</p>
          </div>
        </div>
      </div>

      {/* AUTORA */}
      <div className="sec">
        <div className="prod-box" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src="/autora.png" alt="Carla Mendoza" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h2 className="sec-titulo" style={{ textAlign: 'left', marginBottom: '16px' }}>Sobre la <span>Autora</span></h2>
            <p className="prod-desc" style={{ margin: 0 }}>
              <strong>Carla Mendoza</strong> es una apasionada de la cosmética natural y formuladora artesanal. Tras años de investigar y probar ingredientes puros, ha recopilado sus mejores recetas para compartirlas contigo. Su misión es empoderar a más mujeres para que tomen el control de lo que aplican en su piel, de forma natural, segura y económica.
            </p>
          </div>
        </div>
      </div>

      {/* TESTIMONIOS */}
      <div className="sec">
        <h2 className="sec-titulo">LO QUE DICEN <span>QUIENES YA ACCEDIERON</span></h2>
        <div className="cta-wrap" style={{ padding: '0 0 20px' }}>
          <a href="https://pay.hotmart.com/G104938228E?checkoutMode=10" className="btn" target="_blank" rel="noopener noreferrer">¡QUIERO ACCEDER!</a>
        </div>
        <div className="test-grid">
          <div className="test">
            <p className="nome">Valentina R. — Colombia</p>
            La crema hidratante del recetario la hice en 20 minutos con aceite de coco y manteca de karité que ya tenía en casa. Mi piel cambió completamente en dos semanas. Y ahora vendo a mis vecinas.
          </div>
          <div className="test">
            <p className="nome">Lorena M. — México</p>
            Lo que más valoré fue la simplicidad. Las instrucciones son claras, los ingredientes son baratos y los resultados son reales. Nada de promesas vacías.
          </div>
          <div className="test">
            <p className="nome">Sofía A. — Argentina</p>
            Llevaba años queriendo aprender esto y no encontraba nada que no fuera complicado o carísimo. Este recetario es diferente — práctico, accesible, y vale mucho más de lo que cobran.
          </div>
          <div className="test">
            <p className="nome">Carmen D. — Perú</p>
            Hice el champú sólido del recetario y fue lo mejor que probé para mi cabello rizado. Mi hija me pidió que le hiciera más. Ahora lo vendo en el mercado los fines de semana.
          </div>
        </div>
      </div>

      {/* ORDER BUMP */}
      <div className="bump-section">
        <div className="bump-inner" style={{ display: 'flex', gap: '30px', alignItems: 'center', textAlign: 'left', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src="/order-bump.png" alt="Tratamientos Capilares Naturales" style={{ width: '220px', borderRadius: '10px', boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }} />
          <div style={{ flex: 1, minWidth: '280px' }}>
            <span className="bump-tag">Oferta especial — solo en este momento</span>
            <h2 className="bump-titulo" style={{ textAlign: 'left' }}>Agrega: Tratamientos Naturales<br />para el Cabello</h2>
            <p className="bump-sub" style={{ textAlign: 'left' }}>
              Un complemento exclusivo con recetas de <strong>mascarillas, tónicos y acondicionadores naturales</strong> para cabello seco, dañado, con caída o sin brillo. Ingredientes naturales, resultados visibles desde la primera aplicación.
            </p>
            <p className="bump-preco" style={{ textAlign: 'left' }}>+ $3.90 USD</p>
            <p className="bump-preco-sub" style={{ textAlign: 'left' }}>se agrega automáticamente a tu pedido</p>
            <a href="https://pay.hotmart.com/G104938228E?checkoutMode=10" className="btn-bump" target="_blank" rel="noopener noreferrer">SÍ, QUIERO AGREGAR ESTO A MI PEDIDO</a>
          </div>
        </div>
      </div>

      {/* PREÇO FINAL */}
      <div className="preco-final" id="comprar">
        <p className="preco-label">accede hoy por <span>SOLO</span></p>
        <p className="preco-valor">$8.33 USD</p>
        <a href="https://pay.hotmart.com/G104938228E?checkoutMode=10" className="btn" target="_blank" rel="noopener noreferrer">¡COMPRAR AHORA!</a>

        <div className="passos">
          <div className="passo">
            <div className="passo-ico">👆</div>
            <p>Toca el botón<br />¡COMPRAR AHORA!</p>
          </div>
          <div className="linha-passo"></div>
          <div className="passo">
            <div className="passo-ico">📝</div>
            <p>Llena tus datos y elige<br />el método de pago</p>
          </div>
          <div className="linha-passo"></div>
          <div className="passo">
            <div className="passo-ico">📧</div>
            <p>Recibe acceso en menos<br />de 5 minutos por correo</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="sec">
        <h2 className="sec-titulo" style={{ color: 'var(--verde)' }}>PREGUNTAS <span style={{ color: 'var(--negro)' }}>FRECUENTES</span></h2>

        <FaqItem 
          question="¿Necesito experiencia previa en cosmética?" 
          answer="No. Las 50 recetas están explicadas paso a paso para quien empieza desde cero. Si ya tienes conocimiento, avanzarás más rápido." 
        />
        <FaqItem 
          question="¿Dónde consigo los ingredientes?" 
          answer="La mayoría se encuentra en tiendas naturistas, farmacias o mercados locales. Algunos ya los tienes en casa." 
        />
        <FaqItem 
          question="¿Las recetas funcionan para todo tipo de piel?" 
          answer="Sí. El recetario incluye fórmulas para piel seca, grasa, mixta y sensible, con indicaciones claras en cada una." 
        />
        <FaqItem 
          question="¿Por cuánto tiempo tengo acceso?" 
          answer="El acceso es de por vida. Una vez que compras, el material es tuyo para siempre." 
        />
        <FaqItem 
          question="¿Los ingredientes son costosos?" 
          answer="No. Las fórmulas fueron seleccionadas justamente por usar ingredientes accesibles. Muchos cuestan menos que un producto de marca en el supermercado." 
        />
        <FaqItem 
          question="¿Incluyen instrucciones para conservar los productos?" 
          answer="Sí. Cada receta indica tiempo de vida útil, condiciones de almacenamiento y cómo alargar la duración sin conservantes artificiales." 
        />
        <FaqItem 
          question="¿Puedo vender los productos que fabrique?" 
          answer="Sí. Las fórmulas están pensadas también para emprendimiento. Puedes fabricar, etiquetar y vender tus propios cosméticos artesanales." 
        />
        <FaqItem 
          question="¿Tienen soporte si tengo dudas?" 
          answer="Sí. Después de la compra tienes acceso a soporte por correo para resolver cualquier duda sobre el contenido o la aplicación de las fórmulas." 
        />
      </div>
    </>
  );
}
