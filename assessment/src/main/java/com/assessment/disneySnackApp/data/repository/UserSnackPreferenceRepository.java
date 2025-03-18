package com.assessment.disneySnackApp.data.repository;

import com.assessment.disneySnackApp.data.model.UserSnackPreference;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSnackPreferenceRepository extends JpaRepository<UserSnackPreference, Integer> {
}
