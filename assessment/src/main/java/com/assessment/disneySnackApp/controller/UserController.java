package com.assessment.disneySnackApp.controller;


import com.assessment.disneySnackApp.data.model.Users;
import com.assessment.disneySnackApp.data.repository.LocationRepository;
import com.assessment.disneySnackApp.data.repository.SnacksRepository;
import com.assessment.disneySnackApp.data.repository.UserSnackPreferenceRepository;
import com.assessment.disneySnackApp.data.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/disneySnacks")
public class UserController {
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    SnacksRepository snacksRepository;
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    UserSnackPreferenceRepository userSnackPreferenceRepository;

    @PostMapping("/users")
    public Users addUsers(@RequestBody Users users) {
        System.out.println(users);
        return usersRepository.save(users);
    }
}
