import useFetch from "./hooks/useFetch"
import type { Patient } from "./types/Patient";

export default function App() {
  const { data, loading, error } = useFetch<Patient[]>("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users");

  if (loading) return "Loading"

  if (error) return "Error"

  return <p>Holi</p>
}