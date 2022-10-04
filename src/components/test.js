import React from "react";
import data from "./data.json";
import { render } from "@testing-library/react";

const testing =  {
    name : data.name,
}


describe('testing unit tests') {
    test('checking for name',()=>{
        expect(testing.name).toBe('shivani')
    })
}
