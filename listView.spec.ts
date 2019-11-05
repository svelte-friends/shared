import "jest";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import ListView from "./listView.svelte";

describe("ListItem Teste Suite", () => {
  const list = [
    {
      text: "Text 1",
    }, {
      text: "Text 2",
    }, {
      text: "Text 3",
    }, {
      text: "Text 4",
    }, {
      text: "Text 5",
    }
  ]
  it("Should render list children elements", () => {
    render(ListView, {
      props: {
        items: list
      }
    });
    const listView = document.querySelector(".list-view");
    expect(listView.children.length).toEqual(5);
  });
});
