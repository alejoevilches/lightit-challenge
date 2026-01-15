import { useEffect, useState } from "react"
import apiFetch from "../services/apiFetch";

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

  useEffect(() => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    apiFetch<T>(url)
      .then(data => {
        setState({ data, loading: false, error: null })
      })
      .catch((e) => {
        setState({
          data: null,
          loading: false,
          error: e.message
        });
      });
  }, [url])

  return state;
}