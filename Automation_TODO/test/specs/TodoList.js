import TodolistPage from '../pageobjects/TodoListPage';
import ConstantsData from '../../Data/ConstantsData.js';
describe('MY TO-DO List', () => {


    it('TC_TODO_01- Verify User is able to Add Task', async () => {

        // Call the method to verify added task 
        await TodolistPage.verifyUserIsAbleToAddTask(ConstantsData.constants.addedTask);

    });

    

    it('TC_TODO_02- Verify User is able to delete the Task', async () => {

        // Call the method to verify deleted task 
        await TodolistPage.verifyUserIsAbleToDeleteTask(ConstantsData.constants.deletedTask);

    });

      it('TC_TODO_03- Verify User is unable to add empty the Task', async () => {

        // Call the method to verify deleted task 
        await TodolistPage.verifyUserIsUnableToAddEmptyTask();

    });

    it('TC_TODO_04- Verify User is able to complate the Task', async () => {

        // Call the method to verify deleted task 
        await TodolistPage.verifyUserIsAbleToComplateTask(ConstantsData.constants.addedTask);

    });

    

 
   
})

