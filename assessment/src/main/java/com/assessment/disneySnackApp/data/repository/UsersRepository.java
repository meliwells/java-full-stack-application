package com.assessment.disneySnackApp.data.repository;

import com.assessment.disneySnackApp.data.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    boolean existsByEmail (String email);
    Optional<Users> findByEmail(String email);
}
