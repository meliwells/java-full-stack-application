package com.assessment.disneySnackApp.controller;

import com.assessment.disneySnackApp.data.model.Location;
import com.assessment.disneySnackApp.data.model.Snacks;
import com.assessment.disneySnackApp.data.model.UserSnackPreference;
import com.assessment.disneySnackApp.data.model.Users;
import com.assessment.disneySnackApp.data.repository.LocationRepository;
import com.assessment.disneySnackApp.data.repository.SnacksRepository;
import com.assessment.disneySnackApp.data.repository.UserSnackPreferenceRepository;
import com.assessment.disneySnackApp.data.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/disneySnacks")
public class SnackController implements Serializable {
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    SnacksRepository snacksRepository;
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    UserSnackPreferenceRepository userSnackPreferenceRepository;

    @GetMapping("/snacks")
    public List<Snacks> getAllSnacks() { return snacksRepository.findAll(); }

    @GetMapping("/location")
    public List<Location> getAllLocations() { return locationRepository.findAll(); }

    @GetMapping("/users")
    public List<Users> getAllUsers() { return usersRepository.findAll(); }

    @GetMapping("/userSnackPreference")
    public List<UserSnackPreference> getAllUserSnackPreferences() { return userSnackPreferenceRepository.findAll(); }
}
