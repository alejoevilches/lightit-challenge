import Modal from "./Modal";
import type { Patient } from "../types/Patient";

type PatientInfoModalProps = {
  data: Patient;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
};

export default function PatientInfoModal({
  data,
  isOpen,
  onClose,
  onEdit,
}: PatientInfoModalProps) {
  const { name, avatar, description, createdAt, website } = data;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 text-slate-200">
        <header className="flex items-start gap-4">
          <img
            src={avatar}
            alt={`Avatar de ${name}`}
            className="h-16 w-16 shrink-0 rounded-full border border-slate-600 object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold text-slate-100">{name}</h1>
            <p className="text-xs text-slate-400">
              Creado el {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </header>
        <p className="text-sm leading-relaxed text-slate-300">{description}</p>

        <div className="rounded-lg bg-slate-800/60 p-3 text-sm text-slate-300">
          <p className="mb-1">
            <span className="font-medium text-slate-200">Website:</span>{" "}
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
            >
              {website}
            </a>
          </p>
          <p>
            <span className="font-medium text-slate-200">Registrado:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onEdit}
            className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-500/70 hover:text-sky-200"
          >
            Editar
          </button>
        </div>
      </div>
    </Modal>
  );
}
