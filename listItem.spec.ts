import "jest";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/svelte";
import ListItem from "./listItem.svelte";

describe("ListItem Teste Suite", () => {
  it("ListItem can receive a text property", () => {
    const { getByText } = render(ListItem, {
      props: {
        text: "Some cool text"
      }
    });
    const text = getByText("Some cool text");
    expect(text).toHaveTextContent("Some cool text");
  });

  it("ListItem can receive a header property", () => {
    const { getByText } = render(ListItem, {
      props: {
        header: "Aluno",
        text: "Some cool text"
      }
    });
    const header = getByText("Some cool text");
    expect(header).toHaveTextContent("Some cool text");
  });

  it("ListItem card can receive a color property to set in background", () => {
    const color = "#00c853";
    render(ListItem, {
      props: {
        color,
        text: "Some cool text"
      }
    });
    const component = document.querySelector(".list-item");
    expect(component).toHaveStyle(`background-color: ${color}`);
  });

  afterEach(() => {
    cleanup();
  });
});
