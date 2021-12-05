import styled from 'styled-components'

export const Container = styled.main`
    margin-top: -7rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    div {
        background-color: var(--shape);
        color: var(--text-title);

        padding: 1.5rem 2rem;

        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong {
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

            margin-top: 1rem;

            display: block;
        }

        &.highlight-background {
            background-color: var(--green-100);
            color: var(--white);
        }
    }
`