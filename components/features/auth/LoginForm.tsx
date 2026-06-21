"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SocialLoginButtons } from "@/components/features/auth/SocialLoginButtons";
import { useDictionary } from "@/components/providers/LocaleProvider";
import { routes } from "@/lib/routes";

export function LoginForm() {
  const { auth, common } = useDictionary();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const callbackUrl =
    redirect && redirect.startsWith("/") && !redirect.startsWith("//")
      ? redirect
      : routes.map;

  return (
    <>
      <h1 className="text-title text-primary mb-md">{auth.signInTitle}</h1>
      <p className="text-body text-neutral-dusk mb-xl">
        {auth.signInDescription}
      </p>
      <SocialLoginButtons callbackUrl={callbackUrl} className="mb-lg" />
      <Link
        href={routes.map}
        className="block w-full text-center px-xl py-md text-caption text-neutral-dusk hover:text-primary transition-base"
      >
        {common.backToMap}
      </Link>
    </>
  );
}
