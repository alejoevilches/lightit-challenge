import type { Patient } from "../types/Patient";

type PatientCardProps = {
  data: Patient;
};

export default function PatientCard({ data }: PatientCardProps) {
  const { name, avatar, description, website, createdAt } = data;
  return (
    <article className="flex gap-4 rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
      <img
        src={avatar}
        alt={`Avatar de ${name}`}
        className="h-16 w-16 shrink-0 rounded-full border border-sky-300 object-cover"
      />

      {/* Content */}
      <div className="flex flex-col gap-2">
        <header>
          <h2 className="text-lg font-semibold text-sky-900">
            {name}
          </h2>
          <p className="text-xs text-sky-600">
            Creado el {new Date(createdAt).toLocaleDateString()}
          </p>
        </header>

        <p className="text-sm text-sky-800 line-clamp-3">
          {description}
        </p>

        <footer>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-sky-700 hover:text-sky-900 underline underline-offset-2"
          >
            Sitio web
          </a>
        </footer>
      </div>
    </article>
  );
}