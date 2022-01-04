package com.ibs.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibs.demo.service.ButtonService;
@RestController
public class ButtonController {
	@Autowired
	private ButtonService buttonService;
		
	@GetMapping(value="/button")
	public String getMenu() {
		return  buttonService.getMenu();
	}

}
