"use client";

import { use } from "react";
import { LessonView } from "@/components/learning/LessonView";
import { EmptyState } from "@/components/ui/EmptyState";
import { getLessonById } from "@/lib/demo-data/learning/lessons";
import { BookX } from "lucide-react";

export default function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = use(params);
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return (
      <div className="mx-auto max-w-lg">
        <EmptyState
          icon={BookX}
          title="Lesson unavailable"
          description="This lesson couldn't be found. It may have moved or isn't part of your current learning path."
        />
      </div>
    );
  }

  return <LessonView lesson={lesson} />;
}
