import { useState } from "react";
import type { Patient } from "../types/Patient"
import PatientInfoModal from "./PatientInfoModal";
import PatientEditModal from "./PatientEditModal";

type ModalMode = "info" | "edit" | null;

type PatientCardProps = {
  data: Patient;
  onUpdate: (updated: Patient) => void;
}

export default function PatientCard({ data, onUpdate }: PatientCardProps) {
  const { name, avatar, description, createdAt } = data;
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  return (
    <>
      <article
        className="group rounded-2xl border border-slate-700/60 bg-slate-900 p-6 shadow-sm transition-all duration-200 
        ease-out hover:-translate-y-1 hover:shadow-lg hover:border-sky-500/50"
        onClick={() => setModalMode("info")}
      >
        <div className="flex items-start gap-5">
          <img
            src={avatar}
            alt={`Avatar de ${name}`}
            className="h-16 w-16 shrink-0 rounded-full border border-slate-600 object-cover transition duration-200 
            group-hover:scale-105"
          />

          <div className="flex flex-1 flex-col gap-2">
            <header className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
                <p className="text-xs text-slate-400">
                  Creado el {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </header>
            <p className="text-sm leading-relaxed text-slate-300 line-clamp-3">
              {description}
            </p>

          </div>
        </div>
      </article>
      {modalMode == "info" &&
        <PatientInfoModal
          isOpen={modalMode === "info"}
          onClose={() => setModalMode(null)}
          onEdit={() => setModalMode("edit")}
          data={data}
        />
      }
      {modalMode == "edit" &&
        <PatientEditModal
          isOpen={modalMode === "edit"}
          onClose={() => setModalMode(null)}
          data={data}
          onSave={onUpdate}
        />
      }

    </>
  );
}
