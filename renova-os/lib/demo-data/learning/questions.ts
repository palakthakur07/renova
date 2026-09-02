import type { Question } from "@/types/learning";

/**
 * Questions for the demo lesson "Working with Variables," framed
 * through a spreadsheet-cell lens — a cell reference is a gentle,
 * concrete introduction to the same idea as a variable, and fits the
 * Computer Applications course better than raw programming syntax.
 */
export const questions: Question[] = [
  {
    id: "q-practice-1",
    kind: "multiple-choice",
    prompt: "Cell B2 is set to hold the value 5. What will B2 contain after this instruction runs?",
    options: [
      { id: "a", label: "5" },
      { id: "b", label: "B2" },
      { id: "c", label: "Nothing, cells can't hold numbers" },
      { id: "d", label: "An error" },
    ],
    correctOptionId: "a",
    explanation: "A cell (like a variable) holds whatever value it's assigned — here, B2 now contains 5.",
    difficulty: "foundation",
  },
  {
    id: "q-practice-2",
    kind: "multiple-choice",
    prompt: "If cell A1 = 10 and A2 = A1 + 5, what does A2 equal?",
    options: [
      { id: "a", label: "10" },
      { id: "b", label: "15" },
      { id: "c", label: "A1 + 5" },
      { id: "d", label: "5" },
    ],
    correctOptionId: "b",
    explanation: "A2 reads the current value of A1 (10) and adds 5 to it, giving 15 — the same idea as reading a variable's value into a calculation.",
    difficulty: "standard",
  },
  {
    id: "q-check-1",
    kind: "multiple-choice",
    prompt: "What best describes a variable?",
    options: [
      { id: "a", label: "A fixed value that never changes" },
      { id: "b", label: "A named location used to store information" },
      { id: "c", label: "A type of formula error" },
      { id: "d", label: "A password" },
    ],
    correctOptionId: "b",
    explanation: "A variable is a named location used to store information — its value can be read or changed as needed.",
    difficulty: "foundation",
  },
  {
    id: "q-check-2",
    kind: "multiple-choice",
    prompt: "In a spreadsheet, what is most similar to a variable in programming?",
    options: [
      { id: "a", label: "A cell" },
      { id: "b", label: "A chart" },
      { id: "c", label: "A file name" },
      { id: "d", label: "A print command" },
    ],
    correctOptionId: "a",
    explanation: "A cell holds a value you can reference and reuse elsewhere — the same role a variable plays in code.",
    difficulty: "foundation",
  },
  {
    id: "q-check-3",
    kind: "input",
    prompt: "If quantity = 4 and pricePerUnit = 12, what does quantity × pricePerUnit equal? (type a number)",
    correctInput: "48",
    explanation: "4 × 12 = 48 — the calculation reads both variables' current values at the moment it runs.",
    difficulty: "standard",
  },
];

export const practiceQuestionPool = questions.filter((q) => q.id.startsWith("q-practice"));
export const checkQuestionPool = questions.filter((q) => q.id.startsWith("q-check"));
