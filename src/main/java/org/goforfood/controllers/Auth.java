package org.goforfood.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Auth {

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("modalId", "login-modal");
        return "dom/modals/auth/login";
    }
}
