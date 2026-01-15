type ModalOverflowProps = {
  children: React.ReactNode;
};

export default function ModalOverflow({ children }: ModalOverflowProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 px-4 py-8">
      <div className="flex min-h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
