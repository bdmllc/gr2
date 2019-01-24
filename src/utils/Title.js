import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export function Title({title, message}) {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h3 className="message">{message}</h3>
      <div className="underline"></div>
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: 'our message',
  title: 'our title',
}

const TitleWrapper = styled.div`
text-align: center;
.message {
  ${styles.textSlanted};
  ${styles.letterSpacing({spacing: '0.3rem'})};
  font-size: 2rem;
  color: red;
}

`
