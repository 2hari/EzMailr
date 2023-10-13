import Playground from '~/shopify/components/Layout/PlayGround';
import AppAdmin from '~/shopify/components/Layout/AppAdmin';

function Campaigns() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold ">
          Feature in Developement. Coming Soon ...
        </h3>
      </div>
    </div>
  );
}

export default function CampaignsPage() {
  return (
    <Playground>
      <AppAdmin>
        <Campaigns />
      </AppAdmin>
    </Playground>
  );
}
