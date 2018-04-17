import { Component,EventEmitter,Output } from '@angular/core';

@Component({
    selector : 'app-handler',
    templateUrl : './handler.component.html'
})
export class HandlerComponent{
    @Output() onmainservercreated = new EventEmitter<{serverName : string , serverContent : string}>();
    @Output()  onsubservercreated = new EventEmitter<{serverName : string , serverContent : string}>();
    //@Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
    newServername ='';
    newServerContent ='';

    mainServerAdd(){
        this.onmainservercreated.emit({
            serverName : this.newServername,
            serverContent : this.newServerContent
        });
    }

    subServerAdd(){
        this.onsubservercreated.emit({
            serverName : this.newServername,
            serverContent : this.newServerContent
        });
    }
 
}