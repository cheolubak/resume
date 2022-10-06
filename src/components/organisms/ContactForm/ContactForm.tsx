import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAnalytics } from '../../../hooks/Analytics';
import { useFunctions } from '../../../hooks/Functions';
import Button from '../../atom/Button';
import Input from '../../atom/Input';
import Loading from '../../atom/Loading';
import Textarea from '../../atom/Textarea';
import { ContactFromStyled } from './ContactFormStyled';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;

export default function ContactForm() {
  const { selectContent } = useAnalytics();
  const { sendEmail } = useFunctions();

  const [isLoading, setIsLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [info, setInfo] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    content?: string;
  }>({});

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = event.target;
    const name = target.name as 'name' | 'email' | 'subject' | 'content';
    const value = target.value;
    setInfo((prev) => {
      prev[name] = value;

      setValid(
        !!info.name &&
          !!info.email &&
          emailRegex.test(info.email) &&
          !!info.content &&
          !!info.subject
      );

      return prev;
    });
  }

  function sendContent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    selectContent({ contentId: 'SendContent', contentType: 'button' });
    if (!!info.name && !!info.email && !!info.content && !!info.subject) {
      setIsLoading(true);
      sendEmail({
        email: info.email,
        name: info.name,
        content: info.content,
        subject: info.subject,
      }).then(() => {
        setInfo({ name: '', email: '', content: '', subject: '' });
        setIsLoading(false);
        alert('연락주셔서 감사합니다! 최대한 빨리 확인 후 연락드리겠습니다!');
      });
    }
  }

  return (
    <>
      <ContactFromStyled onSubmit={sendContent}>
        <Input
          type='text'
          name='name'
          value={info.name}
          placeholder='이름'
          onChange={handleChange}
        />
        <Input
          type='email'
          name='email'
          value={info.email}
          placeholder='이메일'
          onChange={handleChange}
        />
        <Input
          type='text'
          name='subject'
          value={info.subject}
          placeholder='제목'
          onChange={handleChange}
        />
        <Textarea
          name='content'
          value={info.content}
          placeholder='내용'
          onChange={handleChange}
        />
        <Button
          type='submit'
          style={{ width: '100%' }}
          disabled={!valid}
        >
          보내기
        </Button>
      </ContactFromStyled>
      {isLoading && <Loading />}
    </>
  );
}
