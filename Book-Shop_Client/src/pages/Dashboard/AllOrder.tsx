import Loader from "../../components/common/Loader";
import TableData from "../../components/Table/TableData";
import TableHead from "../../components/Table/TableHead";
import { useAllOrdersQuery } from "../../redux/features/order/order.api";

const AllOrder = () => {
  const { data: allOrders, isLoading } = useAllOrdersQuery(undefined);
  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 mt-2 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-[#003060cb]">
                <TableHead text={"#"} />
                <TableHead text={"Date"} />
                <TableHead text={"Transaction Id"} />
                <TableHead text={"Customer Name"} />
                <TableHead text={"Price"} />
                <TableHead text={"Email"} />
                <TableHead text={"Total"} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableData text={"1"} />
                <TableData text={"1"} />
                <TableData text={"1"} />
                <TableData text={"1"} />
                <TableData text={"1"} />
                <TableData text={"1"} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
