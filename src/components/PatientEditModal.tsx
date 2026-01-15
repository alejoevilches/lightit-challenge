import { useEffect, useState } from "react";
import Modal from "./Modal";
import type { Patient } from "../types/Patient";

type PatientEditModalProps = {
  data: Patient;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: Patient) => void;
};

export default function PatientEditModal({
  data,
  isOpen,
  onClose,
  onSave,
}: PatientEditModalProps) {
  const { name, avatar, description, createdAt, website } = data;
  const [formValues, setFormValues] = useState({
    name,
    avatar,
    description,
    createdAt,
    website,
  });

  useEffect(() => {
    if (isOpen) {
      setFormValues({
        name,
        avatar,
        description,
        createdAt,
        website,
      });
    }
  }, [isOpen, name, avatar, description, createdAt, website]);

  const handleSave = () => {
    onSave({
      ...data,
      ...formValues,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 text-slate-200">
        <header className="flex items-start gap-4">
          <input
            value={formValues.avatar}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, avatar: event.target.value }))
            }
            className="h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
            placeholder="Avatar"
          />
          <div className="flex-1">
            <input
              value={formValues.name}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, name: event.target.value }))
              }
              className="mb-2 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
              placeholder="Nombre"
            />
            <input
              value={formValues.createdAt}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, createdAt: event.target.value }))
              }
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 focus:border-sky-500 focus:outline-none"
              placeholder="Creado el"
            />
          </div>
        </header>
        <textarea
          value={formValues.description}
          onChange={(event) =>
            setFormValues((prev) => ({ ...prev, description: event.target.value }))
          }
          className="min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
          placeholder="Descripcion"
        />

        <div className="rounded-lg bg-slate-800/60 p-3 text-sm text-slate-300">
          <span className="font-medium text-slate-200">Website:</span>
          <input
            value={formValues.website}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, website: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
            placeholder="Website"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Guardar
          </button>
        </div>
      </div>
    </Modal>
  );
}
