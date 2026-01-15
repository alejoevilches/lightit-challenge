import PatientCard from "./components/PatientCard";
import useFetch from "./hooks/useFetch"
import type { Patient } from "./types/Patient";
import { useEffect, useState } from "react";

export default function App() {
  const { data, loading, error } = useFetch<Patient[]>("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users");
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    setPatients(data)
  }, [data]);

  const handleUpdatePatient = (updated: Patient) => {
    setPatients((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  if (loading) return "Loading"

  if (error) return "Error"

  return (
    <section>
      <h1>Bienvenido a la pagina principal de pacientes</h1>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {patients?.map((patient) => {
          return (
            <PatientCard
              key={patient.id}
              data={patient}
              onUpdate={handleUpdatePatient}
            />
          )
        })}
      </div>
    </section>
  )
}
