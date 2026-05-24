package com.luci.Helpdesk_Jang.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luci.Helpdesk_Jang.model.Owner;
import com.luci.Helpdesk_Jang.service.OwnerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/owners")
@CrossOrigin(origins = "*")
public class OwnerController {

    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @PostMapping("/create")
    public Owner createOwner(@Valid @RequestBody Owner owner) {
        return ownerService.createOwner(owner);
    }

    @GetMapping
    public List<Owner> getAllOwners() {
        return ownerService.getAllOwners();
    }

    @DeleteMapping("/{ownerId}")
    public void deleteOwner(@PathVariable String ownerId) {
        ownerService.deleteOwner(ownerId);
    }

}