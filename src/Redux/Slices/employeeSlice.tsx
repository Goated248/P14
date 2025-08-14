import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Employee = {
    firstName: string
    lastName: string
    startDate: string
    departement: string
    dateOfBirth: string
    street: string
    city: string
    state: string
    zipCode: string

}

type EmployeeState = {
    employees: Employee[]
}

let storedEmployees = [];
try {
  storedEmployees = JSON.parse(localStorage.getItem("employees") || "[]");
} catch (e) {
  console.error("Erreur lors de la lecture des employés depuis le localStorage", e);
}

const initialState: EmployeeState = {
  employees: storedEmployees,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload)
            localStorage.setItem("employees", JSON.stringify(state.employees))
        },
    },
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer