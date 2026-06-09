import type { Provider } from "next-auth/providers";
import Apple from "next-auth/providers/apple";
import Google from "next-auth/providers/google";
import {
  getEnabledSocialProviders,
  type SocialProviderId,
} from "@/lib/auth/social-providers";

const PROVIDER_FACTORIES: Record<
  SocialProviderId,
  () => Provider
> = {
  google: () => Google,
  apple: () => Apple,
};

/** 레지스트리에서 enabled인 프로바이더만 NextAuth에 등록 */
export function buildAuthProviders(): Provider[] {
  return getEnabledSocialProviders().map((meta) => PROVIDER_FACTORIES[meta.id]());
}
