package com.luci.Helpdesk_Jang.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.luci.Helpdesk_Jang.model.Owner;

public interface OwnerRepository extends MongoRepository<Owner, String> {

}