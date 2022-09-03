var activity={}//why isn't this an array?
var bulletPoints=document.querySelector()

var actvtyAlgrthm=(taskText,taskDate,taskList)=>{//param values get passed in & executed upon
    var actnItm=document.querySelector('listItem').addClass('someClass');
    var contentSpan=document.querySelector('targetSpanElmnt');
        .addClass('someAttrbte')
        .text(taskDate);
    var taskBoxModel=document.querySelector('pElmnt')
        .addClass('someClass')
        .text(taskText);

    taskList.append(contentSpan,taskBoxModel);
    auditTask(taskList);
}