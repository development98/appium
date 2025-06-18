class todoPage
{
 get homebutton()
 {
    return $('todolist.scheduleplanner.dailyplanner.todo.reminders:id/open_page_anim');
 }

 get todoHomePageText()
 {
    return $('//android.widget.TextView[@text="Welcome to To-do List"]');
 }

 get clickOnAddTask()
 {
    return $('//android.widget.ImageView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/iv_task_add"]');
 }

 get TextValue()
 {
    return $('//android.widget.EditText[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_input"]');
 }

 get ButtonClick()
 {
    return $('//android.widget.ImageView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_btn"]');
 }

 get taskValue()
 {
    return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text"]');
 }

 get clickOnTaskCompleted()
 {
   return $('//android.view.View[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_check"]');
 }

 get completeMessage()
 {
   return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_completed_text"]');
 }

 get checkAllCompletedTask()
 {
   return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/all_completed"]');
 }
 
 get getCompletedTask()
 {
   return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text"]');
 }

 get clickOnWholeSection()
 {
   return $('//android.widget.LinearLayout[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text_layout"]');
 }

 get clickOnThreeDots()
 {
   return $('//android.widget.ImageView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_detail_more"]');
 }
 
 get clickOnDelete()
 {
   return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/detail_delete"]');
 }

 get dialogContent()
 {
   return $('//android.widget.RelativeLayout[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_content"]');
 }

 get deleteButton()
 {
   return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_confirm"]');
 }

 async addTask()
 {
     await browser.pause(5000);
        let text = await (this.todoHomePageText).getText();
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        let buttonDisplay = await (this.clickOnAddTask).isDisplayed();
        await browser.pause(2000);
        await (this.clickOnAddTask).click();
        let inputDisplay = await (this.TextValue).isDisplayed();
        await browser.pause(2000);
        await (this.TextValue).setValue('lemon');
        await browser.pause(2000);
        await (this.ButtonClick).click();
        await browser.pause(2000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        let value = await (this.taskValue).getText();

        let isTestcase = true;

        if (text !== 'Welcome to To-do List') {
            console.error("The text is not equal to 'Welcome to To-do List'. We are not on the starting page.", text);
            isTestcase = false;
        }

        if (buttonDisplay !== true) {
            console.error("The 'Add' button is not visible.", buttonDisplay);
            isTestcase = false;
        }

        if (inputDisplay !== true) {
            console.error("The input field is not visible after clicking the 'Add' button.", inputDisplay);
            isTestcase = false;
        }

        if (value !== 'lemon') {
            console.error("The value entered is not equal to 'lemon'.", value);
            isTestcase = false;
        }

       return isTestcase;
 }


 async addTask1()
 {
        await browser.pause(5000);
        let text = await (this.todoHomePageText).getText();
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        let buttonDisplay = await (this.clickOnAddTask).isDisplayed();
        await browser.pause(2000);
        await (this.clickOnAddTask).click();
        let inputDisplay = await (this.TextValue).isDisplayed();
        await browser.pause(2000);
        await (this.TextValue).setValue('lemon');
        await browser.pause(2000);
        await (this.ButtonClick).click();
        await browser.pause(2000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        await driver.back();
        await browser.pause(5000);
        
        let value = await (this.taskValue).getText();

        let isTestcase = true;

        if (text !== 'Welcome to To-do List') {
            console.error("The text is not equal to 'Welcome to To-do List'. We are not on the starting page.", text);
            isTestcase = false;
        }

        if (buttonDisplay !== true) {
            console.error("The 'Add' button is not visible.", buttonDisplay);
            isTestcase = false;
        }

        if (inputDisplay !== true) {
            console.error("The input field is not visible after clicking the 'Add' button.", inputDisplay);
            isTestcase = false;
        }

        if (value !== 'lemon') {
            console.error("The value entered is not equal to 'lemon'.", value);
            isTestcase = false;
        }

       return isTestcase;
 }

 async markAsCompleted()
 {
   let add = await this.addTask1();
   await browser.pause(5000);
   await this.clickOnTaskCompleted.click();
   await browser.pause(5000);
   let value = await this.completeMessage.getText();
   await browser.pause(5000);
   let completeTask = await this.checkAllCompletedTask.getText();
   await browser.pause(5000);
   await this.checkAllCompletedTask.click();
   await browser.pause(5000);
   let checkCompleted = await this.getCompletedTask.getText();

   let isTestcase = true;

   if(add !== true)
   {
      console.error("we are not able to add the task",add);
      isTestcase = false;
   }
   if(value !== 'So proud of you,\n all the tasks completed.')
   {
      console.error("the value is not equal");
      isTestcase = false;
   }
   if(completeTask !== 'Check all completed tasks')
   {
      console.error("the value is not coming when we click on completed task button");
      isTestcase = false;
   }
   if(checkCompleted !== 'lemon')
   {
      console.error("the completed value is not same",checkCompleted);
      isTestcase = false;
   }
   return isTestcase;

 }

 async deleteTask()
 {
    let mark = await this.markAsCompleted();
    await browser.pause(5000);
    await (this.clickOnWholeSection).click();
    await browser.pause(5000);
    await (this.clickOnThreeDots).click();
    await browser.pause(5000);
    await (this.clickOnDelete).click();
    await browser.pause(5000);
    let display =await (this.dialogContent).isDisplayed();
    await browser.pause(5000);
    await (this.deleteButton).click();
    await browser.pause(5000);
    await driver.back();
    let displaytask = await (this.getCompletedTask).isDisplayed();
    await browser.pause(5000);

    let isTestcase = true;

    if(mark !== true)
    {
      console.error("we are not able to mark the task as completed",mark);
      isTestcase = false;
    }

    if(display !== true)
    {
      console.error("the dialog box is not present for delete");
      isTestcase = false;
    }

    if(displaytask !== false)
    {
      console.error("the task is displayed after delete");
      isTestcase = false;
    }

   return isTestcase;
 }


}
export default new todoPage();