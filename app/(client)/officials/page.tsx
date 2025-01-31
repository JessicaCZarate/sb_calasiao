import { officials } from "@/app/lib/officials";

export default function Page() {
  return (
    <section className="h-screen bg-slate-100">
      <h1>Municipal Officials</h1>
      {officials.map((official, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h2>{official.name}</h2>
          <p>{official.position}</p>
        </div>
      ))}
    </section>
  );
}
