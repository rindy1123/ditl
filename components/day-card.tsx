import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DayPieChart } from "@/components/day-pie-chart";
import { formatDistanceToNow } from "@/lib/utils";
import type { Day } from "@/lib/types";
import { getFlagAndName } from "@/lib/countries";

interface DayCardProps {
  day: Day;
}

export function DayCard({ day }: DayCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/day/${day.id}`}>
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <div>
            <h3 className="font-semibold">{day.user.occupation}</h3>
            <p className="text-sm text-muted-foreground">
              {`${getFlagAndName(day.user.country)} • `}
              {formatDistanceToNow(day.date)}
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-square w-full p-4">
            <DayPieChart activities={day.activities} />
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <h4 className="font-medium">{day.title}</h4>
        </CardFooter>
      </Link>
    </Card>
  );
}
