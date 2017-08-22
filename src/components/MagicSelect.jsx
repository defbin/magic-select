import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

export default class MagicSelect extends React.PureComponent {
  static propTypes = {
    value: PropTypes.any,
    options: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onAutocomplete: PropTypes.func,
    multiple: PropTypes.bool,
    valueComponent: PropTypes.any,
    optionComponent: PropTypes.any,
  }

  render() {
    return (
      <Select
        simpleValue
        value={this.props.value}
        onChange={this.props.onChange}
        options={this.props.options}
        multi={this.props.multiple}
        onInputChange={this.props.onAutocomplete}
        isLoading={this.props.isLoading}
        valueComponent={this.props.valueComponent}
        optionComponent={this.props.optionComponent}
      />
    )
  }
}
