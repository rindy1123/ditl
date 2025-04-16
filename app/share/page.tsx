"use client";

import type React from "react";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DayPieChart } from "@/components/day-pie-chart";
import { generateRandomColor } from "@/lib/utils";
import type { Activity } from "@/lib/types";
import { API } from "@/lib/api";
import { CountrySelector } from "@/components/country-selector";

const DEFAULT_ACTIVITY_HOURS = "1";

export default function SharePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [activities, setActivities] = useState<Activity[]>([
    { id: "sleep", name: "Sleep", hours: 8, color: "#6366f1" },
  ]);
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityHours, setNewActivityHours] = useState(
    DEFAULT_ACTIVITY_HOURS,
  );

  const totalHours = useMemo(
    () => activities.reduce((sum, activity) => sum + activity.hours, 0),
    [activities],
  );
  const hoursRemaining = useMemo(() => 24 - totalHours, [totalHours]);
  const isValidActivityHours = useCallback(
    (hours: number) => !isNaN(hours) && hours > 0 && hours <= hoursRemaining,
    [hoursRemaining],
  );
  const isFormValid = useMemo(
    () => totalHours === 24 && title && country && occupation,
    [totalHours, title, country, occupation],
  );

  const handleAddActivity = useCallback(() => {
    const activityHours = Number.parseFloat(newActivityHours);
    if (!newActivityName || !isValidActivityHours(activityHours)) return;

    const newActivity: Activity = {
      id: newActivityName.toLowerCase().replace(/\s+/g, "-"),
      name: newActivityName,
      hours: activityHours,
      color: generateRandomColor(),
    };

    setActivities([...activities, newActivity]);
    setNewActivityName("");
    setNewActivityHours(DEFAULT_ACTIVITY_HOURS);
  }, [newActivityName, newActivityHours, activities, isValidActivityHours]);

  const handleRemoveActivity = (id: string) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!isFormValid) return;

      try {
        await API.days.post({
          title,
          description,
          occupation,
          country,
          activities,
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        return;
      }

      router.push("/");
    },
    [title, description, occupation, country, activities, isFormValid, router],
  );

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to feed
        </Link>
      </Button>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Share Your Day</CardTitle>
              <CardDescription>
                Tell us how you spend your 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 my-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="My typical workday"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  placeholder="Software Engineer, Student, etc."
                  value={occupation}
                  required
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <CountrySelector country={country} setCountry={setCountry} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="A brief description of your day..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Activities</h3>
                  <span className="text-sm text-muted-foreground">
                    {hoursRemaining} hours remaining
                  </span>
                </div>

                <div className="space-y-2">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: activity.color }}
                        />
                        <span>{activity.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{activity.hours} hours</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveActivity(activity.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">
                            Remove {activity.name}
                          </span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {hoursRemaining > 0 && (
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input
                        placeholder="Activity name"
                        value={newActivityName}
                        onChange={(e) => setNewActivityName(e.target.value)}
                      />
                    </div>
                    <div className="w-24">
                      <Input
                        type="number"
                        min="0.5"
                        max={hoursRemaining}
                        step="0.5"
                        value={newActivityHours}
                        onChange={(e) => setNewActivityHours(e.target.value)}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddActivity}
                      disabled={
                        !newActivityName ||
                        !isValidActivityHours(
                          Number.parseFloat(newActivityHours),
                        )
                      }
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add activity</span>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={!isFormValid}>
                Share My Day
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>How your day looks in a pie chart</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square w-full">
              <DayPieChart activities={activities} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
