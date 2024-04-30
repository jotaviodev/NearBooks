import styled from "styled-components"
import SearchBar from "../SearchBar"
import { useState } from "react"
import { books } from "./searchData"
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const SearchSectionContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function SearchSection(){
    const[searchedBooks,setSearchedBooks] = useState([])
    return(
        <SearchSectionContainer>
            <Title>Já sabe por onde começar ?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <SearchBar 
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const typedText = event.target.value
                    const result = books.filter( book => book.nome.includes(typedText))
                    setSearchedBooks(result)
                }}
            />
            {searchedBooks.map(book => (
                <Result>
                    <p>{book.nome}</p>
                    <img src={book.src} />
                </Result>
            ))}
        </SearchSectionContainer>
    )
}
export default SearchSection