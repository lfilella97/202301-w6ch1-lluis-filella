import { ToDoStructure } from "../../toDos";
import {
  loadToDos,
  removeToDo,
  toDosReducer,
  toggleToDoDoneness,
} from "./toDosSlice";

describe("Given the toDosReducer function", () => {
  describe("When it recieves a list of to do (be happy, sleep) and it recieves the action remove sleep", () => {
    test("Then it should return a list of todo with be happy", () => {
      const beHappy: ToDoStructure = {
        id: 1,
        name: "Be Happy",
        isDone: false,
      };

      const sleep: ToDoStructure = {
        id: 2,
        name: "Sleep",
        isDone: false,
      };

      const toDoList: ToDoStructure[] = [beHappy, sleep];

      const removeBeHappyAction = removeToDo(sleep.id);
      const expectedNewToDoList = [beHappy];

      const newList = toDosReducer(toDoList, removeBeHappyAction);

      expect(newList).toStrictEqual(expectedNewToDoList);
    });
  });
  describe("And it recieves the action toggle be happy that is not done", () => {
    test("Then it should return the list with be happy that is done", () => {
      const beHappy: ToDoStructure = {
        id: 1,
        name: "Be Happy",
        isDone: false,
      };

      const sleep: ToDoStructure = {
        id: 2,
        name: "Sleep",
        isDone: false,
      };

      const toDoList: ToDoStructure[] = [beHappy, sleep];

      const expectedResult = toDosReducer(
        toDoList,
        toggleToDoDoneness(beHappy.id)
      );
      const expectedList = [
        {
          id: 1,
          name: "Be Happy",
          isDone: true,
        },
        {
          id: 2,
          name: "Sleep",
          isDone: false,
        },
      ];

      expect(expectedResult).toStrictEqual(expectedList);
    });
  });

  describe("And it recieves the action loadToDos", () => {
    test("Then it should return the a copy of the given list", () => {
      const beHappy: ToDoStructure = {
        id: 1,
        name: "Be Happy",
        isDone: false,
      };

      const sleep: ToDoStructure = {
        id: 2,
        name: "Sleep",
        isDone: true,
      };

      const toDoList: ToDoStructure[] = [beHappy, sleep];

      const expectedResult = toDosReducer(toDoList, loadToDos());

      expect(expectedResult).toStrictEqual(toDoList);
    });
  });
});
