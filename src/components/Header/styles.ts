import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue-200);
`
export const Content = styled.div`
    max-width: 1120px;

    padding: 2rem 1rem 10rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        height: 3rem;

        background-color: var(--blue-100);
        color: var(--white);
        border: 0;
        font-size: 1rem;

        padding: 0 2rem;

        transition: 0.2s;
        border-radius: 0.25rem;

       &:hover { filter: brightness(0.95); }
    }
`