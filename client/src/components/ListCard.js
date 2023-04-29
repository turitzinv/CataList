import React from 'react'

const ListCard = ({header}) => {
  return (
    <div id="list-card-div">
      <button id="listcard-button">{header}</button>
    </div>
  )
}

export default ListCard