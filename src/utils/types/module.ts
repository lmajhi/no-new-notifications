import { Component } from "react";

type Module = {
    icon: any,
    entry: Component,
    screens: {
        name: string,
        component: Component
    }
}

export default Module;
