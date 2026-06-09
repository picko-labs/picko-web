import { en } from "@/lib/i18n/en";

/**
 * Social login provider registry.
 * UI labels and NextAuth providers share this single source.
 */
export type SocialProviderId = "google" | "apple";

export interface SocialProviderMeta {
  id: SocialProviderId;
  label: string;
  enabled: boolean;
}

export const SOCIAL_PROVIDER_REGISTRY: readonly SocialProviderMeta[] = [
  { id: "google", label: en.auth.continueWithGoogle, enabled: true },
  { id: "apple", label: en.auth.continueWithApple, enabled: false },
] as const;

export function getEnabledSocialProviders(): SocialProviderMeta[] {
  return SOCIAL_PROVIDER_REGISTRY.filter((p) => p.enabled);
}
