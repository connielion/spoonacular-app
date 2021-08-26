import React from "react";
import styled from 'styled-components';
import { topIngredientsList } from "../util/topIngredientsList";
import ingredientBlob from '../assets/blob.svg';

const BlobsContainer = () => {
    const BlobsContainer = styled.div`
        grid-area: 1 / 2 / 2 / 3;
        background-color: #ebe6da;
        padding: 10px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 250px;
        grid-gap: 10px;
    `; 

    const Blob = styled.div`
        background-image: url(${ingredientBlob});
        background-size: 120%;
        background-repeat: no-repeat;
        background-position: center;

        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const IngredientName = styled.h1`
        font-size: 24px;
        color: #fff;
    `;

    const H1Container = styled.div`
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const renderIngredientBlob = () => {
        const renderBlob = topIngredientsList.map((ingredient) => {
            return (
                <Blob>
                    <H1Container>
                        <IngredientName>
                            {ingredient.name}
                        </IngredientName>
                    </H1Container>
                </Blob>)
        })

        return renderBlob;
    }

    return (
        <BlobsContainer>
            {renderIngredientBlob()}
        </BlobsContainer>)
}

export default BlobsContainer;