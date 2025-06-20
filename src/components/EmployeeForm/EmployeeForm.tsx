import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../Redux/Slices/employeeSlice'
import type { AppDispatch } from '../../Redux/Store'
import './EmployeeForm.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const StatesData = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
  ]

const EmployeeForm = () => {
    const dispatch = useDispatch<AppDispatch>()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('Sales')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    dispatch(
      addEmployee({
        firstName,
        lastName,
        dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString() : '',
        startDate: startDate ? startDate.toLocaleDateString() : '',
        street: street,
        city,
        state,
        zipCode,
        departement: department,
      })
    )

    alert('Employee Created!') 
  }
  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker 
         id="date-of-birth"
         selected={dateOfBirth}
         onChange={(date) => setDateOfBirth(date)}
         dateFormat="MM/dd/yyyy"
         placeholderText="Select date"
        />
        

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
        id="start-date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select date"
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <select
  name="state"
  id="state"
  value={state}
  onChange={(e) => setState(e.target.value)}
>
  <option value="">Select a state</option>
  {StatesData.map(({ code, name }) => (
    <option key={code} value={code}>
      {name}
    </option>
  ))}
</select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EmployeeForm