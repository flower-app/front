import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string,
  path: string,
}

export const Button: React.FC<Props> = ({title, path}) => {
  return (
    <Link to={path}>{title}</Link>
  )
}
