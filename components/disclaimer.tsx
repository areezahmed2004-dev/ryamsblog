import { disclaimer, urgentNote } from "@/lib/site";

export function Disclaimer({ urgent = false }: { urgent?: boolean }) {
  return (
    <aside className="border-t border-ink/10 pt-6">
      <p className="text-sm leading-6 text-muted">{disclaimer}</p>
      {urgent ? <p className="mt-3 text-sm leading-6 text-muted">{urgentNote}</p> : null}
    </aside>
  );
}
