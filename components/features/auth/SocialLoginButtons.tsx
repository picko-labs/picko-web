"use client";

import { signIn } from "next-auth/react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  getEnabledSocialProviders,
  type SocialProviderId,
} from "@/lib/auth/social-providers";

const t = getDictionary().auth;

type SocialLoginButtonsProps = {
  callbackUrl?: string;
  className?: string;
};

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

const PROVIDER_ICONS: Record<SocialProviderId, () => React.ReactNode> = {
  google: GoogleIcon,
  apple: AppleIcon,
};

export function SocialLoginButtons({
  callbackUrl = "/",
  className = "",
}: SocialLoginButtonsProps) {
  const providers = getEnabledSocialProviders();

  if (providers.length === 0) {
    return (
      <p className="text-caption text-neutral-dusk text-center">
        {t.signInUnavailable}
      </p>
    );
  }

  return (
    <div className={`social-login-buttons ${className}`.trim()}>
      {providers.map((provider) => {
        const Icon = PROVIDER_ICONS[provider.id];
        return (
          <button
            key={provider.id}
            type="button"
            className={`social-login-btn social-login-btn--${provider.id}`}
            onClick={() => signIn(provider.id, { callbackUrl })}
          >
            <Icon />
            <span>{provider.label}</span>
          </button>
        );
      })}
    </div>
  );
}
