import React from "react";
import { Card, Carousel } from "react-bootstrap";
import "./quienes.css"; // Asegúrate de que la ruta sea correcta
function Quienes() {
  return (
   <div className="quienes-container">
      <Card className="cardquienessomos"  data-aos="fade-up" >
        <div className="imgquienessomos" data-aos="fade-left">
          <Carousel controls={false} indicators={false} fade interval={3000}>
            <Carousel.Item>
              <img src="/imgs/foto.jpeg" className="img-carousel" alt="Imagen 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/2.jpeg" className="img-carousel" alt="Imagen 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/3.jpeg" className="img-carousel" alt="Imagen 3" />
            </Carousel.Item>
          </Carousel>
        </div>

        <Card.Body className="bodyquienessomos" data-aos="fade-right">
          <Card.Title className="tituloquienessomos">¿Quiénes Somos?</Card.Title>
          <Card.Text className="textoquienessomos">
            Somos la Escuela Nacional de Taekwon-do, miembros de la Asociación Enrique Eiriz y de ITF Unión.
            Promovemos los valores del Taekwon-Do tradicional, con pasión, disciplina y respeto.
            Nuestro compromiso es formar artistas marciales íntegros, transmitiendo el legado auténtico de nuestro arte.
            ¡Te invitamos a ser parte de nuestra familia y crecer junto a nosotros!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}


export default Quienes;