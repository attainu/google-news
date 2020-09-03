import React from 'react'
import './css/Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className='listPage'>{pageNumbers.map(number => (
        <li key={number}><button className='buttonPage' onClick={() => paginate(number)}>{number}</button></li>
      ))}</ul>
    </div>
  )
}

export default Pagination
