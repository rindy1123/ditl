import type { Activity } from "@/lib/types";
import { hourSuffix } from "@/lib/utils";

interface ActivityListProps {
  activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
  // Sort activities by hours (descending)
  const sortedActivities = [...activities].sort((a, b) => b.hours - a.hours);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Activities</h3>
      <div className="space-y-2">
        {sortedActivities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: activity.color }}
              />
              <span>{activity.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {activity.hours} {hourSuffix(activity.hours)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({Math.round((activity.hours / 24) * 100)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
