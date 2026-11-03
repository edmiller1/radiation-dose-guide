import type { Procedure } from "./procedures";

/**
 * Returns true when `procedure` should be shown for the search `query`.
 *
 * Called for every procedure on each keystroke. `query` is the raw input
 * value; it is never empty here (the caller skips filtering for "").
 * Category filtering is handled separately by the caller.
 *
 * TODO: implement the real search. The line below is a naive placeholder
 * (case-insensitive substring on the name) so the UI can be wired up.
 */
export function matchesSearch(procedure: Procedure, query: string): boolean {
  return procedure.name.toLowerCase().includes(query.trim().toLowerCase());
}
