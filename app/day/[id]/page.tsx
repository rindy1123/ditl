import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DayPieChart } from "@/components/day-pie-chart";
import { ActivityList } from "@/components/activity-list";
import { mockDays } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { getFlagAndName } from "@/lib/countries";

interface DayPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DayPage(props: DayPageProps) {
  const params = await props.params;
  // TODO
  // In a real app, we would fetch this data from an API
  const day = mockDays.find((d) => d.id === params.id) || mockDays[0];

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to feed
        </Link>
      </Button>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div>
                <CardTitle>{day.title}</CardTitle>
                <CardDescription>
                  {`${day.occupation} • `}
                  {`${getFlagAndName(day.country)} • `}
                  {formatDate(day.date)}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {day.description && <p className="mb-6">{day.description}</p>}
            <ActivityList activities={day.activities} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time Distribution</CardTitle>
            <CardDescription>24 hours visualized</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square w-full">
              <DayPieChart activities={day.activities} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
