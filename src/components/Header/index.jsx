
import Logo from "../Logo";
import ItemsHeader from '../ItemsHeader';
import styled from "styled-components"

const HeaderContainer = styled.div`
    background-color: whitesmoke;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const HeaderList = styled.ul`
    display: flex;
`
function Header(){
    return (
        <HeaderContainer>
            <Logo />
            <HeaderList>
                <ItemsHeader />
            </HeaderList>
        </HeaderContainer>
    )
}
export default Header