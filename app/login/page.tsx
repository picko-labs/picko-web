import Link from "next/link";
import { routes } from "@/lib/routes";

/**
 * /login — 프로토타입 LoginScreen (~2551)
 * @see docs/ROUTING.md
 * @see K-SPOT Map.html — rg "function LoginScreen"
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-neutral-cream flex items-center justify-center p-lg">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-2xl">
        <h1 className="text-title text-primary mb-md">K●SPOT</h1>
        <p className="text-body text-neutral-dusk mb-xl">
          Sign in to save picks and add spots.
        </p>
        <p className="text-caption text-neutral-dusk mb-lg">
          (Placeholder — implement from K-SPOT Map.html LoginScreen)
        </p>
        <Link
          href={routes.map}
          className="block w-full text-center px-xl py-md bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-base"
        >
          Continue to map
        </Link>
      </div>
    </main>
  );
}
