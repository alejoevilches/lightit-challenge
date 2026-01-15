# Light-it Challenge - Patient Directory

Small patient directory built with React, TypeScript, Vite, Tailwind CSS, and Zod. The UI focuses on reusable, composable components (cards and modals) and a predictable state flow for editing and adding patients.

## Highlights

- Modular UI components 
- Type-safe data flow with TypeScript
- Form validation with Zod
- Tailwind CSS styling and custom modal animations
- ESLint configured for consistent code quality

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Zod for schema validation
- ESLint for linting

## Project Structure

```
src/
  components/
    Modal.tsx
    ModalOverflow.tsx
    PatientCard.tsx
    PatientInfoModal.tsx
    PatientEditModal.tsx
  hooks/
    useFetch.ts
  types/
    Patient.ts
  App.tsx
  main.tsx
  index.css
```

## Running Locally

1) Install dependencies

```bash
npm install
```

2) Start the dev server

```bash
npm run dev
```

3) Build for production

```bash
npm run build
```

4) Preview the production build

```bash
npm run preview
```

5) Lint the project

```bash
npm run lint
```

## Design Decisions

- **Composable modal system**: `Modal` provides the shell (overlay, layout, transitions), while `PatientInfoModal` and `PatientEditModal` focus on patient-specific UI. This keeps the modal reusable and easy to extend.
- **Single source of truth**: The patients list lives in `App.tsx` and is updated through callbacks (`onUpdate`, `onSave`) to avoid duplicated state or stale data.
- **Validation at the edge**: Zod schemas validate form values before saving, keeping the edit modal predictable and preventing invalid data from entering app state.
- **Tailwind for rapid iteration**: Utility-first styling keeps styles co-located with markup and speeds up UI iteration without separate CSS files.
- **Smooth modal UX**: Subtle open/close transitions improve perceived performance without heavy animation libraries.

## Reusable Components

- `Modal`: generic overlay and dialog shell with click-outside close and keyboard escape handling.
- `ModalOverflow`: ensures proper scroll handling for long modal content.
- `PatientCard`: concise patient summary with a consistent visual hierarchy.
- `PatientInfoModal`: read-only modal designed to mirror the card layout.
- `PatientEditModal`: edit modal that preserves the same layout, swapping text for inputs.
