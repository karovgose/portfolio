'use server';
import { getErrorMessage, validateString } from '../libs/utils';
import { Resend } from 'resend';
import ContactFormEmail from '../email/ContactFormEmail';
import React from 'react';

const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const subject = formData.get('subject');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!validateString(subject, 500)) {
    return {
      error: 'Invalid subject',
    };
  }

  if (!validateString(email, 500)) {
    return {
      error: 'Invalid email address',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'karovgose7@gmail.com',
      subject: subject as string,
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data: data,
  };
};

export default sendEmail;
