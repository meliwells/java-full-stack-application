package com.assessment.disneySnackApp.controller;

import com.assessment.disneySnackApp.data.model.Users;
import com.assessment.disneySnackApp.data.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/auth")
public class AuthController {
   @Autowired
    public UsersRepository usersRepository;

   @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginRequest) {
       String email = loginRequest.get("email");
       String password = loginRequest.get("password");

       Users user = usersRepository.findByEmail(email);

       if(user !=null && user.getPasswordHash().equals(password)) {
           Map<String, Object> response = new HashMap<>();
           response.put("email", user.getEmail());
           response.put("role", user.getRole());
           return ResponseEntity.ok(response);
       }

       return ResponseEntity.status(401).body("Invalid username or password");
   }
}
