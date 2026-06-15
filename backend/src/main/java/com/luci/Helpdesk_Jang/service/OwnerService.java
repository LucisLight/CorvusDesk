package com.luci.Helpdesk_Jang.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.luci.Helpdesk_Jang.model.Owner;
import com.luci.Helpdesk_Jang.repository.OwnerRepository;

@Service
public class OwnerService {

    private final OwnerRepository ownerRepository;

    public OwnerService(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    public Owner createOwner(Owner owner) {

        owner.setOwnerId(
            UUID.randomUUID().toString()
        );

        if (
            owner.getClearanceLevel() == null ||
            owner.getClearanceLevel().isBlank()
        ) {

            owner.setClearanceLevel("General");
        }

        return ownerRepository.save(owner);
    }

    public Owner loginOwner(String userName, String password) {

        Owner owner = ownerRepository.findByUserName(userName)
            .orElseThrow(() ->
                new RuntimeException("Owner not found"));

        if (owner.getPassword() == null ||
            !owner.getPassword().equals(password)) {

            throw new RuntimeException("Invalid password");
        }

        return owner;
    }

    public Owner updateOwner(String ownerId, Owner updatedOwner) {
        return ownerRepository.findById(ownerId)
            .map(owner -> {
                owner.setName(updatedOwner.getName());
                owner.setEmail(updatedOwner.getEmail());
                owner.setPhone(updatedOwner.getPhone());
                owner.setClearanceLevel(updatedOwner.getClearanceLevel());
                owner.setUserName(updatedOwner.getUserName());
                owner.setPassword(updatedOwner.getPassword());

                return ownerRepository.save(owner);
            })
            .orElseThrow(() -> new RuntimeException("Owner not found"));
    }

    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    public void deleteOwner(String ownerId) {
        ownerRepository.deleteById(ownerId);
    }
}