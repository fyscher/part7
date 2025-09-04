import React, { useState, useEffect } from 'react'
import { getCountry } from './services/countriesService'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if(name)
    {
      getCountry(name).then((res) =>
      {
        console.log('res: ', res)
        setCountry(res)
        return res
      }).catch((err) =>
      {
        setCountry(err)
        return err
      })
    }
  }, [name])

  return country
}

const Country = ({ country }) => {
  if(!country)
  {
    return null
  }
  switch(country.status)
  {
    case 200:
      return (
        <div>
          <h3>{country.data.name.common} </h3>
          <div>capital {country.data.capital} </div>
          <div>population {country.data.population}</div> 
          <img src={country.data.flags.svg} height='100' alt={`flag of ${country.data.flags.alt}`}/>  
        </div>
      )
    default:
      return(
        <div>
          not found...
        </div>
      )
  }
}


const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    console.log('nameInput.value: ', nameInput.value)
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button type="submit">find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App