import { Text, Button } from '@shopify/polaris';
import { useRouter } from 'next/router';
import { useState, useLayoutEffect, useRef } from 'react';
import Playground from '~/shopify/components/Layout/PlayGround';
import AppAdmin from '~/shopify/components/Layout/AppAdmin';
import StackedList from '~/shopify/components/data/StackedList';
import { api } from '~/utils/api';

function Lists() {
  const router = useRouter();
  const pageName =
    router.pathname.split('/').pop()!.charAt(0).toUpperCase() +
    router.pathname.split('/').pop()!.slice(1);

  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedlists, setSelectedlists] = useState<
    { id: string; createdAt: Date; name: string }[]
  >([]);
  const allLists = api.lists.getListsAndContactsCount.useQuery();
  const lists = allLists.data ?? [];
  const [showNewListModal, setShowNewListModal] = useState(false);

  const utils = api.useContext();
  const deleteLists = api.lists.deleteLists.useMutation({
    onSuccess: () => {
      void utils.lists.invalidate();
    },
  });

  const getAllUserContacts = api.contacts.getAllUserContacts.useQuery();

  useLayoutEffect(() => {
    if (allLists.data) {
      const isIndeterminate =
        selectedlists.length > 0 && selectedlists.length < lists.length;
      setChecked(selectedlists.length === lists.length);
      setIndeterminate(isIndeterminate);
      if (checkbox.current !== null) {
        checkbox.current.indeterminate = isIndeterminate;
      }
    }
  }, [selectedlists, allLists.data, lists.length]);

  return (
    <div className="mt-8 flex flex-col">
      <div className="mb-4 flex justify-between">
        <div>
          <Text as="h4" variant="headingLg">
            {pageName}
          </Text>
        </div>
        <div className="flex space-x-4">
          <Button primary={true}>New List</Button>
        </div>
      </div>
      <div className="mt-8">
        <StackedList
          items={[
            {
              id: 1,
              title: 'All Contacts',
              label: 'Default List',
              href: '/admin/lists/contacts',
              value: `${getAllUserContacts.data?.length ?? ''}`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default function ListsPage() {
  return (
    <Playground>
      <AppAdmin>
        <Lists />
      </AppAdmin>
    </Playground>
  );
}
