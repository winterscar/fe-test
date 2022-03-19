import styled, {keyframes} from 'styled-components'

const Event = ({time, title, description}) => (
    <Wrapper>
        <div class="timeline"></div>
        <div class="blob"></div>
        <div class='content'>
            <h1>{title}</h1>
            <span>{time}</span>
            <span>{description}</span>
        </div>
    </Wrapper>
)

const timelineAnimation = keyframes`
    from {
      height: 0px;
    }
    to {
      height: 150px;
    }
`

const blobAnimation = keyframes`
    from {
      transform: translate(0,0);
    }
    to{
      background-color: red;
      transform: translate(0,-200px);
    }
`

const Wrapper = styled.div`
    height: 200px;
    position: relative;
    transition: all 0.5s ease-in-out;
    filter:url('#goo');

  .content {
    position: absolute;
    left:50px;
    font-size: 0.5em;
  }
  .timeline { 
    width: 4px;
    margin-left: 10px;
    border-radius: 3px;
    bottom: 10px;
    background: black;
    position: absolute;
    animation: ${timelineAnimation} 1.1s cubic-bezier(0.770, 0.000, 0.175, 1.000) 600ms both;
  }
  
  .blob{
    background-color: green;
    top: 200px;
    position: absolute;
    width:24px;
    height:24px;
    border-radius:100%;
    animation: ${blobAnimation} cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s forwards;
  }
`

export default Event;