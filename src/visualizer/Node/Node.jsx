import React, { Component } from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      row,
      isFinish,
      isStart,
      isWall,
      isVisited,
      isShortest,
      onMouseDown,
      onMouseEnter,
      onMouseUp
    } = this.props;

    const extraClassName = isStart
      ? "node-start"
      : isFinish
        ? "node-finish"
        : isWall
          ? "node-wall"
          : isShortest
            ? "node-shortest-path"
            : isVisited
              ? "node-visited"
              : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    );
  }
}
