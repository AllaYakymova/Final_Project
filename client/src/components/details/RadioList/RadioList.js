import React from 'react'

const RadioList = ({ titleClass, text, product, iterator }) => {
  const radioList = iterator.map(size => {
    return (
      <li key={product.itemNo + product.name}>
        <p>{size}</p>
      </li>
    )
  })

  return (
    <>
      <h3 className={titleClass}>{text}</h3>
      <div>

      </div>
    </>
  )
}
export default RadioList
