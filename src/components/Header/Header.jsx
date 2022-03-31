import { css } from '@emotion/react'

const Header = ({ children }) => {
  return (
    <header
      css={css`
        width: 100%;
        background-color: #3f51b5;
      `}
    >
      <h1
        css={css`
          color: #ffffff;
          font-size: 2rem;
          padding: 1.5rem;
        `}
      >
        {children}
      </h1>
    </header>
  )
}

export default Header
