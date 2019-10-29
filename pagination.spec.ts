import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import Pagination from './pagination.svelte';

describe("Pagination Test Suite", () => {

    it("Pagination may be colorized", () => {

        const container = document.body;
        render(Pagination, {props: {color: "red"}});
        const active = container.querySelector(".active");
        const bg = getComputedStyle(active).getPropertyValue("background-color");
        expect(bg).toBe("red");
    });

    it("If you do not receive color use the default", () => {
        const container = document.body;
        render(Pagination);
        const active = container.querySelector(".active");
        const bg = getComputedStyle(active).getPropertyValue("background-color");
        expect(bg).toBe("rgb(98, 70, 149)");
    });

    it("Select receive which page will start", () => {
        const container = document.body;
        render(Pagination,  {props: {active: 2}});
        const item = container.querySelector(".active");
        const index = item.getAttribute("data-index");
        expect(JSON.parse(index)).toBe(2);
    });

    it("Use the color to flag the current page", () => {
        const container = document.body;
        render(Pagination, {props: {active: 4, color:'red'}});
        const item = container.querySelector("ul").children[3];
        const bg = getComputedStyle(item).getPropertyValue("background-color");
        const index = item.querySelector("a").getAttribute("data-index");
        expect(JSON.parse(index)).toBe(4);
        expect(bg).toBe('rgb(239, 239, 239)');
    });

    afterEach(() => {
        cleanup();
    });

});