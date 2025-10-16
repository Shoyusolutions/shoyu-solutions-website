import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import AdminClient from './AdminClient';

export default async function AdminPage() {
  // This runs on the server only - no client can see this code
  const session = await getSession();

  // Double-check authentication (middleware should have caught this)
  if (!session) {
    redirect('/login?from=/admin');
  }

  // Render the admin page
  // The actual content is in a client component for interactivity
  return <AdminClient />;
}