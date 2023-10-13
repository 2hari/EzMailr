import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LogoSm from '../../../../public/logo-sm.png';
import { Page, Text, Divider, Icon, UnstyledLink } from '@shopify/polaris';
import { PinUnfilledMinor, HorizontalDotsMinor } from '@shopify/polaris-icons';

const AppAdmin = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pageName =
    router.pathname.split('/').pop()!.charAt(0).toUpperCase() +
    router.pathname.split('/').pop()!.slice(1);

  console.log(router);
  return (
    <>
      <div className="flex w-full items-center justify-between p-3">
        <div className="flex items-center">
          <Image
            src={LogoSm}
            alt="EzMailr"
            height={20}
            width={20}
            placeholder="blur"
          />
          <span className="ml-2">
            <Text as="h6" variant="headingXs">
              EzMailr - Drag and Drop Email Builder
            </Text>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Icon source={PinUnfilledMinor} />
          <Icon source={HorizontalDotsMinor} />
        </div>
      </div>
      <Divider />
      <div className="px-10 py-5">
        <div className="flex justify-between">
          <div>
            <Text as="h4" variant="headingLg">
              {pageName}
            </Text>
          </div>
          <div className="flex space-x-4">
            <UnstyledLink
              url="https://www.youtube.com/"
              target="_blank"
              className="600 text-blue-400"
            >
              View quick start video
            </UnstyledLink>
            <UnstyledLink url="#" className="600 text-blue-400">
              Apps
            </UnstyledLink>
            <UnstyledLink url="#" className="600 text-blue-400">
              Support
            </UnstyledLink>
          </div>
        </div>
      </div>
      <Page>
        <div className="min-h-screen">{children}</div>
      </Page>
    </>
  );
};

export default AppAdmin;
