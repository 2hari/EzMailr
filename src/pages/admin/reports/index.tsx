import AdminLayout from "~/layouts/AdminLayout";
import getServerSideProps from "~/utils/handleSessionRedirect";

export { getServerSideProps };

function Reports() {
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

export default function ReportsPage() {
  return (
    <AdminLayout pageHeading="Reports">
      <Reports />
    </AdminLayout>
  );
}
