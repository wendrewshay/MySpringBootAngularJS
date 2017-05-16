package com.xwq.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.xwq.domain.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer>{

}
