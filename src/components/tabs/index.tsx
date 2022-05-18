import React, { FC, useState } from 'react'

import './../tooltip.scss'
import './index.scss'

type TabsProps = {
  defaultValue: string
  name: string
  data: any
  onChange: (value: string) => void
}

const Tabs: FC<TabsProps> = (props) => {
  const [checkedValue, setCheckedValue] = useState(
    new Array(props.data.length).fill(false)
  )

  const handleOnChange = (position: number) => {
    const updatedCheckedValue = checkedValue.map((item, index) => {
      return index === position || (position !== index && item) ? !item : item
    })

    if (updatedCheckedValue[position]) {
      console.log('Updating ', props.name)
      props.onChange(props.data[position].value)
    }
    setCheckedValue(updatedCheckedValue)
  }

  return (
    <div className='container'>
      <div className='tabs'>
        {props.data.map((item: any, index: number) => {
          return (
            <TabsItem
              key={index}
              name={props.name}
              index={index}
              value={item.value}
              label={item.label}
              icon={item.icon}
              tooltip={item.tooltip}
              checked={checkedValue[index]}
              handleOnChange={handleOnChange}
            />
          )
        })}
        <span className='glider'></span>
      </div>
    </div>
  )
}

export { Tabs }

type TabsItemProps = {
  index: number
  name: string
  value: string
  notification?: string
  tooltip?: string
  label?: string
  icon?: { checked: React.ReactNode; unchecked: React.ReactNode }
  checked: boolean
  handleOnChange: (position: number) => void
}

const TabsItem: FC<TabsItemProps> = (props) => {
  return (
    <>
      <input
        type='radio'
        id={props.value}
        name={props.name}
        checked={props.checked}
        onChange={() => props.handleOnChange(props.index)}
      />
      <label className='tab' htmlFor={props.value} data-tooltip={props.tooltip}>
        {props.icon && (
          <div className='icon'>
            {props.checked ? props.icon.checked : props.icon.unchecked}
          </div>
        )}
        {props.label}
      </label>
    </>
  )
}
