package com.assessment.disneySnackApp.data.repository;

import com.assessment.disneySnackApp.data.model.Snacks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface SnacksRepository extends JpaRepository<Snacks, Integer> {
    @Query("SELECT s FROM Snacks s JOIN FETCH s.location l WHERE l.id = :locationId")
    List<Snacks> findByLocationId(@Param("locationId") Integer locationId);
}
