import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Como funcionam as aulas virtuais?',
    content: () => (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam at magna dictum, ac pulvinar leo auctor. Praesent tortor tortor, pharetra in tempus id, faucibus ac mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed faucibus elementum rutrum. Morbi tristique, tellus quis ultrices condimentum, erat risus dictum eros, id vulputate tortor elit et orci. In sed finibus odio, ut accumsan diam. Ut tellus turpis, malesuada et venenatis pulvinar, placerat eu sapien. Donec sapien nunc, tempor et lorem ac, ultricies finibus lorem. In consectetur dui sed elementum auctor.
      </>
    ),
  },
  {
    title: 'Formulário dados do aluno(a)',
    content: () => (
      <>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScU_5Djz-XbJDiPnZi6ozCwUv-yZAP69ErWWwLvEXWM7qEy4w/viewform">https://docs.google.com/forms/d/e/1FAIpQLScU_5Djz-XbJDiPnZi6ozCwUv-yZAP69ErWWwLvEXWM7qEy4w/viewform</a>
      </>
    ),
  },
  {
    title: 'Pagamentos via PayPal',
    content: () => (
      <>
        <a target="_blank" href="https://www.paypal.me/sabiaduvida">https://www.paypal.me/sabiaduvida</a>
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Dúvidas frequentes</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
