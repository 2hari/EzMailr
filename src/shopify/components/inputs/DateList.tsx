import React, { useState } from 'react';
import { Popover, Button, OptionList } from '@shopify/polaris';
import { CalendarMinor } from '@shopify/polaris-icons';

const DateList = () => {
  const ranges = [
    {
      title: 'No Date',
      alias: 'no-date',
      period: null,
    },
    {
      title: 'Today',
      alias: 'today',
      period: {
        since: 'today',
        until: 'today',
      },
    },
    {
      title: 'Yesterday',
      alias: 'yesterday',
      period: {
        since: 'yesterday',
        until: 'yesterday',
      },
    },
    {
      title: 'Last 7 days',
      alias: 'last7days',
      period: {
        since: '-7d',
        until: '-1d',
      },
    },
  ];
  const [selected, setSelected] = useState(ranges[0]);
  const [popoverActive, setPopoverActive] = useState(false);
  return (
    <div>
      <Popover
        autofocusTarget="none"
        preferredAlignment="left"
        preferInputActivator={false}
        preferredPosition="below"
        activator={
          <Button
            onClick={() => setPopoverActive(!popoverActive)}
            icon={CalendarMinor}
          >
            {selected!.title}
          </Button>
        }
        active={popoverActive}
        onClose={() => {}}
      >
        <OptionList
          options={ranges.map((range) => ({
            value: range.alias,
            label: range.title,
          }))}
          selected={[selected!.alias]}
          onChange={(value) => {
            setSelected(ranges.find((range) => range.alias === value[0]));
            setPopoverActive(false);
          }}
        />
      </Popover>
    </div>
  );
};

export default DateList;
