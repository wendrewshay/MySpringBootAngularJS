package com.xwq.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xwq.domain.Person;
import com.xwq.repository.PersonRepository;

@Controller
public class PersonController {

	@Autowired
	private PersonRepository personRepository;
	
	@RequestMapping(value="/save")
	public @ResponseBody Person save() {
		Person person = new Person();
		person.setName("Tom");
		person.setAge(22);
		person.setNation("America");
		person.setAddress("NewYork");
		personRepository.save(person);
		return person;
	}
	
	@RequestMapping(value="/welcome")
	public String welcome() {
		return "welcome";
	}
	
	@RequestMapping(value="/index/{num}")
	public String index(@PathVariable("num") String num) {
		return "index"+num;
	}
}
