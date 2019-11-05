import "jest";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/svelte";
import ListItem from "./listItem.svelte";

describe("ListItem Teste Suite", () => {
  it("ListItem can receive a text property", () => {
    const { getByText } = render(ListItem, {
      props: {
        text: "Leandro Amaral",
      }
    });
    const text = getByText("Leandro Amaral");
    expect(text).toHaveTextContent("Leandro Amaral");
  });

  it("ListItem can receive a header property", () => {
    const { getByText } = render(ListItem, {
      props: {
        header: "Aluno",
        text: "Leandro Amaral",
      }
    });
    const header = getByText("Leandro Amaral");
    expect(header).toHaveTextContent("Leandro Amaral");
  });

  it("ListItem card can receive a color property to set in background", () => {
    const color = "#00c853";
    const { getByText } = render(ListItem, { 
      props: {
        color,
        text: "Some cool text"
      }
    });
    const component = getByText("Some cool text");
    expect(component.parentElement).toHaveStyle(`background-color: ${color}`);
  });

  afterEach(() => {
    cleanup();
  });
});
