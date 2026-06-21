"use client";

import Link from "next/link";
import { LanguageSelector } from "@/components/features/profile/LanguageSelector";
import { useDictionary } from "@/components/providers/LocaleProvider";
import { routes } from "@/lib/routes";
import type { Session } from "next-auth";

type ProfileContentProps = {
  user: Session["user"] | undefined;
};

export function ProfileContent({ user }: ProfileContentProps) {
  const { auth, common, profile } = useDictionary();

  return (
    <>
      <Link
        href={routes.map}
        className="text-caption text-secondary hover:underline mb-lg inline-block"
      >
        {profile.backToMap}
      </Link>
      <h1 className="text-title mb-md">{profile.title}</h1>
      {user ? (
        <div className="bg-white rounded-lg shadow-md p-xl">
          {user.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.image}
              alt=""
              className="w-16 h-16 rounded-full mb-md"
              width={64}
              height={64}
            />
          )}
          <p className="text-headline text-primary mb-sm">
            {user.name ?? common.member}
          </p>
          {user.email && (
            <p className="text-body text-neutral-dusk">{user.email}</p>
          )}

          <div className="mt-xl pt-lg border-t border-neutral-paper">
            <h2 className="text-body font-semibold text-primary mb-md">
              {profile.settings}
            </h2>
            <LanguageSelector />
          </div>

          <p className="text-caption text-neutral-dusk mt-lg">
            {profile.placeholder}
          </p>
        </div>
      ) : (
        <p className="text-body text-neutral-dusk">{auth.signInRequired}</p>
      )}
    </>
  );
}
