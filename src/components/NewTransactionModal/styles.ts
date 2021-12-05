import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.25rem;

        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;

        background-color: var(--gray-200);
        border: 1px solid var(--gray-300);
        font-size: 1rem;
        font-weight: 400;

        padding: 0 1.5rem;

        border-radius: 0.25rem;

        &::placeholder { color: var(--text-body); }
        & + input { margin-top: 1rem; }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;

        background-color: var(--green-100);
        color: var(--white);
        border: 0;
        font-size: 1rem;
        font-weight: 600;

        padding: 0 1.5rem;

        margin-top: 1.5rem;

        transition: 0.2s;

        border-radius: 0.25rem;

        &:hover { filter: brightness(0.9); }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

const colors = {
    green: '#33cc95',
    red: '#e52e40'
}

interface RadioBoxProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}
export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;

    background-color: ${props => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'trasparent'
    };
    border: 1px solid var(--gray-300);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    border-radius: 0.25rem;

    &:hover { border-color: ${darken(0.1, '#d7d7d7')}; }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        color: var(--text-title);
        font-size: 1rem;

        margin-left: 0.5rem;

        display: inline-block;
    }
`