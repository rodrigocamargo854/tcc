import { Table } from 'react-bootstrap';
import { FooterStyled } from './FooterStyles.js';

const Footer = () => {


  return (
    <>
      <FooterStyled>
        <Table style={{color:"white"}}>
        <address>
          <div style={{marginLeft:0}}>
          
            <a href="https://www.linkedin.com/in/rodrigo-camargo-a569b5179/">
            <img style={{padding:10}}  align="left" alt="Rodrigo Camargo Linkedin" color="white" width="52pxpx" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
          </a>   
          <a href="https://www.linkedin.com/in/matheus-schneider-tallmann-973b081b4">
            <img style={{padding:10}} align="left" alt="Rodrigo Camargo Linkedin" color="white" width="52pxpx" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
          </a>  
          <a href="https://www.linkedin.com/in/marcos-vinicius-rocha-davi-alves-4b133072">
            <img style={{padding:10}} align="left" alt="Rodrigo Camargo Linkedin" color="white" width="52pxpx" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
          </a>  
          <a href="https://www.linkedin.com/in/vinicius-oliveira-2273821a0">
            <img style={{padding:10}} align="left" alt="Rodrigo Camargo Linkedin" color="white" width="52pxpx" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
          </a>      
           
          </div>
          
            
        </address>
        </Table>
        
      </FooterStyled>
    </>
  );
};

export default Footer;
