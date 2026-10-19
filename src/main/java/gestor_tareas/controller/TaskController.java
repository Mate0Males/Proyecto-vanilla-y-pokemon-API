package gestor_tareas.controller;

import gestor_tareas.model.Task;
import gestor_tareas.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // Permite la conexión desde cualquier frontend o IA sin bloqueos
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    // 1. GET: Listar todas las tareas
    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // 2. POST: Crear una nueva tarea
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    // 3. PUT: Actualizar una tarea existente
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setCompleted(taskDetails.isCompleted());
            return taskRepository.save(task);
        } else {
            throw new RuntimeException("Task not found with id " + id);
        }
    }

    // 4. DELETE: Eliminar una tarea por ID
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }
}