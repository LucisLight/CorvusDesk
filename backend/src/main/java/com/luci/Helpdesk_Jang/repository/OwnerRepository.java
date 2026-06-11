package com.luci.Helpdesk_Jang.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.luci.Helpdesk_Jang.model.Owner;

public interface OwnerRepository extends MongoRepository<Owner, String> {

    Optional<Owner> findByUserName(String userName);

}