import 'jest';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/svelte';
import Dropdown from './dropdown.svelte';

describe("Dropdown Test Suite", () => {

    it("Dropdown may be colorized", () => {
        const container = document.body;
        render(Dropdown, {props: {color: "red"}});
        const select = container.querySelector("select");
        expect(select).toHaveStyle("background-color:red");

    });

    it("Dropdown can receive options", () => {

        let list = [
            { value: '1', name: 'Option 1' },
            { value: '2', name: 'Option 2' },
        ];

        const container = document.body;
        render(Dropdown, {props: {options:list}});
        const select = container.querySelector("select");
        expect(select.childElementCount).toBe(list.length);

    });

    it("Can receive text color", () => {
        const container = document.body;
        render(Dropdown, {props: {color_text: "blue"}});
        const select = container.querySelector("select");
        expect(select).toHaveStyle("color:blue");
    });


    it("If no text color or background color is passed, assume the default value", () => {
        const container = document.body;
        render(Dropdown);
        const select = container.querySelector("select");
        expect(select).toHaveStyle("color:white");
        expect(select).toHaveStyle("background-color:#624695");
    });


    afterEach(() => {
        cleanup();
    });

});


