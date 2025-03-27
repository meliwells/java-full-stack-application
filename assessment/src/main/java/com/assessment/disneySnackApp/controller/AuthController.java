package com.assessment.disneySnackApp.controller;

import com.assessment.disneySnackApp.data.model.Users;
import com.assessment.disneySnackApp.data.repository.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/auth")

public class AuthController {
   @Autowired
    public UsersRepository usersRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginRequest) {
        try {
            String email = loginRequest.get("email");
            String password = loginRequest.get("password");

            Optional<Users> userOptional = usersRepository.findByEmail(email);

            if (userOptional.isEmpty()) {
                return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
            }

            Users user = userOptional.get();

            if (user.getPasswordHash() == null || !passwordEncoder.matches(password, user.getPasswordHash())) {
                return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
            }

            Map<String, Object> response = new HashMap<>();
            response.put("email", user.getEmail());
            response.put("role", user.getRole().name());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of("message", "An unexpected error occurred: " + e.getMessage()));
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody Users user) {
        Optional<Users> existingUser = usersRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "User already exists with this email.");
            return ResponseEntity.status(400).body(response);
        }

        if (user.getUsersName() == null || user.getUsersName().isEmpty()) {
            return ResponseEntity.status(400).body("User name is required");
        }

        if (user.getRole() == null) {
            user.setRole(Users.Role.USER);
        }

        if (user.getPasswordHash() == null || user.getPasswordHash().isEmpty()) {
            return ResponseEntity.status(400).body("Password cannot be empty.");
        }

        String hashedPassword = passwordEncoder.encode(user.getPasswordHash());
        user.setPasswordHash(hashedPassword);

        usersRepository.save(user);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registered successfully");
        response.put("email", user.getEmail());

        return ResponseEntity.ok(response);
    }
}
