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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    //To get a single id
    @GetMapping("snacks/{snacksId}")
    public Snacks getSnacks(@PathVariable int snacksId) {
        return snacksRepository.findById(snacksId).get();
    }

    @PutMapping("/{snacksId}")
    public ResponseEntity<Snacks> updateSnack(@PathVariable int snacksId, @RequestBody Snacks updatedSnack) {
        Snacks snacks = snacksRepository.findById(snacksId)
                .orElseThrow(() -> new RuntimeException("Snack not found"));

        snacks.setTitle(updatedSnack.getTitle());
        snacks.setDescription(updatedSnack.getDescription());
        snacks.setPrice(updatedSnack.getPrice());

        Snacks savedSnack = snacksRepository.save(snacks);
        return ResponseEntity.ok(savedSnack);
    }

    @PostMapping("/snacks")
    public ResponseEntity<Snacks> addSnack(@RequestBody Snacks snack) {
        Snacks savedSnack = snacksRepository.save(snack);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSnack);
    }

    @DeleteMapping("/{snacksId}")
    public ResponseEntity deleteSnacks(@PathVariable int snacksId) {
        System.out.println(snacksId);
        snacksRepository.deleteById(snacksId);
        return ResponseEntity.ok().build();
    }
}
