class TaskComponent {
    display() {
        return "<div><h1>TASK</h1></div>"
    }
}

class TaskComponentDecorator {
    component;

    constructor(component) {
        this.component = component;
    }

    preDisplay(model)

    postDisplay(model)

    display() {
        this.preDisplay();
        this.component.display();
        this.postDisplay();
    }
}

class TaskDateComponentDecorator extends TaskComponentDecorator {
    constructor(component) {
        super(component);
    }

    preDisplay(model) {
        
    }

    postDisplay(model) {
        
    }


}