import useSWR from "swr";
import { tr } from "zod/locales";

const fetcher = (url: string) => fetch(url).then((r) => r.json());


export function useSession() {
  const {data, mutate, isLoading} = useSWR("/api/session", fetcher,{
    revalidateOnFocus: true,
  })

  return {
    data,
    loading: isLoading,
    refresh: () => mutate(),
  }
}