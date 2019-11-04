import "jest";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/svelte";
import ListItem from "./listItem.svelte";

describe("ListItem Teste Suite", () => {
  it("ListItem can receive a text", () => {
    const { getByText } = render(ListItem, {
      props: {
        text: "Usuário 1",
      }
    });
    const item = getByText("Usuário 1");
    expect(item).toHaveTextContent("Usuário 1");
  });

  afterEach(() => {
    cleanup();
  });
});
