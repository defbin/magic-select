import React from 'react'

const style = {
  maxHeight: 20,
  marginRight: 5,
}

export default ({ url, title }) => <img style={style} src={url} alt={title} />
