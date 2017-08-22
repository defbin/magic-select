import React from 'react'
import FlagIcon from './FlatIcon.jsx'

export default ({ children, value: { label, flag } }) => (
  <div className="Select-value">
    <FlagIcon url={flag} title={label} />
    <span className="Select-value-label">{children}</span>
  </div>
)
