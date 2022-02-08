package web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import web.model.User;
import web.service.UserService;

@Controller
@RequestMapping()
public class PagesController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/admin")
    public String getAllUsers(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("user", user);
        return "admin";
    }

    @GetMapping("/user")
    public String getOneUser(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("user", user);
        return "user";
    }
}
