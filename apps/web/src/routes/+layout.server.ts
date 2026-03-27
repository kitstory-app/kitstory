import type { LayoutServerLoad } from "./$types"

export const load = (async ({ cookies }) => {
  // This is temporary mock to get the UI to change to its logged in state
  // Actual authentication is still pending
  const isLoggedIn = cookies.get("is_loggedin") === "true"

  return { isLoggedIn }
}) satisfies LayoutServerLoad
