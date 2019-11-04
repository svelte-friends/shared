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

  afterEach(() => {
    cleanup();
  });
});
