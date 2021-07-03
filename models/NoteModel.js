const db = require("../database")
const TasksModel = {}

TasksModel.getAll = (uID,callback) => {
  db.select('*')
    .from("usuario_tarea")
    .then( (data) => { 
      callback({
        status: "Ok",
        data
      })
     })
    .catch((error) => {
      callback({
        status: "error",
        message: 'Ha ocurrido un error',
        error
      })
    })
}


TasksModel.newTask = (params,callback) => {
   db.raw('Call sp_usuario_tarea(?,?,?,?,?)',[params.uID, params.task.idMateria,params.task.title,params.task.content,params.task.dueDate])
    .then((data)=>{
      callback({
        status: "Ok",
        message:"La tarea fue añadida correctamente",
        data: data
      })
    })
    .catch((error)=>{
      callback({
        status: "error",
        message: 'Ha ocurrido un error en el servidor',
        error: error
      })
    }) 

}

TasksModel.updateTask= (params,callback) => {
  db.table('tarea')
  .where('id','=',params.idTarea)
  .update({idmateria:params.tarea.idMateria, title:params.tarea.title,content:params.tarea.content,idEstado :params.tarea.idEstado,idPrioridad :params.tarea.idPrioridad,dueDate : params.tarea.dueDate})
  .then((data)=>{
    callback({
      status: "Ok",
      message:"La tarea fue actualizada correctamente",
      data: data
    })
  })
  .catch((error)=>{
    callback({
      status: "error",
      message: 'Ha ocurrido un error en el servidor',
      error: error
    })
  }) 

}


TasksModel.deleteTask= (params,callback) => {
  db.table('tarea')
  .where('id','=',params)
  .del()
  .then((data)=>{
    if (data!=0) {
      callback({
        status: "Ok",
        message:"La tarea fue eliminada correctamente",
        data: data
      })
    }else{

      callback({
        status: "error",
        message:"Esta tarea no se encuentra registrada",
        data: data
      })
    }
    
  })
  .catch((error)=>{
  
    callback({
      status: "error",
      message: 'Ha ocurrido un error en el servidor',
      error: error
    })
  }) 

}












module.exports = TasksModel;


