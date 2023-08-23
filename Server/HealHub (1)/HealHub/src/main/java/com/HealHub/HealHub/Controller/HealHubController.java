package com.HealHub.HealHub.Controller;

import com.HealHub.HealHub.Model.HealHub;
import com.HealHub.HealHub.Service.HealHubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;
@RestController
@CrossOrigin(origins ="*")
public class HealHubController {
    @Autowired
    HealHubService healhubservice;
    @RequestMapping(method= RequestMethod.GET,value="/SignUp")
    public List<HealHub> getAllHealHub(){
        return healhubservice.getAllhealhub();
    }

    @RequestMapping(method = RequestMethod.POST , value="/SignUp")
    public HealHub addHealHub(@RequestBody HealHub SignUp)
    {
        healhubservice.addHealHub(SignUp);
        return SignUp;
    }
}
