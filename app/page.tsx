import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DayCard } from "@/components/day-card";
import { mockDays } from "@/lib/mock-data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PER_PAGE = 6;

export default function HomePage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  // TODO
  // In a real app, we would fetch this data from an API
  const { page } = searchParams;
  const totalDays = mockDays.length;
  const totalPages = Math.ceil(totalDays / PER_PAGE);
  const pageNumber = Number(page);
  const currentPage =
    isNaN(pageNumber) || pageNumber < 1
      ? 1
      : pageNumber > totalPages
        ? totalPages
        : pageNumber;
  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const displayedDays = mockDays.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Day in the Life</h1>
          <p className="text-muted-foreground">
            See how others spend their days
          </p>
        </div>
        <Button asChild>
          <Link href="/share">
            <PlusCircle className="mr-2 h-4 w-4" />
            Share Your Day
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedDays.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>

      <div className="my-6">
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`?page=${currentPage - 1}`} />
              </PaginationItem>
            )}
            {currentPage > 3 && (
              <>
                <PaginationItem>
                  <PaginationLink href="?page=1">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}
            {Array.from({ length: 5 }, (_, index) => {
              const pageNumber = currentPage - 2 + index;
              if (pageNumber < 1 || pageNumber > totalPages) {
                return null;
              }
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`?page=${pageNumber}`}
                    isActive={pageNumber === currentPage}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            {currentPage < totalPages - 2 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href={`?page=${totalPages}`}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext href={`?page=${currentPage + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
