import DashboardLayout from "@/components/layout/DashboardLayout";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="student" title="Student Portal">{children}</DashboardLayout>;
}
