import image from "../../images/logo.svg"
import styled from "styled-components"
const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-size: xx-large;
`
const Image = styled.img`
  margin-right: 10px; 
`


function Logo(){
  return(
    <LogoContainer>
        <Image 
        src={image} 
        className="logoImage"
        alt="Logo of Website" />
        <p><strong>Near</strong>Books</p>
   </LogoContainer>
  )
}
export default Logo
