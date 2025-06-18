import todoPage from "../../../pages/todo.page";
import allureReporter from '@wdio/allure-reporter';

describe("To-do App Tests", () => {

    it("Add new todo list item", async () => {
        allureReporter.addFeature('Add Task Feature');
        allureReporter.addSeverity('blocker');
        allureReporter.startStep('Adding a new task');

        let isTestcase = true;
        let task = await todoPage.addTask();

        if (task !== true) {
            console.error("The task was not added properly:", task);
            isTestcase = false;
        }

        allureReporter.endStep();
        expect(isTestcase).toBe(true);

        allureReporter.startStep('Resetting App');
        await browser.execute('mobile: shell', {
            command: 'pm',
            args: ['clear', 'todolist.scheduleplanner.dailyplanner.todo.reminders'],
        });
        await driver.activateApp("todolist.scheduleplanner.dailyplanner.todo.reminders");
        allureReporter.endStep();
    });


    it("Mark task as completed", async () => {
        allureReporter.addFeature('Mark Complete Feature');
        allureReporter.addSeverity('critical');
        allureReporter.startStep('Marking task as complete');

        let isTestcase = true;
        let mark = await todoPage.markAsCompleted();

        if (mark !== true) {
            console.error("The task was not properly marked as completed", mark);
            isTestcase = false;
        }

        allureReporter.endStep();
        expect(isTestcase).toBe(true);

        allureReporter.startStep('Resetting App');
        await browser.execute('mobile: shell', {
            command: 'pm',
            args: ['clear', 'todolist.scheduleplanner.dailyplanner.todo.reminders'],
        });
        await driver.activateApp("todolist.scheduleplanner.dailyplanner.todo.reminders");
        allureReporter.endStep();
    });

    it("Delete task", async () => {
        allureReporter.addFeature('Delete Task Feature');
        allureReporter.addSeverity('normal');
        allureReporter.startStep('Deleting the task');

        let isTestcase = true;
        let deletetask = await todoPage.deleteTask();

        if (deletetask !== true) {
            console.error("The task was not properly deleted");
            isTestcase = false;
        }

        allureReporter.endStep();
        expect(isTestcase).toBe(true);

        allureReporter.startStep('Resetting App');
        await driver.terminateApp("todolist.scheduleplanner.dailyplanner.todo.reminders");
        await driver.activateApp("todolist.scheduleplanner.dailyplanner.todo.reminders");
        allureReporter.endStep();
    });

});
