import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const FilterSection = () => {

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })
    return newVal = ["All", ...new Set(newVal)]
  }

  const { filters: { text }, all_products, updateFilterValue } = useFilterContext()

  const categoryOnlyData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")

  // console.log(categoryOnlyData)
  // console.log(companyData)

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='text' name='text' value={text} placeholder='SEARCH'
            onChange={updateFilterValue} />
        </form>
      </div>

      <div className='filter-category'>
        <h3>Category</h3>
        <div>{categoryOnlyData.map((curElem, index) => {
          return <button key={index} type='button'
            name='category' value={curElem} onClick={updateFilterValue}>{curElem}</button>
        })}</div>

        <div className='filter-company'>
          <h3>Company</h3>

          <form action='#'>
            <select name='company' id='company' className='filter-company--select' onClick={updateFilterValue}>
              {
                companyData.map((curElem, index) => {
                  return (
                    <option name="company" value={curElem}>{curElem}</option>
                  )
                })
              }
            </select>
          </form>
        </div>

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

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }

      .filter-company--select {
        padding: 0.3rem 1.2rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
        text-transform: capitalize;
    }

  }

  `

export default FilterSection