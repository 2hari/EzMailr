import React from 'react';
import Image from 'next/image';
import Playground from '~/shopify/components/Layout/PlayGround';
import AppAdmin from '~/shopify/components/Layout/AppAdmin';
import {
  LegacyCard,
  Page,
  Text,
  ButtonGroup,
  FullscreenBar,
  Button,
  Divider,
} from '@shopify/polaris';

const Shopify = () => {
  return (
    <Playground>
      <AppAdmin>
        <LegacyCard title="Polaris 12 Beta" sectioned>
          <Text as={'p'}>
            This playground now uses Polaris v12 Beta, so it may differ from
            what you have on your regular <code>npm i @shopify/polaris</code>{' '}
            install. Check the version in <code>package.json</code> to get this
            on your project.
          </Text>
        </LegacyCard>
        <LegacyCard
          sectioned
          title="PolarWind"
          primaryFooterAction={{
            content: 'Repository',
            onAction: () => {
              window.open('https://github.com/', '_blank');
            },
          }}
        >
          <p>
            I made this playground for designers who can code. They can quickly
            create UIs for Shopify apps, making it app developers job easy.{' '}
            <br />I personally use it to prototype apps before diving into
            coding. It&apos;s also handy for offline work.
          </p>
        </LegacyCard>
      </AppAdmin>
    </Playground>
  );
};

export default Shopify;
