import Link from "next/link";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { routes } from "@/lib/routes";
import type { Session } from "next-auth";

const t = getDictionary();

type ProfileContentProps = {
  user: Session["user"] | undefined;
};

export default function ProfileContent({ user }: ProfileContentProps) {
  return (
    <>
      <Link
        href={routes.map}
        className="text-caption text-secondary hover:underline mb-lg inline-block"
      >
        {t.profile.backToMap}
      </Link>
      <h1 className="text-title mb-md">{t.profile.title}</h1>
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
            {user.name ?? t.common.member}
          </p>
          {user.email && (
            <p className="text-body text-neutral-dusk">{user.email}</p>
          )}
          <p className="text-caption text-neutral-dusk mt-lg">
            {t.profile.placeholder}
          </p>
        </div>
      ) : (
        <p className="text-body text-neutral-dusk">{t.auth.signInRequired}</p>
      )}
    </>
  );
}
