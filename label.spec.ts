import '@testing-library/jest-dom/extend-expect';
import 'jest';

import { render, cleanup } from '@testing-library/svelte';

import Label from './label.svelte';
import { labeledStatement } from '@babel/types';

describe("Label Test Suite", () => {

    it("Deve ser possivel passar o texto da label em uma propriedade de nome: text", () => {

        const container = document.body;

        const { getByText } = render(Label, { props: { text: "MyLabel" } });

        const labelComponent = getByText("MyLabel");

        expect(labelComponent).toBeDefined();

    });

    it("Por padrão o texto é Label", () => {

        const container = document.body;

        const { getByText } = render(Label);

        const labelComponent = getByText("Label");
        expect(labelComponent).toBeDefined();

    });

    it("Deve ser possível passar a cor da Label em uma propriedade chamada color", () => {

        const container = document.body;

        render(Label, { props: { color: "red" } });

        const labelElement = container.querySelector(".label");

        const bgColor = getComputedStyle(labelElement).getPropertyValue("background-color");

        expect(bgColor).toBe("red");

    });

    it("Se não for passada nenhuma cor, deverá ser usada a cor: green", () => {

        const container = document.body;

        const { } = render(Label);

        const labelElement = container.querySelector(".label");

        const bgColor = getComputedStyle(labelElement).getPropertyValue("background-color");

        expect(bgColor).toBe("green");
    });

    it("Deve ser possível escolher o tipo de label: outline", () => {

        const container = document.body;

        render(Label, { props: { type: "outline" } });


        const labelOutline = container.querySelector(".label");

        const bgOutline = getComputedStyle(labelOutline).getPropertyValue("background-color");


        expect(bgOutline).toBe("transparent");
    });

    it("Deve ser possível escolher o tipo de label: fill", () => {

        const container = document.body;

        render(Label, { props: { type: "fill" } });


        const labelOutline = container.querySelector(".label");

        const bgOutline = getComputedStyle(labelOutline).getPropertyValue("background-color");


        expect(bgOutline).toBe("green");
    });

    it("Deve ser possível escolher o tipo de label: fill", () => {

        const container = document.body;

        render(Label);

        const labelOutline = container.querySelector(".label");

        const bgOutline = getComputedStyle(labelOutline).getPropertyValue("background-color");

        expect(bgOutline).toBe("green");
    });

    afterEach(() => {
        cleanup();
    });
});



