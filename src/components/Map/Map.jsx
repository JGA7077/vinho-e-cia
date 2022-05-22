import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100vw;

  iframe {
    width: 100%;
    height: 450px;
  }
`

const Map = () => {
  return(
    <MapContainer>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.9041917517231!2d12.342422729188957!3d45.4372261397341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d8851989c3%3A0x4aef52385ffe4466!2sCalle%20Larga%20S.%20Lorenzo%2C%205132%2C%2030122%20Venezia%20VE%2C%20It%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1653150754550!5m2!1spt-BR!2sbr" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="mapa"></iframe>
    </MapContainer>
  )
}
export default Map