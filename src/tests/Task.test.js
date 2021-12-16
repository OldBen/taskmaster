import {TaskFactory} from '../models/TaskFactory';

describe("Task model testing", () =>{
    test("create TaskDate", () => {
        let task = TaskFactory.factory('date', 'test TaskDate', '2020-01-01');
        expect(task.date).toEqual('2020-01-01');
    })
});