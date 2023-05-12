package com.finist.wellsback.services;


import com.finist.wellsback.models.VidPrichProstoiaBrigad;
import com.finist.wellsback.repository.VidPrichProstoiaBrigadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class VidPrichProstoiaBrigadService {
    private final VidPrichProstoiaBrigadRepository repository;

    @Autowired
    public VidPrichProstoiaBrigadService(VidPrichProstoiaBrigadRepository repository) { this.repository = repository; }

    public List<VidPrichProstoiaBrigad> getAllVidPrichProstoiaBrigady() {
        return (List<VidPrichProstoiaBrigad>) repository.findAll();
    }

    public VidPrichProstoiaBrigad getVidPrichProstoiaBrigadId(long id) { return repository.findById(id).get(); }

    public VidPrichProstoiaBrigad vidPrichProstoiaBrigadPostAdd(VidPrichProstoiaBrigad p){ return repository.save(p); }

    public VidPrichProstoiaBrigad editVidPrichProstoiaBrigad(VidPrichProstoiaBrigad p) {
        return repository.save(p);
    }

    public VidPrichProstoiaBrigad delete(long id) {
        VidPrichProstoiaBrigad p=repository.findById(id).get();
        if(p!=null){ repository.delete(p); }
        return p;
    }
}
