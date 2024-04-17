import styled from "styled-components"

const SearchBarElement = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }
`
function SearchBar(){
    return(
        <>
            <SearchBarElement type="text" placeholder="Escreva sua próxima leitura" />
        </>
    )
}
export default SearchBar