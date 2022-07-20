import BaseLayout from "presentation/container/BaseLayout";

export default function ManagePage() {
  return (
    <BaseLayout
      title="Quản lý bãi giữ xe"
      breadcrumb={[
        { label: "home"},
        { label: "Quản lý bãi giữ xe"},
      ]}
    >

    </BaseLayout>
  )
}