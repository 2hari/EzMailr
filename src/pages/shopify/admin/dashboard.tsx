import { useState } from 'react';
import { Text } from '@shopify/polaris';
import { useRouter } from 'next/router';
import AllContactsTable from '~/shopify/components/data/AllContactsTable';
import Loading from '~/components/Loading';
import StatsRow from '~/shopify/components/data/StatsRow';
import { api } from '~/utils/api';
import Playground from '~/shopify/components/Layout/PlayGround';
import AppAdmin from '~/shopify/components/Layout/AppAdmin';
import DateList from '~/shopify/components/inputs/DateList';

type SelectedDate = {
  month: number;
  year: number;
};

function Dashboard() {
  const getAllUserContacts = api.contacts.getAllUserContacts.useQuery();
  const getListsCount = api.lists.getListsCount.useQuery();
  const getSentCampaignCount = api.campaigns.getSentCampaignCount.useQuery();
  const router = useRouter();
  const pageName =
    router.pathname.split('/').pop()!.charAt(0).toUpperCase() +
    router.pathname.split('/').pop()!.slice(1);

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setDate] = useState<SelectedDate>({
    month: 1,
    year: 2018,
  });

  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Mon Mar 12 2018 00:00:00 GMT-0500 (EST)'),
  });

  function handleMonthChange(month: number, year: number) {
    setDate({ month, year });
  }

  if (
    getAllUserContacts.isLoading ||
    getListsCount.isLoading ||
    getSentCampaignCount.isLoading
  )
    return <Loading />;

  return (
    <div className="mt-8 flex flex-col">
      <div className="mb-4 flex justify-between">
        <div>
          <Text as="h4" variant="headingLg">
            {pageName}
          </Text>
        </div>
        <div className="flex space-x-4">
          <DateList />
        </div>
      </div>
      <StatsRow
        stats={[
          {
            name: 'Total Contacts',
            stat: getAllUserContacts.data
              ? String(getAllUserContacts.data?.length)
              : '0',
          },
          {
            name: 'Email Lists',
            stat: getListsCount?.data ? String(getListsCount?.data) : '0',
          },
          {
            name: 'Campaigns Sent',
            stat: getSentCampaignCount?.data
              ? String(getSentCampaignCount?.data)
              : '0',
          },
        ]}
      />
      <div className="mt-8">
        <AllContactsTable />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Playground>
      <AppAdmin>
        <Dashboard />
      </AppAdmin>
    </Playground>
  );
}
