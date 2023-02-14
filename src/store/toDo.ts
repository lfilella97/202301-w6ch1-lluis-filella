export interface MokedApiResponseStructure {
  toDos: ToDoStructure[];
}

export type ToDoListStructure = ToDoStructure[];
export interface ToDoStructure {
  id: number;
  name: string;
  isDone: boolean;
}
const mookApiResponse: MokedApiResponseStructure = {
  toDos: [
    {
      id: 1,
      name: "Be Happy",
      isDone: true,
    },
    {
      id: 2,
      name: "Eat Meal",
      isDone: false,
    },
    {
      id: 3,
      name: "Sleep",
      isDone: false,
    },
  ],
};

export default mookApiResponse;
