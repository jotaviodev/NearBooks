
import Profile from "../../images/perfil.svg"
import Cart from "../../images/sacola.svg"
import styled from "styled-components";

const items = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"]
const icons = [Profile, Cart]
const Item = styled.li`
    list-style: none;
    height: 100%;
    font-size: larger;
    padding: 10px;
    cursor: pointer;
`

function ItemsHeader(){
    return (
        <>
            {items.map((item) => (
                <Item><p>{item}</p></Item>
            ))}
            {icons.map((icon) => (
                <img src={icon} className='item' />
          ))}
        </>
    )
}
export default ItemsHeader