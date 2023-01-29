import { redirect } from 'react-router-dom';

export async function action({ params }: any) {
  // await deleteContact(params.contactId);
  return redirect('/1');
}
