import React from 'react'

export default ({ children, value: { label } }) => (
  <div className="Select-value" title={label}>
    <span className="Select-value-label">{children}</span>
  </div>
)
