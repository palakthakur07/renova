import type { Lesson } from "@/types/learning";

/**
 * The canonical demo lesson from the Phase 6 brief ("Working with
 * Variables"), placed in Module 3 alongside a spreadsheets lesson —
 * both feed the same underlying idea (a named place that holds a
 * value) through the Computer Applications course's practical lens.
 */
export const variablesLesson: Lesson = {
  id: "lesson-variables",
  moduleId: "mod-3",
  title: "Working with Variables",
  skill: "Programming Fundamentals",
  difficulty: "Beginner",
  estimatedMinutes: 15,
  whyThisLesson:
    "It builds on your completed computer fundamentals module and prepares you for the next web development module.",
  sections: [
    {
      id: "sec-concept",
      type: "concept",
      title: "Concept",
      body: "A variable is a named location used to store information. Think of it as a labeled box: you can put a value in, look at what's inside, or replace it with something new — and anything that refers to that label sees the current value.",
    },
    {
      id: "sec-example",
      type: "example",
      title: "Example",
      body: "In a spreadsheet, cell A1 works the same way. If A1 holds the number 10, any formula that references A1 will use 10 — until you change what's stored there.",
    },
    {
      id: "sec-interactive",
      type: "interactive",
      title: "Try it",
      body: "Adjust the values below and watch the calculated cell update — the same way a variable's value flows into anything that uses it.",
    },
    {
      id: "sec-practice",
      type: "practice",
      title: "Practice",
    },
    {
      id: "sec-checkpoint",
      type: "checkpoint",
      title: "Checkpoint",
    },
    {
      id: "sec-reflection",
      type: "reflection",
      title: "Reflection",
    },
  ],
  practiceQuestionIds: ["q-practice-1", "q-practice-2"],
  checkQuestionIds: ["q-check-1", "q-check-2", "q-check-3"],
};

export const spreadsheetsLesson: Lesson = {
  id: "lesson-spreadsheets",
  moduleId: "mod-3",
  title: "Creating a Spreadsheet",
  skill: "Data Organization",
  difficulty: "Beginner",
  estimatedMinutes: 20,
  whyThisLesson: "Spreadsheets are the most common workplace productivity tool — this lesson builds directly on Files & Information.",
  sections: [
    { id: "s1", type: "concept", title: "Concept", body: "A spreadsheet organizes information into rows and columns, each cell able to hold text, a number, or a formula." },
    { id: "s2", type: "example", title: "Example", body: "A simple budget spreadsheet might use one column for expense names and another for amounts." },
    { id: "s3", type: "checkpoint", title: "Checkpoint" },
  ],
  practiceQuestionIds: [],
  checkQuestionIds: [],
};

export const lessons: Lesson[] = [variablesLesson, spreadsheetsLesson];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}
