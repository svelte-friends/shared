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
        render(Pagination, {props: {total:100, active: 4, color:'red'}});
        const item = container.querySelector(".active");
        const bg = getComputedStyle(item).getPropertyValue("background-color");
        const index = item.getAttribute("data-index");
        expect(JSON.parse(index)).toBe(4);
        expect(bg).toBe('red');
    });

    it("If you are on the first page, do not show the previous arrow", () => {
        const container = document.body;
        render(Pagination, {props: {active: 1}});
        const item = container.querySelector("ul").firstElementChild;
        expect(item.classList.contains("item")).toBe(true);
    });


    it("If it's on the last page, don't show an arrow next", () => {
        const container = document.body;
        render(Pagination, {props: {total: 100, active: 10}});
        const item = container.querySelector("ul").lastElementChild;
        expect(item.classList.contains("item")).toBe(true);
    });


    it("When a pagination has more than 10 pages, it shows as first 9 and shows one last page", () => {
        const container = document.body;
        render(Pagination, {props: {total: 20, displayRows: 1 }});
        const length = container.querySelectorAll(".item").length;
        expect(length).toBe(10);
    });


    it("Can receive the total number of records.", () => {
        const total = 100;
        const displayRows = 2;
        const pages = Math.ceil(total / displayRows);
        const { getByText } =  render(Pagination, {props: {total, displayRows }});
        const text = getByText(pages.toString());
        expect(text).toBeDefined();
    });

    afterEach(() => {
        cleanup();
    });

});