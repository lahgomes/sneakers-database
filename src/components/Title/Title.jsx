import { css } from '@emotion/react'

const Title = ({ children }) => {
  return (
    <h1
      css={css`
        color: blue;
      `}
    >
      {children}
    </h1>
  )
}

export default Title
