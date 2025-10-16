import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import ProposalContent from './ProposalContent';

export default async function StuyvesantProposalPage() {
  // Server-side authentication check
  const session = await getSession();

  if (!session) {
    redirect('/login?from=/proposal/stuyvesant');
  }

  return <ProposalContent />;
}