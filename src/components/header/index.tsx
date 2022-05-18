import React, { FC, useContext } from 'react'
import styled from 'styled-components'

import { AvailButton } from '../types'
import { SearchAlgoNames } from '../../types'
import { GridTypeNames } from '../../algorithms/types'

import data from './data'
import { DispatchContext } from '../contexts'

import { Tabs } from '../tabs'
import Button from '../button'
import Select from '../select'

import { ReactComponent as TriangleSolidIcon } from './../../assets/icons/triangle-solid.svg'
import { ReactComponent as TriangleOutlineIcon } from './../../assets/icons/triangle-outline.svg'
import { ReactComponent as SquareSolidIcon } from './../../assets/icons/square-solid.svg'
import { ReactComponent as SquareOutlineIcon } from './../../assets/icons/square-outline.svg'
import { ReactComponent as PlayIcon } from './../../assets/icons/play.svg'
import { ReactComponent as PauseIcon } from './../../assets/icons/pause.svg'

type StateReturn<T> = [T, (value: T) => void]

type HeaderProps = {
  grid: StateReturn<GridTypeNames>
  searchAlgo: StateReturn<SearchAlgoNames>
  delay: StateReturn<number>
  availButton: AvailButton
  onStart: () => void
}
const Header: FC<HeaderProps> = (props) => {
  const [grid, setGrid] = props.grid
  const [searchAlgo, setSearchAlgo] = props.searchAlgo
  const [delay, setDelay] = props.delay

  const { dispatch } = useContext(DispatchContext)

  const delayData = [
    {
      value: '180',
      label: 'Slower',
      tooltip: 'Speed down the visualization',
    },
    {
      value: '100',
      label: 'Normal',
      tooltip: 'Speed down the visualization',
    },
    {
      value: '20',
      label: 'Faster',
      tooltip: 'Speed up the visualization',
    },
  ]

  const gridData = [
    {
      label: 'Triangle',
      value: 'triangle',
      tooltip: 'View on triangle grid',
      icon: {
        checked: <TriangleSolidIcon />,
        unchecked: <TriangleOutlineIcon />,
      },
    },
    {
      label: 'Square',
      value: 'square',
      tooltip: 'View on square grid',
      icon: {
        checked: <SquareSolidIcon />,
        unchecked: <SquareOutlineIcon />,
      },
    },
  ]

  return (
    <Wrapper>
      <Form>
        <div style={{ display: 'flex' }}>
          <Select
            defaultValue={searchAlgo}
            // tooltip='Pick a search algorithm'
            onChange={(e) => setSearchAlgo(e.target.value as SearchAlgoNames)}
            options={Object.entries(data).map(([key, value]) => [
              key,
              value.name,
            ])}
          />
          {props.availButton === 'start' && (
            <Button
              tooltip='Visualize'
              Icon={<PlayIcon width='22' height='22' />}
              onClick={props.onStart}
            />
          )}
          {props.availButton === 'continue' && (
            <Button
              tooltip='Continue'
              Icon={<PlayIcon width='22' height='22' />}
              onClick={() => dispatch({ type: 'continue' })}
            />
          )}
          {props.availButton === 'pause' && (
            <Button
              tooltip='Pause'
              Icon={<PauseIcon width='22' height='22' />}
              onClick={() => dispatch({ type: 'pause' })}
            />
          )}
        </div>
        <Tabs
          name='GridTab'
          defaultValue={grid}
          data={gridData}
          onChange={(value) => {
            console.log('grid updated !')
            setGrid(value as GridTypeNames)
          }}
        />
        <Tabs
          name='DelayTab'
          defaultValue={String(delay)}
          data={delayData}
          onChange={(value) => setDelay(Number(value))}
        />
        <Button
          label='Reset'
          tooltip='Clear grid'
          onClick={() => dispatch({ type: 'reset', payload: { grid } })}
        />
        <Button
          label='Clear'
          tooltip='Clear path'
          onClick={() => dispatch({ type: 'clear' })}
        />
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 7px;
  padding-bottom: 2rem;
`
const Form = styled.form.attrs({ onSubmit: (e) => e.preventDefault() })`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-right: 10px;
`

export default Header
