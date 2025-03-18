package com.assessment.disneySnackApp.data.repository;

import com.assessment.disneySnackApp.data.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Integer> {
}
