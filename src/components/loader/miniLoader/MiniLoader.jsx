import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
`

const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.absolute {
    position: absolute;
    inset: 0;
  }
`

const Loader = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 10px;
`

const Bar = styled.div`
  width: 8%;
  height: 24%;
  background: rgb(128, 128, 128);
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: ${fade} 1s linear infinite;
  transform: rotate(${props => props.rotate}deg) translate(0, -130%);
  animation-delay: ${props => props.delay}s;
`

function MiniLoader({ className }) {
  const bars = Array.from({ length: 12 }, (_, i) => {
    const rotate = i * 30
    const delay = -(1.2 - i * 0.1)
    return <Bar key={i} rotate={rotate} delay={delay} />
  })

  return (
    <LoaderWrapper className={className}>
      <Loader>{bars}</Loader>
    </LoaderWrapper>
  )
}

export default MiniLoader
