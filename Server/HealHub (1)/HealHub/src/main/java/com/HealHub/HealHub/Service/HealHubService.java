package com.HealHub.HealHub.Service;

import com.HealHub.HealHub.Model.HealHub;
import com.HealHub.HealHub.Repository.HealHubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class HealHubService {
    @Autowired
    private HealHubRepository healhubRepostiory;
    public List<HealHub> getAllhealhub(){
        List<HealHub> SignUp = new ArrayList<>();
        healhubRepostiory.findAll().forEach(healhub -> SignUp.add(healhub));
        return SignUp;
    }

    public void addHealHub(HealHub healHub){
        healhubRepostiory.save(healHub);
    }
}
