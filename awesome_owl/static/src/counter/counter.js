import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.Counter";
    static props = {
        counter: Object,
    };

    increment() {
        this.props.counter.increment();
    }
}
