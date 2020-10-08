import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import res from '../../assets/resume.pdf'

export default () =>
  <Redirect to={res} target="_blank" />

