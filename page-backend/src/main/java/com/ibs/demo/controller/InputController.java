package com.ibs.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibs.demo.service.InputService;

@RestController
public class InputController {
	
	@Autowired
	private InputService inputService;
	
	@GetMapping(value="/input")
	public String getInput() {
		return inputService.getInput();
	}

}