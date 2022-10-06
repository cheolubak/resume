import { Firebase } from './../utils/Firebase';
import { httpsCallable } from 'firebase/functions';

export function useFunctions() {
  return {
    sendEmail: ({
      name,
      email,
      subject,
      content,
    }: {
      name: string;
      email: string;
      subject: string;
      content: string;
    }) => {
      const send = httpsCallable(Firebase.functions, 'sendEmail');
      return send({ name, email, subject, content });
    },
  };
}
