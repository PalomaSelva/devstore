"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    router.push("/search?q=" + data.q);
  }
  return (
    <form
      onSubmit={handleSearch}
      className="rounded-full flex px-3  items-center gap-2 w-80 bg-zinc-900 text-zinc-500 ring-zinc-700"
    >
      <Search size={20} />
      <input
        type="text"
        name="q"
        id="search"
        defaultValue={query ?? ""}
        placeholder="Buscar produtos..."
        className="bg-transparent text-sm flex-1 border-none outline-none py-3"
      />
    </form>
  );
}
