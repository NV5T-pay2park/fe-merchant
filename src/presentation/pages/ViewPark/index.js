import BaseLayout from "presentation/container/BaseLayout";
import { useParams } from "react-router-dom";

export default function ViewPark({ title }) {
  const { parkId } = useParams();
  return (
    <BaseLayout
      title={title}
      breadcrumb={[
        { label: "home" },
        { label: "Quản lý bãi giữ xe", route: "/manage" },
        { label: title },
      ]}
    >
      {parkId}
    </BaseLayout>
  );
}
