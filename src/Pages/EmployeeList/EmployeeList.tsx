import { useState } from "react"
import DataTable from "react-data-table-component"
import { useSelector } from "react-redux"
import type { RootState } from "../../Redux/Store"

const columns = [
  { name: "First Name", selector: (row: any) => row.firstName, sortable: true },
  { name: "Last Name", selector: (row: any) => row.lastName, sortable: true },
  { name: "Start Date", selector: (row: any) => row.startDate },
  { name: "Department", selector: (row: any) => row.departement },
  { name: "Date of Birth", selector: (row: any) => row.dateOfBirth },
  { name: "Street", selector: (row: any) => row.street },
  { name: "City", selector: (row: any) => row.city },
  { name: "State", selector: (row: any) => row.state },
  { name: "Zip Code", selector: (row: any) => row.zipCode },
]

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employee.employees)
  const [filterText, setFilterText] = useState("")

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  )

  return (
    <main className="employee-list-page">
      <h1>Current Employees</h1>

      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        highlightOnHover
        dense
        responsive
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "6px 12px",
              fontSize: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        }
      />
    </main>
  )
}

export default EmployeeList
