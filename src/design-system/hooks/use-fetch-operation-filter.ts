import { useState } from "react";
import { GetService } from "../../api/services/requests-service";
import ApiRoutes from "../../api/services/api-routes";
import toast from "react-simple-toasts";

export function useFetchOperationData({ totalField }: { totalField: string }) {
  const [operationData, setOperationData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = (params?: any) => {
    setLoading(true);
    GetService({
      route: ApiRoutes.listOprations,
      params: params,
    })
      .then((res) => {
        setOperationData(res.data);
      })
      .catch((err) => {
        // Handle error accordingly
        toast(err, {
          position: "top-right",
        });
      })

      .finally(() => {
        setLoading(false);
      });
  };

  const handleFilter = (values: any) => {
    const params = {
      area: values.area || undefined,
      dateFrom: values.dateFrom || undefined,
      dateTo: values.dateTo || undefined,
      dateField: (values.dateFrom || values.dateTo) && "startDate",
      totalField: totalField,
    };
    fetchData(params);
  };

  return { operationData, loading, fetchData, handleFilter };
}
