/**
 * Social login provider registry.
 * UI labels come from i18n at render time.
 */
export type SocialProviderId = "google" | "apple";

export interface SocialProviderMeta {
  id: SocialProviderId;
  enabled: boolean;
}

export const SOCIAL_PROVIDER_REGISTRY: readonly SocialProviderMeta[] = [
  { id: "google", enabled: true },
  { id: "apple", enabled: false },
] as const;

export function getEnabledSocialProviders(): SocialProviderMeta[] {
  return SOCIAL_PROVIDER_REGISTRY.filter((p) => p.enabled);
}
