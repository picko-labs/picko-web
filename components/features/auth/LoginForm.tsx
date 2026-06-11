"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SocialLoginButtons } from "@/components/features/auth/SocialLoginButtons";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { routes } from "@/lib/routes";

const t = getDictionary();

export function LoginForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const callbackUrl =
    redirect && redirect.startsWith("/") && !redirect.startsWith("//")
      ? redirect
      : routes.map;

  return (
    <>
      <h1 className="text-title text-primary mb-md">{t.auth.signInTitle}</h1>
      <p className="text-body text-neutral-dusk mb-xl">
        {t.auth.signInDescription}
      </p>
      <SocialLoginButtons callbackUrl={callbackUrl} className="mb-lg" />
      <Link
        href={routes.map}
        className="block w-full text-center px-xl py-md text-caption text-neutral-dusk hover:text-primary transition-base"
      >
        {t.common.backToMap}
      </Link>
    </>
  );
}
