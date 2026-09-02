import React from 'react'
import ChecklistItem from './ChecklistItem'

type ChecklistItem = {
  text: string
}

type ChecklistSectionProps = {
  items: ChecklistItem[]
}

const ChecklistSection = ({ items }: ChecklistSectionProps) => {
  return (
    <div className="bg-almostWhite w-full p-6 mb-10 lg:p-12">
      <ul className="space-y-3 lg:space-y-4">
        {items.map((item, index) => (
          <ChecklistItem
            key={index}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  )
}

export default ChecklistSection
