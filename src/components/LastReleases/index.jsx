import { books } from "./LastReleasesData"
import styled from "styled-components"
import {Title} from "../Title"
import RecommendationCard from "../RecommendationCard"
import imageBook from "../../images/livro2.png"
const LastReleasesContainer = styled.section`
    position: relative;
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function LastReleases(){
    return(
        <LastReleasesContainer>
            <Title color="#EB9B00" fontSize="36px" textAlign="center">Últimos Lançamentos</Title>
            <NewBooksContainer>
            {books.map(book => (
                <img src={book.src} />
            ))}
            </NewBooksContainer>
            <RecommendationCard
                title="Talvez você se interesse por..."
                subtitle="Angular 11"
                desc="Integrando app com o Google"
                image={imageBook}
            />
        </LastReleasesContainer>
    )
}
export default LastReleases