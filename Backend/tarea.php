<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With ");

    //Conexion a la base de datos

    $servidor = "localhost";
    $usuario = "root";
    $contrasenia= "";
    $nombreBaseDatos = "toDoList";

    $conexionBD= new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

    // Metodo que consulta un registro de la base de datos y lo devuelve si existe. El id a buscar es igual al $_GET["consultar"]
    if(isset($_GET['consultar']))
    {
        $sqlTarea = mysqli_query($conexionBD, "SELECT * FROM tarea WHERE id = " . $_GET["consultar"]);

        if (mysqli_num_rows($sqlTarea) > 0)
        {
            $tarea = mysqli_fetch_all($sqlTarea , MYSQLI_ASSOC);

            echo json_encode($tarea);
        }

        else{
            echo json_encode(["success"=>0]);
        }

        exit();
    }


    // Metodo que inserta una nueva tarea a la base de datos, con los valores 
    if(isset($_GET['insertar']))
    {
        
        $data = json_decode(file_get_contents("php://input"));
    
        if (!empty($data->titulo) && !empty($data->descripcion) && !empty($data->usuario) && !empty($data->estimacion) && !empty($data->prioridad) && !empty($data->criterioAceptacion)) 
        {
            $titulo = $data->titulo;
            $descripcion = $data->descripcion;
            $usuario = $data->usuario;
            $estimacion = $data->estimacion;
            $prioridad = $data->prioridad;
            $criterioAceptacion = $data->criterioAceptacion;

    
            $sqlTarea = mysqli_query($conexionBD, "INSERT INTO tarea (titulo, descripcion, usuario, estimacion, prioridad, criterioAceptacion ) 
                                                        VALUES ('$titulo', '$descripcion', '$usuario', '$estimacion', '$prioridad', '$criterioAceptacion')");
    
            if ($sqlTarea) 
            {
                echo json_encode(["success" => 1]);
            } 

            else 
            {
                echo json_encode(["success" => 0]);
            }
        } 
        
        else 
        {
            echo json_encode(["success" => 0]);
        }

        exit();
    }

    
    // Elimina un registro de la base de datos, el id del registro es igual a $_get["borrar"]
    if(isset($_GET['borrar']))
    {
        $id = $_GET['borrar'];

        $sqlTarea = mysqli_query($conexionBD, "DELETE FROM tarea WHERE id = $id");
        
        if ($sqlTarea) 
        {
            echo json_encode(["success" => 1]);
        } 

        else 
        {
            echo json_encode(["success" => 0]);
        }

        exit();
    }



       //Actualiza un registro y recepciona por metodo POST los datos de la tarea

       if(isset($_GET["actualizar"]))
       {
           $id = $_GET['actualizar'];
       
           $data = json_decode(file_get_contents("php://input"));
       
           $titulo = $data->titulo;
           $descripcion = $data->descripcion;
           $usuario = $data->usuario;
           $estimacion = $data->estimacion;
           $prioridad = $data->prioridad;
           $criterioAceptacion = $data->criterioAceptacion;
           $estado = $data->estado;


           $sqlTarea = mysqli_query($conexionBD, "UPDATE tarea SET titulo = '$titulo', descripcion = '$descripcion', usuario = '$usuario', estimacion = '$estimacion', prioridad = '$prioridad', criterioAceptacion = '$criterioAceptacion', estado = '$estado' WHERE id = $id");
       
           if ($sqlTarea)
           {
               echo json_encode(["success" => 1]);
           }
           else
           {
               echo json_encode(["success" => 0]);
           }
       
           exit();
       }
       
  
    //Consultar todos los registros de la tabla tarea
  
  
    $sqlTarea = mysqli_query($conexionBD, "SELECT * FROM tarea");
  
      if (mysqli_num_rows($sqlTarea) > 0) 
      {
          $tarea = mysqli_fetch_all($sqlTarea, MYSQLI_ASSOC);
  
          echo json_encode($tarea);
      } 
      
      else 
      {
          echo json_encode(["success" => 0]);
      }
  
      exit();
  






?>