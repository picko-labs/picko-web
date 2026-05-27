/**
 * Picko App Router 경로 상수
 * @see docs/ROUTING.md
 */

export const routes = {
  map: "/",
  login: "/login",
  profile: "/profile",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

/** 프로토타입 currentScreen → Next.js path */
export const prototypeScreenToRoute: Record<string, AppRoute> = {
  map: routes.map,
  login: routes.login,
  profile: routes.profile,
};

/** 지도 페이지 사이드바 탭 (URL 아님, state) */
export type SidebarNav = "info" | "pick" | "lifestyle" | "my";

/** 지도 페이지 스코프 탭 */
export type ScopeTab = "nearby" | "nationwide";
