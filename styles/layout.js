import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
`;

export const InnerLayout = styled.div`
    padding: 0rem;
    width: 100%;
    display: flex;
    flex-direction : row;
    margin-top: 2rem;
    
    @media (max-width: 1121px) {
        /* display:inline-block; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* .piechart{
  height: fit-content;

            di
        /* } */ 
    }
`;