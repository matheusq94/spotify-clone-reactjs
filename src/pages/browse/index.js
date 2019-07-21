import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'

import Loading from '../../components/Loading'

import { Container, Title, List, Playlist } from './styles'

class Browse extends Component {
  componentDidMount () {
    this.props.getPlaylistsRequest()
  }

  render () {
    return (
      <Container>
        <Title>Navegar {this.props.playlists.loading && <Loading />}</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt="Playlist" />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)
