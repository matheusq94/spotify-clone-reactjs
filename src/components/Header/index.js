import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://store.playstation.com/store/api/chihiro/00_09_000/container/PT/pt/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
        alt="Avatar"
      />
      Rick
    </User>
  </Container>
)

export default Header
