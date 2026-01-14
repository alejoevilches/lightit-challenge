import { useState } from "react"

type FetchState<T> = {
  data: T | null,
  loading: boolean,
  error: string | null
};


export default function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });
}