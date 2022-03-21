import styled, { keyframes, css } from "styled-components";

const EventContent = ({time, title, description, side}) => {
  let content;
  if (side === "right") {
    content = <>
                <h1>{title}</h1>
                <span>{time}</span>
                <span className='description'>{description}</span>
              </>
  } else if (side === "left") {
    content = <>
                <span>{time}</span>
                <h1>{title}</h1>
                <span className='description'>{description}</span>
              </>
  } else {
    console.error("EventContent: side must be 'left' or 'right'");
    <div></div>
  }
  return (
    <Wrapper {...{side}}>
      {content}
    </Wrapper>
  )
}


const contentAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0,20px);
  }
  to {
    opacity: 1;
    transform: translate(0,0);
  }
`

const Wrapper = styled.div`
  font-family: sans-serif;
  color: white;
  animation: ${contentAnimation} 0.1s ease-out 1.5s both;
  display: grid;
  grid-template-columns: ${props => props.side === 'right' ? "1fr 30px" : "30px 1fr"};
  height: 100%;

  ${props => props.side === 'left' && css`text-align: right;`}

  & .description {
    grid-column: 1 / span 2;
  }
`

export default EventContent;