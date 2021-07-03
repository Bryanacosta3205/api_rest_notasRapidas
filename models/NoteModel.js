const db = require("../database")
const NoteModel = {}

NoteModel.getAll = (callback) => {
  db.select('*')
    .from("note")
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

NoteModel.newNote = ({title=null,body=null,color=null},callback) => {
  db('note').insert({title,body,color})
   .then((data)=>{
     callback({
       status: "Ok",
       message:"La tarea fue añadida correctamente",
       data
     })
   })
   .catch((error)=>{
     callback({
       status: "error",
       message: 'Ha ocurrido un error en el servidor',
       error:error.sqlMessage
     })
   }) 

}

NoteModel.updateNote= ({id,data},callback) => {
  db.table('note')
  .where('id','=',id)
  .update({title:data.title, body:data.body,color:data.color})
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

NoteModel.deleteNote= (params,callback) => {
  db.table('note')
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


/* 


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



 */
module.exports = NoteModel;


