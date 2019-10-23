import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Button from './button.svelte';

describe("Button Test Suite", () => {

    it("The button should use 3 sizes: small, medium and large.",  () => {

        const container = document.body;

        render(Button, { props: { text: "small", size: "small"}});
        render(Button, { props: { text: "medium", size: "medium" }});
        render(Button, { props: { text: "large", size: "large"  }});

        const buttonSmall = container.querySelector(".btn-small");
        const buttonMedium = container.querySelector(".btn-medium");
        const buttonLarge = container.querySelector(".btn-large");

        expect(buttonSmall.classList.contains("btn-small")).toBe(true);
        expect(buttonMedium.classList.contains("btn-medium")).toBe(true);
        expect(buttonLarge.classList.contains("btn-large")).toBe(true);
        expect(buttonLarge.classList.contains("btn-medium")).toBe(false);

    });

    it("If you do not send size you should use the default value: medium", () => {

        const container = document.body;

        // inject on body
        render(Button, { props: { text: "button name" } });
        // search the element
        const buttonSmall = container.querySelector(".btn-medium");
        expect(buttonSmall).not.toBeNull();
        expect(buttonSmall.classList).toBeDefined();
        expect(buttonSmall.classList.contains("btn-medium")).toBe(true);
    });

    it("He may receive a click event called click and respond to mouse clicks by triggering the sent event", () => {

        const container = document.body;

        // inject on body
        render(Button, { props: { text: "Click me!" } });
        // search the element
        const clickButton = container.querySelector(".btn-medium") as HTMLButtonElement;

        expect(clickButton).not.toBeNull();

        let clicked = false;
        const onclick = () => clicked = true;
        clickButton.addEventListener("click", onclick);
        clickButton.click();
        expect(clicked).toBe(true);
    });


    it("The button must have three types: default, round and simple", () => {

        const container = document.body;

        render(Button, { props: { text: "btn round", type: "round"}});
        render(Button, { props: { text: "btn default", type: "default"}});
        render(Button, { props: { text: "btn simple", type: "simple"}});

        const buttonRound = container.querySelector(".btn-round");
        const buttonDefault = container.querySelector(".btn-default");
        const buttonSimple = container.querySelector(".btn-simple");

        expect(buttonRound.classList.contains("btn-round")).toBe(true);
        expect(buttonDefault.classList.contains("btn-default")).toBe(true);
        expect(buttonSimple.classList.contains("btn-simple")).toBe(true);
        expect(buttonRound.classList.contains("btn-default")).toBe(false);

    });



    it("When no format is sent use default", () => {

        const container = document.body;

        render(Button, { props:{text: "button name"}});
        const buttonRound = container.querySelector(".btn-default");

        expect(buttonRound).not.toBeNull();
        expect(buttonRound.classList).toBeDefined();
        expect(buttonRound.classList.contains("btn-default")).toBe(true);

    });


    it("When no color is sent use default", () => {

        const container = document.body;
        render(Button, { props: { text: "color button"}});
        const button = container.querySelector(".btn");
        const bg = getComputedStyle(button).getPropertyValue("background-color");
        expect(bg).toBe("rgb(98, 70, 149)");

    });


    it("When no text is sent use default", () => {

        const container = document.body;
        render(Button);
        const button = container.querySelector(".btn");
        const text = button.textContent;
        expect(text).toBe("text button");
    });

    it("The button must be at least 100px wide", () => {

        const container = document.body;
        render(Button, { props: { text: "button 100px"}});
        const button = container.querySelector(".btn");
        const widthButton = getComputedStyle(button).getPropertyValue("width");
        expect(widthButton).toBe("100px");
    });

    afterEach(() => {
        cleanup();
    });

});