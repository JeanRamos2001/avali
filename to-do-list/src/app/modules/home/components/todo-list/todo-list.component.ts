import { Component } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public taskList: Array<TaskItem> = [
    { task: "Fazer meus exercícios", checked: true},
    { task: "Limpar Casa", checked: false},
    { task: "Ir para academia", checked: false}
  ];

  public deleteItemTaskList(index: number){
    return this.taskList.splice(index, 1);
  }

  public deleteAllItems(){
    const confirm = window.confirm("Tem certeza que deseja excluir todas as Tarefas?");
    if(confirm){
      this.taskList = [];
    
    }
    
  }

  public setEmitTaskList(item: any){
    return this.taskList.push({ task: item, checked: false})

  }

}
