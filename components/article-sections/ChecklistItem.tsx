import React from 'react'
import { PinkCheck } from '../SVGs/PinkCheck'

type ChecklistItemProps = {
  text: string
}

const ChecklistItem = ({ text }: ChecklistItemProps) => {
  return (
    <li className="flex items-center">
      <div className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center mr-3 lg:mr-4">
        <div className="w-4">
          <PinkCheck />
        </div>
      </div>
      <div className="flex-1 lg:text-xl">{text}</div>
    </li>
  )
}

export default ChecklistItem
