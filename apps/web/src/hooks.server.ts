import { type Handle, redirect } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  event.setHeaders({
    "x-clacks-overhead": "GNU Terry Pratchett",
  })

  const isLoggedIn = event.cookies.get("is_loggedin") === "true"
  const pathname = event.url.pathname

  // if ((pathname === "/" || pathname === "/login" || pathname === "/register") && isLoggedIn) {
  //   throw redirect(301, "/projects")
  // }

  // if (pathname.startsWith("/projects") && !isLoggedIn) {
  //   throw redirect(301, "/login")
  // }

  return resolve(event)
}
