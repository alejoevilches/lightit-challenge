import { useEffect, useState } from "react";
import Modal from "./Modal";
import type { Patient } from "../types/Patient";
import { z } from "zod";
import { toast } from "react-toastify";

type PatientEditModalProps = {
  data: Patient;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: Patient) => void;
};

export const patientSchema = z.object({
  name: z.string().min(1, "Nombre no puede estar vacio"),
  description: z.string().min(1, "Descripcion no puede estar vacia"),
  website: z.url("Website tiene que ser una URL válida"),
});

export default function PatientEditModal({
  data,
  isOpen,
  onClose,
  onSave,
}: PatientEditModalProps) {
  const { name, avatar, description, website } = data;
  const [formValues, setFormValues] = useState({
    name,
    avatar,
    description,
    website,
  });

  useEffect(() => {
    if (isOpen) {
      setFormValues({
        name,
        avatar,
        description,
        website,
      });
    }
  }, [isOpen, data]);

  const handleSave = () => {
    const result = patientSchema.safeParse(formValues);
    if (!result.success) {
      const message =
        result.error.issues[0]?.message ?? "Hay errores en el formulario.";
      toast.error(message);
      return;
    }
    onSave({
      ...data,
      ...formValues,
    });
    onClose();
    toast("Paciente modificado correctamente");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 text-slate-200">
        <header className="flex items-start gap-4">
          <img
            src={avatar}
            alt={`Avatar de ${name}`}
            className="h-16 w-16 shrink-0 rounded-full border border-slate-600 object-cover"
          />
          <div className="flex-1">
            <input
              value={formValues.name}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, name: event.target.value }))
              }
              className="mb-2 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xl 
              font-semibold text-slate-100 focus:border-sky-500 focus:outline-none"
              placeholder="Nombre"
            />
          </div>
        </header>
        <textarea
          value={formValues.description}
          onChange={(event) =>
            setFormValues((prev) => ({ ...prev, description: event.target.value }))
          }
          className="min-h-30 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm
          text-slate-100 focus:border-sky-500 focus:outline-none"
          placeholder="Descripcion"
        />

        <div className="rounded-lg bg-slate-800/60 p-3 text-sm text-slate-300">
          <span className="font-medium text-slate-200">Website:</span>
          <input
            value={formValues.website}
            onChange={(event) =>
              setFormValues((prev) => ({ ...prev, website: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm 
            text-slate-100 focus:border-sky-500 focus:outline-none"
            placeholder="Website"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition 
            hover:bg-sky-400"
          >
            Guardar
          </button>
        </div>
      </div>
    </Modal>
  );
}
