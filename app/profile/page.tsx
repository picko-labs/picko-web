import { auth } from "@/auth";
import ProfileContent from "@/components/features/profile/ProfileContent";

/**
 * /profile — 프로토타입 ProfileScreen (~2663)
 * 비로그인 시 middleware → /login?redirect=/profile
 * @see docs/ROUTING.md · docs/AUTH.md
 */
export default async function ProfilePage() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-neutral-cream p-lg">
      <div className="max-w-lg mx-auto">
        <ProfileContent user={session?.user} />
      </div>
    </main>
  );
}
