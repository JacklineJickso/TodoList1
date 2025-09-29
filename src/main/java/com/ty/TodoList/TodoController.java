package com.ty.TodoList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    
    @GetMapping
    public String listTodos(Model model) {
       
        model.addAttribute("todos", todoRepository.findAll());
        model.addAttribute("newTodo", new TodoItem()); 
        return "index"; 
    }

    
    @PostMapping
    public String addTodo(@ModelAttribute TodoItem newTodo) {
        todoRepository.save(newTodo);
        return "redirect:/";
    }

    
    @GetMapping("/toggle/{id}")
    public String toggleTodo(@PathVariable Long id) {
        TodoItem todo = todoRepository.findById(id).orElseThrow(
            () -> new IllegalArgumentException("Invalid todo ID:" + id));

        todo.setCompleted(!todo.isCompleted());
        todoRepository.save(todo);
        return "redirect:/";
    }

    
    @GetMapping("/delete/{id}")
    public String deleteTodo(@PathVariable Long id) {
        todoRepository.deleteById(id);
        return "redirect:/";
    }
}