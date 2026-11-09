import type { Metadata } from "next";
import { AdminAnalyticsClient } from "./AdminAnalyticsClient";

export const metadata: Metadata = {
  title: "Analytics — Admin",
  description: "Site-wide oMyImage tool activity.",
  robots: { index: false, follow: false },
};

export default function AdminAnalyticsPage() {
  return <AdminAnalyticsClient />;
}
