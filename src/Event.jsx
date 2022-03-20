import React from "react";
import styled, {keyframes} from 'styled-components'

const Event = ({time, title, description, id, StartColor, EndColor}) => {
    console.log(`rendering element ${id}`)
    return(
    <Wrapper StartColor={StartColor} EndColor={EndColor}>
        {id > 1 && <div className="timeline"></div>}
        <div className="blob"></div>
        <div className='content'>
            <h1>{title}</h1>
            <span>{time}</span>
            <span>{description}</span>
        </div>
    </Wrapper>
)}

const timelineAnimation = keyframes`
    from {height: 0px;}
    to {height: 150px;}
`

const blobAnimation = props => keyframes`
    0% {
      transform: translate(0,0);
      background-color: ${props.StartColor};
    }
    10% {
        background-color: ${props.StartColor};
    }
    100%{
      background-color: ${props.EndColor};
      transform: translate(0,-200px);
    }
`

const wrapperAnimation = keyframes`
    0% {height: 0px; opacity: 0;}
    50% {height: 200px; opacity: 0;}
    100% {height: 200px; opacity: 1;}
`

const Wrapper = styled.div`
    position: relative;
    filter:url('#goo');
    animation: ${wrapperAnimation} 0.5s ease-in-out both;

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
    animation: ${timelineAnimation} 1.1s cubic-bezier(0.770, 0.000, 0.175, 1.000) 1100ms both;
  }
  
  .blob{
    top: 200px;
    position: absolute;
    width:24px;
    height:24px;
    border-radius:100%;
    animation: ${blobAnimation} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) 500ms both;
  }
`

export default React.memo(Event);