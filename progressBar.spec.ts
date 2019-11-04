import '@testing-library/jest-dom/extend-expect';
import 'jest';
import { render, cleanup } from '@testing-library/svelte';
import ProgressBar from './progressBar.svelte';

describe("ProgressBar Test Suite", () => {

    it("By default the background color will be: linear-gradient (268deg, #624695, #e1364a);", () => {
        const container = document.body;
        render(ProgressBar);
        const progressElement = container.querySelector(".progress-indicator")
        expect(progressElement).toHaveStyle("background: linear-gradient (268deg, #624695, #e1364a)");
    });

    it("It should be possible to receive a color for progress Bar: background Color", () => {
        const container = document.body;
        render(ProgressBar, { 
            props: { 
                backgroundColor: "red" } 
            });
        const progressElement = container.querySelector(".progress-indicator");
        expect(progressElement).toHaveStyle("background:red");
    });

    it("It should have 3 sizes: default, medium and big", () => {
        const container = document.body;
        render(ProgressBar, { props: { 
            medium: "true"
        }});
        render(ProgressBar, { props:{
            big:"true"
        }});

        const progressMedium = container.querySelector(".medium");
        const progressBig = container.querySelector(".big")
        
        expect(progressMedium).toHaveClass("medium");
        expect(progressBig).toHaveClass("big");

    })
   
    afterEach(() => {
        cleanup();
    });
});



