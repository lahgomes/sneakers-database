import { Global } from '@emotion/react'
import createGlobalStyles from './globalStyles'

function GlobalStyles() {
  return <Global styles={createGlobalStyles} />
}

export default GlobalStyles
