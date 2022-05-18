import { SearchAlgoNames, HeuristicNames } from './algorithms/types'
export type { SearchAlgoNames, HeuristicNames }

export type AgentState = {
  x: number
  y: number
}

export type GridTypeNames = 'square' | 'triangle'

export type GridItemStatus = 'unvisited' | 'visited' | 'solution' | 'wall'
