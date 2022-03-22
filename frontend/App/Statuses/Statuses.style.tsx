import styled from 'styled-components';

import { stateColor, stateDarkColor } from '/frontend/style/colors';

import { State } from '/types/status';

const imageSize = '6rem';

export const List = styled.div``;

export const Boxes = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 0.25rem;
`;

export const Box = styled.div`
    padding: 0.3rem 0.5rem;
    border-radius: 0.25rem;
`;

export const Project = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
`;

type StatusProps = {
    state: State;
};

export const Status = styled.div<StatusProps>`
    background: ${(props) => stateColor[props.state]};
    color: #222222;
    margin-bottom: 1rem;
    max-width: 100%;
    overflow: hidden;

    ${Box} {
        background: ${(props) => stateDarkColor[props.state]};
    }
`;

export const Body = styled.div`
    padding: 1rem 1rem 0 1rem;
    display: flex;
`;

export const Details = styled.div`
    flex-grow: 1;
`;

export const ProjectImage = styled.div`
    margin-right: 1rem;

    img {
        border-radius: 0.25rem;
        max-width: ${imageSize};
        max-height: ${imageSize};
    }
`;

export const UserImage = styled.div`
    img {
        border-radius: 50%;
        max-width: ${imageSize};
        max-height: ${imageSize};
    }
`;
