import React, { createContext } from 'react'
import HelloButton from './HelloButton'
import { ContextWrapper } from '@/app/react/context/state'

export default function HelloContext() {
  createContext
  return (
      <HelloButton name={"Joop Gevaar"}></HelloButton>
  )
}
