import type { Procedure } from "./procedures";

export function matchesSearch(procedure: Procedure, query: string): boolean {
  return procedure.name.toLowerCase().includes(query.trim().toLowerCase());
}
