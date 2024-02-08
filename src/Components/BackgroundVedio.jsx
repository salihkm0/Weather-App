import React from 'react'
import CloudsVideo from "../Assets/Clouds - 16495.mp4";
import { StyledBackgroudVideo } from '../ui/BackgroudVideoStyle';

export default function BackgroundVedio() {
  return (
    <StyledBackgroudVideo autoPlay="autoplay" loop="loop" muted>
        <source src={CloudsVideo} type="video/mp4" />
      </StyledBackgroudVideo>
  )
}
