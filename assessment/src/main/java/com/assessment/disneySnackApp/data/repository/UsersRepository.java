package com.assessment.disneySnackApp.data.repository;

import com.assessment.disneySnackApp.data.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    boolean existsByEmail (String email);
}
