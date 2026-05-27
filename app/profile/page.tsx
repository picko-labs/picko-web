import Link from "next/link";
import { routes } from "@/lib/routes";

/**
 * /profile — 프로토타입 ProfileScreen (~2663)
 * @see docs/ROUTING.md
 * @see K-SPOT Map.html — rg "function ProfileScreen"
 */
export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-neutral-cream p-lg">
      <div className="max-w-lg mx-auto">
        <Link
          href={routes.map}
          className="text-caption text-secondary hover:underline mb-lg inline-block"
        >
          ← Back to map
        </Link>
        <h1 className="text-title mb-md">My Profile</h1>
        <p className="text-body text-neutral-dusk">
          (Placeholder — implement from K-SPOT Map.html ProfileScreen)
        </p>
      </div>
    </main>
  );
}
