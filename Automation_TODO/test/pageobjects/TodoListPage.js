
import configureLogging from '../../log4js.config.js';
const Logger = configureLogging();

class TodoListPage {
  // Selectors
  btnAdd = `#addButton`
  textField = `#taskInput`;
  addedTask = `[class="task-text"]`
  deleteIcon = `//button[@class="delete-button"]`;
  completeTask = `[class="complete-button"]`;
  clsCompleted = `[class="completed"]`;


  // Function to verify that the user can add a task to the to-do list
  async verifyUserIsAbleToAddTask(task) {

    // Enter the task value into the input field
    await $(this.textField).setValue(task);

    await $(this.btnAdd).click();


    // Wait for 2 seconds to ensure the task is added and UI updates
    await browser.pause(2000);

    // Retrieve the text of the first task in the list
    let addedTask = await $(this.addedTask).getText();


    // Validate that the task displayed matches the one entered
    expect(addedTask).toBe(task);
  };


  // Function to verify that the user can delete a task to the to-do list
  async verifyUserIsAbleToComplateTask(task) {

    await this.verifyUserIsAbleToAddTask(task)
    // Wait for 2 seconds to ensure the task is added and UI updates
    await browser.pause(2000);

    //   complete the task 
    await $(this.completeTask).click();

    let isClsCompletedDisplay = await $(this.clsCompleted).isDisplayed();

    // Validate that the task completed displayed matches the one entered
    expect(isClsCompletedDisplay).toBe(true);

  };

  async verifyUserIsAbleToDeleteTask(task) {

    await this.verifyUserIsAbleToAddTask(task)
    // Wait for 2 seconds to ensure the task is added and UI updates
    await browser.pause(2000);

    //   delete the task 
    await $(this.deleteIcon).click();
    let isaddedTaskDisplay = await $(this.addedTask).isDisplayed();

    // Validate that the task displayed matches the one entered
    expect(isaddedTaskDisplay).toBe(false);

  };

  async verifyUserIsUnableToAddEmptyTask() {

    // Click on the add task button
    await $(this.btnAdd).click();

    // fail the test case because alert msg is not displayed
    Logger.error("Unable to Add Empty Task Msg Should be Displayed!!!!")
    expect(true).toBe(false)
  }


};

export default new TodoListPage();