import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..About';

//after each test this will clean up any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //First test
    it('renders', () => {
        render(<About/>);
    });
    //Second test
    // it('matches snapshot DOM node structure', () => {
    //     const { asFragment } = render(<About/>);
    //     expect(asFragment()).toMatchSnapshot();
    // })
})