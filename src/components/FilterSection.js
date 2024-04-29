import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const FilterSection = () => {

  const getUniqueData = (data,property) =>{
    let newVal = data.map((curElem)=>{
      return curElem[property]
    })
    newVal = ["All" , ...new Set(newVal)]
    console.log(newVal)
  }

  const { filters: { text }, all_products, updateFilterValue } = useFilterContext()

  const categoryOnlyData = getUniqueData(all_products, "category" )
  console.log(categoryOnlyData)

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='text' name='text' value={text} placeholder='SEARCH'
            onChange={updateFilterValue} />
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  `

export default FilterSection