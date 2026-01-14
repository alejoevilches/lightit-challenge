import { useState } from "react";
import type { Patient } from "../types/Patient"

type PatientCardProps = {
  data: Patient
}

export default function PatientCard({ data }: PatientCardProps) {
  const { name, avatar, description, website, createdAt } = data;
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group rounded-2xl border border-slate-700/60 bg-slate-900 p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-sky-500/50">
      <div className="flex items-start gap-5">
        <img
          src={avatar}
          alt={`Avatar de ${name}`}
          className="h-16 w-16 shrink-0 rounded-full border border-slate-600 object-cover transition duration-200 group-hover:scale-105"
        />

        <div className="flex flex-1 flex-col gap-2">
          {/* Header */}
          <header className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
              <p className="text-xs text-slate-400">
                Creado el {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>

            <button
              onClick={() => setExpanded(v => !v)}
              aria-expanded={expanded}
              aria-label="Ver detalles del paciente"
              className="rounded-md p-1 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-500/40"
            >
            </button>
          </header>

          {/* Description (collapsed preview) */}
          <p className={`text-sm leading-relaxed text-slate-300 ${expanded ? "" : "line-clamp-3"}`}>
            {description}
          </p>

          {/* Expanded content */}
          {expanded && (
            <div className="mt-3 rounded-lg bg-slate-800/60 p-3 text-sm text-slate-300">
              <p className="mb-1">
                <span className="font-medium text-slate-200">Website:</span>{" "}
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                >
                  {website}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-200">Registrado:</span>{" "}
                {new Date(createdAt).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}