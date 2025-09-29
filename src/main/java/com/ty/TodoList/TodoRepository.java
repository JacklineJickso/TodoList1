package com.ty.TodoList;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
    // Basic CRUD methods (save, findAll, findById, delete) are inherited.
}