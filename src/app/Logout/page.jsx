"use client"
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      signOut({ redirect: false }).then(() => {
        router.push('/'); // Redirect to login after signing out
      });
    } else {
      router.push('/'); // If not logged in, just go to the login page
    }
  }, [status, router]);
}