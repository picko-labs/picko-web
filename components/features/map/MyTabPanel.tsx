"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { SocialLoginButtons } from "@/components/features/auth/SocialLoginButtons";
import { LanguageSelector } from "@/components/features/profile/LanguageSelector";
import { useDictionary } from "@/components/providers/LocaleProvider";
import { useLogoutMutation } from "@/lib/queries/auth";
import { routes } from "@/lib/routes";

export function MyTabPanel() {
  const { auth, common } = useDictionary();
  const { data: session, status } = useSession();
  const logout = useLogoutMutation();

  if (status === "loading") {
    return (
      <div className="my-tab-panel">
        <p className="my-tab-muted">{auth.loadingAccount}</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="my-tab-panel my-tab-panel--guest">
        <span className="my-tab-emoji" aria-hidden>
          👤
        </span>
        <h2 className="my-tab-title">{auth.saveYourPicks}</h2>
        <p className="my-tab-desc">{auth.saveYourPicksDesc}</p>
        <SocialLoginButtons callbackUrl="/" className="my-tab-login" />
        <p className="my-tab-footnote">{auth.appleComingSoon}</p>
        <div className="my-tab-settings">
          <LanguageSelector />
        </div>
      </div>
    );
  }

  const { user } = session;
  const displayName = user.name ?? user.email ?? common.member;

  return (
    <div className="my-tab-panel my-tab-panel--member">
      <div className="my-tab-profile">
        {user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.image}
            alt=""
            className="my-tab-avatar"
            width={56}
            height={56}
          />
        ) : (
          <div className="my-tab-avatar my-tab-avatar--placeholder" aria-hidden>
            👤
          </div>
        )}
        <div className="my-tab-profile-text">
          <div className="my-tab-name">{displayName}</div>
          {user.email && <div className="my-tab-email">{user.email}</div>}
        </div>
      </div>

      <nav className="my-tab-menu" aria-label={auth.accountMenu}>
        <Link href={routes.profile} className="my-tab-menu-item">
          {auth.myProfileAndSpots}
        </Link>
      </nav>

      <div className="my-tab-settings">
        <LanguageSelector />
      </div>

      <button
        type="button"
        className="my-tab-signout"
        disabled={logout.isPending}
        onClick={() => logout.mutate()}
      >
        {logout.isPending ? auth.signingOut : auth.signOut}
      </button>
    </div>
  );
}
