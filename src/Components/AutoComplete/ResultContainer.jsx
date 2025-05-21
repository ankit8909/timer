import React from 'react'
import  '../AutoComplete/Autocomplete.css'

function ResultContainer({filteredArr, clickhandler}) {
      console.log(filteredArr)
  return (
    <div className='resultContainer'>
        <ul>
            {filteredArr && filteredArr.map(ele=>(
                <li key={ele.id}  onClick={()=>clickhandler(ele)}>
                    {ele.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ResultContainer