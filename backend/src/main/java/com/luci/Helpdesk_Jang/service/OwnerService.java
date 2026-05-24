package com.luci.Helpdesk_Jang.service;

import java.util.List;

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
        return ownerRepository.save(owner);
    }

    public List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }

    public void deleteOwner(String ownerId) {
        ownerRepository.deleteById(ownerId);
    }
}