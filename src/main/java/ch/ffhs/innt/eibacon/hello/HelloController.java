/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.ffhs.innt.eibacon.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Hello world example.
 *
 * @author Simon
 */
@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Ei Bacon welcomes you!";
    }
}
