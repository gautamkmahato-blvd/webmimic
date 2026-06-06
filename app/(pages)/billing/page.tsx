import { redirect } from 'next/navigation';

/** Legacy route — credits is the canonical billing hub. */
export default function BillingPage() {
  redirect('/credits');
}
