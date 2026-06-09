import { auth } from "@/auth";
import { routes } from "@/lib/routes";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  if (!req.auth && pathname === routes.profile) {
    const loginUrl = new URL(routes.login, req.nextUrl.origin);
    loginUrl.searchParams.set("redirect", pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/profile"],
};
