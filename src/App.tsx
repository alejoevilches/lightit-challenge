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
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {patients?.map((patient) => {
          return (
            <PatientCard key={patient.id} data={patient} />
          )
        })}
      </div>
    </section>
  )
}