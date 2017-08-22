import React from 'react'
import PropTypes from 'prop-types'
import { Container, FormGroup, Label, Input } from 'reactstrap'
import MagicSelect from './MagicSelect.jsx'
import * as actions from '../actions'
import * as selectors from '../selectors'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  suggestions: selectors.suggestions.suggestions(state),
  isLoading: selectors.suggestions.isLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  getSuggestions: value => dispatch(actions.suggestions.request(value))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    suggestions: PropTypes.array,
    isLoading: PropTypes.bool,
    getSuggestions: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: null,
      multiple: false,
    }
  }

  changeValue = (value) => {
    this.setState({ value })
  }

  changeMulti = (el) => {
    this.setState({
      multiple: el.target.checked,
      value: null,
    })
  }

  render() {
    return (
      <Container>
        <h2>Magic Select ({ this.state.selected })</h2>

        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.state.multiple}
              onChange={this.changeMulti}
            />
            {' '}Multiple
          </Label>
        </FormGroup>

        <MagicSelect
          value={this.state.value}
          options={this.props.suggestions}
          isLoading={this.props.isLoading}
          multiple={this.state.multiple}
          onChange={this.changeValue}
          onAutocomplete={this.props.getSuggestions}
        />
      </Container>
    )
  }
}
