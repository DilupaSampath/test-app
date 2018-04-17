import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mixedElements=[
   {
     name : 'test mainserver type',
     type : 'mainserver',
     content : 'test mainserver contents'
  },
  {
    name : 'test subserver type',
    type : 'subserver',
    content : 'test subserver contents'
 }
  ];

  onMainServerCreate(mainServerData : {serverName : string, serverContent : string }){
    this.mixedElements.push(
      {
        type : 'mainserver' ,
        name : mainServerData.serverName,
        content : mainServerData.serverContent
      }
    );
  }
  onSubserverCreate(subServerData : {serverName : string, serverContent : string }){
    // subServerData.name;
    // subServerData.content;
    this.mixedElements.push(
      {
        type : 'subserver' ,
        name : subServerData.serverName,
        content : subServerData.serverContent
      }
    );
    // this.mixedElements.push({
    //   type : 'mainserver' ,
    //   name : "subServerData.name",
    //   content : "subServerData.content"
    // });
  }
  deleteFirstItem(){
    console.log("asdsadsada");
    this.mixedElements.splice(0,1);   
}
  
}