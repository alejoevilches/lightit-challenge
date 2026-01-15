import { useEffect } from "react";
import ModalOverflow from "./ModalOverflow";
import type { Patient } from "../types/Patient";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data?: Patient;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
    <ModalOverflow>
      <div
        className="flex min-h-full items-center justify-center animate-[modal-fade_180ms_ease-out]"
        onMouseDown={onClose}
      >
        <div
          role="dialog"
          className="w-full max-w-lg rounded-2xl border border-slate-700/60 bg-slate-900 p-6 text-slate-100 
          shadow-xl animate-[modal-pop_220ms_ease-out]"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <header className="mb-4 flex items-start justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1 text-slate-300 transition hover:bg-slate-800 hover:text-white 
              focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-500/40"
            >
              ✕
            </button>
          </header>
          <div className="text-sm leading-relaxed text-slate-200">{children}</div>
        </div>
      </div>
    </ModalOverflow>
  );
}
