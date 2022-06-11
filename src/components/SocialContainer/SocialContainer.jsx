import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/images/Destaques Maiores/social-background.jpg' 
import { SubTitle, TextOverlay, Icon } from '../UI';
import { primaryColor } from '../UI/variaveis';
import {IoIosMailOpen} from 'react-icons/io'
import {FaPhoneSquare, FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaGooglePlusSquare} from 'react-icons/fa'

const ImageContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position-x: 70px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    background-position-x: 0px;
  }
`

const TextOverlayContact = styled(TextOverlay)`
  background-color: #a4a2a224;
`

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactTitle = styled(SubTitle)`
  font-family: 'Ribeye', cursive;
  color: ${primaryColor};
  overflow: visible;
`

const SocialTitle = styled(SubTitle)`
  font-family: 'Ribeye', cursive;
  color: ${primaryColor};
  overflow: visible;
`

const MailIcon = styled(IoIosMailOpen)`
  color: ${primaryColor};
  font-size: 2.5rem;
`

const PhoneIcon = styled(FaPhoneSquare)`
  ${Icon()}
`

const FacebookIcon = styled(FaFacebookSquare)`
  ${Icon()}
`

const TwitterIcon = styled(FaTwitterSquare)`
  ${Icon()}
`
const PinterestIcon = styled(FaPinterestSquare)`
  ${Icon()}
`
const GooglePlusIcon = styled(FaGooglePlusSquare)`
  ${Icon()}
`

const ContactInfo = styled.p`

`

const SocialContainer = () => {
  return(
    <ImageContainer>
      <TextOverlayContact />
      <SocialLinksWrapper>
        <ContactsContainer>
          <ContactTitle>Contatos</ContactTitle>
          <MailIcon />
          <ContactInfo>contato@vinhosecia.com</ContactInfo>
          <PhoneIcon />
          <ContactInfo>(19) 9999-9999</ContactInfo>
        </ContactsContainer>
        <SocialNetworkContainer>
          <SocialTitle >Redes Sociais</SocialTitle>
          <SocialIconsContainer>
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
            <GooglePlusIcon />
          </SocialIconsContainer>
        </SocialNetworkContainer>
      </SocialLinksWrapper>
    </ImageContainer>
  )
}
export default SocialContainer