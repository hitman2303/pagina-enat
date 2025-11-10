import { useState } from 'react'; // <- Esto falta
import Navtae from './componentes/nav';
import  Header  from './componentes/header';
import Quienes from './componentes/quienesomos';
import Gimnasio from './componentes/gimnasios';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FormularioContacto from './componentes/contactanos';
import Footer from './componentes/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
const items = [
  { nombre: "¿Quiénes somos?", href: "#quienes-somos" },
  { nombre: "Gimnasios", href: "#gimnasios" },
  { nombre: "Contáctanos", href: "#contacto" }
];

  const Gimnasios =[
    {
      logo: "/imgs/villaluro.jpg",
      nombre: "Amigos de Villa Luro",
      direccion: "Ramon falcon 5176",
      horarios: [
        <ul>
        <p>Lunes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes</li>
        <p>Miercoles</p>
          <li>17:15 hs Infantiles 4 y 5 años</li>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes</li>
          <li>20:00 hs Adultos</li>
        <p>jueves</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes</li>
        <p>Viernes</p>
          <li>17:15 hs Infantiles 4 y 5 años</li>
        <p>Sabado</p>
          <li>10:00 hs Infantiles</li>
          <li>11:00 hs Adolecentes</li>
          <li>12:00 hs Adultos</li> </ul> ],
      instructores: [
        <ul>
        <li>Roberto fernandez VIII DAN</li>
        <li>Luis apollonio V DAN</li>
        <li>Daniela rodriguez IV DAN</li>
        </ul>
      ],
    whatsapp: 'https://wa.me/1544477897',
    },
    {
      logo: "/imgs/federacion.png",
      nombre: "Federacion Caballito",
      direccion: "Av. La Plata 1151",
      horarios: [
        <ul>
        <p>Lunes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes y adultos</li>
        <p>Martes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes</li>
        <p>jueves</p>
          <li>18:00 hs Infantiles</li>
        <p>Viernes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes y adultos</li>
        <p>Sabado</p>
          <li>10:00 hs Adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Carlos Vallejos VI DAN</li>
        <li>Adriana Filippe IV DAN</li>
        <li>Lautaro Vallejos III DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1162956151',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Taekwondo_do_vallejosfilippe' },
      { nombre: 'Facebook', url: 'https://facebook.com/Taekwondo Federación caballito' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@taekwondovallejos' } 
    ]
    },
    {
      logo: "/imgs/calabresa.jfif",
      nombre: "Asociación La Providencia",
      direccion: "Yerbal 2636",
      horarios: [
        <ul>
        <p>Martes</p>
          <li>17:30 hs Infantiles</li>
          <li>18:30 hs Adultos</li>
        <p>jueves</p>
          <li>17:30 hs Infantiles</li>
          <li>18:30 hs Adultos </li>
          </ul>
      ],
      instructores: [
        <ul>
        <li>Enrique Bullevarcich V DAN</li>
        <li>Fernando Monasterio I DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1541427292',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/vikingo40tkditf ' },
      { nombre: 'Facebook', url: 'https://facebook.com/enrique.tkd.itf' }
    ]
    },{
      logo: "/imgs/huergo.png",
      nombre: "Instituto Huergo",
      direccion: "Perú 759",
      horarios: [
        <ul>
        <p>Miercoles</p>
          <li>12:00 hs (Solo estudiantes)</li>
          </ul>
      ],
      instructores: [
        <ul>
        <li>Carlos Vallejos VI DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1132132816',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Taekwondo_do_vallejosfilippe' },
      { nombre: 'Facebook', url: 'https://www.facebook.com/taekwondofederacioncaballito' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@taekwondovallejos' } 
    ]
    },{
      logo: "/imgs/santojanni.png",
      nombre: "Polideportivo Santojanni",
      direccion: "Patron 6222",
      horarios: [
        <ul>
        <p>Martes</p>
          <li>13:30 hs Infantiles</li>
          <li>14:30 hs Adolecentes y adultos</li>
        <p>Jueves</p>
          <li>13:30 hs Infantiles</li>
          <li>14:30 hs Adolecentes y adultos</li>
        </ul>
        
      ],
      instructores: [
        <ul>
        <li>Luis Apollonio V DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1544477897',
    },{
      logo: "/imgs/ideal.jpg",
      nombre: "El ideal",
      direccion: "Montiel 5142",
      horarios: [
        <ul>
        <p>Lunes</p>
          <li>18:30 hs Infantiles</li>
          <li>19:30 hs Adolecentes y adultos</li>
        <p>Jueves</p>
          <li>18:30 hs Infantiles</li>
          <li>19:30 hs Adolecentes y adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Luis Apollonio V DAN</li>
        <li>Miguel Racedo V DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1544477897',
    },{
      logo: "/imgs/asis.jpg",
      nombre: "Centro Asis",
      direccion: "Guamini 1728 ",
      horarios: [
        <ul>
        <p>Martes</p>
          <li>18:30 hs Infantiles</li>
          <li>19:45 hs Adolecentes y adultos</li>
        <p>Jueves</p>
          <li>18:30 hs Infantiles</li>
          <li>19:45 hs Adolecentes y adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Luis Apollonio V DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1544477897',
    },{
      logo: "/imgs/quickplanet.jpeg",
      nombre: "Multiespacio Quick Planet",
      direccion: "Varela 305",
      horarios: [
        <ul>
        <p>Lunes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes y adultos</li>
        <p>Viernes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes y adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Enrique Bullevarcich V DAN</li>
        <li>Juan Cruz Escobar II DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1541427292',
      redes: [
        { nombre: 'Instagram', url: 'https://instagram.com/vikingo40tkditf ' },
        { nombre: 'Facebook', url: 'https://facebook.com/enrique.tkd.itf' }
      ]
    },{
      logo: "/imgs/fermin.jpg",
      nombre: "Espacio Fermín",
      direccion: "Pedernera 135",
      horarios: [
        <ul>
        <p>Martes</p>
          <li>19:00 hs Infantiles</li>
          <li>20:00 hs Adolecentes y adultos</li>
        <p>Viernes</p>
          <li>19:00 hs Infantiles</li>
          <li>20:00 hs Adolecentes y adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Luis Apollonio V DAN</li>
        <li>Pablo Bruno IV DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1544477897',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Brunopablo.tkd' },
    ]
    },{
      logo: "/imgs/elpoliflores.jfif",
      nombre: "El poli de flores",
      direccion: "Av. Coronel Esteban Bonorino 897",
      horarios: [
        <ul>
        <p>Lunes</p>
          <li>18:00 hs Infantiles</li>
          <li>19:00 hs Adolecentes y adultos</li>
        <p>Jueves</p>
          <li>19:00 hs Infantiles</li>
          <li>20:00 hs Adolecentes y adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Pablo Bruno IV DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1151383420',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Brunopablo.tkd' },
    ]
    },{
      logo: "/imgs/lagrieta.jpeg",
      nombre: "Centro cultural la grieta",
      direccion: "Adolfo Alsina 2143",
      horarios: [
        <ul>
        <p>Martes</p>
          <li>17:30 hs Infantiles</li>
          <li>18:30 hs Adolecentes</li>
          <li>19:30 hs Adolescentes y adultos</li>
        <p>Jueves</p>
          <li>17:30 hs Infantiles</li>
        <p>Viernes</p>
        <li>19:30 hs Adultos</li>
        <p>Sabado</p>
          <li>13:15 hs Adolecentes</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Christian Figueroa IV DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1559618517',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/christian_angel93' },
    ]
    },,{
      logo: "/imgs/la vertiente.jpg",
      nombre: "La vertiente",
      direccion: "Pichincha 180",
      horarios: [
        <ul>
        <p>Miercoles</p>
          <li>19:00 hs Infantiles y adolecentes</li>
          <p>Jueves</p>
          <li>20:00 hs Adolescentes y adultos</li>
        <p>Viernes</p>
        <li>18:00 hs Infantiles y adolecentes</li>
          <p>Sábado</p>
          <li>12:00 hs Adolescentes y adultos</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Christian Figueroa IV DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1559618517',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/christian_angel93' },
    ]
    },{
      logo: "/imgs/soc escudo.jpg",
      nombre: "sociedad de fomento Domingo f. Sarmiento",
      direccion: "Bompland 3081",
      horarios: [
        <ul>
        <p>Jueves</p>
          <li>18:30 hs Infantiles y adolecentes</li>
        <p>Sabados</p>
          <li>09:30 hs Infantiles y adolecentes</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Adriana Filippe IV DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1162956151',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Taekwondo_do_vallejosfilippe' },
      { nombre: 'Facebook', url: 'https://www.facebook.com/Taekwondo Federación caballito' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@taekwondovallejos' } 
    ]
    },{
      logo: "/imgs/fortinph.jpg",
      nombre: "Club social y deportivo el fortin",
      direccion: "Sudamerica 3281",
      horarios: [
        <ul>
        <p>Miercoles</p>
          <li>18:00 hs Infantiles y adolecentes</li>
        <p>Sabados</p>
          <li>10:00 hs Infantiles y adolecentes</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Carlos Vallejos VI DAN</li>
        <li>Lautaro Vallejos III DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1140556459',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Taekwondo_do_vallejosfilippe' },
      { nombre: 'Facebook', url: 'https://www.facebook.com/Taekwondo Federación caballito' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@taekwondovallejos' } 
    ]
    },{
      logo: "/imgs/uteamph.jpg",
      nombre: "UTEAM",
      direccion: " Zarate 3200",
      horarios: [
        <ul>
        <p>Lunes</p>
          <li>18:00 hs Infantiles y adolecentes</li>
        <p>Viernes</p>
          <li>18:00 hs Infantiles y adolecentes</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Carlos Vallejos VI DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1132132816',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Taekwondo_do_vallejosfilippe' },
      { nombre: 'Facebook', url: 'https://www.facebook.com/Taekwondo Federación caballito' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@taekwondovallejos' } 
    ]
    },{
      logo: "/imgs/nueva juventud.png",
      nombre: "Club social y deportivo Nueva Juventud",
      direccion: "Felipe Lavallol 2934",
      horarios: [
        <ul>
        <p>Miercoles</p>
          <li>18:00 hs Infantiles y adolecentes</li>
        <p>Viernes</p>
          <li>18:00 hs Infantiles y adolecentes</li>
        </ul>
      ],
      instructores: [
        <ul>
        <li>Lautaro Vallejos III DAN</li>
        </ul>
      ],
      whatsapp: 'https://wa.me/1140556459',
    redes: [
      { nombre: 'Instagram', url: 'https://instagram.com/Taekwondo_do_vallejosfilippe' },
      { nombre: 'Facebook', url: 'https://www.facebook.com/Taekwondo Federación caballito' },
      { nombre: 'TikTok', url: 'https://www.tiktok.com/@lautaro_taekwondoitf' } 
    ]
    }
  ]
  return (
    <>
        <Navtae items={items}></Navtae>
        <main>
          <Header></Header>
          <section id="quienes-somos">
          <Quienes></Quienes>
          </section>
          <section id="gimnasios">
          <div className="gimnasio-grid">
      {Gimnasios.map((gimnasio, index) => (
        <Gimnasio key={index} gimnasio={gimnasio} />
      ))}
    </div>
          </section>
          <section id="contacto">
          <FormularioContacto></FormularioContacto>
          </section>
        </main>
        <Footer></Footer>
    </>
  )
}

export default App;
