import {
  Body,
  Heading,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

type ContactFormEmailProps = {
  message: string;
  email: string;
};

const ContactFormEmail = ({ message, email }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-800">
          <Container className="max-w-md mx-auto p-4">
            <Section className="bg-white shadow-md rounded-md p-4">
              <Text className="text-3xl text-gray-900 font-bold mb-2 text-center">
                New Message from Your Portfolio Site
              </Text>

              <Text className="whitespace-pre-wrap">{message}</Text>
              <Hr className="my-4" />
              <Text className="text-gray-600">
                The sender&apos;s email is:{' '}
                <a href={`mailto:${email}`}>{email}</a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
