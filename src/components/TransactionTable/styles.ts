import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;

        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            text-align: left;
            line-height: 1.5rem;

            padding: 1rem 2rem;
        }
        td {
            background-color: var(--shape);
            color: var(--text-body);
            border: 0;

            padding: 1rem 2rem;

            border-radius: 0.25rem;

            &:first-child { color: var(--text-title); }

            &.deposit { color: var(--green-100); }
            &.withdraw { color: var(--red-100); }
        }
    }
`