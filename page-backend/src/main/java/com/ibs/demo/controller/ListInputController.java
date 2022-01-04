package com.ibs.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibs.demo.service.ListInputService;

@RestController
public class ListInputController {
	
	@Autowired
	private ListInputService listInputService;
	
	@GetMapping(value="/listinput")
	public String getListInput() {
		return listInputService.getListInput();
	}

}

