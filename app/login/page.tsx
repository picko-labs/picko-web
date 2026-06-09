import { Suspense } from "react";
import LoginForm from "@/components/features/auth/LoginForm";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const t = getDictionary();

/**
 * /login — 프로토타입 LoginScreen (~2551)
 * @see docs/ROUTING.md · docs/AUTH.md
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-neutral-cream flex items-center justify-center p-lg">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-2xl">
        <Suspense
          fallback={
            <p className="text-body text-neutral-dusk text-center">
              {t.auth.loadingSignIn}
            </p>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
