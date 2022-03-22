import styled, { keyframes, css } from "styled-components";

const EventContent = ({time, title, description, side}) => {
  let content;
  if (side === "right") {
    content = <>
                <span class='title'>{title}</span>
                <span class='title'>{time.toLocaleTimeString()}</span>
                <span className='description'>{description}</span>
              </>
  } else if (side === "left") {
    content = <>
                <span class='title'>{time.toLocaleTimeString()}</span>
                <span class='title'>{title}</span>
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
  font-size : 14px;
  font-family: 'segoe ui', 'open sans', 'helvetica neue', arial, sans-serif;
  font-style: normal;
  color: #D0D0D0;
  animation: ${contentAnimation} 0.1s ease-out 1.5s both;
  display: grid;
  grid-template-columns: ${props => props.side === 'right' ? "1fr auto" : "auto 1fr"};
  grid-template-rows: auto 1fr;
  height: 100%;

  ${props => props.side === 'left' && css`text-align: right;`}

  & .description {
    grid-column: 1 / span 2;
  }

  & .title {
    font-weight: 700;
  }
`

export default EventContent;