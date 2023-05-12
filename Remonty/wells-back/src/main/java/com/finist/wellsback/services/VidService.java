package com.finist.wellsback.services;

import com.finist.wellsback.models.Details;
import com.finist.wellsback.models.Vid;
import com.finist.wellsback.repository.DetalizationRepository;
import com.finist.wellsback.repository.VidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VidService {
    private final VidRepository repository;
    private final DetalizationRepository repositoryDet;

    @Autowired
    public VidService(VidRepository repository, DetalizationRepository repositoryDet) {
        this.repository = repository;
        this.repositoryDet = repositoryDet;
    }

    public List<Vid> getAllVidy() { return (List<Vid>) repository.findByOrderByNameAsc(); }

    public List<Details> ditalisationGet() { return (List<Details>) repositoryDet.findAll(); }

    public Vid getVidId(long id) { return repository.findById(id).get(); }

    public Vid vidPostAdd(Vid v) { return repository.save(v); }

    public Vid editVid(Vid v) { return repository.save(v); }

    public Vid delete(long id) {
        Vid v=repository.findById(id).get();
        if(v!=null){ repository.delete(v); }
        return v;
    }
}
