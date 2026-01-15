import PatientCard from "./components/PatientCard";
import PatientEditModal from "./components/PatientEditModal";
import useFetch from "./hooks/useFetch"
import type { Patient } from "./types/Patient";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function App() {
  const { data, loading, error } = useFetch<Patient[]>("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    setPatients(data ?? [])
  }, [data]);

  const emptyPatient: Patient = {
    id: "",
    name: "",
    avatar: "",
    description: "",
    website: "",
    createdAt: "",
  };

  const handleUpdatePatient = (updated: Patient) => {
    setPatients((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const handleAddPatient = (updated: Patient) => {
    const createdAt = updated.createdAt || new Date().toISOString();
    console.log('created at', createdAt)
    setPatients((prev) => [
      ...(prev ?? []),
      {
        ...updated,
        id: Date.now().toString(),
        createdAt,
      },
    ]);
    setIsAddOpen(false);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-950/60">
        <span className="loader" aria-label="Cargando" />
      </div>
    );
  }

  if (error) return toast("Error al cargar los pacientes. Intenta nuevamente luego.")

  return (
    <section>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pt-4 sm:px-6">
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
      <button
        type="button"
        onClick={() => setIsAddOpen(true)}
        className="fixed bottom-6 right-6 rounded-full bg-blue-950 px-5 py-3 text-sm font-semibold text-white 
        shadow-lg transition hover:bg-blue-800"
      >
        Agregar paciente
      </button>
      <PatientEditModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        data={emptyPatient}
        onSave={handleAddPatient}
      />
    </section>
  )
}
