import { selector } from "..";
import { createStore } from "../../../store";

describe("Retrieve events list", () => {
  test("Should retrieve empty list", () => {
    //arrange
    const store = createStore();
    expect(selector.selectAllEvents(store.getState())).toEqual({ events: [] });
  });
});

export {};
