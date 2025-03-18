package com.assessment.disneySnackApp.data.repository;

import com.assessment.disneySnackApp.data.model.Snacks;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SnacksRepository extends JpaRepository<Snacks, Integer> {
}
