import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ErrorActions } from '../../store/ducks/error'

import { Container } from './styles'

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button onClick={hideError}>
        <span>X</span>
      </button>
    </Container>
  )

const mapStateToProps = state => ({
  error: state.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBox)
