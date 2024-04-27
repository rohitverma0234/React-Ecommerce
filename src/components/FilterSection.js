import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const FilterSection = () => {
  const{filters:{text}, updateFilterValue} = useFilterContext()
  return (
    <Wrapper>
      <div className='filter-search'>
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  `

export default FilterSection