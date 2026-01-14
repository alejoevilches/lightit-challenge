import PatientCard from "./components/PatientCard";
import useFetch from "./hooks/useFetch"
import type { Patient } from "./types/Patient";

export default function App() {
  const { data: patients, loading, error } = useFetch<Patient[]>("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users");

  if (loading) return "Loading"

  if (error) return "Error"

  return (
    <section>
      <h1>Bienvenido a la pagina principal de pacientes</h1>
      {patients?.map((patient) => {
        return (
          <PatientCard key={patient.id} data={patient} />
        )
      })}
    </section>
  )
}