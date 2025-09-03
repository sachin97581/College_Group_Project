import React, { createContext, useState } from 'react'

const PatientDataContext = createContext()

const PatientContext = ({children}) => {
  const [patien, setPatient] = useState({
    name: "",
    age: "",
    discease: "",
    condition: "",
    email: "",
    password: "",
  })

  return (
    <PatientDataContext.Provider value={{patien, setPatient}}>
      {children}
    </PatientDataContext.Provider>
  )
}

export { PatientDataContext }
export default PatientContext