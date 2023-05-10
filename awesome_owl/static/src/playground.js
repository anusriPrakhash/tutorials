import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";
import { TodoList } from "./todo_list/todo_list";

class CounterModel {
    constructor(value) {
        this.value = value;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }
}

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = { Counter, Card, TodoList };

    setup() {
        this.counters = useState([
            new CounterModel(1),
            new CounterModel(2),
            new CounterModel(3),
            new CounterModel(4),
            new CounterModel(5),
        ]);
    }

    sum() {
        let sum = 0;
        for (let counter of this.counters) {
            sum += counter.value
        }
        return sum;
    }

    incrementCounter(counter) {
        counter.value++;
    }
}
